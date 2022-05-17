"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53035],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return l}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},y=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,s=n.originalType,c=n.parentName,y=i(n,["components","mdxType","originalType","parentName"]),f=p(t),l=a,m=f["".concat(c,".").concat(l)]||f[l]||u[l]||s;return t?r.createElement(m,o(o({ref:e},y),{},{components:t})):r.createElement(m,o({ref:e},y))}));function l(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24737:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],i={},c=void 0,p={unversionedId:"schemas/trackedEntityInstance_",id:"schemas/trackedEntityInstance_",title:"trackedEntityInstance_",description:"",source:"@site/docs/schemas/trackedEntityInstance_.md",sourceDirName:"schemas",slug:"/schemas/trackedEntityInstance_",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/trackedEntityInstance_",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackedEntityInstanceParams",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/trackedEntityInstanceParams"},next:{title:"trackedEntityInstances",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/trackedEntityInstances"}},y={},u=[],f={toc:u};function l(n){var e=n.components,t=(0,a.Z)(n,o);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdAtClient" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "createdByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "geometry" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "inactive" : {\n      "type" : "boolean"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedAtClient" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "lastUpdatedByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "organisationUnit" : {\n      "$ref" : "organisationUnit.json"\n    },\n    "potentialDuplicate" : {\n      "type" : "boolean"\n    },\n    "programInstances" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programInstance.json"\n      }\n    },\n    "programOwners" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityProgramOwner.json"\n      }\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "relationshipItems" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationshipItem_.json"\n      }\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "trackedEntityAttributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityAttributeValue.json"\n      }\n    },\n    "trackedEntityType" : {\n      "$ref" : "trackedEntityType.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);