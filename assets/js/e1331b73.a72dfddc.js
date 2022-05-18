"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[93678],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,v=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?t.createElement(v,i(i({ref:n},p),{},{components:r})):t.createElement(v,i({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93678:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},u=void 0,l={unversionedId:"v2.35.13/programRuleActionEvaluationTime",id:"v2.35.13/programRuleActionEvaluationTime",title:"programRuleActionEvaluationTime",description:"",source:"@site/docs/v2.35.13/programRuleActionEvaluationTime.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/programRuleActionEvaluationTime",permalink:"/dhis2-json-schema-generator/v2.35.13/programRuleActionEvaluationTime",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programRuleActionEvaluationEnvironment",permalink:"/dhis2-json-schema-generator/v2.35.13/programRuleActionEvaluationEnvironment"},next:{title:"programRuleActionType",permalink:"/dhis2-json-schema-generator/v2.35.13/programRuleActionType"}},p={},s=[],m={toc:s};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "ON_DATA_ENTRY", "ON_COMPLETE", "ALWAYS" ]\n}\n')))}f.isMDXComponent=!0}}]);