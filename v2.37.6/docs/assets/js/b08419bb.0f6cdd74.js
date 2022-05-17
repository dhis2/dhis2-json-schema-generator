"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63910],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return u}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=r.createContext({}),c=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},y=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,p=n.parentName,y=i(n,["components","mdxType","originalType","parentName"]),m=c(t),u=o,f=m["".concat(p,".").concat(u)]||m[u]||l[u]||a;return t?r.createElement(f,s(s({ref:e},y),{},{components:t})):r.createElement(f,s({ref:e},y))}));function u(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79823:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},p=void 0,c={unversionedId:"schemas/dataSet",id:"schemas/dataSet",title:"dataSet",description:"",source:"@site/docs/schemas/dataSet.md",sourceDirName:"schemas",slug:"/schemas/dataSet",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/dataSet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataItemBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/dataItemBuilder"},next:{title:"dataSetElement",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/dataSetElement"}},y={},l=[],m={toc:l};function u(n){var e=n.components,t=(0,o.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "categoryCombo" : {\n      "$ref" : "categoryCombo.json"\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "compulsoryDataElementOperands" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementOperand.json"\n      }\n    },\n    "compulsoryFieldsCompleteOnly" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataElementDecoration" : {\n      "type" : "boolean"\n    },\n    "dataEntryForm" : {\n      "$ref" : "dataEntryForm.json"\n    },\n    "dataInputPeriods" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataInputPeriod.json"\n      }\n    },\n    "dataSetElements" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataSetElement.json"\n      }\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "dimensionItem" : {\n      "type" : "string"\n    },\n    "dimensionItemType" : {\n      "$ref" : "dimensionItemType.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "expiryDays" : {\n      "type" : "integer"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "fieldCombinationRequired" : {\n      "type" : "boolean"\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "formType" : {\n      "$ref" : "formType.json"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "indicators" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "indicator.json"\n      }\n    },\n    "interpretations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "interpretation.json"\n      }\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "legendSet" : {\n      "$ref" : "legendSet.json"\n    },\n    "legendSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "legendSet.json"\n      }\n    },\n    "mobile" : {\n      "type" : "boolean"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "noValueRequiresComment" : {\n      "type" : "boolean"\n    },\n    "notificationRecipients" : {\n      "$ref" : "userGroup.json"\n    },\n    "notifyCompletingUser" : {\n      "type" : "boolean"\n    },\n    "openFuturePeriods" : {\n      "type" : "integer"\n    },\n    "openPeriodsAfterCoEndDate" : {\n      "type" : "integer"\n    },\n    "organisationUnits" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnit.json"\n      }\n    },\n    "periodOffset" : {\n      "type" : "integer"\n    },\n    "periodType" : {\n      "$ref" : "periodType.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "renderAsTabs" : {\n      "type" : "boolean"\n    },\n    "renderHorizontally" : {\n      "type" : "boolean"\n    },\n    "sections" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "section.json"\n      }\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "skipOffline" : {\n      "type" : "boolean"\n    },\n    "style" : {\n      "$ref" : "objectStyle.json"\n    },\n    "timelyDays" : {\n      "type" : "integer"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "validCompleteOnly" : {\n      "type" : "boolean"\n    },\n    "version" : {\n      "type" : "integer"\n    },\n    "workflow" : {\n      "$ref" : "dataApprovalWorkflow.json"\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);