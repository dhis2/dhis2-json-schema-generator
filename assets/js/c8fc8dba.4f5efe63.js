"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[6739],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},p=void 0,u={unversionedId:"v2.39.1/dataValueSet",id:"v2.39.1/dataValueSet",title:"dataValueSet",description:"",source:"@site/docs/v2.39.1/dataValueSet.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/dataValueSet",permalink:"/dhis2-json-schema-generator/v2.39.1/dataValueSet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataValueImportConflict",permalink:"/dhis2-json-schema-generator/v2.39.1/dataValueImportConflict"},next:{title:"dataValueSetImportConflict",permalink:"/dhis2-json-schema-generator/v2.39.1/dataValueSetImportConflict"}},s={},l=[],f={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "attributeCategoryOptions" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "attributeOptionCombo" : {\n      "type" : "string"\n    },\n    "categoryOptionComboIdScheme" : {\n      "type" : "string"\n    },\n    "completeDate" : {\n      "type" : "string"\n    },\n    "dataElementIdScheme" : {\n      "type" : "string"\n    },\n    "dataSet" : {\n      "type" : "string"\n    },\n    "dataSetIdScheme" : {\n      "type" : "string"\n    },\n    "dataValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataValue_.json"\n      }\n    },\n    "dryRun" : {\n      "type" : "boolean"\n    },\n    "idScheme" : {\n      "type" : "string"\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "orgUnitIdScheme" : {\n      "type" : "string"\n    },\n    "period" : {\n      "type" : "string"\n    },\n    "strategy" : {\n      "type" : "string"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);