"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[12761],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),y=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=y(n.components);return r.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,p=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),l=y(t),u=i,f=l["".concat(p,".").concat(u)]||l[u]||m[u]||a;return t?r.createElement(f,s(s({ref:e},c),{},{components:t})):r.createElement(f,s({ref:e},c))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,s=new Array(a);s[0]=l;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o.mdxType="string"==typeof n?n:i,s[1]=o;for(var y=2;y<a;y++)s[y]=t[y];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},29182:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return y},toc:function(){return m}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],o={},p=void 0,y={unversionedId:"v2.37.7/baseAnalyticalObject",id:"v2.37.7/baseAnalyticalObject",title:"baseAnalyticalObject",description:"",source:"@site/docs/v2.37.7/baseAnalyticalObject.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/baseAnalyticalObject",permalink:"/dhis2-json-schema-generator/v2.37.7/baseAnalyticalObject",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"axisV2",permalink:"/dhis2-json-schema-generator/v2.37.7/axisV2"},next:{title:"baseChart",permalink:"/dhis2-json-schema-generator/v2.37.7/baseChart"}},c={},m=[],l={toc:m};function u(n){var e=n.components,t=(0,i.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "attributeDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityAttributeDimension.json"\n      }\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "categoryDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryDimension.json"\n      }\n    },\n    "categoryOptionGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionGroupSetDimension.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "columns" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "completedOnly" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataDimensionItems" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataDimensionItem.json"\n      }\n    },\n    "dataElementDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityDataElementDimension.json"\n      }\n    },\n    "dataElementGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementGroupSetDimension.json"\n      }\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "digitGroupSeparator" : {\n      "$ref" : "digitGroupSeparator.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "displaySubtitle" : {\n      "type" : "string"\n    },\n    "displayTitle" : {\n      "type" : "string"\n    },\n    "endDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filters" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "hideSubtitle" : {\n      "type" : "boolean"\n    },\n    "hideTitle" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "interpretations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "interpretation.json"\n      }\n    },\n    "itemOrganisationUnitGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroup.json"\n      }\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "orgUnitField" : {\n      "type" : "string"\n    },\n    "organisationUnitGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroupSetDimension.json"\n      }\n    },\n    "organisationUnitLevels" : {\n      "type" : "array",\n      "items" : {\n        "type" : "integer"\n      }\n    },\n    "organisationUnits" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnit.json"\n      }\n    },\n    "parentGraphMap" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "readOnly" : true,\n      "additionalProperties" : {\n        "type" : "string"\n      }\n    },\n    "periods" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "period.json"\n      }\n    },\n    "programIndicatorDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityProgramIndicatorDimension.json"\n      }\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "relativePeriods" : {\n      "$ref" : "relativePeriods.json"\n    },\n    "rows" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "startDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "subscribed" : {\n      "type" : "boolean"\n    },\n    "subscribers" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "subtitle" : {\n      "type" : "string"\n    },\n    "timeField" : {\n      "type" : "string"\n    },\n    "title" : {\n      "type" : "string"\n    },\n    "topLimit" : {\n      "type" : "integer"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userOrgUnitType" : {\n      "$ref" : "userOrgUnitType.json"\n    },\n    "userOrganisationUnit" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitChildren" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitGrandChildren" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);