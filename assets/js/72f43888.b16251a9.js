"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[98087],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),l=p(t),y=o,m=l["".concat(c,".").concat(y)]||l[y]||f[y]||a;return t?r.createElement(m,i(i({ref:e},u),{},{components:t})):r.createElement(m,i({ref:e},u))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=l;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},14595:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={},c=void 0,p={unversionedId:"v2.37.6/interpretation",id:"v2.37.6/interpretation",title:"interpretation",description:"",source:"@site/docs/v2.37.6/interpretation.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/interpretation",permalink:"/dhis2-json-schema-generator/v2.37.6/interpretation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"indicatorType",permalink:"/dhis2-json-schema-generator/v2.37.6/indicatorType"},next:{title:"interpretationComment",permalink:"/dhis2-json-schema-generator/v2.37.6/interpretationComment"}},u={},f=[],l={toc:f};function y(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "comments" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "interpretationComment.json"\n      }\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataSet" : {\n      "$ref" : "dataSet.json"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "eventChart" : {\n      "$ref" : "eventChart.json"\n    },\n    "eventReport" : {\n      "$ref" : "eventReport.json"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "likedBy" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "user.json"\n      }\n    },\n    "likes" : {\n      "type" : "integer"\n    },\n    "map" : {\n      "$ref" : "map.json"\n    },\n    "mentions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "mention.json"\n      }\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "organisationUnit" : {\n      "$ref" : "organisationUnit.json"\n    },\n    "period" : {\n      "$ref" : "period.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "text" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "type" : {\n      "$ref" : "analyticsFavoriteType.json"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "visualization" : {\n      "$ref" : "visualization.json"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);