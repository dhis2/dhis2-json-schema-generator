"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[73874],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,d=l["".concat(p,".").concat(f)]||l[f]||m[f]||a;return n?t.createElement(d,c(c({ref:r},s),{},{components:n})):t.createElement(d,c({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},85420:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={},p=void 0,u={unversionedId:"v2.37.4/programTempOwner",id:"v2.37.4/programTempOwner",title:"programTempOwner",description:"",source:"@site/docs/v2.37.4/programTempOwner.md",sourceDirName:"v2.37.4",slug:"/v2.37.4/programTempOwner",permalink:"/dhis2-json-schema-generator/v2.37.4/programTempOwner",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programStatus",permalink:"/dhis2-json-schema-generator/v2.37.4/programStatus"},next:{title:"programTempOwnershipAudit",permalink:"/dhis2-json-schema-generator/v2.37.4/programTempOwnershipAudit"}},s={},m=[],l={toc:m};function f(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "reason" : {\n      "type" : "string"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "validTill" : {\n      "type" : "string",\n      "format" : "date-time"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);