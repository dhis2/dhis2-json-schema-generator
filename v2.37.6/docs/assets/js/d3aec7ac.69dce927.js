"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3778],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),y=a,f=m["".concat(i,".").concat(y)]||m[y]||l[y]||o;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13124:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],s={},i=void 0,u={unversionedId:"schemas/csvEventDataValue",id:"schemas/csvEventDataValue",title:"csvEventDataValue",description:"",source:"@site/docs/schemas/csvEventDataValue.md",sourceDirName:"schemas",slug:"/schemas/csvEventDataValue",permalink:"/schemas/csvEventDataValue",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"continuousAnalyticsJobParameters",permalink:"/schemas/continuousAnalyticsJobParameters"},next:{title:"csvImportClass",permalink:"/schemas/csvImportClass"}},p={},l=[],m={toc:l};function y(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "completedBy" : {\n      "type" : "string"\n    },\n    "completedDate" : {\n      "type" : "string"\n    },\n    "dataElement" : {\n      "type" : "string"\n    },\n    "dueDate" : {\n      "type" : "string"\n    },\n    "enrollment" : {\n      "type" : "string"\n    },\n    "event" : {\n      "type" : "string"\n    },\n    "eventDate" : {\n      "type" : "string"\n    },\n    "geometry" : {\n      "type" : "string"\n    },\n    "latitude" : {\n      "type" : "number"\n    },\n    "longitude" : {\n      "type" : "number"\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "program" : {\n      "type" : "string"\n    },\n    "programStage" : {\n      "type" : "string"\n    },\n    "providedElsewhere" : {\n      "type" : "boolean"\n    },\n    "status" : {\n      "type" : "string"\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "value" : {\n      "type" : "string"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);