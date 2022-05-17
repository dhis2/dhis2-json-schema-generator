"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[19360],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return r?t.createElement(y,c(c({ref:n},u),{},{components:r})):t.createElement(y,c({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43070:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={},s=void 0,p={unversionedId:"v2.37.6/spacing",id:"v2.37.6/spacing",title:"spacing",description:"",source:"@site/docs/v2.37.6/spacing.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/spacing",permalink:"/dhis2-json-schema-generator/v2.37.6/spacing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sortProperty",permalink:"/dhis2-json-schema-generator/v2.37.6/sortProperty"},next:{title:"sqlView",permalink:"/dhis2-json-schema-generator/v2.37.6/sqlView"}},u={},l=[],f={toc:l};function m(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "column" : {\n      "type" : "integer"\n    },\n    "row" : {\n      "type" : "integer"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);