"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[71081],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||l[d]||o;return t?n.createElement(m,c(c({ref:r},f),{},{components:t})):n.createElement(m,c({ref:r},f))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45557:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={},s=void 0,u={unversionedId:"v40.0/trackerScheduleMessageSideEffect",id:"v40.0/trackerScheduleMessageSideEffect",title:"trackerScheduleMessageSideEffect",description:"",source:"@site/docs/v40.0/trackerScheduleMessageSideEffect.md",sourceDirName:"v40.0",slug:"/v40.0/trackerScheduleMessageSideEffect",permalink:"/dhis2-json-schema-generator/v40.0/trackerScheduleMessageSideEffect",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerProgramsDataSynchronizationJobParameters",permalink:"/dhis2-json-schema-generator/v40.0/trackerProgramsDataSynchronizationJobParameters"},next:{title:"trackerScheduleMessageSideEffectBuilder",permalink:"/dhis2-json-schema-generator/v40.0/trackerScheduleMessageSideEffectBuilder"}},f={},l=[],p={toc:l};function d(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "allOf" : [ {\n    "type" : "object",\n    "properties" : {\n      "data" : {\n        "type" : "string"\n      },\n      "notification" : {\n        "type" : "string"\n      }\n    }\n  }, {\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "TrackerScheduleMessageSideEffect"\n      }\n    },\n    "required" : [ "type" ]\n  } ]\n}\n')))}d.isMDXComponent=!0}}]);