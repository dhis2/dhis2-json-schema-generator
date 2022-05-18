"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[41959],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,y=l["".concat(c,".").concat(m)]||l[m]||f[m]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},367:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={},c=void 0,p={unversionedId:"v2.35.13/smsGatewayConfig",id:"v2.35.13/smsGatewayConfig",title:"smsGatewayConfig",description:"",source:"@site/docs/v2.35.13/smsGatewayConfig.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/smsGatewayConfig",permalink:"/dhis2-json-schema-generator/v2.35.13/smsGatewayConfig",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"simpleVisualizationView",permalink:"/dhis2-json-schema-generator/v2.35.13/simpleVisualizationView"},next:{title:"smsJobParameters",permalink:"/dhis2-json-schema-generator/v2.35.13/smsJobParameters"}},u={},f=[],l={toc:f};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "anyOf" : [ {\n    "$ref" : "bulkSmsGatewayConfig.json",\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "bulksms"\n      }\n    },\n    "required" : [ "type" ]\n  }, {\n    "anyOf" : [ {\n      "type" : "array"\n    }, {\n      "type" : "object"\n    } ],\n    "$comment" : "Undefined",\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "http"\n      }\n    },\n    "required" : [ "type" ]\n  }, {\n    "anyOf" : [ {\n      "type" : "array"\n    }, {\n      "type" : "object"\n    } ],\n    "$comment" : "Undefined",\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "clickatell"\n      }\n    },\n    "required" : [ "type" ]\n  }, {\n    "$ref" : "sMPPGatewayConfig.json",\n    "type" : "object",\n    "properties" : {\n      "type" : {\n        "const" : "smpp"\n      }\n    },\n    "required" : [ "type" ]\n  } ]\n}\n')))}m.isMDXComponent=!0}}]);