"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[20933],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},T=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),T=s(n),f=o,O=T["".concat(i,".").concat(f)]||T[f]||p[f]||a;return n?t.createElement(O,c(c({ref:r},l),{},{components:n})):t.createElement(O,c({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=T;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<a;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}T.displayName="MDXCreateElement"},14606:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],u={},i=void 0,s={unversionedId:"v2.37.5/resourceTableType",id:"v2.37.5/resourceTableType",title:"resourceTableType",description:"",source:"@site/docs/v2.37.5/resourceTableType.md",sourceDirName:"v2.37.5",slug:"/v2.37.5/resourceTableType",permalink:"/dhis2-json-schema-generator/v2.37.5/resourceTableType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"reservedValue",permalink:"/dhis2-json-schema-generator/v2.37.5/reservedValue"},next:{title:"ruleEngineIntent",permalink:"/dhis2-json-schema-generator/v2.37.5/ruleEngineIntent"}},l={},p=[],T={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},T,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "ORG_UNIT_STRUCTURE", "DATA_SET_ORG_UNIT_CATEGORY", "CATEGORY_OPTION_COMBO_NAME", "DATA_ELEMENT_GROUP_SET_STRUCTURE", "INDICATOR_GROUP_SET_STRUCTURE", "ORG_UNIT_GROUP_SET_STRUCTURE", "CATEGORY_STRUCTURE", "DATA_ELEMENT_STRUCTURE", "PERIOD_STRUCTURE", "DATE_PERIOD_STRUCTURE", "DATA_ELEMENT_CATEGORY_OPTION_COMBO", "DATA_APPROVAL_REMAP_LEVEL", "DATA_APPROVAL_MIN_LEVEL" ]\n}\n')))}f.isMDXComponent=!0}}]);