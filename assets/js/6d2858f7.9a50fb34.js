"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[37585],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,y=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},96884:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s=void 0,p={unversionedId:"v2.36.10/csvEventDataValue",id:"v2.36.10/csvEventDataValue",title:"csvEventDataValue",description:"",source:"@site/docs/v2.36.10/csvEventDataValue.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/csvEventDataValue",permalink:"/dhis2-json-schema-generator/v2.36.10/csvEventDataValue",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"coordinateBuilder",permalink:"/dhis2-json-schema-generator/v2.36.10/coordinateBuilder"},next:{title:"csvImportClass",permalink:"/dhis2-json-schema-generator/v2.36.10/csvImportClass"}},u={},l=[],f={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "completedBy" : {\n      "type" : "string"\n    },\n    "completedDate" : {\n      "type" : "string"\n    },\n    "dataElement" : {\n      "type" : "string"\n    },\n    "dueDate" : {\n      "type" : "string"\n    },\n    "enrollment" : {\n      "type" : "string"\n    },\n    "event" : {\n      "type" : "string"\n    },\n    "eventDate" : {\n      "type" : "string"\n    },\n    "geometry" : {\n      "type" : "string"\n    },\n    "latitude" : {\n      "type" : "number"\n    },\n    "longitude" : {\n      "type" : "number"\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "program" : {\n      "type" : "string"\n    },\n    "programStage" : {\n      "type" : "string"\n    },\n    "providedElsewhere" : {\n      "type" : "boolean"\n    },\n    "status" : {\n      "type" : "string"\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "value" : {\n      "type" : "string"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);