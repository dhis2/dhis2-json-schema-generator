"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[22242],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return y}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),f=u(t),y=o,m=f["".concat(c,".").concat(y)]||f[y]||l[y]||a;return t?r.createElement(m,s(s({ref:e},p),{},{components:t})):r.createElement(m,s({ref:e},p))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},81115:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},c=void 0,u={unversionedId:"v2.35.13/jobConfiguration",id:"v2.35.13/jobConfiguration",title:"jobConfiguration",description:"",source:"@site/docs/v2.35.13/jobConfiguration.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/jobConfiguration",permalink:"/dhis2-json-schema-generator/v2.35.13/jobConfiguration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"itemValueType",permalink:"/dhis2-json-schema-generator/v2.35.13/itemValueType"},next:{title:"jobStatus",permalink:"/dhis2-json-schema-generator/v2.35.13/jobStatus"}},p={},l=[],f={toc:l};function y(n){var e=n.components,t=(0,o.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "configurable" : {\n      "type" : "boolean",\n      "readOnly" : true\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "cronExpression" : {\n      "type" : "string"\n    },\n    "delay" : {\n      "type" : "integer"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "enabled" : {\n      "type" : "boolean"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "jobParameters" : {\n      "anyOf" : [ {\n        "$ref" : "analyticsJobParameters.json"\n      }, {\n        "$ref" : "continuousAnalyticsJobParameters.json"\n      }, {\n        "$ref" : "monitoringJobParameters.json"\n      }, {\n        "$ref" : "predictorJobParameters.json"\n      }, {\n        "$ref" : "pushAnalysisJobParameters.json"\n      }, {\n        "$ref" : "smsJobParameters.json"\n      }, {\n        "$ref" : "metadataSyncJobParameters.json"\n      }, {\n        "$ref" : "eventProgramsDataSynchronizationJobParameters.json"\n      }, {\n        "$ref" : "trackerProgramsDataSynchronizationJobParameters.json"\n      }, {\n        "$ref" : "dataSynchronizationJobParameters.json"\n      } ]\n    },\n    "jobStatus" : {\n      "$ref" : "jobStatus.json"\n    },\n    "jobType" : {\n      "$ref" : "jobType.json"\n    },\n    "lastExecuted" : {\n      "type" : "string",\n      "readOnly" : true,\n      "format" : "date-time"\n    },\n    "lastExecutedStatus" : {\n      "$ref" : "jobStatus.json"\n    },\n    "lastRuntimeExecution" : {\n      "type" : "string",\n      "readOnly" : true\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "leaderOnlyJob" : {\n      "type" : "boolean"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "nextExecutionTime" : {\n      "type" : "string",\n      "readOnly" : true,\n      "format" : "date-time"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "schedulingType" : {\n      "$ref" : "schedulingType.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userUid" : {\n      "type" : "string",\n      "readOnly" : true\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);