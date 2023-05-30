"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[69413],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return l}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=r.createContext({}),c=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},y=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,y=i(n,["components","mdxType","originalType","parentName"]),m=c(t),l=a,f=m["".concat(p,".").concat(l)]||m[l]||u[l]||o;return t?r.createElement(f,s(s({ref:e},y),{},{components:t})):r.createElement(f,s({ref:e},y))}));function l(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87806:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return p},default:function(){return l},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={},p=void 0,c={unversionedId:"v40.0/organisationUnit",id:"v40.0/organisationUnit",title:"organisationUnit",description:"",source:"@site/docs/v40.0/organisationUnit.md",sourceDirName:"v40.0",slug:"/v40.0/organisationUnit",permalink:"/dhis2-json-schema-generator/v40.0/organisationUnit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"orderColumn",permalink:"/dhis2-json-schema-generator/v40.0/orderColumn"},next:{title:"organisationUnitDescendants",permalink:"/dhis2-json-schema-generator/v40.0/organisationUnitDescendants"}},y={},u=[],m={toc:u};function l(n){var e=n.components,t=(0,a.Z)(n,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "address" : {\n      "type" : "string"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "ancestors" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "#"\n      }\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "children" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "#"\n      }\n    },\n    "closedDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "comment" : {\n      "type" : "string"\n    },\n    "contactPerson" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataSet.json"\n      }\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "dimensionItem" : {\n      "type" : "string"\n    },\n    "dimensionItemType" : {\n      "$ref" : "dimensionItemType.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "email" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "geometry" : {\n      "$comment" : "Undefined"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "image" : {\n      "$ref" : "fileResource.json"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "leaf" : {\n      "type" : "boolean"\n    },\n    "legendSet" : {\n      "$ref" : "legendSet.json"\n    },\n    "legendSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "legendSet.json"\n      }\n    },\n    "level" : {\n      "type" : "integer",\n      "readOnly" : true\n    },\n    "memberCount" : {\n      "type" : "integer"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "openingDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "organisationUnitGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroup.json"\n      }\n    },\n    "parent" : {\n      "$ref" : "#"\n    },\n    "path" : {\n      "type" : "string"\n    },\n    "phoneNumber" : {\n      "type" : "string"\n    },\n    "programs" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "program.json"\n      }\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "queryMods" : {\n      "$ref" : "queryModifiers.json"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "type" : {\n      "type" : "string"\n    },\n    "url" : {\n      "type" : "string"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "users" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "user.json"\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);