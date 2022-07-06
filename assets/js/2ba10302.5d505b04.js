"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[32381],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=p(t),d=a,m=l["".concat(s,".").concat(d)]||l[d]||u[d]||o;return t?r.createElement(m,c(c({ref:n},f),{},{components:t})):r.createElement(m,c({ref:n},f))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=l;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},40357:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={},s=void 0,p={unversionedId:"v2.37.7/trackerSideEffectDataBundle",id:"v2.37.7/trackerSideEffectDataBundle",title:"trackerSideEffectDataBundle",description:"",source:"@site/docs/v2.37.7/trackerSideEffectDataBundle.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/trackerSideEffectDataBundle",permalink:"/dhis2-json-schema-generator/v2.37.7/trackerSideEffectDataBundle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerSideEffectBundleBuilder",permalink:"/dhis2-json-schema-generator/v2.37.7/trackerSideEffectBundleBuilder"},next:{title:"trackerStats",permalink:"/dhis2-json-schema-generator/v2.37.7/trackerStats"}},f={},u=[],l={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "accessedBy" : {\n      "type" : "string"\n    },\n    "enrollmentRuleEffects" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "additionalProperties" : {\n        "type" : "array",\n        "items" : {\n          "anyOf" : [ {\n            "type" : "array"\n          }, {\n            "type" : "object"\n          } ],\n          "$comment" : "Undefined"\n        }\n      }\n    },\n    "eventRuleEffects" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "additionalProperties" : {\n        "type" : "array",\n        "items" : {\n          "anyOf" : [ {\n            "type" : "array"\n          }, {\n            "type" : "object"\n          } ],\n          "$comment" : "Undefined"\n        }\n      }\n    },\n    "importStrategy" : {\n      "$ref" : "trackerImportStrategy.json"\n    },\n    "jobConfiguration" : {\n      "$ref" : "jobConfiguration.json"\n    },\n    "jobId" : {\n      "type" : "string"\n    },\n    "klass" : {\n      "type" : "string"\n    },\n    "messageType" : {\n      "$ref" : "messageType.json"\n    },\n    "object" : {\n      "type" : "string"\n    },\n    "program" : {\n      "$ref" : "program.json"\n    },\n    "programInstance" : {\n      "$ref" : "programInstance.json"\n    },\n    "programStageInstance" : {\n      "$ref" : "programStageInstance.json"\n    },\n    "uid" : {\n      "type" : "string"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);