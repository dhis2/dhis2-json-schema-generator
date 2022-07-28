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
package org.hisp.dhis.integration.jsonschemagen.internal;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import com.fasterxml.classmate.ResolvedType;
import com.fasterxml.classmate.members.RawField;
import com.fasterxml.classmate.members.RawMethod;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import com.github.victools.jsonschema.generator.CustomDefinition;
import com.github.victools.jsonschema.generator.CustomDefinitionProviderV2;
import com.github.victools.jsonschema.generator.SchemaGenerationContext;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfig;
import com.github.victools.jsonschema.generator.SchemaKeyword;

public class RefDefinitionProvider implements CustomDefinitionProviderV2
{
    private static final Set<Class<?>> JAVA_DATA_TYPES = new HashSet<>();

    static
    {
        JAVA_DATA_TYPES.add( Date.class );
        JAVA_DATA_TYPES.add( String.class );
        JAVA_DATA_TYPES.add( Boolean.class );
        JAVA_DATA_TYPES.add( Byte.class );
        JAVA_DATA_TYPES.add( Character.class );
        JAVA_DATA_TYPES.add( Short.class );
        JAVA_DATA_TYPES.add( Integer.class );
        JAVA_DATA_TYPES.add( Long.class );
        JAVA_DATA_TYPES.add( Double.class );
        JAVA_DATA_TYPES.add( Float.class );
        JAVA_DATA_TYPES.add( Void.class );
    }

    private final Class<?> apiClass;

    public RefDefinitionProvider( Class<?> apiClass )
    {
        this.apiClass = apiClass;
    }

    @Override
    public CustomDefinition provideCustomSchemaDefinition( ResolvedType javaType,
        SchemaGenerationContext context )
    {
        if ( javaType.getErasedType().equals( Class.class ) )
        {
            return newJsonSchemaTypeCustomDefinition( context, "string" );
        }
        else if ( isJavaDataType( javaType ) )
        {
            return null;
        }
        else if ( IsInternal( javaType ) )
        {
            final CustomDefinition customDefinition;
            if ( Iterable.class.isAssignableFrom( javaType.getErasedType() ) )
            {
                customDefinition = newJsonSchemaTypeCustomDefinition( context,
                    context.getKeyword( SchemaKeyword.TAG_TYPE_ARRAY ) );
            }
            else if ( Map.class.isAssignableFrom( javaType.getErasedType() ) )
            {
                customDefinition = newJsonSchemaTypeCustomDefinition( context,
                    context.getKeyword( SchemaKeyword.TAG_TYPE_OBJECT ) );
            }
            else
            {
                SchemaGeneratorConfig schemaGeneratorConfig = context.getGeneratorConfig();
                ObjectNode customNode = schemaGeneratorConfig.createObjectNode();
                customDefinition = new CustomDefinition( customNode,
                    CustomDefinition.DefinitionType.INLINE,
                    CustomDefinition.AttributeInclusion.YES );
            }
            customDefinition.getValue().put( "$comment", "Undefined" );
            return customDefinition;
        }
        else if ( isSelfRef( javaType, apiClass ) )
        {
            String refValue = createRef( javaType );
            RefToTypeMapping.getInstance().put( refValue, javaType.getErasedType() );
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
        String refValue = createRef( javaType );
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

    protected boolean isSelfRef( ResolvedType javaType, Class<?> apiClass )
    {
        return javaType.getErasedType() == apiClass;
    }

    protected boolean isJavaDataType( ResolvedType javaType )
    {
        return javaType.getErasedType().isPrimitive()
            || Collection.class.isAssignableFrom( javaType.getErasedType() )
            || JAVA_DATA_TYPES.contains( javaType.getErasedType() )
            || (javaType.isArray() && (javaType.getArrayElementType().getErasedType().isPrimitive()
                || JAVA_DATA_TYPES.contains( javaType.getArrayElementType().getErasedType() )));
    }

    protected boolean IsInternal( ResolvedType javaType )
    {
        if ( javaType.getErasedType().isEnum() )
        {
            return false;
        }

//        if ( javaType.getErasedType().isAnnotationPresent( JacksonXmlRootElement.class ) )
//        {
//            return false;
//        }

        for ( RawField memberField : javaType.getMemberFields() )
        {
            if ( memberField.getRawMember().isAnnotationPresent( JsonProperty.class ) )
            {
                return false;
            }
        }

        for ( RawMethod memberMethod : javaType.getMemberMethods() )
        {
            if ( memberMethod.getRawMember().isAnnotationPresent( JsonProperty.class ) )
            {
                return false;
            }
        }

        return true;
    }

    protected String createRef( ResolvedType resolvedType )
    {
        String refValue = null;
        int repeat = 0;

        while ( refValue == null
            || (RefToTypeMapping.getInstance().get( refValue ) != null && !RefToTypeMapping.getInstance()
                .get( refValue )
                .equals( resolvedType.getErasedType() )) )
        {
            refValue = resolvedType.getErasedType().getSimpleName().substring( 0, 1 ).toLowerCase()
                + resolvedType.getErasedType()
                    .getSimpleName().substring( 1 )
                + "_".repeat( repeat ) + ".json";
            repeat++;
        }

        return refValue;
    }
}
