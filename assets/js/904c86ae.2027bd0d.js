"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[29957],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return n?t.createElement(d,i(i({ref:r},s),{},{components:n})):t.createElement(d,i({ref:r},s))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92287:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},u=void 0,l={unversionedId:"v2.37.6/fieldBuilder",id:"v2.37.6/fieldBuilder",title:"fieldBuilder",description:"",source:"@site/docs/v2.37.6/fieldBuilder.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/fieldBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/fieldBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"field",permalink:"/dhis2-json-schema-generator/v2.37.6/field"},next:{title:"fileResource",permalink:"/dhis2-json-schema-generator/v2.37.6/fileResource"}},s={},f=[],p={toc:f};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "alias(String)" : {\n      "$ref" : "#"\n    },\n    "attribute(boolean)" : {\n      "$ref" : "#"\n    },\n    "propertyPath(String)" : {\n      "$ref" : "#"\n    },\n    "transformation(Transform)" : {\n      "$ref" : "#"\n    },\n    "transformationArgument(String)" : {\n      "$ref" : "#"\n    },\n    "translate(boolean)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);