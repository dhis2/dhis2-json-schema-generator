"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58508],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(t),d=o,f=l["".concat(c,".").concat(d)]||l[d]||u[d]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=l;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},26061:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},c=void 0,m={unversionedId:"schemas/metadataImportParams",id:"schemas/metadataImportParams",title:"metadataImportParams",description:"",source:"@site/docs/schemas/metadataImportParams.md",sourceDirName:"schemas",slug:"/schemas/metadataImportParams",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/metadataImportParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"metadata",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/metadata"},next:{title:"metadataItem",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/metadataItem"}},p={},u=[],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "atomicMode" : {\n      "$ref" : "atomicMode.json"\n    },\n    "csvImportClass" : {\n      "$ref" : "csvImportClass.json"\n    },\n    "filename" : {\n      "type" : "string"\n    },\n    "firstRowIsHeader" : {\n      "type" : "boolean"\n    },\n    "flushMode" : {\n      "$ref" : "flushMode.json"\n    },\n    "identifier" : {\n      "$ref" : "preheatIdentifier.json"\n    },\n    "importMode" : {\n      "$ref" : "objectBundleMode.json"\n    },\n    "importReportMode" : {\n      "$ref" : "importReportMode.json"\n    },\n    "importStrategy" : {\n      "$ref" : "importStrategy.json"\n    },\n    "mergeMode" : {\n      "$ref" : "mergeMode.json"\n    },\n    "metadataSyncImport" : {\n      "type" : "boolean"\n    },\n    "preheatMode" : {\n      "$ref" : "preheatMode.json"\n    },\n    "skipSharing" : {\n      "type" : "boolean"\n    },\n    "skipTranslation" : {\n      "type" : "boolean"\n    },\n    "skipValidation" : {\n      "type" : "boolean"\n    },\n    "userOverrideMode" : {\n      "$ref" : "userOverrideMode.json"\n    },\n    "username" : {\n      "type" : "string"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);