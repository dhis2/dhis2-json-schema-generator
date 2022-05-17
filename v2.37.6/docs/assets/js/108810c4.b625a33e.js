"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47489],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return l}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},y=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,y=a(n,["components","mdxType","originalType","parentName"]),m=p(t),l=o,d=m["".concat(c,".").concat(l)]||m[l]||u[l]||i;return t?r.createElement(d,s(s({ref:e},y),{},{components:t})):r.createElement(d,s({ref:e},y))}));function l(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:o,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73993:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],a={},c=void 0,p={unversionedId:"schemas/indicator",id:"schemas/indicator",title:"indicator",description:"",source:"@site/docs/schemas/indicator.md",sourceDirName:"schemas",slug:"/schemas/indicator",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/indicator",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"incomingSms",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/incomingSms"},next:{title:"indicatorGroup",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/indicatorGroup"}},y={},u=[],m={toc:u};function l(n){var e=n.components,t=(0,o.Z)(n,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregateExportAttributeOptionCombo" : {\n      "type" : "string"\n    },\n    "aggregateExportCategoryOptionCombo" : {\n      "type" : "string"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "annualized" : {\n      "type" : "boolean"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataSet.json"\n      }\n    },\n    "decimals" : {\n      "type" : "integer"\n    },\n    "denominator" : {\n      "type" : "string"\n    },\n    "denominatorDescription" : {\n      "type" : "string"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "dimensionItem" : {\n      "type" : "string"\n    },\n    "dimensionItemType" : {\n      "$ref" : "dimensionItemType.json"\n    },\n    "displayDenominatorDescription" : {\n      "type" : "string"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayNumeratorDescription" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "indicatorGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "indicatorGroup.json"\n      }\n    },\n    "indicatorType" : {\n      "$ref" : "indicatorType.json"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "legendSet" : {\n      "$ref" : "legendSet.json"\n    },\n    "legendSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "legendSet.json"\n      }\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "numerator" : {\n      "type" : "string"\n    },\n    "numeratorDescription" : {\n      "type" : "string"\n    },\n    "periodOffset" : {\n      "type" : "integer"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "style" : {\n      "$ref" : "objectStyle.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "url" : {\n      "type" : "string"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);