package org.hisp.dhis.integration.jsonschemagen.internal;

import org.objectweb.asm.AnnotationVisitor;
import org.objectweb.asm.ClassVisitor;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;

public class GeneratedAnnotationScanner extends ClassVisitor
{
//    private final DefaultMethodVisitor myMethodVisitor = new DefaultMethodVisitor();

    private boolean isGenerated = false;

    public GeneratedAnnotationScanner()
    {
        super( Opcodes.ASM8 );
    }

    @Override
    public AnnotationVisitor visitAnnotation( String descriptor, boolean visible )
    {
        if (descriptor.equals( "Llombok/Generated;" )) {
            System.out.println("Hello!!!");
            isGenerated = true;
        }
        return null;
    }

    public boolean isGenerated()
    {
        return isGenerated;
    }
}
