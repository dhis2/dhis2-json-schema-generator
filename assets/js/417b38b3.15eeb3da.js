"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[93961],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return l}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),c=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(u.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,s=n.originalType,u=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),f=c(t),l=o,y=f["".concat(u,".").concat(l)]||f[l]||m[l]||s;return t?r.createElement(y,a(a({ref:e},p),{},{components:t})):r.createElement(y,a({ref:e},p))}));function l(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i.mdxType="string"==typeof n?n:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47031:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={},u=void 0,c={unversionedId:"v2.37.6/outboundSms",id:"v2.37.6/outboundSms",title:"outboundSms",description:"",source:"@site/docs/v2.37.6/outboundSms.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/outboundSms",permalink:"/dhis2-json-schema-generator/v2.37.6/outboundSms",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"outboundMessageResponseSummary",permalink:"/dhis2-json-schema-generator/v2.37.6/outboundMessageResponseSummary"},next:{title:"outboundSmsStatus",permalink:"/dhis2-json-schema-generator/v2.37.6/outboundSmsStatus"}},p={},m=[],f={toc:m};function l(n){var e=n.components,t=(0,o.Z)(n,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "date" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "message" : {\n      "type" : "string"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "recipients" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "sender" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "status" : {\n      "$ref" : "outboundSmsStatus.json"\n    },\n    "subject" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);