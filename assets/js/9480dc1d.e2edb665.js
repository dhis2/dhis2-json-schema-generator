"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[43918],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return m}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=r.createContext({}),c=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},y=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,y=i(n,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||l[m]||o;return t?r.createElement(f,s(s({ref:e},y),{},{components:t})):r.createElement(f,s({ref:e},y))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20750:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={},p=void 0,c={unversionedId:"v2.36.11/program",id:"v2.36.11/program",title:"program",description:"",source:"@site/docs/v2.36.11/program.md",sourceDirName:"v2.36.11",slug:"/v2.36.11/program",permalink:"/dhis2-json-schema-generator/v2.36.11/program",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"preset",permalink:"/dhis2-json-schema-generator/v2.36.11/preset"},next:{title:"programDataElementDimensionItem",permalink:"/dhis2-json-schema-generator/v2.36.11/programDataElementDimensionItem"}},y={},l=[],u={toc:l};function m(n){var e=n.components,t=(0,a.Z)(n,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "accessLevel" : {\n      "$ref" : "accessLevel.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "categoryCombo" : {\n      "$ref" : "categoryCombo.json"\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "completeEventsExpiryDays" : {\n      "type" : "integer"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataEntryForm" : {\n      "$ref" : "dataEntryForm.json"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayEnrollmentDateLabel" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayFrontPageList" : {\n      "type" : "boolean"\n    },\n    "displayIncidentDate" : {\n      "type" : "boolean"\n    },\n    "displayIncidentDateLabel" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "enrollmentDateLabel" : {\n      "type" : "string"\n    },\n    "expiryDays" : {\n      "type" : "integer"\n    },\n    "expiryPeriodType" : {\n      "$ref" : "periodType.json"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "featureType" : {\n      "$ref" : "featureType.json"\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "ignoreOverdueEvents" : {\n      "type" : "boolean"\n    },\n    "incidentDateLabel" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "maxTeiCountToReturn" : {\n      "type" : "integer"\n    },\n    "minAttributesRequiredToSearch" : {\n      "type" : "integer"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "notificationTemplates" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programNotificationTemplate.json"\n      }\n    },\n    "onlyEnrollOnce" : {\n      "type" : "boolean"\n    },\n    "organisationUnits" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "organisationUnit.json"\n      }\n    },\n    "programIndicators" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programIndicator.json"\n      }\n    },\n    "programRuleVariables" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programRuleVariable.json"\n      }\n    },\n    "programSections" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programSection.json"\n      }\n    },\n    "programStages" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programStage.json"\n      }\n    },\n    "programTrackedEntityAttributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programTrackedEntityAttribute.json"\n      }\n    },\n    "programType" : {\n      "$ref" : "programType.json"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "registration" : {\n      "type" : "boolean"\n    },\n    "relatedProgram" : {\n      "$ref" : "#"\n    },\n    "selectEnrollmentDatesInFuture" : {\n      "type" : "boolean"\n    },\n    "selectIncidentDatesInFuture" : {\n      "type" : "boolean"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "skipOffline" : {\n      "type" : "boolean"\n    },\n    "style" : {\n      "$ref" : "objectStyle.json"\n    },\n    "trackedEntityType" : {\n      "$ref" : "trackedEntityType.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "useFirstStageDuringRegistration" : {\n      "type" : "boolean"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userRoles" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAuthorityGroup.json"\n      }\n    },\n    "version" : {\n      "type" : "integer"\n    },\n    "withoutRegistration" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);