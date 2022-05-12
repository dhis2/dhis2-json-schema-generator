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
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import com.fasterxml.classmate.TypeResolver;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import com.github.victools.jsonschema.generator.CustomDefinition;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfig;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfigBuilder;
import com.github.victools.jsonschema.generator.SchemaVersion;
import com.github.victools.jsonschema.generator.TypeContext;
import com.github.victools.jsonschema.generator.impl.SchemaGenerationContextImpl;
import com.github.victools.jsonschema.generator.impl.TypeContextFactory;

public class RefDefinitionProviderTestCase
{
    private SchemaGenerationContextImpl schemaGenerationContext;

    @BeforeEach
    public void beforeEach()
    {
        RefToTypeMapping.getInstance().clear();
        SchemaGeneratorConfig schemaGeneratorConfig = new SchemaGeneratorConfigBuilder(
            SchemaVersion.DRAFT_2020_12 ).build();
        TypeContext typeContext = TypeContextFactory.createDefaultTypeContext(
            new SchemaGeneratorConfigBuilder( SchemaVersion.DRAFT_2020_12 ).build() );
        schemaGenerationContext = new SchemaGenerationContextImpl( schemaGeneratorConfig,
            typeContext );
    }

    @AfterEach
    public void afterEach()
    {
        RefToTypeMapping.getInstance().clear();
    }

    @ParameterizedTest
    @ValueSource( classes = { Date.class, Set.class, List.class, String.class, Boolean.class, Byte.class,
        Character.class, Short.class, Integer.class, Long.class, Double.class, Float.class, Void.class } )
    public void testProvideCustomSchemaDefinitionReturnsNullGivenResolvedTypeIsJavaDataType( Class<?> clazz )
    {

        RefDefinitionProvider refDefinitionProvider = new RefDefinitionProvider( clazz );

        assertNull( refDefinitionProvider.provideCustomSchemaDefinition(
            new TypeResolver().resolve( clazz ), schemaGenerationContext ) );
    }

    @Test
    public void testProvideCustomSchemaDefinitionReturnsInternalCommentGivenResolvedTypeIsNotJavaDataTypeAndNotJacksonAnnotated()
    {
        RefDefinitionProvider refDefinitionProvider = new RefDefinitionProvider( Map.class );

        CustomDefinition customDefinition = refDefinitionProvider.provideCustomSchemaDefinition(
            new TypeResolver().resolve( Map.class ), schemaGenerationContext );
        assertEquals( "For internal use only", customDefinition.getValue().get( "$comment" ).asText() );
    }

    @ParameterizedTest
    @ValueSource( classes = { JsonPropertyFieldClass.class, JacksonXmlRootElementClass.class,
        JsonPropertyMethodClass.class } )
    public void testProvideCustomSchemaDefinitionReturnsNullGivenResolvedTypeIsJacksonAnnotatedAndIsEqualToApiClass(
        Class<?> clazz )
    {
        RefDefinitionProvider refDefinitionProvider = new RefDefinitionProvider( clazz );

        assertFalse( RefToTypeMapping.getInstance().containsValue( clazz ) );
        assertNull( refDefinitionProvider.provideCustomSchemaDefinition(
            new TypeResolver().resolve( clazz ), schemaGenerationContext ) );
        assertTrue( RefToTypeMapping.getInstance().containsValue( clazz ) );
    }

    @ParameterizedTest
    @ValueSource( classes = { JsonPropertyFieldClass.class, JacksonXmlRootElementClass.class,
        JsonPropertyMethodClass.class } )
    public void testProvideCustomSchemaDefinitionReturnsCustomDefinitionGivenResolvedTypeIsJacksonAnnotatedButNotEqualToApiClass(
        Class<?> clazz )
    {
        RefDefinitionProvider refDefinitionProvider = new RefDefinitionProvider( RootClass.class );

        assertFalse( RefToTypeMapping.getInstance().containsValue( clazz ) );
        CustomDefinition customDefinition = refDefinitionProvider.provideCustomSchemaDefinition(
            new TypeResolver().resolve( clazz ), schemaGenerationContext );
        assertNotNull( customDefinition );
        assertNull( customDefinition.getValue().get( "$comment" ) );
        assertTrue( RefToTypeMapping.getInstance().containsValue( clazz ) );
    }

    @JacksonXmlRootElement
    public static class JacksonXmlRootElementClass
    {

    }

    public static class JsonPropertyFieldClass
    {
        @JsonProperty
        private String field;
    }

    public static class JsonPropertyMethodClass
    {
        @JsonProperty
        private void getMethod()
        {

        }
    }

    public static class RootClass
    {
    }
}
