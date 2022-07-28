package org.hisp.dhis.integration.jsonschemagen.internal;

import com.github.victools.jsonschema.generator.MethodScope;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class IgnoreMethodPredicateTestCase
{
    @Test
    public void testTestReturnsFalseWhenMethodScopeArgumentCountIs0()
    {
        MethodScope methodScopeMock = mock( MethodScope.class );
        when( methodScopeMock.getArgumentCount() ).thenReturn( 0 );
        IgnoreMethodPredicate ignoreSetterPredicate = new IgnoreMethodPredicate();
        assertFalse( ignoreSetterPredicate.test( methodScopeMock ) );
    }

    @Test
    public void testTestReturnsTrueWhenMethodScopeArgumentCountIsGreaterThan0()
    {
        MethodScope methodScopeMock = mock( MethodScope.class );
        when( methodScopeMock.getArgumentCount() ).thenReturn( 1 );
        IgnoreMethodPredicate ignoreSetterPredicate = new IgnoreMethodPredicate();
        assertTrue( ignoreSetterPredicate.test( methodScopeMock ) );
    }
}
