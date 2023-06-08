"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[22990],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),f=s,y=l["".concat(c,".").concat(f)]||l[f]||m[f]||a;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=l;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},50253:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=t(87462),s=t(63366),a=(t(67294),t(3905)),o=["components"],i={},c=void 0,p={unversionedId:"v2.39.1/messageConversation",id:"v2.39.1/messageConversation",title:"messageConversation",description:"",source:"@site/docs/v2.39.1/messageConversation.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/messageConversation",permalink:"/dhis2-json-schema-generator/v2.39.1/messageConversation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"message",permalink:"/dhis2-json-schema-generator/v2.39.1/message"},next:{title:"messageConversationPriority",permalink:"/dhis2-json-schema-generator/v2.39.1/messageConversationPriority"}},u={},m=[],l={toc:m};function f(e){var n=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "assignee" : {\n      "$ref" : "user.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "extMessageId" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "followUp" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastMessage" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastSender" : {\n      "$ref" : "user.json"\n    },\n    "lastSenderFirstname" : {\n      "type" : "string"\n    },\n    "lastSenderSurname" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "messageCount" : {\n      "type" : "integer"\n    },\n    "messageType" : {\n      "$ref" : "messageType_.json"\n    },\n    "messages" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "message.json"\n      }\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "priority" : {\n      "$ref" : "messageConversationPriority.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "read" : {\n      "type" : "boolean"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "status" : {\n      "$ref" : "messageConversationStatus.json"\n    },\n    "subject" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userFirstname" : {\n      "type" : "string"\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userMessages" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userMessage.json"\n      }\n    },\n    "userSurname" : {\n      "type" : "string"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);