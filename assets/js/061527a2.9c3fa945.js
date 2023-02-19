"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[80043],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=u(t),f=o,d=y["".concat(c,".").concat(f)]||y[f]||p[f]||a;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},83609:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={},c=void 0,u={unversionedId:"v2.39.1/entityQueryCriteria",id:"v2.39.1/entityQueryCriteria",title:"entityQueryCriteria",description:"",source:"@site/docs/v2.39.1/entityQueryCriteria.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/entityQueryCriteria",permalink:"/dhis2-json-schema-generator/v2.39.1/entityQueryCriteria",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"enrollments",permalink:"/dhis2-json-schema-generator/v2.39.1/enrollments"},next:{title:"errorCode",permalink:"/dhis2-json-schema-generator/v2.39.1/errorCode"}},l={},p=[],y={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "assignedUserMode" : {\n      "$ref" : "assignedUserSelectionMode.json"\n    },\n    "assignedUsers" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "attributeValueFilters" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValueFilter.json"\n      }\n    },\n    "displayColumnOrder" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "enrollmentCreatedDate" : {\n      "$ref" : "dateFilterPeriod.json"\n    },\n    "enrollmentIncidentDate" : {\n      "$ref" : "dateFilterPeriod.json"\n    },\n    "enrollmentStatus" : {\n      "$ref" : "programStatus.json"\n    },\n    "eventDate" : {\n      "$ref" : "dateFilterPeriod.json"\n    },\n    "eventStatus" : {\n      "$ref" : "eventStatus.json"\n    },\n    "followUp" : {\n      "type" : "boolean"\n    },\n    "lastUpdatedDate" : {\n      "$ref" : "dateFilterPeriod.json"\n    },\n    "order" : {\n      "type" : "string"\n    },\n    "organisationUnit" : {\n      "type" : "string"\n    },\n    "ouMode" : {\n      "$ref" : "organisationUnitSelectionMode.json"\n    },\n    "programStage" : {\n      "type" : "string"\n    },\n    "trackedEntityInstances" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "trackedEntityType" : {\n      "type" : "string"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);