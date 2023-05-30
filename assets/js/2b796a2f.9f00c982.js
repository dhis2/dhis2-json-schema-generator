"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[42415],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return f}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=r.createContext({}),c=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},y=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,p=n.parentName,y=s(n,["components","mdxType","originalType","parentName"]),l=c(t),f=o,d=l["".concat(p,".").concat(f)]||l[f]||u[f]||i;return t?r.createElement(d,a(a({ref:e},y),{},{components:t})):r.createElement(d,a({ref:e},y))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},14518:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={},p=void 0,c={unversionedId:"v40.0/trackedEntityAttribute",id:"v40.0/trackedEntityAttribute",title:"trackedEntityAttribute",description:"",source:"@site/docs/v40.0/trackedEntityAttribute.md",sourceDirName:"v40.0",slug:"/v40.0/trackedEntityAttribute",permalink:"/dhis2-json-schema-generator/v40.0/trackedEntityAttribute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackedEntity",permalink:"/dhis2-json-schema-generator/v40.0/trackedEntity"},next:{title:"trackedEntityAttributeDimension",permalink:"/dhis2-json-schema-generator/v40.0/trackedEntityAttributeDimension"}},y={},u=[],l={toc:u};function f(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "confidential" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "dimensionItem" : {\n      "type" : "string"\n    },\n    "dimensionItemType" : {\n      "$ref" : "dimensionItemType.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayInListNoProgram" : {\n      "type" : "boolean"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayOnVisitSchedule" : {\n      "type" : "boolean"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "expression" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "fieldMask" : {\n      "type" : "string"\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "generated" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "inherit" : {\n      "type" : "boolean"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "legendSet" : {\n      "$ref" : "legendSet.json"\n    },\n    "legendSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "legendSet.json"\n      }\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "optionSet" : {\n      "$ref" : "optionSet.json"\n    },\n    "optionSetValue" : {\n      "type" : "boolean"\n    },\n    "orgunitScope" : {\n      "type" : "boolean"\n    },\n    "pattern" : {\n      "type" : "string"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "queryMods" : {\n      "$ref" : "queryModifiers.json"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "skipSynchronization" : {\n      "type" : "boolean"\n    },\n    "sortOrderInListNoProgram" : {\n      "type" : "integer"\n    },\n    "sortOrderInVisitSchedule" : {\n      "type" : "integer"\n    },\n    "style" : {\n      "$ref" : "objectStyle.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "unique" : {\n      "type" : "boolean"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "valueType" : {\n      "$ref" : "valueType.json"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);