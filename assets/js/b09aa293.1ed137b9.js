"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[40361],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=a,d=l["".concat(s,".").concat(f)]||l[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},28142:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},s=void 0,p={unversionedId:"v2.36.11/metadataItem",id:"v2.36.11/metadataItem",title:"metadataItem",description:"",source:"@site/docs/v2.36.11/metadataItem.md",sourceDirName:"v2.36.11",slug:"/v2.36.11/metadataItem",permalink:"/dhis2-json-schema-generator/v2.36.11/metadataItem",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metadataImportParams",permalink:"/dhis2-json-schema-generator/v2.36.11/metadataImportParams"},next:{title:"metadataSyncJobParameters",permalink:"/dhis2-json-schema-generator/v2.36.11/metadataSyncJobParameters"}},m={},u=[],l={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "dimensionItemType" : {\n      "$ref" : "dimensionItemType.json"\n    },\n    "dimensionType" : {\n      "$ref" : "dimensionType.json"\n    },\n    "endDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "legendSet" : {\n      "type" : "string"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "startDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "totalAggregationType" : {\n      "$ref" : "totalAggregationType.json"\n    },\n    "uid" : {\n      "type" : "string"\n    },\n    "valueType" : {\n      "$ref" : "valueType.json"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);