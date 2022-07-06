"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[76652],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,y=f["".concat(p,".").concat(m)]||f[m]||l[m]||a;return t?r.createElement(y,c(c({ref:n},u),{},{components:t})):r.createElement(y,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98505:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},p=void 0,s={unversionedId:"v2.37.7/jsonPatchOperation",id:"v2.37.7/jsonPatchOperation",title:"jsonPatchOperation",description:"",source:"@site/docs/v2.37.7/jsonPatchOperation.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/jsonPatchOperation",permalink:"/dhis2-json-schema-generator/v2.37.7/jsonPatchOperation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jsonPatch",permalink:"/dhis2-json-schema-generator/v2.37.7/jsonPatch"},next:{title:"jsonPatchValueOperation",permalink:"/dhis2-json-schema-generator/v2.37.7/jsonPatchValueOperation"}},u={},l=[],f={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "anyOf" : [ {\n    "anyOf" : [ {\n      "type" : "array"\n    }, {\n      "type" : "object"\n    } ],\n    "$comment" : "Undefined",\n    "type" : "object",\n    "properties" : {\n      "op" : {\n        "const" : "add"\n      }\n    },\n    "required" : [ "op" ]\n  }, {\n    "anyOf" : [ {\n      "type" : "array"\n    }, {\n      "type" : "object"\n    } ],\n    "$comment" : "Undefined",\n    "type" : "object",\n    "properties" : {\n      "op" : {\n        "const" : "remove"\n      }\n    },\n    "required" : [ "op" ]\n  }, {\n    "anyOf" : [ {\n      "type" : "array"\n    }, {\n      "type" : "object"\n    } ],\n    "$comment" : "Undefined",\n    "type" : "object",\n    "properties" : {\n      "op" : {\n        "const" : "replace"\n      }\n    },\n    "required" : [ "op" ]\n  } ]\n}\n')))}m.isMDXComponent=!0}}]);