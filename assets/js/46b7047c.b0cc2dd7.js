"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[65505],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||a;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88478:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},u=void 0,p={unversionedId:"v2.38.1/trackerBundleReport",id:"v2.38.1/trackerBundleReport",title:"trackerBundleReport",description:"",source:"@site/docs/v2.38.1/trackerBundleReport.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/trackerBundleReport",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerBundleReport",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerBundleMode",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerBundleMode"},next:{title:"trackerBundleReportBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerBundleReportBuilder"}},s={},l=[],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "stats" : {\n      "$ref" : "trackerStats.json"\n    },\n    "status" : {\n      "$ref" : "trackerStatus.json"\n    },\n    "typeReportMap" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "additionalProperties" : {\n        "$ref" : "trackerTypeReport.json"\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);