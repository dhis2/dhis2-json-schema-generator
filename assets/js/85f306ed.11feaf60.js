"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[5553],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),i=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(n),m=o,y=f["".concat(p,".").concat(m)]||f[m]||l[m]||s;return n?t.createElement(y,a(a({ref:r},u),{},{components:n})):t.createElement(y,a({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=n[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34649:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l}});var t=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],c={},p=void 0,i={unversionedId:"v40.0/errorReportsWebMessageResponse",id:"v40.0/errorReportsWebMessageResponse",title:"errorReportsWebMessageResponse",description:"",source:"@site/docs/v40.0/errorReportsWebMessageResponse.md",sourceDirName:"v40.0",slug:"/v40.0/errorReportsWebMessageResponse",permalink:"/dhis2-json-schema-generator/v40.0/errorReportsWebMessageResponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"errorReport",permalink:"/dhis2-json-schema-generator/v40.0/errorReport"},next:{title:"event",permalink:"/dhis2-json-schema-generator/v40.0/event"}},u={},l=[],f={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "errorReports" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "errorReport.json"\n      }\n    },\n    "responseType" : {\n      "type" : "string"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);