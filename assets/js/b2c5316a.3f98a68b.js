"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[98381],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return y}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),y=o,O=f["".concat(u,".").concat(y)]||f[y]||s[y]||a;return r?t.createElement(O,c(c({ref:n},l),{},{components:r})):t.createElement(O,c({ref:n},l))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23847:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={},u=void 0,p={unversionedId:"v2.36.11/valueTypeRenderingType",id:"v2.36.11/valueTypeRenderingType",title:"valueTypeRenderingType",description:"",source:"@site/docs/v2.36.11/valueTypeRenderingType.md",sourceDirName:"v2.36.11",slug:"/v2.36.11/valueTypeRenderingType",permalink:"/dhis2-json-schema-generator/v2.36.11/valueTypeRenderingType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"valueTypeRenderingObject",permalink:"/dhis2-json-schema-generator/v2.36.11/valueTypeRenderingObject"},next:{title:"valueType_",permalink:"/dhis2-json-schema-generator/v2.36.11/valueType_"}},l={},s=[],f={toc:s};function y(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "DEFAULT", "DROPDOWN", "VERTICAL_RADIOBUTTONS", "HORIZONTAL_RADIOBUTTONS", "VERTICAL_CHECKBOXES", "HORIZONTAL_CHECKBOXES", "SHARED_HEADER_RADIOBUTTONS", "ICONS_AS_BUTTONS", "SPINNER", "ICON", "TOGGLE", "VALUE", "SLIDER", "LINEAR_SCALE", "AUTOCOMPLETE", "QR_CODE", "BAR_CODE" ]\n}\n')))}y.isMDXComponent=!0}}]);