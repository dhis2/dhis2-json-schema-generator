"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[37320],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86722:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},s=void 0,l={unversionedId:"v2.38.1/relationshipBuilder",id:"v2.38.1/relationshipBuilder",title:"relationshipBuilder",description:"",source:"@site/docs/v2.38.1/relationshipBuilder.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/relationshipBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/relationshipBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"relationship",permalink:"/dhis2-json-schema-generator/v2.38.1/relationship"},next:{title:"relationshipConstraint",permalink:"/dhis2-json-schema-generator/v2.38.1/relationshipConstraint"}},p={},u=[],f={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "bidirectional(boolean)" : {\n      "$ref" : "#"\n    },\n    "createdAt(Instant)" : {\n      "$ref" : "#"\n    },\n    "from(RelationshipItem)" : {\n      "$ref" : "#"\n    },\n    "relationship(String)" : {\n      "$ref" : "#"\n    },\n    "relationshipName(String)" : {\n      "$ref" : "#"\n    },\n    "relationshipType(String)" : {\n      "$ref" : "#"\n    },\n    "to(RelationshipItem)" : {\n      "$ref" : "#"\n    },\n    "updatedAt(Instant)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);