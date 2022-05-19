"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[41603],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(t),y=o,m=f["".concat(c,".").concat(y)]||f[y]||p[y]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74363:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},c=void 0,l={unversionedId:"v2.37.6/followupAnalysisMetadata",id:"v2.37.6/followupAnalysisMetadata",title:"followupAnalysisMetadata",description:"",source:"@site/docs/v2.37.6/followupAnalysisMetadata.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/followupAnalysisMetadata",permalink:"/dhis2-json-schema-generator/v2.37.6/followupAnalysisMetadata",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flushMode_",permalink:"/dhis2-json-schema-generator/v2.37.6/flushMode_"},next:{title:"followupAnalysisResponse",permalink:"/dhis2-json-schema-generator/v2.37.6/followupAnalysisResponse"}},u={},p=[],f={toc:p};function y(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "coc" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "de" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "endDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "maxResults" : {\n      "type" : "integer"\n    },\n    "ou" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "startDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);