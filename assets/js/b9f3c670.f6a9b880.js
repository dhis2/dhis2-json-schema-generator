"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[67438],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return l}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},m=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),f=p(t),l=a,y=f["".concat(c,".").concat(l)]||f[l]||u[l]||o;return t?r.createElement(y,s(s({ref:e},m),{},{components:t})):r.createElement(y,s({ref:e},m))}));function l(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16235:function(n,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={},c=void 0,p={unversionedId:"v2.37.6/programStageInstance",id:"v2.37.6/programStageInstance",title:"programStageInstance",description:"",source:"@site/docs/v2.37.6/programStageInstance.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/programStageInstance",permalink:"/dhis2-json-schema-generator/v2.37.6/programStageInstance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programStageDataElement",permalink:"/dhis2-json-schema-generator/v2.37.6/programStageDataElement"},next:{title:"programStageInstanceFilter",permalink:"/dhis2-json-schema-generator/v2.37.6/programStageInstanceFilter"}},m={},u=[],f={toc:u};function l(n){var e=n.components,t=(0,a.Z)(n,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "assignedUser" : {\n      "$ref" : "user.json"\n    },\n    "attributeOptionCombo" : {\n      "$ref" : "categoryOptionCombo.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "comments" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityComment.json"\n      }\n    },\n    "completed" : {\n      "type" : "boolean"\n    },\n    "completedBy" : {\n      "type" : "string"\n    },\n    "completedDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "creatableInSearchScope" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdAtClient" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "createdByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "dueDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "eventDataValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "eventDataValue.json"\n      }\n    },\n    "eventDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "geometry" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedAtClient" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "lastUpdatedByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "messageConversations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "messageConversation.json"\n      }\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "organisationUnit" : {\n      "$ref" : "organisationUnit.json"\n    },\n    "programInstance" : {\n      "$ref" : "programInstance.json"\n    },\n    "programStage" : {\n      "$ref" : "programStage.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "relationshipItems" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationshipItem_.json"\n      }\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "status" : {\n      "$ref" : "eventStatus.json"\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);