"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26814],{3905:function(n,e,t){t.d(e,{Zo:function(){return y},kt:function(){return u}});var r=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},y=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,a=n.originalType,c=n.parentName,y=o(n,["components","mdxType","originalType","parentName"]),m=p(t),u=s,f=m["".concat(c,".").concat(u)]||m[u]||l[u]||a;return t?r.createElement(f,i(i({ref:e},y),{},{components:t})):r.createElement(f,i({ref:e},y))}));function u(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var a=t.length,i=new Array(a);i[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:s,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70663:function(n,e,t){t.r(e),t.d(e,{assets:function(){return y},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var r=t(87462),s=t(63366),a=(t(67294),t(3905)),i=["components"],o={},c=void 0,p={unversionedId:"schemas/systemInfo",id:"schemas/systemInfo",title:"systemInfo",description:"",source:"@site/docs/schemas/systemInfo.md",sourceDirName:"schemas",slug:"/schemas/systemInfo",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/systemInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"synchronizationStatus",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/synchronizationStatus"},next:{title:"systemJob",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/systemJob"}},y={},l=[],m={toc:l};function u(n){var e=n.components,t=(0,s.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "buildTime" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "calendar" : {\n      "type" : "string"\n    },\n    "clusterHostname" : {\n      "type" : "string"\n    },\n    "contextPath" : {\n      "type" : "string"\n    },\n    "cpuCores" : {\n      "type" : "integer"\n    },\n    "databaseInfo" : {\n      "$ref" : "databaseInfo.json"\n    },\n    "dateFormat" : {\n      "type" : "string"\n    },\n    "emailConfigured" : {\n      "type" : "boolean"\n    },\n    "encryption" : {\n      "type" : "boolean"\n    },\n    "environmentVariable" : {\n      "type" : "string"\n    },\n    "externalDirectory" : {\n      "type" : "string"\n    },\n    "fileStoreProvider" : {\n      "type" : "string"\n    },\n    "instanceBaseUrl" : {\n      "type" : "string"\n    },\n    "intervalSinceLastAnalyticsTablePartitionSuccess" : {\n      "type" : "string"\n    },\n    "intervalSinceLastAnalyticsTableSuccess" : {\n      "type" : "string"\n    },\n    "isMetadataVersionEnabled" : {\n      "type" : "boolean"\n    },\n    "jasperReportsVersion" : {\n      "type" : "string"\n    },\n    "javaOpts" : {\n      "type" : "string"\n    },\n    "javaVendor" : {\n      "type" : "string"\n    },\n    "javaVersion" : {\n      "type" : "string"\n    },\n    "lastAnalyticsTablePartitionRuntime" : {\n      "type" : "string"\n    },\n    "lastAnalyticsTablePartitionSuccess" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastAnalyticsTableRuntime" : {\n      "type" : "string"\n    },\n    "lastAnalyticsTableSuccess" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastMetadataVersionSyncAttempt" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastSystemMonitoringSuccess" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "memoryInfo" : {\n      "type" : "string"\n    },\n    "metadataSyncEnabled" : {\n      "type" : "boolean"\n    },\n    "nodeId" : {\n      "type" : "string"\n    },\n    "osArchitecture" : {\n      "type" : "string"\n    },\n    "osName" : {\n      "type" : "string"\n    },\n    "osVersion" : {\n      "type" : "string"\n    },\n    "readOnlyMode" : {\n      "type" : "string"\n    },\n    "readReplicaCount" : {\n      "type" : "integer"\n    },\n    "redisEnabled" : {\n      "type" : "boolean"\n    },\n    "redisHostname" : {\n      "type" : "string"\n    },\n    "revision" : {\n      "type" : "string"\n    },\n    "serverDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "serverTimeZoneDisplayName" : {\n      "type" : "string"\n    },\n    "serverTimeZoneId" : {\n      "type" : "string"\n    },\n    "systemId" : {\n      "type" : "string"\n    },\n    "systemMetadataVersion" : {\n      "type" : "string"\n    },\n    "systemMonitoringUrl" : {\n      "type" : "string"\n    },\n    "systemName" : {\n      "type" : "string"\n    },\n    "userAgent" : {\n      "type" : "string"\n    },\n    "version" : {\n      "type" : "string"\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);