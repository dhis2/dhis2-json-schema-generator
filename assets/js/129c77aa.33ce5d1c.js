"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[29555],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=a,m=l["".concat(s,".").concat(d)]||l[d]||p[d]||o;return r?n.createElement(m,c(c({ref:t},f),{},{components:r})):n.createElement(m,c({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},27872:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={},s=void 0,u={unversionedId:"v2.37.6/trackerSendMessageSideEffect",id:"v2.37.6/trackerSendMessageSideEffect",title:"trackerSendMessageSideEffect",description:"",source:"@site/docs/v2.37.6/trackerSendMessageSideEffect.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/trackerSendMessageSideEffect",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerSendMessageSideEffect",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerScheduleMessageSideEffectBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerScheduleMessageSideEffectBuilder"},next:{title:"trackerSendMessageSideEffectBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerSendMessageSideEffectBuilder"}},f={},p=[],l={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "allOf" : [ {\n    "type" : "object",\n    "properties" : {\n      "data" : {\n        "type" : "string"\n      },\n      "notification" : {\n        "type" : "string"\n      }\n    }\n  }, {\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "TrackerSendMessageSideEffect"\n      }\n    },\n    "required" : [ "type" ]\n  } ]\n}\n')))}d.isMDXComponent=!0}}]);