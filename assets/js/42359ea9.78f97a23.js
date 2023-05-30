"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[85082],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return R}});var n=r(67294);function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,_=function(e,t){if(null==e)return{};var r,n,_={},T=Object.keys(e);for(n=0;n<T.length;n++)r=T[n],t.indexOf(r)>=0||(_[r]=e[r]);return _}(e,t);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(e);for(n=0;n<T.length;n++)r=T[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(_[r]=e[r])}return _}var O=n.createContext({}),o=function(e){var t=n.useContext(O),r=t;return e&&(r="function"==typeof e?e(t):I(I({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(O.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var r=e.components,_=e.mdxType,T=e.originalType,O=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),E=o(r),R=_,S=E["".concat(O,".").concat(R)]||E[R]||i[R]||T;return r?n.createElement(S,I(I({ref:t},c),{},{components:r})):n.createElement(S,I({ref:t},c))}));function R(e,t){var r=arguments,_=t&&t.mdxType;if("string"==typeof e||_){var T=r.length,I=new Array(T);I[0]=E;var a={};for(var O in t)hasOwnProperty.call(t,O)&&(a[O]=t[O]);a.originalType=e,a.mdxType="string"==typeof e?e:_,I[1]=a;for(var o=2;o<T;o++)I[o]=r[o];return n.createElement.apply(null,I)}return n.createElement.apply(null,r)}E.displayName="MDXCreateElement"},72041:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return O},default:function(){return R},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return i}});var n=r(87462),_=r(63366),T=(r(67294),r(3905)),I=["components"],a={},O=void 0,o={unversionedId:"v40.0/dataIntegrityCheckType",id:"v40.0/dataIntegrityCheckType",title:"dataIntegrityCheckType",description:"",source:"@site/docs/v40.0/dataIntegrityCheckType.md",sourceDirName:"v40.0",slug:"/v40.0/dataIntegrityCheckType",permalink:"/dhis2-json-schema-generator/v40.0/dataIntegrityCheckType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataIntegrityCheckBuilder",permalink:"/dhis2-json-schema-generator/v40.0/dataIntegrityCheckBuilder"},next:{title:"dataIntegrityDetails",permalink:"/dhis2-json-schema-generator/v40.0/dataIntegrityDetails"}},c={},i=[],E={toc:i};function R(e){var t=e.components,r=(0,_.Z)(e,I);return(0,T.kt)("wrapper",(0,n.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,T.kt)("pre",null,(0,T.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "DATA_ELEMENTS_WITHOUT_DATA_SETS", "DATA_ELEMENTS_WITHOUT_GROUPS", "DATA_ELEMENTS_ASSIGNED_TO_DATA_SETS_WITH_DIFFERENT_PERIOD_TYPES", "DATA_ELEMENTS_VIOLATING_EXCLUSIVE_GROUP_SETS", "DATA_ELEMENTS_IN_DATA_SET_NOT_IN_FORM", "CATEGORY_COMBOS_BEING_INVALID", "DATA_SETS_NOT_ASSIGNED_TO_ORG_UNITS", "INDICATORS_WITH_IDENTICAL_FORMULAS", "INDICATORS_WITHOUT_GROUPS", "INDICATORS_WITH_INVALID_NUMERATOR", "INDICATORS_WITH_INVALID_DENOMINATOR", "INDICATORS_VIOLATING_EXCLUSIVE_GROUP_SETS", "PERIODS_DUPLICATES", "ORG_UNITS_WITH_CYCLIC_REFERENCES", "ORG_UNITS_BEING_ORPHANED", "ORG_UNITS_WITHOUT_GROUPS", "ORG_UNITS_VIOLATING_EXCLUSIVE_GROUP_SETS", "ORG_UNIT_GROUPS_WITHOUT_GROUP_SETS", "VALIDATION_RULES_WITHOUT_GROUPS", "VALIDATION_RULES_WITH_INVALID_LEFT_SIDE_EXPRESSION", "VALIDATION_RULES_WITH_INVALID_RIGHT_SIDE_EXPRESSION", "PROGRAM_INDICATORS_WITH_INVALID_EXPRESSIONS", "PROGRAM_INDICATORS_WITH_INVALID_FILTERS", "PROGRAM_INDICATORS_WITHOUT_EXPRESSION", "PROGRAM_RULES_WITHOUT_CONDITION", "PROGRAM_RULES_WITHOUT_PRIORITY", "PROGRAM_RULES_WITHOUT_ACTION", "PROGRAM_RULE_VARIABLES_WITHOUT_DATA_ELEMENT", "PROGRAM_RULE_VARIABLES_WITHOUT_ATTRIBUTE", "PROGRAM_RULE_ACTIONS_WITHOUT_DATA_OBJECT", "PROGRAM_RULE_ACTIONS_WITHOUT_NOTIFICATION", "PROGRAM_RULE_ACTIONS_WITHOUT_SECTION", "PROGRAM_RULE_ACTIONS_WITHOUT_STAGE_ID" ]\n}\n')))}R.isMDXComponent=!0}}]);