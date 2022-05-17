"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[12116],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return n?t.createElement(d,c(c({ref:r},l),{},{components:n})):t.createElement(d,c({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3459:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={},u=void 0,s={unversionedId:"v2.37.5/orderColumn",id:"v2.37.5/orderColumn",title:"orderColumn",description:"",source:"@site/docs/v2.37.5/orderColumn.md",sourceDirName:"v2.37.5",slug:"/v2.37.5/orderColumn",permalink:"/dhis2-json-schema-generator/v2.37.5/orderColumn",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"optionSet",permalink:"/dhis2-json-schema-generator/v2.37.5/optionSet"},next:{title:"organisationUnit",permalink:"/dhis2-json-schema-generator/v2.37.5/organisationUnit"}},l={},p=[],f={toc:p};function m(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "TRACKEDENTITY", "CREATED", "CREATED_AT", "CREATED_AT_CLIENT", "UPDATED_AT", "UPDATED_AT_CLIENT", "ENROLLED_AT", "INACTIVE" ]\n}\n')))}m.isMDXComponent=!0}}]);