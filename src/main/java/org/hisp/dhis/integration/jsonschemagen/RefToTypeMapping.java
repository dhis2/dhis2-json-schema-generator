package org.hisp.dhis.integration.jsonschemagen;

import java.util.HashMap;

public class RefToTypeMapping extends HashMap<String, Class<?>>
{
    private static RefToTypeMapping context;

    private RefToTypeMapping()
    {

    }

    public static RefToTypeMapping getInstance()
    {
        if ( context == null )
        {
            context = new RefToTypeMapping();
        }
        return context;
    }
}
