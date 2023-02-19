"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[10766],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return E}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(t),E=o,m=f["".concat(u,".").concat(E)]||f[E]||s[E]||a;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function E(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99339:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return E},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={},u=void 0,p={unversionedId:"v2.39.1/valueType",id:"v2.39.1/valueType",title:"valueType",description:"",source:"@site/docs/v2.39.1/valueType.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/valueType",permalink:"/dhis2-json-schema-generator/v2.39.1/valueType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"validationSummary",permalink:"/dhis2-json-schema-generator/v2.39.1/validationSummary"},next:{title:"valueTypeRenderingObject",permalink:"/dhis2-json-schema-generator/v2.39.1/valueTypeRenderingObject"}},l={},s=[],f={toc:s};function E(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "TEXT", "LONG_TEXT", "LETTER", "PHONE_NUMBER", "EMAIL", "BOOLEAN", "TRUE_ONLY", "DATE", "DATETIME", "TIME", "NUMBER", "UNIT_INTERVAL", "PERCENTAGE", "INTEGER", "INTEGER_POSITIVE", "INTEGER_NEGATIVE", "INTEGER_ZERO_OR_POSITIVE", "TRACKER_ASSOCIATE", "USERNAME", "COORDINATE", "ORGANISATION_UNIT", "REFERENCE", "AGE", "URL", "FILE_RESOURCE", "IMAGE", "GEOJSON", "MULTI_TEXT" ]\n}\n')))}E.isMDXComponent=!0}}]);