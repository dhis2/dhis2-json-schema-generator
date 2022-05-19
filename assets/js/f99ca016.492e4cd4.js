"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[46597],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),f=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=f(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=f(n),m=a,d=l["".concat(s,".").concat(m)]||l[m]||p[m]||o;return n?t.createElement(d,i(i({ref:r},u),{},{components:n})):t.createElement(d,i({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var f=2;f<o;f++)i[f]=n[f];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},96911:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return p}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},s=void 0,f={unversionedId:"v2.37.6/trackerIdentifierParams",id:"v2.37.6/trackerIdentifierParams",title:"trackerIdentifierParams",description:"",source:"@site/docs/v2.37.6/trackerIdentifierParams.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/trackerIdentifierParams",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerIdentifierParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerIdentifierBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerIdentifierBuilder"},next:{title:"trackerIdentifierParamsBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerIdentifierParamsBuilder"}},u={},p=[],l={toc:p};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "categoryOptionComboIdScheme" : {\n      "$ref" : "trackerIdentifier.json"\n    },\n    "categoryOptionIdScheme" : {\n      "$ref" : "trackerIdentifier.json"\n    },\n    "dataElementIdScheme" : {\n      "$ref" : "trackerIdentifier.json"\n    },\n    "idScheme" : {\n      "$ref" : "trackerIdentifier.json"\n    },\n    "orgUnitIdScheme" : {\n      "$ref" : "trackerIdentifier.json"\n    },\n    "programIdScheme" : {\n      "$ref" : "trackerIdentifier.json"\n    },\n    "programStageIdScheme" : {\n      "$ref" : "trackerIdentifier.json"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);