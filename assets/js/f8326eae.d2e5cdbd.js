"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[20090],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),f=a,d=l["".concat(c,".").concat(f)]||l[f]||y[f]||o;return r?t.createElement(d,s(s({ref:n},p),{},{components:r})):t.createElement(d,s({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=l;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},29414:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return y}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={},c=void 0,u={unversionedId:"v2.37.5/analyticsPeriodBoundary",id:"v2.37.5/analyticsPeriodBoundary",title:"analyticsPeriodBoundary",description:"",source:"@site/docs/v2.37.5/analyticsPeriodBoundary.md",sourceDirName:"v2.37.5",slug:"/v2.37.5/analyticsPeriodBoundary",permalink:"/dhis2-json-schema-generator/v2.37.5/analyticsPeriodBoundary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"analyticsMetaDataKey",permalink:"/dhis2-json-schema-generator/v2.37.5/analyticsMetaDataKey"},next:{title:"analyticsPeriodBoundaryType",permalink:"/dhis2-json-schema-generator/v2.37.5/analyticsPeriodBoundaryType"}},p={},y=[],l={toc:y};function f(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "analyticsPeriodBoundaryType" : {\n      "$ref" : "analyticsPeriodBoundaryType.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "boundaryTarget" : {\n      "type" : "string"\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "offsetPeriodType" : {\n      "$ref" : "periodType.json"\n    },\n    "offsetPeriods" : {\n      "type" : "integer"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);