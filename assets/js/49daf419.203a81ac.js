"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[9250],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,d=f["".concat(u,".").concat(m)]||f[m]||l[m]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51058:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={},u=void 0,p={unversionedId:"v2.38.1/dataItemBuilder",id:"v2.38.1/dataItemBuilder",title:"dataItemBuilder",description:"",source:"@site/docs/v2.38.1/dataItemBuilder.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/dataItemBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/dataItemBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataItem",permalink:"/dhis2-json-schema-generator/v2.38.1/dataItem"},next:{title:"dataSet",permalink:"/dhis2-json-schema-generator/v2.38.1/dataSet"}},s={},l=[],f={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "code(String)" : {\n      "$ref" : "#"\n    },\n    "dimensionItemType(DimensionItemType)" : {\n      "$ref" : "#"\n    },\n    "displayName(String)" : {\n      "$ref" : "#"\n    },\n    "displayShortName(String)" : {\n      "$ref" : "#"\n    },\n    "id(String)" : {\n      "$ref" : "#"\n    },\n    "name(String)" : {\n      "$ref" : "#"\n    },\n    "programId(String)" : {\n      "$ref" : "#"\n    },\n    "shortName(String)" : {\n      "$ref" : "#"\n    },\n    "simplifiedValueType(ValueType)" : {\n      "$ref" : "#"\n    },\n    "valueType(ValueType)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);