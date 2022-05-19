"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[70905],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,y=f["".concat(p,".").concat(m)]||f[m]||l[m]||a;return n?t.createElement(y,i(i({ref:r},u),{},{components:n})):t.createElement(y,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42453:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},p=void 0,s={unversionedId:"v2.36.10/programOwner_",id:"v2.36.10/programOwner_",title:"programOwner_",description:"",source:"@site/docs/v2.36.10/programOwner_.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/programOwner_",permalink:"/dhis2-json-schema-generator/v2.36.10/programOwner_",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programOwnerBuilder",permalink:"/dhis2-json-schema-generator/v2.36.10/programOwnerBuilder"},next:{title:"programOwnershipHistory",permalink:"/dhis2-json-schema-generator/v2.36.10/programOwnershipHistory"}},u={},l=[],f={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "program" : {\n      "type" : "string"\n    },\n    "trackedEntity" : {\n      "type" : "string"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);