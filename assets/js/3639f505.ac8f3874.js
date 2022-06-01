"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[92359],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,y=f["".concat(p,".").concat(m)]||f[m]||l[m]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},p=void 0,s={unversionedId:"v2.37.6/apiTokenAttribute",id:"v2.37.6/apiTokenAttribute",title:"apiTokenAttribute",description:"",source:"@site/docs/v2.37.6/apiTokenAttribute.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/apiTokenAttribute",permalink:"/dhis2-json-schema-generator/v2.37.6/apiTokenAttribute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apiToken",permalink:"/dhis2-json-schema-generator/v2.37.6/apiToken"},next:{title:"apiTokenType",permalink:"/dhis2-json-schema-generator/v2.37.6/apiTokenType"}},u={},l=[],f={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "anyOf" : [ {\n    "$ref" : "ipAllowedList.json",\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "IpAllowedList"\n      }\n    },\n    "required" : [ "type" ]\n  }, {\n    "$ref" : "refererAllowedList.json",\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "RefererAllowedList"\n      }\n    },\n    "required" : [ "type" ]\n  }, {\n    "$ref" : "methodAllowedList.json",\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "MethodAllowedList"\n      }\n    },\n    "required" : [ "type" ]\n  } ]\n}\n')))}m.isMDXComponent=!0}}]);