/*
 * Copyright (c) 2004-2022, University of Oslo
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * Neither the name of the HISP project nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package org.hisp.dhis.integration.jsonschemagen;

import com.fasterxml.classmate.AnnotationInclusion;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.mustachejava.DefaultMustacheFactory;
import com.github.mustachejava.Mustache;
import com.github.mustachejava.MustacheFactory;
import com.github.victools.jsonschema.generator.Option;
import com.github.victools.jsonschema.generator.OptionPreset;
import com.github.victools.jsonschema.generator.SchemaGenerator;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfig;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfigBuilder;
import com.github.victools.jsonschema.generator.SchemaVersion;
import com.github.victools.jsonschema.generator.impl.TypeContextFactory;
import com.github.victools.jsonschema.module.jackson.JacksonModule;
import com.github.victools.jsonschema.module.jackson.JacksonOption;
import org.apache.commons.io.FileUtils;
import org.hisp.dhis.integration.jsonschemagen.internal.GeneratedAnnotationScanner;
import org.hisp.dhis.integration.jsonschemagen.internal.DateStringFormatResolver;
import org.hisp.dhis.integration.jsonschemagen.internal.IgnoreMethodPredicate;
import org.hisp.dhis.integration.jsonschemagen.internal.RefDefinitionProvider;
import org.hisp.dhis.integration.jsonschemagen.internal.RefToTypeMapping;
import org.objectweb.asm.ClassReader;
import org.reflections.Reflections;
import org.reflections.scanners.Scanners;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public final class Dhis2JsonSchemaGenerator
{
    private static Integer SIDEBAR_POSITION = 1;

    private Dhis2JsonSchemaGenerator()
    {

    }

    public static void main( String[] args )
        throws IOException, URISyntaxException
    {
        String schemasOutputDir = args[0];
        String docsOutputDir = args[1];
        String label = args[2];

        Reflections reflections = new Reflections( "org.hisp.dhis",
            Scanners.SubTypes.filterResultsBy(
                s -> !s.equals( "org.hisp.dhis.integration.jsonschemagen" ) ) );

        List<Class<?>> apiClasses = prepare( reflections.getSubTypesOf( Object.class ),
            ((Set) reflections.getSubTypesOf( Enum.class )),
            ((Set) reflections.getSubTypesOf( Map.class )) );

        JacksonModule jacksonModule = new JacksonModule( JacksonOption.INCLUDE_ONLY_JSONPROPERTY_ANNOTATED_METHODS,
            JacksonOption.RESPECT_JSONPROPERTY_REQUIRED );
        MustacheFactory mustacheFactory = new DefaultMustacheFactory();
        Mustache jsonSchemaTemplate = mustacheFactory.compile( "jsonSchema.md.mustache" );

        for ( Class<?> apiClass : apiClasses )
        {
            GeneratedAnnotationScanner generatedAnnotationScanner = new GeneratedAnnotationScanner();
            ClassReader classReader = new ClassReader( apiClass.getName() );
            classReader.accept( generatedAnnotationScanner, 0 );

            if (!generatedAnnotationScanner.isGenerated())
            {
                generateJsonSchema( apiClass, jacksonModule, schemasOutputDir, docsOutputDir, jsonSchemaTemplate );
            }
        }

        Mustache indexTemplate = mustacheFactory.compile( "_category_.json.mustache" );
        File file = new File( docsOutputDir + "/_category_.json" );
        file.getParentFile().mkdirs();
        indexTemplate.execute( new FileWriter( file ), Map.of( "version", label ) )
            .flush();
    }

    static List<Class<?>> prepare( Set<Class<?>>... types )
    {
        List<Class<?>> apiClasses = new ArrayList<>();
        for ( Set<Class<?>> type : types )
        {
            apiClasses.addAll( type );
        }

        return apiClasses.stream()
            .filter( a -> !(a.getName().startsWith( "com.fasterxml" ) || a.getName()
                .startsWith( "org.hisp.dhis.schema.annotation.Property" )) )
            .sorted( Comparator.comparing( Class::getName ) )
            .collect( Collectors.toList() );
    }

    private static void generateJsonSchema( Class<?> apiClass, JacksonModule jacksonModule, String schemasOutputDir,
        String docsOutputDir,
        Mustache mustache )
        throws IOException
    {
        if ( apiClass == null )
        {
            return;
        }

        SchemaGeneratorConfigBuilder schemaGeneratorConfigBuilder = new SchemaGeneratorConfigBuilder(
            SchemaVersion.DRAFT_2020_12,
            OptionPreset.PLAIN_JSON )
                .with( jacksonModule )
                .with( Option.PLAIN_DEFINITION_KEYS, Option.GETTER_METHODS, Option.MAP_VALUES_AS_ADDITIONAL_PROPERTIES,
                    Option.FIELDS_DERIVED_FROM_ARGUMENTFREE_METHODS, Option.NONSTATIC_NONVOID_NONGETTER_METHODS )
                .without( Option.NONPUBLIC_NONSTATIC_FIELDS_WITH_GETTERS, Option.EXTRA_OPEN_API_FORMAT_VALUES );

        schemaGeneratorConfigBuilder.forTypesInGeneral().withStringFormatResolver( new DateStringFormatResolver() )
            .withCustomDefinitionProvider( new RefDefinitionProvider( apiClass ) );
        schemaGeneratorConfigBuilder.forFields()
            .withIgnoreCheck( fieldScope -> fieldScope.getAnnotation( JsonProperty.class ) == null );
        schemaGeneratorConfigBuilder.forMethods().withIgnoreCheck( new IgnoreMethodPredicate() );

        SchemaGeneratorConfig schemaGeneratorConfig = schemaGeneratorConfigBuilder.build();
        SchemaGenerator schemaGenerator = new SchemaGenerator( schemaGeneratorConfig,
            TypeContextFactory.createTypeContext( AnnotationInclusion.INCLUDE_AND_INHERIT, schemaGeneratorConfig ) );
        ObjectNode jsonSchema = schemaGenerator.generateSchema( apiClass );

        if ( RefToTypeMapping.getInstance().containsValue( apiClass ) )
        {
            String filename = null;
            for ( Map.Entry<String, Class<?>> mapping : RefToTypeMapping.getInstance().entrySet() )
            {
                if ( mapping.getValue().equals( apiClass ) )
                {
                    filename = mapping.getKey();
                }
            }

            String jsonSchemaAsString = jsonSchema.toPrettyString();
            FileUtils.writeStringToFile( new File( schemasOutputDir + "/" + filename ),
                jsonSchemaAsString,
                "UTF-8" );

            String jsonSchemaName = filename.substring( 0, filename.indexOf( ".json" ) );
            File file = new File( docsOutputDir + "/" + jsonSchemaName + ".md" );
            file.getParentFile().mkdirs();
            mustache.execute( new FileWriter( file ),
                    Map.of( "jsonSchemaName", jsonSchemaName, "jsonSchema", jsonSchemaAsString, "sidebarPosition",
                        SIDEBAR_POSITION ) )
                .flush();

            SIDEBAR_POSITION++;
        }
    }
}
