"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[72155],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=r.createContext({}),y=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=y(n.components);return r.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),l=y(t),u=a,f=l["".concat(p,".").concat(u)]||l[u]||m[u]||o;return t?r.createElement(f,i(i({ref:e},c),{},{components:t})):r.createElement(f,i({ref:e},c))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=l;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:a,i[1]=s;for(var y=2;y<o;y++)i[y]=t[y];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},6904:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return y},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={},p=void 0,y={unversionedId:"v2.36.10/eventReport",id:"v2.36.10/eventReport",title:"eventReport",description:"",source:"@site/docs/v2.36.10/eventReport.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/eventReport",permalink:"/dhis2-json-schema-generator/v2.36.10/eventReport",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eventQueryCriteria",permalink:"/dhis2-json-schema-generator/v2.36.10/eventQueryCriteria"},next:{title:"eventStatus",permalink:"/dhis2-json-schema-generator/v2.36.10/eventStatus"}},c={},m=[],l={toc:m};function u(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "attributeDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityAttributeDimension.json"\n      }\n    },\n    "attributeValueDimension" : {\n      "$ref" : "trackedEntityAttribute.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "categoryDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryDimension.json"\n      }\n    },\n    "categoryOptionGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionGroupSetDimension.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "colSubTotals" : {\n      "type" : "boolean"\n    },\n    "colTotals" : {\n      "type" : "boolean"\n    },\n    "collapseDataDimensions" : {\n      "type" : "boolean"\n    },\n    "columnDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "columns" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "completedOnly" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataDimensionItems" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataDimensionItem.json"\n      }\n    },\n    "dataElementDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityDataElementDimension.json"\n      }\n    },\n    "dataElementGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementGroupSetDimension.json"\n      }\n    },\n    "dataElementValueDimension" : {\n      "$ref" : "dataElement.json"\n    },\n    "dataType" : {\n      "$ref" : "eventDataType.json"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "digitGroupSeparator" : {\n      "$ref" : "digitGroupSeparator.json"\n    },\n    "displayDensity" : {\n      "$ref" : "displayDensity.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "displaySubtitle" : {\n      "type" : "string"\n    },\n    "displayTitle" : {\n      "type" : "string"\n    },\n    "endDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "eventStatus" : {\n      "$ref" : "eventStatus.json"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filterDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filters" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "fontSize" : {\n      "$ref" : "fontSize.json"\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "hideEmptyRows" : {\n      "type" : "boolean"\n    },\n    "hideNaData" : {\n      "type" : "boolean"\n    },\n    "hideSubtitle" : {\n      "type" : "boolean"\n    },\n    "hideTitle" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "interpretations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "interpretation.json"\n      }\n    },\n    "itemOrganisationUnitGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroup.json"\n      }\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "orgUnitField" : {\n      "type" : "string"\n    },\n    "organisationUnitGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroupSetDimension.json"\n      }\n    },\n    "organisationUnitLevels" : {\n      "type" : "array",\n      "items" : {\n        "type" : "integer"\n      }\n    },\n    "organisationUnits" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnit.json"\n      }\n    },\n    "outputType" : {\n      "$ref" : "eventOutputType.json"\n    },\n    "parentGraphMap" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "readOnly" : true,\n      "additionalProperties" : {\n        "type" : "string"\n      }\n    },\n    "periods" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "period.json"\n      }\n    },\n    "program" : {\n      "$ref" : "program.json"\n    },\n    "programIndicatorDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityProgramIndicatorDimension.json"\n      }\n    },\n    "programStage" : {\n      "$ref" : "programStage.json"\n    },\n    "programStatus" : {\n      "$ref" : "programStatus.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "relativePeriods" : {\n      "$ref" : "relativePeriods.json"\n    },\n    "rowDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "rowSubTotals" : {\n      "type" : "boolean"\n    },\n    "rowTotals" : {\n      "type" : "boolean"\n    },\n    "rows" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "showDimensionLabels" : {\n      "type" : "boolean"\n    },\n    "showHierarchy" : {\n      "type" : "boolean"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "startDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "subscribed" : {\n      "type" : "boolean"\n    },\n    "subscribers" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "subtitle" : {\n      "type" : "string"\n    },\n    "timeField" : {\n      "type" : "string"\n    },\n    "title" : {\n      "type" : "string"\n    },\n    "topLimit" : {\n      "type" : "integer"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userOrgUnitType" : {\n      "$ref" : "userOrgUnitType.json"\n    },\n    "userOrganisationUnit" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitChildren" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitGrandChildren" : {\n      "type" : "boolean"\n    },\n    "value" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);