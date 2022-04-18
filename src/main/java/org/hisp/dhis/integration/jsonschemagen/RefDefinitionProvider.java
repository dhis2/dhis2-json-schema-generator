package org.hisp.dhis.integration.jsonschemagen;

import com.fasterxml.classmate.ResolvedType;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.victools.jsonschema.generator.CustomDefinition;
import com.github.victools.jsonschema.generator.CustomDefinitionProviderV2;
import com.github.victools.jsonschema.generator.SchemaGenerationContext;
import com.github.victools.jsonschema.generator.SchemaKeyword;

import java.util.Map;
import java.util.SortedMap;

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
            ObjectNode customNode = context.getGeneratorConfig().createObjectNode();
            customNode.put( context.getKeyword( SchemaKeyword.TAG_TYPE ), "object" );
            return new CustomDefinition( customNode,
                CustomDefinition.DefinitionType.INLINE,
                CustomDefinition.AttributeInclusion.YES );
        }
        else if ( isRecursiveRef( javaType, apiClass ) || isBuiltInDataType( javaType ) )
        {
            return null;
        }
        else
        {
            String refValue = null;
            int repeat = 0;

            while ( refValue == null || (
                RefToTypeMapping.getInstance().get( refValue ) != null && !RefToTypeMapping.getInstance()
                    .get( refValue )
                    .equals( javaType.getErasedType() )) )
            {
                refValue = javaType.getErasedType().getSimpleName().substring( 0, 1 ).toLowerCase()
                    + javaType.getErasedType()
                    .getSimpleName().substring( 1 ) + "_".repeat( repeat ) + ".json";
                repeat++;
            }

            RefToTypeMapping.getInstance().put( refValue, javaType.getErasedType() );

            ObjectNode customNode = context.getGeneratorConfig().createObjectNode()
                .put( context.getKeyword( SchemaKeyword.TAG_REF ), refValue );
            return new CustomDefinition( customNode,
                CustomDefinition.DefinitionType.INLINE,
                CustomDefinition.AttributeInclusion.NO );
        }
    }

    private boolean isRecursiveRef( ResolvedType javaType, Class<?> apiClass )
    {
        return javaType.getErasedType() == apiClass;
    }

    private boolean isBuiltInDataType( ResolvedType javaType )
    {
        return javaType.getErasedType().isPrimitive() || javaType.getErasedType().getTypeName().startsWith( "java" )
            || (javaType.isArray() && javaType.getArrayElementType().getErasedType().isPrimitive());
    }
}
