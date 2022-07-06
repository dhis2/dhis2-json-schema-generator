"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[77177],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,y=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(y,c(c({ref:n},l),{},{components:t})):r.createElement(y,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40089:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={},s=void 0,u={unversionedId:"v2.38.1/trackedEntityInstanceParams",id:"v2.38.1/trackedEntityInstanceParams",title:"trackedEntityInstanceParams",description:"",source:"@site/docs/v2.38.1/trackedEntityInstanceParams.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/trackedEntityInstanceParams",permalink:"/dhis2-json-schema-generator/v2.38.1/trackedEntityInstanceParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackedEntityInstanceFilter",permalink:"/dhis2-json-schema-generator/v2.38.1/trackedEntityInstanceFilter"},next:{title:"trackedEntityInstance_",permalink:"/dhis2-json-schema-generator/v2.38.1/trackedEntityInstance_"}},l={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "dataSynchronizationQuery" : {\n      "type" : "boolean"\n    },\n    "includeDeleted" : {\n      "type" : "boolean"\n    },\n    "includeEnrollments" : {\n      "type" : "boolean"\n    },\n    "includeEvents" : {\n      "type" : "boolean"\n    },\n    "includeProgramOwners" : {\n      "type" : "boolean"\n    },\n    "includeRelationships" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);