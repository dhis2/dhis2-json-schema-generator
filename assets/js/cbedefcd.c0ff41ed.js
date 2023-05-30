"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[66149],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return l}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=p(t),l=o,d=f["".concat(c,".").concat(l)]||f[l]||u[l]||a;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function l(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},60841:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={},c=void 0,p={unversionedId:"v40.0/metadataImportParams",id:"v40.0/metadataImportParams",title:"metadataImportParams",description:"",source:"@site/docs/v40.0/metadataImportParams.md",sourceDirName:"v40.0",slug:"/v40.0/metadataImportParams",permalink:"/dhis2-json-schema-generator/v40.0/metadataImportParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metadataIdentifier",permalink:"/dhis2-json-schema-generator/v40.0/metadataIdentifier"},next:{title:"metadataItem",permalink:"/dhis2-json-schema-generator/v40.0/metadataItem"}},m={},u=[],f={toc:u};function l(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "atomicMode" : {\n      "$ref" : "atomicMode.json"\n    },\n    "csvImportClass" : {\n      "$ref" : "csvImportClass.json"\n    },\n    "filename" : {\n      "type" : "string"\n    },\n    "firstRowIsHeader" : {\n      "type" : "boolean"\n    },\n    "flushMode" : {\n      "$ref" : "flushMode.json"\n    },\n    "identifier" : {\n      "$ref" : "preheatIdentifier.json"\n    },\n    "importMode" : {\n      "$ref" : "objectBundleMode.json"\n    },\n    "importReportMode" : {\n      "$ref" : "importReportMode.json"\n    },\n    "importStrategy" : {\n      "$ref" : "importStrategy.json"\n    },\n    "mergeMode" : {\n      "$ref" : "mergeMode.json"\n    },\n    "metadataSyncImport" : {\n      "type" : "boolean"\n    },\n    "preheatMode" : {\n      "$ref" : "preheatMode.json"\n    },\n    "skipSharing" : {\n      "type" : "boolean"\n    },\n    "skipTranslation" : {\n      "type" : "boolean"\n    },\n    "skipValidation" : {\n      "type" : "boolean"\n    },\n    "userOverrideMode" : {\n      "$ref" : "userOverrideMode.json"\n    },\n    "username" : {\n      "type" : "string"\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);