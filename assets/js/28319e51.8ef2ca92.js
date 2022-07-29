"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[23269],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,c(c({ref:e},p),{},{components:t})):r.createElement(d,c({ref:e},p))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92978:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},l=void 0,s={unversionedId:"v2.38.1/enrollment__",id:"v2.38.1/enrollment__",title:"enrollment__",description:"",source:"@site/docs/v2.38.1/enrollment__.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/enrollment__",permalink:"/dhis2-json-schema-generator/v2.38.1/enrollment__",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"enrollment_",permalink:"/dhis2-json-schema-generator/v2.38.1/enrollment_"},next:{title:"enrollments",permalink:"/dhis2-json-schema-generator/v2.38.1/enrollments"}},p={},u=[],m={toc:u};function f(n){var e=n.components,t=(0,o.Z)(n,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "attributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attribute___.json"\n      }\n    },\n    "completedAt" : {\n      "$comment" : "Undefined"\n    },\n    "completedBy" : {\n      "type" : "string"\n    },\n    "createdAt" : {\n      "$comment" : "Undefined"\n    },\n    "createdAtClient" : {\n      "$comment" : "Undefined"\n    },\n    "createdBy" : {\n      "$ref" : "user_.json"\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "enrolledAt" : {\n      "$comment" : "Undefined"\n    },\n    "enrollment" : {\n      "type" : "string"\n    },\n    "events" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "event__.json"\n      }\n    },\n    "followUp" : {\n      "type" : "boolean"\n    },\n    "geometry" : {\n      "$comment" : "Undefined"\n    },\n    "notes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "note_.json"\n      }\n    },\n    "occurredAt" : {\n      "$comment" : "Undefined"\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "orgUnitName" : {\n      "type" : "string"\n    },\n    "program" : {\n      "type" : "string"\n    },\n    "status" : {\n      "$ref" : "enrollmentStatus_.json"\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "trackedEntity" : {\n      "type" : "string"\n    },\n    "updatedAt" : {\n      "$comment" : "Undefined"\n    },\n    "updatedAtClient" : {\n      "$comment" : "Undefined"\n    },\n    "updatedBy" : {\n      "$ref" : "user_.json"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);