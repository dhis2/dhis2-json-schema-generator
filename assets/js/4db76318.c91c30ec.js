"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[61250],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return f}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=r.createContext({}),s=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},y=function(n){var e=s(n.components);return r.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,p=n.parentName,y=c(n,["components","mdxType","originalType","parentName"]),l=s(t),f=o,m=l["".concat(p,".").concat(f)]||l[f]||u[f]||a;return t?r.createElement(m,i(i({ref:e},y),{},{components:t})):r.createElement(m,i({ref:e},y))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},35176:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},p=void 0,s={unversionedId:"v2.36.10/trackedEntity",id:"v2.36.10/trackedEntity",title:"trackedEntity",description:"",source:"@site/docs/v2.36.10/trackedEntity.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/trackedEntity",permalink:"/dhis2-json-schema-generator/v2.36.10/trackedEntity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"totalType",permalink:"/dhis2-json-schema-generator/v2.36.10/totalType"},next:{title:"trackedEntityAttribute",permalink:"/dhis2-json-schema-generator/v2.36.10/trackedEntityAttribute"}},y={},u=[],l={toc:u};function f(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "attributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attribute__.json"\n      }\n    },\n    "createdAt" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "createdAtClient" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "enrollments" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "enrollment_.json"\n      }\n    },\n    "geometry" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "inactive" : {\n      "type" : "boolean"\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "programOwners" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programOwner_.json"\n      }\n    },\n    "relationships" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationship__.json"\n      }\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "trackedEntity" : {\n      "type" : "string"\n    },\n    "trackedEntityType" : {\n      "type" : "string"\n    },\n    "updatedAt" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "updatedAtClient" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);