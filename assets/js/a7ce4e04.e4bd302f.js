"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[33807],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=o,d=l["".concat(s,".").concat(f)]||l[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},54558:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s=void 0,p={unversionedId:"v2.35.13/dataDimensionItem",id:"v2.35.13/dataDimensionItem",title:"dataDimensionItem",description:"",source:"@site/docs/v2.35.13/dataDimensionItem.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/dataDimensionItem",permalink:"/dhis2-json-schema-generator/v2.35.13/dataDimensionItem",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataApprovalWorkflow",permalink:"/dhis2-json-schema-generator/v2.35.13/dataApprovalWorkflow"},next:{title:"dataDimensionItemType",permalink:"/dhis2-json-schema-generator/v2.35.13/dataDimensionItemType"}},m={},u=[],l={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "dataDimensionItemType" : {\n      "$ref" : "dataDimensionItemType.json"\n    },\n    "dataElement" : {\n      "$ref" : "dataElement.json"\n    },\n    "dataElementOperand" : {\n      "$ref" : "dataElementOperand.json"\n    },\n    "indicator" : {\n      "$ref" : "indicator.json"\n    },\n    "programAttribute" : {\n      "$ref" : "programTrackedEntityAttributeDimensionItem.json"\n    },\n    "programDataElement" : {\n      "$ref" : "programDataElementDimensionItem.json"\n    },\n    "programIndicator" : {\n      "$ref" : "programIndicator.json"\n    },\n    "reportingRate" : {\n      "$ref" : "reportingRate.json"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);