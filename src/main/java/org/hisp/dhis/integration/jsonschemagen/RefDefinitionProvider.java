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

import java.util.Map;
import java.util.SortedMap;

import com.fasterxml.classmate.ResolvedType;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.victools.jsonschema.generator.CustomDefinition;
import com.github.victools.jsonschema.generator.CustomDefinitionProviderV2;
import com.github.victools.jsonschema.generator.SchemaGenerationContext;
import com.github.victools.jsonschema.generator.SchemaKeyword;

class RefDefinitionProvider implements CustomDefinitionProviderV2
{
    private final Class<?> apiClass;

    public RefDefinitionProvider( Class<?> apiClass )
    {
        this.apiClass = apiClass;
    }

    @Override
    public CustomDefinition provideCustomSchemaDefinition( ResolvedType javaType,
        SchemaGenerationContext context )
    {
        if ( javaType.getErasedType().equals( Map.class ) || javaType.getErasedType().equals( SortedMap.class ) )
        {
            return newJsonSchemaTypeCustomDefinition( context, "object" );
        }
        else if ( javaType.getErasedType().equals( Class.class ) )
        {
            return newJsonSchemaTypeCustomDefinition( context, "string" );
        }
        else if ( isRecursiveRef( javaType, apiClass ) || isBuiltInDataType( javaType ) )
        {
            return null;
        }
        else
        {
            return newJsonSchemaRefCustomDefinition( context, javaType );
        }
    }

    protected CustomDefinition newJsonSchemaRefCustomDefinition( SchemaGenerationContext context,
        ResolvedType javaType )
    {
        String refValue = null;
        int repeat = 0;

        while ( refValue == null
            || (RefToTypeMapping.getInstance().get( refValue ) != null && !RefToTypeMapping.getInstance()
            .get( refValue )
            .equals( javaType.getErasedType() )) )
        {
            refValue = javaType.getErasedType().getSimpleName().substring( 0, 1 ).toLowerCase()
                + javaType.getErasedType()
                .getSimpleName().substring( 1 )
                + "_".repeat( repeat ) + ".json";
            repeat++;
        }

        RefToTypeMapping.getInstance().put( refValue, javaType.getErasedType() );

        ObjectNode customNode = context.getGeneratorConfig().createObjectNode()
            .put( context.getKeyword( SchemaKeyword.TAG_REF ), refValue );

        return new CustomDefinition( customNode,
            CustomDefinition.DefinitionType.INLINE,
            CustomDefinition.AttributeInclusion.NO );
    }

    protected CustomDefinition newJsonSchemaTypeCustomDefinition( SchemaGenerationContext context,
        String jsonSchemaType )
    {
        ObjectNode customNode = context.getGeneratorConfig().createObjectNode();
        customNode.put( context.getKeyword( SchemaKeyword.TAG_TYPE ), jsonSchemaType );
        return new CustomDefinition( customNode,
            CustomDefinition.DefinitionType.INLINE,
            CustomDefinition.AttributeInclusion.YES );
    }

    protected boolean isRecursiveRef( ResolvedType javaType, Class<?> apiClass )
    {
        return javaType.getErasedType() == apiClass;
    }

    protected boolean isBuiltInDataType( ResolvedType javaType )
    {
        return javaType.getErasedType().isPrimitive() || javaType.getErasedType().getTypeName().startsWith( "java" )
            || (javaType.isArray() && javaType.getArrayElementType().getErasedType().isPrimitive());
    }
}
