"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2991],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,y=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97699:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={},s=void 0,l={unversionedId:"schemas/axisV2",id:"schemas/axisV2",title:"axisV2",description:"",source:"@site/docs/schemas/axisV2.md",sourceDirName:"schemas",slug:"/schemas/axisV2",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/axisV2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"axisType",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/axisType"},next:{title:"baseAnalyticalObject",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/baseAnalyticalObject"}},p={},u=[],f={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "baseLine" : {\n      "$ref" : "line.json"\n    },\n    "decimals" : {\n      "type" : "integer"\n    },\n    "index" : {\n      "type" : "integer"\n    },\n    "label" : {\n      "$ref" : "styledObject.json"\n    },\n    "maxValue" : {\n      "type" : "integer"\n    },\n    "minValue" : {\n      "type" : "integer"\n    },\n    "steps" : {\n      "type" : "integer"\n    },\n    "targetLine" : {\n      "$ref" : "line.json"\n    },\n    "title" : {\n      "$ref" : "styledObject.json"\n    },\n    "type" : {\n      "$ref" : "axisType.json"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);