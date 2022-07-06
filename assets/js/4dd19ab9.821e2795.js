"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[90044],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,y=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return t?r.createElement(y,u(u({ref:n},s),{},{components:t})):r.createElement(y,u({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var p=2;p<a;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3160:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),u=["components"],i={},c=void 0,p={unversionedId:"v2.36.11/outlierValue",id:"v2.36.11/outlierValue",title:"outlierValue",description:"",source:"@site/docs/v2.36.11/outlierValue.md",sourceDirName:"v2.36.11",slug:"/v2.36.11/outlierValue",permalink:"/dhis2-json-schema-generator/v2.36.11/outlierValue",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"outlierMethod",permalink:"/dhis2-json-schema-generator/v2.36.11/outlierMethod"},next:{title:"pager",permalink:"/dhis2-json-schema-generator/v2.36.11/pager"}},s={},l=[],m={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "absDev" : {\n      "type" : "number"\n    },\n    "aoc" : {\n      "type" : "string"\n    },\n    "aocName" : {\n      "type" : "string"\n    },\n    "coc" : {\n      "type" : "string"\n    },\n    "cocName" : {\n      "type" : "string"\n    },\n    "de" : {\n      "type" : "string"\n    },\n    "deName" : {\n      "type" : "string"\n    },\n    "followup" : {\n      "type" : "boolean"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lowerBound" : {\n      "type" : "number"\n    },\n    "mean" : {\n      "type" : "number"\n    },\n    "ou" : {\n      "type" : "string"\n    },\n    "ouName" : {\n      "type" : "string"\n    },\n    "pe" : {\n      "type" : "string"\n    },\n    "stdDev" : {\n      "type" : "number"\n    },\n    "upperBound" : {\n      "type" : "number"\n    },\n    "value" : {\n      "type" : "number"\n    },\n    "zScore" : {\n      "type" : "number"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);