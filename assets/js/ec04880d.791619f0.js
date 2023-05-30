"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[58706],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,y=l["".concat(p,".").concat(m)]||l[m]||f[m]||a;return t?r.createElement(y,c(c({ref:n},s),{},{components:t})):r.createElement(y,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=l;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},55745:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},p=void 0,u={unversionedId:"v40.0/cacheCapInfo",id:"v40.0/cacheCapInfo",title:"cacheCapInfo",description:"",source:"@site/docs/v40.0/cacheCapInfo.md",sourceDirName:"v40.0",slug:"/v40.0/cacheCapInfo",permalink:"/dhis2-json-schema-generator/v40.0/cacheCapInfo",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cacheBurdenInfo",permalink:"/dhis2-json-schema-generator/v40.0/cacheBurdenInfo"},next:{title:"cacheEventOperation",permalink:"/dhis2-json-schema-generator/v40.0/cacheEventOperation"}},s={},f=[],l={toc:f};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "capPercentage" : {\n      "type" : "integer"\n    },\n    "hardCapPercentage" : {\n      "type" : "integer"\n    },\n    "softCapPercentage" : {\n      "type" : "integer"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);