"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[96434],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,y=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return n?t.createElement(y,c(c({ref:r},u),{},{components:n})):t.createElement(y,c({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98948:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={},s=void 0,p={unversionedId:"v2.37.7/errorReport",id:"v2.37.7/errorReport",title:"errorReport",description:"",source:"@site/docs/v2.37.7/errorReport.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/errorReport",permalink:"/dhis2-json-schema-generator/v2.37.7/errorReport",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"errorCode",permalink:"/dhis2-json-schema-generator/v2.37.7/errorCode"},next:{title:"errorReportsWebMessageResponse",permalink:"/dhis2-json-schema-generator/v2.37.7/errorReportsWebMessageResponse"}},u={},l=[],f={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "errorCode" : {\n      "$ref" : "errorCode.json"\n    },\n    "errorKlass" : {\n      "type" : "string"\n    },\n    "errorProperties" : {\n      "type" : "array",\n      "items" : {\n        "anyOf" : [ {\n          "type" : "array"\n        }, {\n          "type" : "object"\n        } ],\n        "$comment" : "Undefined"\n      }\n    },\n    "errorProperty" : {\n      "type" : "string"\n    },\n    "mainId" : {\n      "type" : "string"\n    },\n    "mainKlass" : {\n      "type" : "string"\n    },\n    "message" : {\n      "type" : "string"\n    },\n    "value" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);