"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[95032],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),i=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=i(n),m=o,y=f["".concat(u,".").concat(m)]||f[m]||l[m]||c;return n?t.createElement(y,s(s({ref:r},p),{},{components:n})):t.createElement(y,s({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=f;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var i=2;i<c;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74674:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var t=n(87462),o=n(63366),c=(n(67294),n(3905)),s=["components"],a={},u=void 0,i={unversionedId:"v2.37.7/userGroupAccess_",id:"v2.37.7/userGroupAccess_",title:"userGroupAccess_",description:"",source:"@site/docs/v2.37.7/userGroupAccess_.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/userGroupAccess_",permalink:"/dhis2-json-schema-generator/v2.37.7/userGroupAccess_",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"userGroupAccess",permalink:"/dhis2-json-schema-generator/v2.37.7/userGroupAccess"},next:{title:"userInfoSnapshot",permalink:"/dhis2-json-schema-generator/v2.37.7/userInfoSnapshot"}},p={},l=[],f={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);