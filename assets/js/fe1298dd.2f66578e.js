"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[1808],{3905:function(n,e,r){r.d(e,{Zo:function(){return y},kt:function(){return m}});var t=r(67294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var p=t.createContext({}),c=function(n){var e=t.useContext(p),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},y=function(n){var e=c(n.components);return t.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},l=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,p=n.parentName,y=i(n,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(p,".").concat(m)]||l[m]||u[m]||a;return r?t.createElement(f,s(s({ref:e},y),{},{components:r})):t.createElement(f,s({ref:e},y))}));function m(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,s=new Array(a);s[0]=l;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},93610:function(n,e,r){r.r(e),r.d(e,{assets:function(){return y},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={},p=void 0,c={unversionedId:"v40.0/programIndicator",id:"v40.0/programIndicator",title:"programIndicator",description:"",source:"@site/docs/v40.0/programIndicator.md",sourceDirName:"v40.0",slug:"/v40.0/programIndicator",permalink:"/dhis2-json-schema-generator/v40.0/programIndicator",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programExpression",permalink:"/dhis2-json-schema-generator/v40.0/programExpression"},next:{title:"programIndicatorGroup",permalink:"/dhis2-json-schema-generator/v40.0/programIndicatorGroup"}},y={},u=[],l={toc:u};function m(n){var e=n.components,r=(0,o.Z)(n,s);return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregateExportAttributeOptionCombo" : {\n      "type" : "string"\n    },\n    "aggregateExportCategoryOptionCombo" : {\n      "type" : "string"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "analyticsPeriodBoundaries" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "analyticsPeriodBoundary.json"\n      }\n    },\n    "analyticsType" : {\n      "$ref" : "analyticsType_.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "decimals" : {\n      "type" : "integer"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "dimensionItem" : {\n      "type" : "string"\n    },\n    "dimensionItemType" : {\n      "$ref" : "dimensionItemType.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayInForm" : {\n      "type" : "boolean"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "expression" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filter" : {\n      "type" : "string"\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "legendSet" : {\n      "$ref" : "legendSet.json"\n    },\n    "legendSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "legendSet.json"\n      }\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "orgUnitField" : {\n      "type" : "string"\n    },\n    "program" : {\n      "$ref" : "program.json"\n    },\n    "programIndicatorGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programIndicatorGroup.json"\n      }\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "queryMods" : {\n      "$ref" : "queryModifiers.json"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "style" : {\n      "$ref" : "objectStyle.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);