"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[64269],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return y}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),y=o,m=l["".concat(p,".").concat(y)]||l[y]||f[y]||a;return r?t.createElement(m,c(c({ref:n},u),{},{components:r})):t.createElement(m,c({ref:n},u))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=l;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},30403:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={},p=void 0,s={unversionedId:"v2.35.13/jobTypeInfo",id:"v2.35.13/jobTypeInfo",title:"jobTypeInfo",description:"",source:"@site/docs/v2.35.13/jobTypeInfo.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/jobTypeInfo",permalink:"/dhis2-json-schema-generator/v2.35.13/jobTypeInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jobType",permalink:"/dhis2-json-schema-generator/v2.35.13/jobType"},next:{title:"keyJsonValue",permalink:"/dhis2-json-schema-generator/v2.35.13/keyJsonValue"}},u={},f=[],l={toc:f};function y(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "jobParameters" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "property.json"\n      }\n    },\n    "jobType" : {\n      "$ref" : "jobType.json"\n    },\n    "key" : {\n      "type" : "string"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "schedulingType" : {\n      "$ref" : "schedulingType.json"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);