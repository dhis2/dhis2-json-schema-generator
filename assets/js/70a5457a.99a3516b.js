"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[45974],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return y}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),f=p(t),y=a,m=f["".concat(c,".").concat(y)]||f[y]||u[y]||o;return t?r.createElement(m,i(i({ref:e},l),{},{components:t})):r.createElement(m,i({ref:e},l))}));function y(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87382:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={},c=void 0,p={unversionedId:"v2.38.1/validationNotificationTemplate",id:"v2.38.1/validationNotificationTemplate",title:"validationNotificationTemplate",description:"",source:"@site/docs/v2.38.1/validationNotificationTemplate.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/validationNotificationTemplate",permalink:"/dhis2-json-schema-generator/v2.38.1/validationNotificationTemplate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"validationMode",permalink:"/dhis2-json-schema-generator/v2.38.1/validationMode"},next:{title:"validationResult",permalink:"/dhis2-json-schema-generator/v2.38.1/validationResult"}},l={},u=[],f={toc:u};function y(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "displayMessageTemplate" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displaySubjectTemplate" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "messageTemplate" : {\n      "type" : "string"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "notifyParentOrganisationUnitOnly" : {\n      "type" : "boolean"\n    },\n    "notifyUsersInHierarchyOnly" : {\n      "type" : "boolean"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "recipientUserGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroup.json"\n      }\n    },\n    "sendStrategy" : {\n      "$ref" : "sendStrategy.json"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "subjectTemplate" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "validationRules" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "validationRule.json"\n      }\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);