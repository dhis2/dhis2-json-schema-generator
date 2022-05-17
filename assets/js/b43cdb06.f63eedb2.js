"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[11025],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,y=l["".concat(u,".").concat(m)]||l[m]||f[m]||c;return r?t.createElement(y,a(a({ref:n},p),{},{components:r})):t.createElement(y,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},20434:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var t=r(87462),o=r(63366),c=(r(67294),r(3905)),a=["components"],i={},u=void 0,s={unversionedId:"v2.37.4/cacheInfo",id:"v2.37.4/cacheInfo",title:"cacheInfo",description:"",source:"@site/docs/v2.37.4/cacheInfo.md",sourceDirName:"v2.37.4",slug:"/v2.37.4/cacheInfo",permalink:"/dhis2-json-schema-generator/v2.37.4/cacheInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cacheGroupInfo",permalink:"/dhis2-json-schema-generator/v2.37.4/cacheGroupInfo"},next:{title:"cacheStrategy",permalink:"/dhis2-json-schema-generator/v2.37.4/cacheStrategy"}},p={},f=[],l={toc:f};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "burden" : {\n      "$ref" : "cacheBurdenInfo.json"\n    },\n    "cap" : {\n      "$ref" : "cacheCapInfo.json"\n    },\n    "regions" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "cacheGroupInfo.json"\n      }\n    },\n    "total" : {\n      "$ref" : "cacheGroupInfo.json"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);