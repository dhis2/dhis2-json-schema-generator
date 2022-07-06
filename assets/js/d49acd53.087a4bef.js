"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[44178],{3905:function(n,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var c=t.createContext({}),p=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},u=function(n){var e=p(n.components);return t.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return r?t.createElement(y,s(s({ref:e},u),{},{components:r})):t.createElement(y,s({ref:e},u))}));function m(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99449:function(n,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={},c=void 0,p={unversionedId:"v2.38.1/programRule",id:"v2.38.1/programRule",title:"programRule",description:"",source:"@site/docs/v2.38.1/programRule.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/programRule",permalink:"/dhis2-json-schema-generator/v2.38.1/programRule",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programOwnershipHistory",permalink:"/dhis2-json-schema-generator/v2.38.1/programOwnershipHistory"},next:{title:"programRuleAction",permalink:"/dhis2-json-schema-generator/v2.38.1/programRuleAction"}},u={},l=[],f={toc:l};function m(n){var e=n.components,r=(0,o.Z)(n,s);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "condition" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "priority" : {\n      "type" : "integer"\n    },\n    "program" : {\n      "$ref" : "program.json"\n    },\n    "programRuleActions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programRuleAction.json"\n      }\n    },\n    "programStage" : {\n      "$ref" : "programStage.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);