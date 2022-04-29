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

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.reflections.Reflections;
import org.reflections.scanners.Scanners;

import com.fasterxml.classmate.AnnotationInclusion;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.victools.jsonschema.generator.Option;
import com.github.victools.jsonschema.generator.OptionPreset;
import com.github.victools.jsonschema.generator.SchemaGenerator;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfig;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfigBuilder;
import com.github.victools.jsonschema.generator.SchemaVersion;
import com.github.victools.jsonschema.generator.impl.TypeContextFactory;
import com.github.victools.jsonschema.module.jackson.JacksonModule;
import com.github.victools.jsonschema.module.jackson.JacksonOption;

public final class Dhis2JsonSchemaGenerator
{
    private Dhis2JsonSchemaGenerator()
    {

    }

    public static void main( String[] args )
        throws IOException
    {
        String outputDestinationDir = args[0];

        Reflections reflections = new Reflections( "org.hisp.dhis",
            Scanners.SubTypes.filterResultsBy(
                s -> !s.equals( "org.hisp.dhis.integration.jsonschemagen" ) ) );
        Set<Class<?>> apiClasses = new HashSet<>( reflections.getSubTypesOf( Object.class ) );
        apiClasses.addAll( new HashSet<>( reflections.getSubTypesOf( Enum.class ) ) );
        apiClasses.addAll( new HashSet<>( reflections.getSubTypesOf( Map.class ) ) );

        JacksonModule jacksonModule = new JacksonModule( JacksonOption.INCLUDE_ONLY_JSONPROPERTY_ANNOTATED_METHODS,
            JacksonOption.RESPECT_JSONPROPERTY_REQUIRED );
        for ( Class<?> apiClass : apiClasses.stream()
            .filter( a -> !(a.getName().startsWith( "com.fasterxml" ) || a.getName()
                .startsWith( "org.hisp.dhis.schema.annotation.Property" )) )
            .collect( Collectors.toSet() ) )
        {
            generateJsonSchema( apiClass, jacksonModule, true, outputDestinationDir );
        }

        generateJsonSchema( getClassOrNull( "org.locationtech.jts.geom.Geometry" ), jacksonModule, false,
            outputDestinationDir );
        generateJsonSchema( getClassOrNull( "org.hisp.dhis.common.DimensionalItemObject" ), jacksonModule, false,
            outputDestinationDir );
        generateJsonSchema( getClassOrNull( "org.hisp.dhis.common.DimensionalObject" ), jacksonModule, false,
            outputDestinationDir );
        generateJsonSchema( getClassOrNull( "org.hisp.dhis.common.DimensionItemKeywords" ), jacksonModule, false,
            outputDestinationDir );
    }

    private static Class<?> getClassOrNull( String className )
    {
        try
        {
            return Class.forName( className );
        }
        catch ( ClassNotFoundException e )
        {
            return null;
        }
    }

    private static void generateJsonSchema( Class<?> apiClass, JacksonModule jacksonModule,
        boolean discardEmptySchemas, String outputDestinationDir )
        throws IOException
    {
        if ( apiClass == null )
        {
            return;
        }

        SchemaGeneratorConfigBuilder configBuilder = new SchemaGeneratorConfigBuilder(
            SchemaVersion.DRAFT_2019_09,
            OptionPreset.PLAIN_JSON )
                .with( jacksonModule )
                .with( Option.PLAIN_DEFINITION_KEYS, Option.GETTER_METHODS, Option.MAP_VALUES_AS_ADDITIONAL_PROPERTIES,
                    Option.FIELDS_DERIVED_FROM_ARGUMENTFREE_METHODS, Option.NONSTATIC_NONVOID_NONGETTER_METHODS )
                .without( Option.NONPUBLIC_NONSTATIC_FIELDS_WITH_GETTERS, Option.EXTRA_OPEN_API_FORMAT_VALUES );

        configBuilder.forTypesInGeneral().withStringFormatResolver( target -> {
            if ( target.getType().getErasedType().equals( Date.class ) )
            {
                return "date-time";
            }
            else
            {
                return null;
            }
        } ).withCustomDefinitionProvider( new RefDefinitionProvider( apiClass ) );
        configBuilder.forFields()
            .withIgnoreCheck( fieldScope -> fieldScope.getAnnotation( JsonProperty.class ) == null );

        SchemaGeneratorConfig config = configBuilder.build();
        SchemaGenerator generator = new SchemaGenerator( config,
            TypeContextFactory.createTypeContext( AnnotationInclusion.INCLUDE_AND_INHERIT, config ) );
        ObjectNode jsonSchema = generator.generateSchema( apiClass );

        Set<Class<?>> includedApiClasses = new HashSet<>();
        includeApiClass( "org.hisp.dhis.sms.outbound.BulkSmsRecipient", includedApiClasses );
        includeApiClass( "org.hisp.dhis.period.PeriodType", includedApiClasses );
        includeApiClass( "org.hisp.dhis.dxf2.webmessage.WebMessageResponse", includedApiClasses );
        includeApiClass( "org.hisp.dhis.common.IdSchemes", includedApiClasses );
        includeApiClass( "org.hisp.dhis.scheduling.JobParameters", includedApiClasses );
        includeApiClass( "org.hisp.dhis.common.NameableObject", includedApiClasses );

        if ( !discardEmptySchemas || Map.class.isAssignableFrom( apiClass ) || includedApiClasses.contains( apiClass )
            || jsonSchema.get( "const" ) != null
            || jsonSchema.get( "enum" ) != null
            || jsonSchema.get( "properties" ) != null )
        {
            String filename = null;
            if ( RefToTypeMapping.getInstance().containsValue( apiClass ) )
            {

                for ( Map.Entry<String, Class<?>> mapping : RefToTypeMapping.getInstance().entrySet() )
                {
                    if ( mapping.getValue().equals( apiClass ) )
                    {
                        filename = mapping.getKey();
                    }
                }
            }
            else
            {
                int repeat = 0;
                while ( filename == null || (RefToTypeMapping.getInstance().get( filename ) != null) )
                {
                    filename = apiClass.getSimpleName().substring( 0, 1 )
                        .toLowerCase()
                        + apiClass.getSimpleName().substring( 1 )
                        + "_".repeat( repeat ) + ".json";
                    repeat++;
                }
                RefToTypeMapping.getInstance().put( filename, apiClass );
            }
            FileUtils.writeStringToFile( new File( outputDestinationDir + "/" + filename ), jsonSchema.toPrettyString(),
                "UTF-8" );
        }
    }

    private static void includeApiClass( String apiClassName, Set<Class<?>> includedApiClasses )
    {
        try
        {
            includedApiClasses.add( Class.forName( apiClassName ) );
        }
        catch ( ClassNotFoundException ignored )
        {

        }
    }
}
