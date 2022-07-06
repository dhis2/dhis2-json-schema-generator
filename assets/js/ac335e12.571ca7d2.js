"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[77558],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},O=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),O=u(t),f=o,m=O["".concat(s,".").concat(f)]||O[f]||l[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=O;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}O.displayName="MDXCreateElement"},30386:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},s=void 0,u={unversionedId:"v2.36.11/dimensionType",id:"v2.36.11/dimensionType",title:"dimensionType",description:"",source:"@site/docs/v2.36.11/dimensionType.md",sourceDirName:"v2.36.11",slug:"/v2.36.11/dimensionType",permalink:"/dhis2-json-schema-generator/v2.36.11/dimensionType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dimensionItemType",permalink:"/dhis2-json-schema-generator/v2.36.11/dimensionItemType"},next:{title:"direction",permalink:"/dhis2-json-schema-generator/v2.36.11/direction"}},p={},l=[],O={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},O,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "DATA_X", "PROGRAM_DATA_ELEMENT", "PROGRAM_ATTRIBUTE", "PROGRAM_INDICATOR", "DATA_COLLAPSED", "CATEGORY_OPTION_COMBO", "ATTRIBUTE_OPTION_COMBO", "PERIOD", "ORGANISATION_UNIT", "CATEGORY_OPTION_GROUP_SET", "DATA_ELEMENT_GROUP_SET", "ORGANISATION_UNIT_GROUP_SET", "ORGANISATION_UNIT_GROUP", "CATEGORY", "OPTION_GROUP_SET", "VALIDATION_RULE", "STATIC", "ORGANISATION_UNIT_LEVEL" ]\n}\n')))}f.isMDXComponent=!0}}]);