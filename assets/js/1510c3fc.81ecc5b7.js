"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[91011],{3905:function(n,e,r){r.d(e,{Zo:function(){return m},kt:function(){return u}});var t=r(67294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var p=t.createContext({}),y=function(n){var e=t.useContext(p),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},m=function(n){var e=y(n.components);return t.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,m=i(n,["components","mdxType","originalType","parentName"]),f=y(r),u=a,l=f["".concat(p,".").concat(u)]||f[u]||c[u]||o;return r?t.createElement(l,s(s({ref:e},m),{},{components:r})):t.createElement(l,s({ref:e},m))}));function u(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:a,s[1]=i;for(var y=2;y<o;y++)s[y]=r[y];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1313:function(n,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return y},toc:function(){return c}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={},p=void 0,y={unversionedId:"v2.37.7/metadata",id:"v2.37.7/metadata",title:"metadata",description:"",source:"@site/docs/v2.37.7/metadata.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/metadata",permalink:"/dhis2-json-schema-generator/v2.37.7/metadata",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"messageType_",permalink:"/dhis2-json-schema-generator/v2.37.7/messageType_"},next:{title:"metadataImportParams",permalink:"/dhis2-json-schema-generator/v2.37.7/metadataImportParams"}},m={},c=[],f={toc:c};function u(n){var e=n.components,r=(0,a.Z)(n,s);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "analyticsTableHooks" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "analyticsTableHook.json"\n      }\n    },\n    "attributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attribute.json"\n      }\n    },\n    "categories" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "category.json"\n      }\n    },\n    "categoryCombos" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryCombo.json"\n      }\n    },\n    "categoryOptionCombos" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionCombo.json"\n      }\n    },\n    "categoryOptionGroupSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionGroupSet.json"\n      }\n    },\n    "categoryOptionGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionGroup.json"\n      }\n    },\n    "categoryOptions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOption.json"\n      }\n    },\n    "constants" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "constant.json"\n      }\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "dashboardItems" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dashboardItem.json"\n      }\n    },\n    "dashboards" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dashboard.json"\n      }\n    },\n    "dataApprovalLevels" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataApprovalLevel.json"\n      }\n    },\n    "dataApprovalWorkflows" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataApprovalWorkflow.json"\n      }\n    },\n    "dataElementGroupSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementGroupSet.json"\n      }\n    },\n    "dataElementGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementGroup.json"\n      }\n    },\n    "dataElementOperands" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElementOperand.json"\n      }\n    },\n    "dataElements" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataElement.json"\n      }\n    },\n    "dataEntryForms" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataEntryForm.json"\n      }\n    },\n    "dataSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataSet.json"\n      }\n    },\n    "dimensions" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "documents" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "document.json"\n      }\n    },\n    "eventCharts" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "eventChart.json"\n      }\n    },\n    "eventReports" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "eventReport.json"\n      }\n    },\n    "events" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "event.json"\n      }\n    },\n    "externalMapLayers" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "externalMapLayer.json"\n      }\n    },\n    "indicatorGroupSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "indicatorGroupSet.json"\n      }\n    },\n    "indicatorGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "indicatorGroup.json"\n      }\n    },\n    "indicatorTypes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "indicatorType.json"\n      }\n    },\n    "indicators" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "indicator.json"\n      }\n    },\n    "interpretations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "interpretation.json"\n      }\n    },\n    "items" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "jobConfigurations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "jobConfiguration.json"\n      }\n    },\n    "legendSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "legendSet.json"\n      }\n    },\n    "mapViews" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "mapView.json"\n      }\n    },\n    "maps" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "map.json"\n      }\n    },\n    "metadataVersions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "metadataVersion.json"\n      }\n    },\n    "optionGroupSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "optionGroupSet.json"\n      }\n    },\n    "optionGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "optionGroup.json"\n      }\n    },\n    "optionSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "optionSet.json"\n      }\n    },\n    "options" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "option.json"\n      }\n    },\n    "organisationUnitGroupSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroupSet.json"\n      }\n    },\n    "organisationUnitGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitGroup.json"\n      }\n    },\n    "organisationUnitLevels" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnitLevel.json"\n      }\n    },\n    "organisationUnits" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnit.json"\n      }\n    },\n    "predictorGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "predictorGroup.json"\n      }\n    },\n    "predictors" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "predictor.json"\n      }\n    },\n    "programIndicators" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programIndicator.json"\n      }\n    },\n    "programNotificationTemplates" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programNotificationTemplate.json"\n      }\n    },\n    "programRuleActions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programRuleAction.json"\n      }\n    },\n    "programRuleVariables" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programRuleVariable.json"\n      }\n    },\n    "programRules" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programRule.json"\n      }\n    },\n    "programStageSections" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programStageSection.json"\n      }\n    },\n    "programStages" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programStage.json"\n      }\n    },\n    "programs" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "program.json"\n      }\n    },\n    "relationshipTypes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationshipType.json"\n      }\n    },\n    "reports" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "report.json"\n      }\n    },\n    "schemas" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "schema.json"\n      }\n    },\n    "sections" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "section.json"\n      }\n    },\n    "sqlViews" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "sqlView.json"\n      }\n    },\n    "trackedEntityAttributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityAttribute.json"\n      }\n    },\n    "trackedEntityTypes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "trackedEntityType.json"\n      }\n    },\n    "userGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroup.json"\n      }\n    },\n    "userRoles" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAuthorityGroup.json"\n      }\n    },\n    "users" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "user.json"\n      }\n    },\n    "validationNotificationTemplates" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "validationNotificationTemplate.json"\n      }\n    },\n    "validationRuleGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "validationRuleGroup.json"\n      }\n    },\n    "validationRules" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "validationRule.json"\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);