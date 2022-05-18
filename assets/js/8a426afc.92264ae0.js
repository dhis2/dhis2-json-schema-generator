"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[71723],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,y=m["".concat(i,".").concat(f)]||m[f]||l[f]||s;return r?t.createElement(y,o(o({ref:n},u),{},{components:r})):t.createElement(y,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<s;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52219:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var t=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],c={},i=void 0,p={unversionedId:"v2.35.13/programMessage",id:"v2.35.13/programMessage",title:"programMessage",description:"",source:"@site/docs/v2.35.13/programMessage.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/programMessage",permalink:"/dhis2-json-schema-generator/v2.35.13/programMessage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programInstance",permalink:"/dhis2-json-schema-generator/v2.35.13/programInstance"},next:{title:"programMessageBatch",permalink:"/dhis2-json-schema-generator/v2.35.13/programMessageBatch"}},u={},l=[],m={toc:l};function f(e){var n=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "deliveryChannels" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "deliveryChannel.json"\n      }\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "messageStatus" : {\n      "$ref" : "programMessageStatus.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "processedDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "programInstance" : {\n      "$ref" : "programInstance.json"\n    },\n    "programStageInstance" : {\n      "$ref" : "programStageInstance.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "recipients" : {\n      "$ref" : "programMessageRecipients.json"\n    },\n    "storeCopy" : {\n      "type" : "boolean"\n    },\n    "subject" : {\n      "type" : "string"\n    },\n    "text" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);