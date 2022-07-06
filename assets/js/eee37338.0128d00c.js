"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[9590],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),y=p(t),f=a,m=y["".concat(c,".").concat(f)]||y[f]||l[f]||o;return t?r.createElement(m,s(s({ref:e},u),{},{components:t})):r.createElement(m,s({ref:e},u))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,s=new Array(o);s[0]=y;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},18810:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={},c=void 0,p={unversionedId:"v2.37.7/trackedEntityInstanceFilter",id:"v2.37.7/trackedEntityInstanceFilter",title:"trackedEntityInstanceFilter",description:"",source:"@site/docs/v2.37.7/trackedEntityInstanceFilter.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/trackedEntityInstanceFilter",permalink:"/dhis2-json-schema-generator/v2.37.7/trackedEntityInstanceFilter",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackedEntityInstanceAudit",permalink:"/dhis2-json-schema-generator/v2.37.7/trackedEntityInstanceAudit"},next:{title:"trackedEntityInstanceParams",permalink:"/dhis2-json-schema-generator/v2.37.7/trackedEntityInstanceParams"}},u={},l=[],y={toc:l};function f(n){var e=n.components,t=(0,a.Z)(n,s);return(0,o.kt)("wrapper",(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "enrollmentCreatedPeriod" : {\n      "$ref" : "filterPeriod.json"\n    },\n    "enrollmentStatus" : {\n      "$ref" : "programStatus.json"\n    },\n    "eventFilters" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "eventFilter.json"\n      }\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "followup" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "program" : {\n      "$ref" : "program.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "style" : {\n      "$ref" : "objectStyle.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);