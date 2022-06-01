"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[53529],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return l}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),f=c(t),l=o,y=f["".concat(s,".").concat(l)]||f[l]||u[l]||i;return t?r.createElement(y,a(a({ref:n},m),{},{components:t})):r.createElement(y,a({ref:n},m))}));function l(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92368:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={},s=void 0,c={unversionedId:"v2.37.6/importTypeSummary",id:"v2.37.6/importTypeSummary",title:"importTypeSummary",description:"",source:"@site/docs/v2.37.6/importTypeSummary.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/importTypeSummary",permalink:"/dhis2-json-schema-generator/v2.37.6/importTypeSummary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"importSummary_",permalink:"/dhis2-json-schema-generator/v2.37.6/importSummary_"},next:{title:"importance",permalink:"/dhis2-json-schema-generator/v2.37.6/importance"}},m={},u=[],f={toc:u};function l(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "conflicts" : {\n      "type" : "array",\n      "$comment" : "Undefined"\n    },\n    "dataSetComplete" : {\n      "type" : "string"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "enrollments" : {\n      "$ref" : "importSummaries.json"\n    },\n    "events" : {\n      "$ref" : "importSummaries.json"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "importConflicts" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "importConflict.json"\n      }\n    },\n    "importCount" : {\n      "$ref" : "importCount.json"\n    },\n    "importOptions" : {\n      "$ref" : "importOptions.json"\n    },\n    "lastImported" : {\n      "type" : "string"\n    },\n    "reference" : {\n      "type" : "string"\n    },\n    "relationships" : {\n      "$ref" : "importSummaries.json"\n    },\n    "responseType" : {\n      "type" : "string"\n    },\n    "status" : {\n      "$ref" : "importStatus.json"\n    },\n    "type" : {\n      "type" : "string"\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);