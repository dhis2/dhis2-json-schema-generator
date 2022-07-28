package org.hisp.dhis.integration.jsonschemagen.internal;

import com.github.victools.jsonschema.generator.MethodScope;
import lombok.Generated;

import java.util.function.Predicate;

public class IgnoreMethodPredicate implements Predicate<MethodScope> {
    @Override
    public boolean test(MethodScope methodScope) {
        return (methodScope.getAnnotation( Generated.class ) != null) || methodScope.getArgumentCount() > 0;
    }
}
