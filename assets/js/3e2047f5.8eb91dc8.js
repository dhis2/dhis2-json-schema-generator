"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[44374],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,g=m["".concat(i,".").concat(f)]||m[f]||l[f]||a;return t?n.createElement(g,c(c({ref:r},u),{},{components:t})):n.createElement(g,c({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82304:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],s={},i=void 0,p={unversionedId:"v2.35.13/programMessageBatch",id:"v2.35.13/programMessageBatch",title:"programMessageBatch",description:"",source:"@site/docs/v2.35.13/programMessageBatch.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/programMessageBatch",permalink:"/dhis2-json-schema-generator/v2.35.13/programMessageBatch",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programMessage",permalink:"/dhis2-json-schema-generator/v2.35.13/programMessage"},next:{title:"programMessageCategory",permalink:"/dhis2-json-schema-generator/v2.35.13/programMessageCategory"}},u={},l=[],m={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "programMessages" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programMessage.json"\n      }\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);