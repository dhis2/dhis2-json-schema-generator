"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1557],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),i=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=i(n),m=o,y=f["".concat(u,".").concat(m)]||f[m]||l[m]||a;return n?t.createElement(y,s(s({ref:r},p),{},{components:n})):t.createElement(y,s({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82761:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],c={},u=void 0,i={unversionedId:"schemas/userMessage",id:"schemas/userMessage",title:"userMessage",description:"",source:"@site/docs/schemas/userMessage.md",sourceDirName:"schemas",slug:"/schemas/userMessage",permalink:"/schemas/userMessage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"userKeyJsonValue",permalink:"/schemas/userKeyJsonValue"},next:{title:"userOrgUnitType",permalink:"/schemas/userOrgUnitType"}},p={},l=[],f={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "followUp" : {\n      "type" : "boolean"\n    },\n    "key" : {\n      "type" : "string"\n    },\n    "read" : {\n      "type" : "boolean"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);