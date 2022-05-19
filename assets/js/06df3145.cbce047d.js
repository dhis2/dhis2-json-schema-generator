"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[67499],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),y=p(t),f=o,m=y["".concat(c,".").concat(f)]||y[f]||l[f]||a;return t?r.createElement(m,s(s({ref:e},u),{},{components:t})):r.createElement(m,s({ref:e},u))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},14242:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},c=void 0,p={unversionedId:"v2.35.13/event_",id:"v2.35.13/event_",title:"event_",description:"",source:"@site/docs/v2.35.13/event_.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/event_",permalink:"/dhis2-json-schema-generator/v2.35.13/event_",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eventStatus_",permalink:"/dhis2-json-schema-generator/v2.35.13/eventStatus_"},next:{title:"events",permalink:"/dhis2-json-schema-generator/v2.35.13/events"}},u={},l=[],y={toc:l};function f(n){var e=n.components,t=(0,o.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "assignedUser" : {\n      "$ref" : "user.json"\n    },\n    "attributeCategoryOptions" : {\n      "type" : "string"\n    },\n    "attributeOptionCombo" : {\n      "type" : "string"\n    },\n    "completedAt" : {\n      "type" : "string"\n    },\n    "completedBy" : {\n      "type" : "string"\n    },\n    "createdAt" : {\n      "type" : "string"\n    },\n    "dataValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataValue___.json"\n      }\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "enrollment" : {\n      "type" : "string"\n    },\n    "enrollmentStatus" : {\n      "$ref" : "enrollmentStatus_.json"\n    },\n    "event" : {\n      "type" : "string"\n    },\n    "followUp" : {\n      "type" : "boolean"\n    },\n    "geometry" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "notes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "note_.json"\n      }\n    },\n    "occurredAt" : {\n      "type" : "string"\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "program" : {\n      "type" : "string"\n    },\n    "programStage" : {\n      "type" : "string"\n    },\n    "relationships" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationship__.json"\n      }\n    },\n    "scheduledAt" : {\n      "type" : "string"\n    },\n    "status" : {\n      "$ref" : "eventStatus.json"\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "trackedEntity" : {\n      "type" : "string"\n    },\n    "updatedAt" : {\n      "type" : "string"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);