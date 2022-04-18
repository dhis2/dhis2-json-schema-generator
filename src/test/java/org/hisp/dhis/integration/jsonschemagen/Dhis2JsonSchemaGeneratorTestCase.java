package org.hisp.dhis.integration.jsonschemagen;

import com.sun.codemodel.JCodeModel;
import org.jsonschema2pojo.DefaultGenerationConfig;
import org.jsonschema2pojo.GenerationConfig;
import org.jsonschema2pojo.Jackson2Annotator;
import org.jsonschema2pojo.SchemaGenerator;
import org.jsonschema2pojo.SchemaMapper;
import org.jsonschema2pojo.SchemaStore;
import org.jsonschema2pojo.rules.RuleFactory;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

public class Dhis2JsonSchemaGeneratorTestCase
{
    @Test
    public void testMain()
        throws IOException
    {
        Dhis2JsonSchemaGenerator.main( new String[] { "target/generated-test-resources" } );
        assertTrue( new File( "target/generated-test-resources" ).list().length > 0 );

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

        try ( Stream<Path> stream = Files.list( Paths.get( "target/generated-test-resources" ) ) )
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
}