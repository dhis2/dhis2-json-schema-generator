"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[76753],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return g}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),y=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=y(n.components);return r.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,p=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),l=y(t),g=i,u=l["".concat(p,".").concat(g)]||l[g]||c[g]||a;return t?r.createElement(u,o(o({ref:e},m),{},{components:t})):r.createElement(u,o({ref:e},m))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=l;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var y=2;y<a;y++)o[y]=t[y];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},61517:function(n,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return y},toc:function(){return c}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={},p=void 0,y={unversionedId:"v2.37.7/mapView",id:"v2.37.7/mapView",title:"mapView",description:"",source:"@site/docs/v2.37.7/mapView.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/mapView",permalink:"/dhis2-json-schema-generator/v2.37.7/mapView",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mapService",permalink:"/dhis2-json-schema-generator/v2.37.7/mapService"},next:{title:"mapViewRenderingStrategy",permalink:"/dhis2-json-schema-generator/v2.37.7/mapViewRenderingStrategy"}},m={},c=[],l={toc:c};function g(n){var e=n.components,t=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "aggregationType" : {\n      "$ref" : "aggregationType.json"\n    },\n    "areaRadius" : {\n      "type" : "integer"\n    },\n    "attributeDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityAttributeDimension.json"\n      }\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "categoryDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryDimension.json"\n      }\n    },\n    "categoryOptionGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionGroupSetDimension.json"\n      }\n    },\n    "classes" : {\n      "type" : "integer"\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "colorHigh" : {\n      "type" : "string"\n    },\n    "colorLow" : {\n      "type" : "string"\n    },\n    "colorScale" : {\n      "type" : "string"\n    },\n    "columnDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "columns" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "completedOnly" : {\n      "type" : "boolean"\n    },\n    "config" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataDimensionItems" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataDimensionItem.json"\n      }\n    },\n    "dataElementDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityDataElementDimension.json"\n      }\n    },\n    "dataElementGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementGroupSetDimension.json"\n      }\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "digitGroupSeparator" : {\n      "$ref" : "digitGroupSeparator.json"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "displaySubtitle" : {\n      "type" : "string"\n    },\n    "displayTitle" : {\n      "type" : "string"\n    },\n    "endDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "eventClustering" : {\n      "type" : "boolean"\n    },\n    "eventCoordinateField" : {\n      "type" : "string"\n    },\n    "eventPointColor" : {\n      "type" : "string"\n    },\n    "eventPointRadius" : {\n      "type" : "integer"\n    },\n    "eventStatus" : {\n      "$ref" : "eventStatus_.json"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filterDimensions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "filters" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "followUp" : {\n      "type" : "boolean"\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "hidden" : {\n      "type" : "boolean"\n    },\n    "hideSubtitle" : {\n      "type" : "boolean"\n    },\n    "hideTitle" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "interpretations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "interpretation.json"\n      }\n    },\n    "itemOrganisationUnitGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroup.json"\n      }\n    },\n    "labelFontColor" : {\n      "type" : "string"\n    },\n    "labelFontSize" : {\n      "type" : "string"\n    },\n    "labelFontStyle" : {\n      "type" : "string"\n    },\n    "labelFontWeight" : {\n      "type" : "string"\n    },\n    "labels" : {\n      "type" : "boolean"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "layer" : {\n      "type" : "string"\n    },\n    "legendSet" : {\n      "$ref" : "legendSet.json"\n    },\n    "method" : {\n      "type" : "integer"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "noDataColor" : {\n      "type" : "string"\n    },\n    "opacity" : {\n      "type" : "number"\n    },\n    "orgUnitField" : {\n      "type" : "string"\n    },\n    "organisationUnitColor" : {\n      "type" : "string"\n    },\n    "organisationUnitGroupSet" : {\n      "$ref" : "organisationUnitGroupSet.json"\n    },\n    "organisationUnitGroupSetDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroupSetDimension.json"\n      }\n    },\n    "organisationUnitLevels" : {\n      "type" : "array",\n      "items" : {\n        "type" : "integer"\n      }\n    },\n    "organisationUnitSelectionMode" : {\n      "$ref" : "organisationUnitSelectionMode.json"\n    },\n    "organisationUnits" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnit.json"\n      }\n    },\n    "parentGraph" : {\n      "type" : "string"\n    },\n    "parentGraphMap" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "readOnly" : true,\n      "additionalProperties" : {\n        "type" : "string"\n      }\n    },\n    "parentLevel" : {\n      "type" : "integer"\n    },\n    "periods" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "period.json"\n      }\n    },\n    "program" : {\n      "$ref" : "program.json"\n    },\n    "programIndicatorDimensions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityProgramIndicatorDimension.json"\n      }\n    },\n    "programStage" : {\n      "$ref" : "programStage.json"\n    },\n    "programStatus" : {\n      "$ref" : "programStatus.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "radiusHigh" : {\n      "type" : "integer"\n    },\n    "radiusLow" : {\n      "type" : "integer"\n    },\n    "relativePeriods" : {\n      "$ref" : "relativePeriods.json"\n    },\n    "renderingStrategy" : {\n      "$ref" : "mapViewRenderingStrategy.json"\n    },\n    "rows" : {\n      "type" : "array",\n      "items" : {\n        "$comment" : "Undefined"\n      }\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "startDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "styleDataItem" : {\n      "$comment" : "Undefined"\n    },\n    "subscribed" : {\n      "type" : "boolean"\n    },\n    "subscribers" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "subtitle" : {\n      "type" : "string"\n    },\n    "thematicMapType" : {\n      "$ref" : "thematicMapType.json"\n    },\n    "timeField" : {\n      "type" : "string"\n    },\n    "title" : {\n      "type" : "string"\n    },\n    "topLimit" : {\n      "type" : "integer"\n    },\n    "trackedEntityType" : {\n      "$ref" : "trackedEntityType.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userOrgUnitType" : {\n      "$ref" : "userOrgUnitType.json"\n    },\n    "userOrganisationUnit" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitChildren" : {\n      "type" : "boolean"\n    },\n    "userOrganisationUnitGrandChildren" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);