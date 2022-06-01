"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[25094],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?t.createElement(m,c(c({ref:r},s),{},{components:n})):t.createElement(m,c({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32649:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={},u=void 0,l={unversionedId:"v2.37.6/trackerBundleBuilder",id:"v2.37.6/trackerBundleBuilder",title:"trackerBundleBuilder",description:"",source:"@site/docs/v2.37.6/trackerBundleBuilder.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/trackerBundleBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerBundleBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerBundle",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerBundle"},next:{title:"trackerBundleMode",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerBundleMode"}},s={},p=[],f={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "skipRuleEngine(boolean)" : {\n      "$ref" : "#"\n    },\n    "skipSideEffects(boolean)" : {\n      "$ref" : "#"\n    },\n    "skipTextPatternValidation(boolean)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);