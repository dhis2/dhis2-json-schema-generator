"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[72933],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(t),y=o,f=m["".concat(s,".").concat(y)]||m[y]||u[y]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59434:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={},s=void 0,c={unversionedId:"v2.38.1/importOptions",id:"v2.38.1/importOptions",title:"importOptions",description:"",source:"@site/docs/v2.38.1/importOptions.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/importOptions",permalink:"/dhis2-json-schema-generator/v2.38.1/importOptions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"importCountWebMessageResponse",permalink:"/dhis2-json-schema-generator/v2.38.1/importCountWebMessageResponse"},next:{title:"importReport",permalink:"/dhis2-json-schema-generator/v2.38.1/importReport"}},l={},u=[],m={toc:u};function y(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "async" : {\n      "type" : "boolean"\n    },\n    "datasetAllowsPeriods" : {\n      "type" : "boolean"\n    },\n    "dryRun" : {\n      "type" : "boolean"\n    },\n    "filename" : {\n      "type" : "string"\n    },\n    "firstRowIsHeader" : {\n      "type" : "boolean"\n    },\n    "force" : {\n      "type" : "boolean"\n    },\n    "idSchemes" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "ignoreEmptyCollection" : {\n      "type" : "boolean"\n    },\n    "importStrategy" : {\n      "$ref" : "importStrategy.json"\n    },\n    "mergeDataValues" : {\n      "type" : "boolean"\n    },\n    "mergeMode" : {\n      "$ref" : "mergeMode.json"\n    },\n    "notificationLevel" : {\n      "$ref" : "notificationLevel.json"\n    },\n    "preheatCache" : {\n      "type" : "boolean"\n    },\n    "reportMode" : {\n      "$ref" : "importReportMode.json"\n    },\n    "requireAttributeOptionCombo" : {\n      "type" : "boolean"\n    },\n    "requireCategoryOptionCombo" : {\n      "type" : "boolean"\n    },\n    "sharing" : {\n      "type" : "boolean"\n    },\n    "skipAudit" : {\n      "type" : "boolean"\n    },\n    "skipCache" : {\n      "type" : "boolean"\n    },\n    "skipExistingCheck" : {\n      "type" : "boolean"\n    },\n    "skipLastUpdated" : {\n      "type" : "boolean"\n    },\n    "skipNotifications" : {\n      "type" : "boolean"\n    },\n    "skipPatternValidation" : {\n      "type" : "boolean"\n    },\n    "strictAttributeOptionCombos" : {\n      "type" : "boolean"\n    },\n    "strictCategoryOptionCombos" : {\n      "type" : "boolean"\n    },\n    "strictDataElements" : {\n      "type" : "boolean"\n    },\n    "strictOrganisationUnits" : {\n      "type" : "boolean"\n    },\n    "strictPeriods" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);