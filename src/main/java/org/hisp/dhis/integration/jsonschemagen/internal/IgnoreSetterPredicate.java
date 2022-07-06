package org.hisp.dhis.integration.jsonschemagen.internal;

import com.github.victools.jsonschema.generator.MethodScope;

import java.util.function.Predicate;

public class IgnoreSetterPredicate implements Predicate<MethodScope> {
    @Override
    public boolean test(MethodScope methodScope) {
        return methodScope.getArgumentCount() > 0;
    }
}
