"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[65329],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=i(t),m=o,y=f["".concat(c,".").concat(m)]||f[m]||l[m]||s;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<s;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71214:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],u={},c=void 0,i={unversionedId:"v2.38.1/outboundMessageResponseSummary",id:"v2.38.1/outboundMessageResponseSummary",title:"outboundMessageResponseSummary",description:"",source:"@site/docs/v2.38.1/outboundMessageResponseSummary.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/outboundMessageResponseSummary",permalink:"/dhis2-json-schema-generator/v2.38.1/outboundMessageResponseSummary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"outboundMessageResponse",permalink:"/dhis2-json-schema-generator/v2.38.1/outboundMessageResponse"},next:{title:"outboundSms",permalink:"/dhis2-json-schema-generator/v2.38.1/outboundSms"}},p={},l=[],f={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "batchType" : {\n      "$ref" : "deliveryChannel.json"\n    },\n    "errorMessage" : {\n      "type" : "string"\n    },\n    "failed" : {\n      "type" : "integer"\n    },\n    "pending" : {\n      "type" : "integer"\n    },\n    "responseMessage" : {\n      "type" : "string"\n    },\n    "sent" : {\n      "type" : "integer"\n    },\n    "status" : {\n      "$ref" : "outboundMessageBatchStatus.json"\n    },\n    "total" : {\n      "type" : "integer"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);