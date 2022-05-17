"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[84493],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return l}});var r=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,o=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),f=p(t),l=s,y=f["".concat(c,".").concat(l)]||f[l]||m[l]||o;return t?r.createElement(y,a(a({ref:e},u),{},{components:t})):r.createElement(y,a({ref:e},u))}));function l(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:s,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47202:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=t(87462),s=t(63366),o=(t(67294),t(3905)),a=["components"],i={},c=void 0,p={unversionedId:"v2.37.5/incomingSms",id:"v2.37.5/incomingSms",title:"incomingSms",description:"",source:"@site/docs/v2.37.5/incomingSms.md",sourceDirName:"v2.37.5",slug:"/v2.37.5/incomingSms",permalink:"/dhis2-json-schema-generator/v2.37.5/incomingSms",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"include",permalink:"/dhis2-json-schema-generator/v2.37.5/include"},next:{title:"indicator",permalink:"/dhis2-json-schema-generator/v2.37.5/indicator"}},u={},m=[],f={toc:m};function l(n){var e=n.components,t=(0,s.Z)(n,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "gatewayid" : {\n      "type" : "string"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "originator" : {\n      "type" : "string"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "receiveddate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "sentdate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "smsencoding" : {\n      "$ref" : "smsMessageEncoding.json"\n    },\n    "smsstatus" : {\n      "$ref" : "smsMessageStatus.json"\n    },\n    "text" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);