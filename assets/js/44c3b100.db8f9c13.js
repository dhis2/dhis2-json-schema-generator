"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[14550],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,y=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return n?t.createElement(y,i(i({ref:r},p),{},{components:n})):t.createElement(y,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7740:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},c=void 0,u={unversionedId:"v2.38.1/series",id:"v2.38.1/series",title:"series",description:"",source:"@site/docs/v2.38.1/series.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/series",permalink:"/dhis2-json-schema-generator/v2.38.1/series",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"serializableMessage",permalink:"/dhis2-json-schema-generator/v2.38.1/serializableMessage"},next:{title:"seriesKey",permalink:"/dhis2-json-schema-generator/v2.38.1/seriesKey"}},p={},l=[],f={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "axis" : {\n      "type" : "integer"\n    },\n    "dimensionItem" : {\n      "type" : "string"\n    },\n    "type" : {\n      "$ref" : "visualizationType.json"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);