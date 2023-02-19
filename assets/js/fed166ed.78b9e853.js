"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[40131],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,y=f["".concat(i,".").concat(m)]||f[m]||l[m]||a;return r?t.createElement(y,s(s({ref:n},p),{},{components:r})):t.createElement(y,s({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74764:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],c={},i=void 0,u={unversionedId:"v2.39.1/userMessage",id:"v2.39.1/userMessage",title:"userMessage",description:"",source:"@site/docs/v2.39.1/userMessage.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/userMessage",permalink:"/dhis2-json-schema-generator/v2.39.1/userMessage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"userInvitationStatus",permalink:"/dhis2-json-schema-generator/v2.39.1/userInvitationStatus"},next:{title:"userOrgUnitType",permalink:"/dhis2-json-schema-generator/v2.39.1/userOrgUnitType"}},p={},l=[],f={toc:l};function m(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "followUp" : {\n      "type" : "boolean"\n    },\n    "key" : {\n      "type" : "string"\n    },\n    "read" : {\n      "type" : "boolean"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);