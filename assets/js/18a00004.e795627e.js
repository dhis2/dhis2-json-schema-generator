"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[73692],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,y=f["".concat(u,".").concat(m)]||f[m]||l[m]||a;return t?n.createElement(y,c(c({ref:r},p),{},{components:t})):n.createElement(y,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48540:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},u=void 0,s={unversionedId:"v2.36.10/userOrgUnitType",id:"v2.36.10/userOrgUnitType",title:"userOrgUnitType",description:"",source:"@site/docs/v2.36.10/userOrgUnitType.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/userOrgUnitType",permalink:"/dhis2-json-schema-generator/v2.36.10/userOrgUnitType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"userMessage",permalink:"/dhis2-json-schema-generator/v2.36.10/userMessage"},next:{title:"userOverrideMode",permalink:"/dhis2-json-schema-generator/v2.36.10/userOverrideMode"}},p={},l=[],f={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "DATA_CAPTURE", "DATA_OUTPUT", "TEI_SEARCH" ]\n}\n')))}m.isMDXComponent=!0}}]);