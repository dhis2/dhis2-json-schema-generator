"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[60239],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),f=p(t),y=o,m=f["".concat(c,".").concat(y)]||f[y]||l[y]||a;return t?r.createElement(m,s(s({ref:e},u),{},{components:t})):r.createElement(m,s({ref:e},u))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69452:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},c=void 0,p={unversionedId:"v2.37.7/section",id:"v2.37.7/section",title:"section",description:"",source:"@site/docs/v2.37.7/section.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/section",permalink:"/dhis2-json-schema-generator/v2.37.7/section",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"schemas",permalink:"/dhis2-json-schema-generator/v2.37.7/schemas"},next:{title:"sectionRenderingObject",permalink:"/dhis2-json-schema-generator/v2.37.7/sectionRenderingObject"}},u={},l=[],f={toc:l};function y(n){var e=n.components,t=(0,o.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "categoryCombos" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryCombo.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataElements" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElement.json"\n      }\n    },\n    "dataSet" : {\n      "$ref" : "dataSet.json"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "disableDataElementAutoGroup" : {\n      "type" : "boolean"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "greyedFields" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementOperand.json"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "indicators" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "indicator.json"\n      }\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "showColumnTotals" : {\n      "type" : "boolean"\n    },\n    "showRowTotals" : {\n      "type" : "boolean"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);