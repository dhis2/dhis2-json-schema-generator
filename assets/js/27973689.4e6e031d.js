"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[41431],{3905:function(e,r,t){t.d(r,{Zo:function(){return _},kt:function(){return T}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),S=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},_=function(e){var r=S(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,_=c(e,["components","mdxType","originalType","parentName"]),l=S(t),T=o,p=l["".concat(u,".").concat(T)]||l[T]||s[T]||a;return t?n.createElement(p,i(i({ref:r},_),{},{components:t})):n.createElement(p,i({ref:r},_))}));function T(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var S=2;S<a;S++)i[S]=t[S];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},48768:function(e,r,t){t.r(r),t.d(r,{assets:function(){return _},contentTitle:function(){return u},default:function(){return T},frontMatter:function(){return c},metadata:function(){return S},toc:function(){return s}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},u=void 0,S={unversionedId:"v2.37.6/relativePeriodEnum",id:"v2.37.6/relativePeriodEnum",title:"relativePeriodEnum",description:"",source:"@site/docs/v2.37.6/relativePeriodEnum.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/relativePeriodEnum",permalink:"/dhis2-json-schema-generator/v2.37.6/relativePeriodEnum",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"relationships",permalink:"/dhis2-json-schema-generator/v2.37.6/relationships"},next:{title:"relativePeriods",permalink:"/dhis2-json-schema-generator/v2.37.6/relativePeriods"}},_={},s=[],l={toc:s};function T(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "TODAY", "YESTERDAY", "LAST_3_DAYS", "LAST_7_DAYS", "LAST_14_DAYS", "LAST_30_DAYS", "LAST_60_DAYS", "LAST_90_DAYS", "LAST_180_DAYS", "THIS_MONTH", "LAST_MONTH", "THIS_BIMONTH", "LAST_BIMONTH", "THIS_QUARTER", "LAST_QUARTER", "THIS_SIX_MONTH", "LAST_SIX_MONTH", "WEEKS_THIS_YEAR", "MONTHS_THIS_YEAR", "BIMONTHS_THIS_YEAR", "QUARTERS_THIS_YEAR", "THIS_YEAR", "MONTHS_LAST_YEAR", "QUARTERS_LAST_YEAR", "LAST_YEAR", "LAST_5_YEARS", "LAST_10_YEARS", "LAST_12_MONTHS", "LAST_6_MONTHS", "LAST_3_MONTHS", "LAST_6_BIMONTHS", "LAST_4_QUARTERS", "LAST_2_SIXMONTHS", "THIS_FINANCIAL_YEAR", "LAST_FINANCIAL_YEAR", "LAST_5_FINANCIAL_YEARS", "LAST_10_FINANCIAL_YEARS", "THIS_WEEK", "LAST_WEEK", "THIS_BIWEEK", "LAST_BIWEEK", "LAST_4_WEEKS", "LAST_4_BIWEEKS", "LAST_12_WEEKS", "LAST_52_WEEKS" ]\n}\n')))}T.isMDXComponent=!0}}]);