"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[39603],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?t.createElement(m,c(c({ref:n},s),{},{components:r})):t.createElement(m,c({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16752:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={},u=void 0,l={unversionedId:"v2.38.1/trackerBundle",id:"v2.38.1/trackerBundle",title:"trackerBundle",description:"",source:"@site/docs/v2.38.1/trackerBundle.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/trackerBundle",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerBundle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerAssignValueSideEffectBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerAssignValueSideEffectBuilder"},next:{title:"trackerBundleBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerBundleBuilder"}},s={},p=[],f={toc:p};function d(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "skipRuleEngine" : {\n      "type" : "boolean"\n    },\n    "skipSideEffects" : {\n      "type" : "boolean"\n    },\n    "skipTextPatternValidation" : {\n      "type" : "boolean"\n    },\n    "username" : {\n      "type" : "string"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);