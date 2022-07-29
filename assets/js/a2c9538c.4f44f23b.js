"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[23769],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return c}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),y=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},l=function(n){var e=y(n.components);return r.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,p=n.parentName,l=o(n,["components","mdxType","originalType","parentName"]),m=y(t),c=i,d=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return t?r.createElement(d,s(s({ref:e},l),{},{components:t})):r.createElement(d,s({ref:e},l))}));function c(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o.mdxType="string"==typeof n?n:i,s[1]=o;for(var y=2;y<a;y++)s[y]=t[y];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15525:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return y},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],o={},p=void 0,y={unversionedId:"v2.38.1/visualization",id:"v2.38.1/visualization",title:"visualization",description:"",source:"@site/docs/v2.38.1/visualization.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/visualization",permalink:"/dhis2-json-schema-generator/v2.38.1/visualization",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"versionType",permalink:"/dhis2-json-schema-generator/v2.38.1/versionType"},next:{title:"visualizationFontStyle",permalink:"/dhis2-json-schema-generator/v2.38.1/visualizationFontStyle"}},l={},u=[],m={toc:u};function c(n){var e=n.components,t=(0,i.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "attributeDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityAttributeDimension.json"\n      }\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "axes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "axisV2.json"\n      }\n    },\n    "baseLineLabel" : {\n      "type" : "string",\n      "readOnly" : true\n    },\n    "baseLineValue" : {\n      "type" : "number",\n      "readOnly" : true\n    },\n    "categoryDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryDimension.json"\n      }\n    },\n    "categoryOptionGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionGroupSetDimension.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "colSubTotals" : {\n      "type" : "boolean"\n    },\n    "colTotals" : {\n      "type" : "boolean"\n    },\n    "colorSet" : {\n      "type" : "string"\n    },\n    "columnDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "columns" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "completedOnly" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "cumulativeValues" : {\n      "type" : "boolean"\n    },\n    "dataDimensionItems" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataDimensionItem.json"\n      }\n    },\n    "dataElementDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityDataElementDimension.json"\n      }\n    },\n    "dataElementGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementGroupSetDimension.json"\n      }\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "digitGroupSeparator" : {\n      "$ref" : "digitGroupSeparator.json"\n    },\n    "displayBaseLineLabel" : {\n      "type" : "string"\n    },\n    "displayDensity" : {\n      "$ref" : "displayDensity.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayDomainAxisLabel" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayRangeAxisLabel" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "displaySubtitle" : {\n      "type" : "string"\n    },\n    "displayTargetLineLabel" : {\n      "type" : "string"\n    },\n    "displayTitle" : {\n      "type" : "string"\n    },\n    "domainAxisLabel" : {\n      "type" : "string",\n      "readOnly" : true\n    },\n    "endDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filterDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filters" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "fixColumnHeaders" : {\n      "type" : "boolean"\n    },\n    "fixRowHeaders" : {\n      "type" : "boolean"\n    },\n    "fontSize" : {\n      "$ref" : "fontSize.json"\n    },\n    "fontStyle" : {\n      "$ref" : "visualizationFontStyle.json"\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "hideEmptyColumns" : {\n      "type" : "boolean"\n    },\n    "hideEmptyRowItems" : {\n      "$ref" : "hideEmptyItemStrategy.json"\n    },\n    "hideEmptyRows" : {\n      "type" : "boolean"\n    },\n    "hideLegend" : {\n      "type" : "boolean"\n    },\n    "hideSubtitle" : {\n      "type" : "boolean"\n    },\n    "hideTitle" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "interpretations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "interpretation.json"\n      }\n    },\n    "itemOrganisationUnitGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroup.json"\n      }\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "legend" : {\n      "$ref" : "legendDefinitions.json"\n    },\n    "measureCriteria" : {\n      "type" : "string"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "noSpaceBetweenColumns" : {\n      "type" : "boolean"\n    },\n    "numberType" : {\n      "$ref" : "numberType.json"\n    },\n    "optionalAxes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "axis.json"\n      }\n    },\n    "orgUnitField" : {\n      "type" : "string"\n    },\n    "organisationUnitGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroupSetDimension.json"\n      }\n    },\n    "organisationUnitLevels" : {\n      "type" : "array",\n      "items" : {\n        "type" : "integer"\n      }\n    },\n    "organisationUnits" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnit.json"\n      }\n    },\n    "outlierAnalysis" : {\n      "$ref" : "outlierAnalysis.json"\n    },\n    "parentGraphMap" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "readOnly" : true,\n      "additionalProperties" : {\n        "type" : "string"\n      }\n    },\n    "percentStackedValues" : {\n      "type" : "boolean"\n    },\n    "periods" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "period.json"\n      }\n    },\n    "programIndicatorDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityProgramIndicatorDimension.json"\n      }\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "rangeAxisDecimals" : {\n      "type" : "integer",\n      "readOnly" : true\n    },\n    "rangeAxisLabel" : {\n      "type" : "string",\n      "readOnly" : true\n    },\n    "rangeAxisMaxValue" : {\n      "type" : "number",\n      "readOnly" : true\n    },\n    "rangeAxisMinValue" : {\n      "type" : "number",\n      "readOnly" : true\n    },\n    "rangeAxisSteps" : {\n      "type" : "integer",\n      "readOnly" : true\n    },\n    "regression" : {\n      "type" : "boolean"\n    },\n    "regressionType" : {\n      "$ref" : "regressionType.json"\n    },\n    "relativePeriods" : {\n      "$ref" : "relativePeriods.json"\n    },\n    "reportingParams" : {\n      "$ref" : "reportingParams.json"\n    },\n    "rowDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "rowSubTotals" : {\n      "type" : "boolean"\n    },\n    "rowTotals" : {\n      "type" : "boolean"\n    },\n    "rows" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "series" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "series.json"\n      }\n    },\n    "seriesKey" : {\n      "$ref" : "seriesKey.json"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "showData" : {\n      "type" : "boolean"\n    },\n    "showDimensionLabels" : {\n      "type" : "boolean"\n    },\n    "showHierarchy" : {\n      "type" : "boolean"\n    },\n    "skipRounding" : {\n      "type" : "boolean"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "startDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "subscribed" : {\n      "type" : "boolean"\n    },\n    "subscribers" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "subtitle" : {\n      "type" : "string"\n    },\n    "targetLineLabel" : {\n      "type" : "string",\n      "readOnly" : true\n    },\n    "targetLineValue" : {\n      "type" : "number",\n      "readOnly" : true\n    },\n    "timeField" : {\n      "type" : "string"\n    },\n    "title" : {\n      "type" : "string"\n    },\n    "topLimit" : {\n      "type" : "integer"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "type" : {\n      "$ref" : "visualizationType.json"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userOrgUnitType" : {\n      "$ref" : "userOrgUnitType.json"\n    },\n    "userOrganisationUnit" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitChildren" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitGrandChildren" : {\n      "type" : "boolean"\n    },\n    "visualizationPeriodName" : {\n      "type" : "string"\n    },\n    "yearlySeries" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);