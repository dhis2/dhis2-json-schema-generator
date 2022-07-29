"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[70933],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),y=o,d=f["".concat(s,".").concat(y)]||f[y]||l[y]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41217:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s=void 0,p={unversionedId:"v2.38.1/trackedEntity",id:"v2.38.1/trackedEntity",title:"trackedEntity",description:"",source:"@site/docs/v2.38.1/trackedEntity.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/trackedEntity",permalink:"/dhis2-json-schema-generator/v2.38.1/trackedEntity",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"totalType",permalink:"/dhis2-json-schema-generator/v2.38.1/totalType"},next:{title:"trackedEntityAttribute",permalink:"/dhis2-json-schema-generator/v2.38.1/trackedEntityAttribute"}},u={},l=[],f={toc:l};function y(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "attributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attribute___.json"\n      }\n    },\n    "createdAt" : {\n      "$comment" : "Undefined"\n    },\n    "createdAtClient" : {\n      "$comment" : "Undefined"\n    },\n    "createdBy" : {\n      "$ref" : "user_.json"\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "enrollments" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "enrollment_.json"\n      }\n    },\n    "geometry" : {\n      "$comment" : "Undefined"\n    },\n    "inactive" : {\n      "type" : "boolean"\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "potentialDuplicate" : {\n      "type" : "boolean"\n    },\n    "programOwners" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programOwner_.json"\n      }\n    },\n    "relationships" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationship__.json"\n      }\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "trackedEntity" : {\n      "type" : "string"\n    },\n    "trackedEntityType" : {\n      "type" : "string"\n    },\n    "updatedAt" : {\n      "$comment" : "Undefined"\n    },\n    "updatedAtClient" : {\n      "$comment" : "Undefined"\n    },\n    "updatedBy" : {\n      "$ref" : "user_.json"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);