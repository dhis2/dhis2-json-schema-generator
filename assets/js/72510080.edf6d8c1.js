"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[53855],{3905:function(e,t,n){n.d(t,{Zo:function(){return A},kt:function(){return O}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},T=Object.keys(e);for(r=0;r<T.length;r++)n=T[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(e);for(r=0;r<T.length;r++)n=T[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},A=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,T=e.originalType,c=e.parentName,A=E(e,["components","mdxType","originalType","parentName"]),_=i(n),O=o,p=_["".concat(c,".").concat(O)]||_[O]||u[O]||T;return n?r.createElement(p,a(a({ref:t},A),{},{components:n})):r.createElement(p,a({ref:t},A))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var T=n.length,a=new Array(T);a[0]=_;var E={};for(var c in t)hasOwnProperty.call(t,c)&&(E[c]=t[c]);E.originalType=e,E.mdxType="string"==typeof e?e:o,a[1]=E;for(var i=2;i<T;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},68734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return A},contentTitle:function(){return c},default:function(){return O},frontMatter:function(){return E},metadata:function(){return i},toc:function(){return u}});var r=n(87462),o=n(63366),T=(n(67294),n(3905)),a=["components"],E={},c=void 0,i={unversionedId:"v40.0/jobType",id:"v40.0/jobType",title:"jobType",description:"",source:"@site/docs/v40.0/jobType.md",sourceDirName:"v40.0",slug:"/v40.0/jobType",permalink:"/dhis2-json-schema-generator/v40.0/jobType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jobStatus",permalink:"/dhis2-json-schema-generator/v40.0/jobStatus"},next:{title:"jobTypeInfo",permalink:"/dhis2-json-schema-generator/v40.0/jobTypeInfo"}},A={},u=[],_={toc:u};function O(e){var t=e.components,n=(0,o.Z)(e,a);return(0,T.kt)("wrapper",(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,T.kt)("pre",null,(0,T.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "DATA_STATISTICS", "DATA_INTEGRITY", "RESOURCE_TABLE", "ANALYTICS_TABLE", "CONTINUOUS_ANALYTICS_TABLE", "DATA_SYNC", "TRACKER_PROGRAMS_DATA_SYNC", "EVENT_PROGRAMS_DATA_SYNC", "FILE_RESOURCE_CLEANUP", "IMAGE_PROCESSING", "META_DATA_SYNC", "AGGREGATE_DATA_EXCHANGE", "SMS_SEND", "SEND_SCHEDULED_MESSAGE", "PROGRAM_NOTIFICATIONS", "VALIDATION_RESULTS_NOTIFICATION", "CREDENTIALS_EXPIRY_ALERT", "MONITORING", "PUSH_ANALYSIS", "TRACKER_SEARCH_OPTIMIZATION", "PREDICTOR", "DATA_SET_NOTIFICATION", "REMOVE_USED_OR_EXPIRED_RESERVED_VALUES", "TRACKER_IMPORT_JOB", "TRACKER_IMPORT_NOTIFICATION_JOB", "TRACKER_IMPORT_RULE_ENGINE_JOB", "MATERIALIZED_SQL_VIEW_UPDATE", "LEADER_ELECTION", "LEADER_RENEWAL", "COMPLETE_DATA_SET_REGISTRATION_IMPORT", "DATAVALUE_IMPORT_INTERNAL", "METADATA_IMPORT", "DATAVALUE_IMPORT", "GEOJSON_IMPORT", "EVENT_IMPORT", "ENROLLMENT_IMPORT", "TEI_IMPORT", "DISABLE_INACTIVE_USERS", "ACCOUNT_EXPIRY_ALERT", "SYSTEM_VERSION_UPDATE_CHECK", "TEST", "MOCK", "GML_IMPORT", "ANALYTICSTABLE_UPDATE", "PROGRAM_DATA_SYNC" ]\n}\n')))}O.isMDXComponent=!0}}]);