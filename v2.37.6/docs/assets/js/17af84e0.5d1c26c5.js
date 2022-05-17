"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89836],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=r.createContext({}),y=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=y(n.components);return r.createElement(p.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,p=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),m=y(t),u=a,g=m["".concat(p,".").concat(u)]||m[u]||l[u]||i;return t?r.createElement(g,s(s({ref:e},c),{},{components:t})):r.createElement(g,s({ref:e},c))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o.mdxType="string"==typeof n?n:a,s[1]=o;for(var y=2;y<i;y++)s[y]=t[y];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71269:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return y},toc:function(){return l}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],o={},p=void 0,y={unversionedId:"schemas/baseChart",id:"schemas/baseChart",title:"baseChart",description:"",source:"@site/docs/schemas/baseChart.md",sourceDirName:"schemas",slug:"/schemas/baseChart",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/baseChart",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"baseAnalyticalObject",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/baseAnalyticalObject"},next:{title:"baseDataDimensionalItemObject",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/baseDataDimensionalItemObject"}},c={},l=[],m={toc:l};function u(n){var e=n.components,t=(0,a.Z)(n,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "attributeDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityAttributeDimension.json"\n      }\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "baseLineLabel" : {\n      "type" : "string"\n    },\n    "baseLineValue" : {\n      "type" : "number"\n    },\n    "categoryDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryDimension.json"\n      }\n    },\n    "categoryOptionGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionGroupSetDimension.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "columns" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "completedOnly" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "cumulativeValues" : {\n      "type" : "boolean"\n    },\n    "dataDimensionItems" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataDimensionItem.json"\n      }\n    },\n    "dataElementDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityDataElementDimension.json"\n      }\n    },\n    "dataElementGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementGroupSetDimension.json"\n      }\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "digitGroupSeparator" : {\n      "$ref" : "digitGroupSeparator.json"\n    },\n    "displayBaseLineLabel" : {\n      "type" : "string"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayDomainAxisLabel" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayRangeAxisLabel" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "displaySubtitle" : {\n      "type" : "string"\n    },\n    "displayTargetLineLabel" : {\n      "type" : "string"\n    },\n    "displayTitle" : {\n      "type" : "string"\n    },\n    "domainAxisLabel" : {\n      "type" : "string"\n    },\n    "endDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filterDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filters" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "hideEmptyRowItems" : {\n      "$ref" : "hideEmptyItemStrategy.json"\n    },\n    "hideLegend" : {\n      "type" : "boolean"\n    },\n    "hideSubtitle" : {\n      "type" : "boolean"\n    },\n    "hideTitle" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "interpretations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "interpretation.json"\n      }\n    },\n    "itemOrganisationUnitGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroup.json"\n      }\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "legendDisplayStrategy" : {\n      "$ref" : "legendDisplayStrategy.json"\n    },\n    "legendSet" : {\n      "$ref" : "legendSet.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "noSpaceBetweenColumns" : {\n      "type" : "boolean"\n    },\n    "orgUnitField" : {\n      "type" : "string"\n    },\n    "organisationUnitGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroupSetDimension.json"\n      }\n    },\n    "organisationUnitLevels" : {\n      "type" : "array",\n      "items" : {\n        "type" : "integer"\n      }\n    },\n    "organisationUnits" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnit.json"\n      }\n    },\n    "parentGraphMap" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "readOnly" : true,\n      "additionalProperties" : {\n        "type" : "string"\n      }\n    },\n    "percentStackedValues" : {\n      "type" : "boolean"\n    },\n    "periods" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "period.json"\n      }\n    },\n    "programIndicatorDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityProgramIndicatorDimension.json"\n      }\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "rangeAxisDecimals" : {\n      "type" : "integer"\n    },\n    "rangeAxisLabel" : {\n      "type" : "string"\n    },\n    "rangeAxisMaxValue" : {\n      "type" : "number"\n    },\n    "rangeAxisMinValue" : {\n      "type" : "number"\n    },\n    "rangeAxisSteps" : {\n      "type" : "integer"\n    },\n    "regressionType" : {\n      "$ref" : "regressionType.json"\n    },\n    "relativePeriods" : {\n      "$ref" : "relativePeriods.json"\n    },\n    "rows" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "showData" : {\n      "type" : "boolean"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "startDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "subscribed" : {\n      "type" : "boolean"\n    },\n    "subscribers" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "subtitle" : {\n      "type" : "string"\n    },\n    "targetLineLabel" : {\n      "type" : "string"\n    },\n    "targetLineValue" : {\n      "type" : "number"\n    },\n    "timeField" : {\n      "type" : "string"\n    },\n    "title" : {\n      "type" : "string"\n    },\n    "topLimit" : {\n      "type" : "integer"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "type" : {\n      "$ref" : "visualizationType.json"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userOrgUnitType" : {\n      "$ref" : "userOrgUnitType.json"\n    },\n    "userOrganisationUnit" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitChildren" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitGrandChildren" : {\n      "type" : "boolean"\n    },\n    "yearlySeries" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);