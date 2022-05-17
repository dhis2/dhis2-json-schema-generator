"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69683],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return l}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),m=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=m(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=m(r),l=o,y=f["".concat(c,".").concat(l)]||f[l]||u[l]||a;return r?t.createElement(y,i(i({ref:n},p),{},{components:r})):t.createElement(y,i({ref:n},p))}));function l(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58209:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={},c=void 0,m={unversionedId:"schemas/importSummary_",id:"schemas/importSummary_",title:"importSummary_",description:"",source:"@site/docs/schemas/importSummary_.md",sourceDirName:"schemas",slug:"/schemas/importSummary_",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/importSummary_",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"importSummary",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/importSummary"},next:{title:"importTypeSummary",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/importTypeSummary"}},p={},u=[],f={toc:u};function l(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "conflicts" : {\n      "type" : "array",\n      "$comment" : "Undefined"\n    },\n    "dataSetComplete" : {\n      "type" : "string"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "enrollments" : {\n      "$ref" : "importSummaries.json"\n    },\n    "events" : {\n      "$ref" : "importSummaries.json"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "importCount" : {\n      "$ref" : "importCount.json"\n    },\n    "importOptions" : {\n      "$ref" : "importOptions.json"\n    },\n    "reference" : {\n      "type" : "string"\n    },\n    "relationships" : {\n      "$ref" : "importSummaries.json"\n    },\n    "responseType" : {\n      "type" : "string"\n    },\n    "status" : {\n      "$ref" : "importStatus.json"\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);