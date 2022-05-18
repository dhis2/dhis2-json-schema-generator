"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[33182],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,v=p["".concat(s,".").concat(y)]||p[y]||f[y]||i;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7254:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={},s=void 0,c={unversionedId:"v2.35.13/visualizationFontStyle",id:"v2.35.13/visualizationFontStyle",title:"visualizationFontStyle",description:"",source:"@site/docs/v2.35.13/visualizationFontStyle.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/visualizationFontStyle",permalink:"/dhis2-json-schema-generator/v2.35.13/visualizationFontStyle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"visualization",permalink:"/dhis2-json-schema-generator/v2.35.13/visualization"},next:{title:"visualizationType",permalink:"/dhis2-json-schema-generator/v2.35.13/visualizationType"}},u={},f=[],p={toc:f};function y(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "baseLineLabel" : {\n      "$ref" : "fontStyle.json"\n    },\n    "categoryAxisLabel" : {\n      "$ref" : "fontStyle.json"\n    },\n    "horizontalAxisTitle" : {\n      "$ref" : "fontStyle.json"\n    },\n    "legend" : {\n      "$ref" : "fontStyle.json"\n    },\n    "seriesAxisLabel" : {\n      "$ref" : "fontStyle.json"\n    },\n    "targetLineLabel" : {\n      "$ref" : "fontStyle.json"\n    },\n    "verticalAxisTitle" : {\n      "$ref" : "fontStyle.json"\n    },\n    "visualizationSubtitle" : {\n      "$ref" : "fontStyle.json"\n    },\n    "visualizationTitle" : {\n      "$ref" : "fontStyle.json"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);