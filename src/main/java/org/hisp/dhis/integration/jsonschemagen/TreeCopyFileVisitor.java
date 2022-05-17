package org.hisp.dhis.integration.jsonschemagen;

import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.BasicFileAttributes;

public class TreeCopyFileVisitor extends SimpleFileVisitor<Path>
{
    private final Path source;

    private final Path target;

    public TreeCopyFileVisitor( String source, String target )
    {
        this.source = Paths.get( source );
        this.target = Paths.get( target );
    }

    @Override
    public FileVisitResult preVisitDirectory( Path dir,
        BasicFileAttributes attrs )
        throws IOException
    {

        Path resolve = target.resolve( source.relativize( dir ) );
        if ( Files.notExists( resolve ) )
        {
            Files.createDirectories( resolve );
            System.out.println( "Create directories : " + resolve );
        }
        return FileVisitResult.CONTINUE;

    }

    @Override
    public FileVisitResult visitFile( Path file, BasicFileAttributes attrs )
        throws IOException
    {

        Path resolve = target.resolve( source.relativize( file ) );
        Files.copy( file, resolve, StandardCopyOption.REPLACE_EXISTING );
        System.out.println(
            String.format( "Copy File from \t'%s' to \t'%s'", file, resolve )
        );

        return FileVisitResult.CONTINUE;

    }

    @Override
    public FileVisitResult visitFileFailed( Path file, IOException exc )
    {
        System.err.format( "Unable to copy: %s: %s%n", file, exc );
        return FileVisitResult.CONTINUE;
    }

}