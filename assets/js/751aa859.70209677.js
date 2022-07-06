"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[96384],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94956:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},s=void 0,p={unversionedId:"v2.38.1/trackerImportParams",id:"v2.38.1/trackerImportParams",title:"trackerImportParams",description:"",source:"@site/docs/v2.38.1/trackerImportParams.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/trackerImportParams",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerImportParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerIdSchemeParamsBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerIdSchemeParamsBuilder"},next:{title:"trackerImportParamsBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerImportParamsBuilder"}},u={},l=[],m={toc:l};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "atomicMode" : {\n      "$ref" : "atomicMode_.json"\n    },\n    "enrollments" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "enrollment_.json"\n      }\n    },\n    "events" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "event_.json"\n      }\n    },\n    "filename" : {\n      "type" : "string"\n    },\n    "flushMode" : {\n      "$ref" : "flushMode_.json"\n    },\n    "idSchemes" : {\n      "$ref" : "trackerIdSchemeParams.json"\n    },\n    "importMode" : {\n      "$ref" : "trackerBundleMode.json"\n    },\n    "importStrategy" : {\n      "$ref" : "trackerImportStrategy.json"\n    },\n    "relationships" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationship__.json"\n      }\n    },\n    "skipPatternValidation" : {\n      "type" : "boolean"\n    },\n    "skipRuleEngine" : {\n      "type" : "boolean"\n    },\n    "skipSideEffects" : {\n      "type" : "boolean"\n    },\n    "trackedEntities" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntity.json"\n      }\n    },\n    "userId" : {\n      "type" : "string"\n    },\n    "username" : {\n      "type" : "string"\n    },\n    "validationMode" : {\n      "$ref" : "validationMode.json"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);