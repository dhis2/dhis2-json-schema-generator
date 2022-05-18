"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[9669],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=r.createContext({}),c=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,p=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),y=c(t),f=o,m=y["".concat(p,".").concat(f)]||y[f]||u[f]||i;return t?r.createElement(m,a(a({ref:e},l),{},{components:t})):r.createElement(m,a({ref:e},l))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=y;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},43893:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={},p=void 0,c={unversionedId:"v2.35.13/validationRule",id:"v2.35.13/validationRule",title:"validationRule",description:"",source:"@site/docs/v2.35.13/validationRule.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/validationRule",permalink:"/dhis2-json-schema-generator/v2.35.13/validationRule",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"validationResult",permalink:"/dhis2-json-schema-generator/v2.35.13/validationResult"},next:{title:"validationRuleExpressionDetails",permalink:"/dhis2-json-schema-generator/v2.35.13/validationRuleExpressionDetails"}},l={},u=[],y={toc:u};function f(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregateExportAttributeOptionCombo" : {\n      "type" : "string"\n    },\n    "aggregateExportCategoryOptionCombo" : {\n      "type" : "string"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "dimensionItem" : {\n      "type" : "string"\n    },\n    "dimensionItemType" : {\n      "$ref" : "dimensionItemType.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayInstruction" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "importance" : {\n      "$ref" : "importance.json"\n    },\n    "instruction" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "leftSide" : {\n      "$ref" : "expression.json"\n    },\n    "legendSet" : {\n      "$ref" : "legendSet.json"\n    },\n    "legendSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "legendSet.json"\n      }\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "notificationTemplates" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "validationNotificationTemplate.json"\n      }\n    },\n    "operator" : {\n      "$ref" : "operator.json"\n    },\n    "organisationUnitLevels" : {\n      "type" : "array",\n      "items" : {\n        "type" : "integer"\n      }\n    },\n    "periodOffset" : {\n      "type" : "integer"\n    },\n    "periodType" : {\n      "$ref" : "periodType.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "rightSide" : {\n      "$ref" : "expression.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "skipFormValidation" : {\n      "type" : "boolean"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "validationRuleGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "validationRuleGroup.json"\n      }\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);