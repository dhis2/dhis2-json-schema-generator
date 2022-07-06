"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[15079],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return f}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),s=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},y=function(n){var e=s(n.components);return r.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,y=i(n,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||a;return t?r.createElement(m,p(p({ref:e},y),{},{components:t})):r.createElement(m,p({ref:e},y))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},54743:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),p=["components"],i={},c=void 0,s={unversionedId:"v2.38.1/property",id:"v2.38.1/property",title:"property",description:"",source:"@site/docs/v2.38.1/property.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/property",permalink:"/dhis2-json-schema-generator/v2.38.1/property",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programType",permalink:"/dhis2-json-schema-generator/v2.38.1/programType"},next:{title:"propertyType",permalink:"/dhis2-json-schema-generator/v2.38.1/propertyType"}},y={},l=[],u={toc:l};function f(n){var e=n.components,t=(0,o.Z)(n,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "analyticalObject" : {\n      "type" : "boolean"\n    },\n    "apiEndpoint" : {\n      "type" : "string"\n    },\n    "attribute" : {\n      "type" : "boolean"\n    },\n    "cascade" : {\n      "type" : "string"\n    },\n    "collection" : {\n      "type" : "boolean"\n    },\n    "collectionName" : {\n      "type" : "string"\n    },\n    "collectionWrapping" : {\n      "type" : "boolean"\n    },\n    "constants" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "defaultValue" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "embeddedObject" : {\n      "type" : "boolean"\n    },\n    "fieldName" : {\n      "type" : "string"\n    },\n    "gistPreferences" : {\n      "$ref" : "gistPreferences.json"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "i18nTranslationKey" : {\n      "type" : "string"\n    },\n    "identifiableObject" : {\n      "type" : "boolean"\n    },\n    "inverseRole" : {\n      "type" : "string"\n    },\n    "itemKlass" : {\n      "type" : "string"\n    },\n    "itemPropertyType" : {\n      "$ref" : "propertyType.json"\n    },\n    "klass" : {\n      "type" : "string"\n    },\n    "length" : {\n      "type" : "integer"\n    },\n    "manyToMany" : {\n      "type" : "boolean"\n    },\n    "manyToOne" : {\n      "type" : "boolean"\n    },\n    "max" : {\n      "type" : "number"\n    },\n    "min" : {\n      "type" : "number"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "nameableObject" : {\n      "type" : "boolean"\n    },\n    "namespace" : {\n      "type" : "string"\n    },\n    "oneToMany" : {\n      "type" : "boolean"\n    },\n    "oneToOne" : {\n      "type" : "boolean"\n    },\n    "ordered" : {\n      "type" : "boolean"\n    },\n    "owner" : {\n      "type" : "boolean"\n    },\n    "owningRole" : {\n      "type" : "string"\n    },\n    "persisted" : {\n      "type" : "boolean"\n    },\n    "propertyTransformer" : {\n      "type" : "boolean"\n    },\n    "propertyType" : {\n      "$ref" : "propertyType.json"\n    },\n    "readable" : {\n      "type" : "boolean"\n    },\n    "relativeApiEndpoint" : {\n      "type" : "string"\n    },\n    "required" : {\n      "type" : "boolean"\n    },\n    "simple" : {\n      "type" : "boolean"\n    },\n    "translatable" : {\n      "type" : "boolean"\n    },\n    "translationKey" : {\n      "type" : "string"\n    },\n    "unique" : {\n      "type" : "boolean"\n    },\n    "writable" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);