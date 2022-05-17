"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[821],{3905:function(n,e,r){r.d(e,{Zo:function(){return u},kt:function(){return y}});var t=r(67294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var c=t.createContext({}),p=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},u=function(n){var e=p(n.components);return t.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),f=p(r),y=o,d=f["".concat(c,".").concat(y)]||f[y]||l[y]||a;return r?t.createElement(d,i(i({ref:e},u),{},{components:r})):t.createElement(d,i({ref:e},u))}));function y(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92641:function(n,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={},c=void 0,p={unversionedId:"v2.37.4/indicatorGroupSet",id:"v2.37.4/indicatorGroupSet",title:"indicatorGroupSet",description:"",source:"@site/docs/v2.37.4/indicatorGroupSet.md",sourceDirName:"v2.37.4",slug:"/v2.37.4/indicatorGroupSet",permalink:"/dhis2-json-schema-generator/v2.37.4/indicatorGroupSet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"indicatorGroup",permalink:"/dhis2-json-schema-generator/v2.37.4/indicatorGroup"},next:{title:"indicatorType",permalink:"/dhis2-json-schema-generator/v2.37.4/indicatorType"}},u={},l=[],f={toc:l};function y(n){var e=n.components,r=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "compulsory" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "indicatorGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "indicatorGroup.json"\n      }\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);