"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[31380],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=c,v=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(v,a(a({ref:t},l),{},{components:r})):n.createElement(v,a({ref:t},l))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:c,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18123:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),c=r(63366),o=(r(67294),r(3905)),a=["components"],s={},i=void 0,u={unversionedId:"v2.39.1/accessLevel",id:"v2.39.1/accessLevel",title:"accessLevel",description:"",source:"@site/docs/v2.39.1/accessLevel.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/accessLevel",permalink:"/dhis2-json-schema-generator/v2.39.1/accessLevel",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"accessData",permalink:"/dhis2-json-schema-generator/v2.39.1/accessData"},next:{title:"accessObject",permalink:"/dhis2-json-schema-generator/v2.39.1/accessObject"}},l={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "OPEN", "AUDITED", "PROTECTED", "CLOSED" ]\n}\n')))}m.isMDXComponent=!0}}]);