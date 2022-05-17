"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[23671],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=s(n),d=a,y=f["".concat(u,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(y,i(i({ref:e},p),{},{components:n})):r.createElement(y,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21590:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},u=void 0,s={unversionedId:"v2.37.4/trackedEntityAttributeValueAudit",id:"v2.37.4/trackedEntityAttributeValueAudit",title:"trackedEntityAttributeValueAudit",description:"",source:"@site/docs/v2.37.4/trackedEntityAttributeValueAudit.md",sourceDirName:"v2.37.4",slug:"/v2.37.4/trackedEntityAttributeValueAudit",permalink:"/dhis2-json-schema-generator/v2.37.4/trackedEntityAttributeValueAudit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackedEntityAttributeValue",permalink:"/dhis2-json-schema-generator/v2.37.4/trackedEntityAttributeValue"},next:{title:"trackedEntityComment",permalink:"/dhis2-json-schema-generator/v2.37.4/trackedEntityComment"}},p={},l=[],f={toc:l};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "auditType" : {\n      "$ref" : "auditType_.json"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "modifiedBy" : {\n      "type" : "string"\n    },\n    "trackedEntityAttribute" : {\n      "$ref" : "trackedEntityAttribute.json"\n    },\n    "trackedEntityInstance" : {\n      "$ref" : "trackedEntityInstance.json"\n    },\n    "value" : {\n      "type" : "string"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);