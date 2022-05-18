"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[58399],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=m(r),f=a,y=l["".concat(u,".").concat(f)]||l[f]||p[f]||o;return r?n.createElement(y,c(c({ref:t},s),{},{components:r})):n.createElement(y,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},77234:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={},u=void 0,m={unversionedId:"v2.37.6/metadataSyncSummary",id:"v2.37.6/metadataSyncSummary",title:"metadataSyncSummary",description:"",source:"@site/docs/v2.37.6/metadataSyncSummary.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/metadataSyncSummary",permalink:"/dhis2-json-schema-generator/v2.37.6/metadataSyncSummary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metadataSyncJobParameters",permalink:"/dhis2-json-schema-generator/v2.37.6/metadataSyncJobParameters"},next:{title:"metadataType",permalink:"/dhis2-json-schema-generator/v2.37.6/metadataType"}},s={},p=[],l={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "importReport" : {\n      "$ref" : "importReport.json"\n    },\n    "importSummary" : {\n      "$ref" : "importSummary.json"\n    },\n    "metadataVersion" : {\n      "$ref" : "metadataVersion.json"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);