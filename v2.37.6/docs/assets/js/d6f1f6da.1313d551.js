"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84512],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return y}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(t),y=o,m=f["".concat(i,".").concat(y)]||f[y]||l[y]||c;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<c;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86278:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=t(87462),o=t(63366),c=(t(67294),t(3905)),a=["components"],p={},i=void 0,u={unversionedId:"schemas/propertyType",id:"schemas/propertyType",title:"propertyType",description:"",source:"@site/docs/schemas/propertyType.md",sourceDirName:"schemas",slug:"/schemas/propertyType",permalink:"/schemas/propertyType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"property",permalink:"/schemas/property"},next:{title:"protectionType",permalink:"/schemas/protectionType"}},s={},l=[],f={toc:l};function y(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "IDENTIFIER", "TEXT", "NUMBER", "INTEGER", "BOOLEAN", "EMAIL", "PASSWORD", "URL", "DATE", "PHONENUMBER", "GEOLOCATION", "COLOR", "CONSTANT", "COMPLEX", "COLLECTION", "REFERENCE" ]\n}\n')))}y.isMDXComponent=!0}}]);