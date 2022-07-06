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

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Stream;

import org.jsonschema2pojo.DefaultGenerationConfig;
import org.jsonschema2pojo.GenerationConfig;
import org.jsonschema2pojo.Jackson2Annotator;
import org.jsonschema2pojo.SchemaGenerator;
import org.jsonschema2pojo.SchemaMapper;
import org.jsonschema2pojo.SchemaStore;
import org.jsonschema2pojo.rules.RuleFactory;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.reflections.Reflections;

import com.jayway.jsonpath.JsonPath;
import com.sun.codemodel.JCodeModel;

public class Dhis2JsonSchemaGeneratorTestCase
{
    private File generatedSchemasDir;

    @BeforeEach
    public void beforeEach()
        throws IOException,
        URISyntaxException
    {
        Dhis2JsonSchemaGenerator.main( new String[] { "target/generated-test-resources/schemas", "target/generated-test-resources/docs", System.getProperty("dhis2.api.version") } );
        generatedSchemasDir = new File( "target/generated-test-resources/schemas" );
        assertTrue( generatedSchemasDir.list().length > 0 );
    }

    @AfterEach
    public void afterEach()
    {
        generatedSchemasDir.delete();
    }

    @Test
    public void testGenerateCreateDocs() {
        assertTrue( new File( "target/generated-test-resources/docs/organisationUnit.md").exists() );
    }

    @Test
    public void testGenerateJCodeModels()
        throws IOException
    {
        GenerationConfig config = new DefaultGenerationConfig()
        {
            @Override
            public boolean isGenerateBuilders()
            {
                return true;
            }
        };

        SchemaMapper mapper = new SchemaMapper(
            new RuleFactory( config, new Jackson2Annotator( config ), new SchemaStore() ), new SchemaGenerator() );

        try ( Stream<Path> stream = Files.list( Paths.get( "target/generated-test-resources/schemas" ) ) )
        {
            stream
                .forEach( path -> {
                    JCodeModel codeModel = new JCodeModel();
                    try
                    {
                        mapper.generate( codeModel, null, "org.hisp.dhis.api.model", path.toUri().toURL() );
                    }
                    catch ( IOException e )
                    {
                        fail( e );
                    }
                } );
        }
    }

    @Test
    public void testClassJavaTypeResolvedToStringJsonSchemaType()
        throws IOException
    {
        assertEquals( "string", JsonPath.parse( new File( "target/generated-test-resources/schemas/typeReport.json" ) )
            .read( "$.properties.klass.type" ) );
    }

    @Test
    public void testSchemaVersion()
        throws IOException
    {
        String jsonSchemaUnderTest = generatedSchemasDir.list()[ThreadLocalRandom.current()
            .nextInt( 0, generatedSchemasDir.list().length - 1 )];

        assertEquals( "https://json-schema.org/draft/2020-12/schema",
            JsonPath.parse( new File( "target/generated-test-resources/schemas/" + jsonSchemaUnderTest ) )
                .read( "$.$schema" ) );
    }

    @Test
    public void testPrepareReturnsTheSameResultGivenIdenticalSetsWithDifferentInsertOrder()
    {
        Reflections reflections = new Reflections( "org.hisp.dhis" );

        List<Class<?>> classes = new ArrayList<>( reflections.getSubTypesOf( Object.class ) );
        List<Class<?>> fistPrepare = shuffleAndPrepare( classes );
        List<Class<?>> secondPrepare = shuffleAndPrepare( classes );

        int i = 0;
        for ( Class<?> clazz : fistPrepare )
        {
            assertEquals( clazz, secondPrepare.get( i ) );
            i++;
        }
    }

    private List<Class<?>> shuffleAndPrepare( List<Class<?>> classes )
    {
        Collections.shuffle( classes );
        Set set = new HashSet<>();
        for ( Object clazz : classes )
        {
            set.add( clazz );
        }

        return Dhis2JsonSchemaGenerator.prepare( set );
    }
}