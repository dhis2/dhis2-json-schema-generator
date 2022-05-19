"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[32313],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},u=void 0,s={unversionedId:"v2.36.10/trackedEntityBuilder",id:"v2.36.10/trackedEntityBuilder",title:"trackedEntityBuilder",description:"",source:"@site/docs/v2.36.10/trackedEntityBuilder.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/trackedEntityBuilder",permalink:"/dhis2-json-schema-generator/v2.36.10/trackedEntityBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackedEntityAttributeValueAudit",permalink:"/dhis2-json-schema-generator/v2.36.10/trackedEntityAttributeValueAudit"},next:{title:"trackedEntityComment",permalink:"/dhis2-json-schema-generator/v2.36.10/trackedEntityComment"}},l={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "attributes(List<Attribute>)" : {\n      "$ref" : "#"\n    },\n    "createdAt(Instant)" : {\n      "$ref" : "#"\n    },\n    "createdAtClient(Instant)" : {\n      "$ref" : "#"\n    },\n    "deleted(boolean)" : {\n      "$ref" : "#"\n    },\n    "enrollments(List<Enrollment>)" : {\n      "$ref" : "#"\n    },\n    "geometry(Geometry)" : {\n      "$ref" : "#"\n    },\n    "inactive(boolean)" : {\n      "$ref" : "#"\n    },\n    "orgUnit(String)" : {\n      "$ref" : "#"\n    },\n    "programOwners(List<ProgramOwner>)" : {\n      "$ref" : "#"\n    },\n    "relationships(List<Relationship>)" : {\n      "$ref" : "#"\n    },\n    "storedBy(String)" : {\n      "$ref" : "#"\n    },\n    "trackedEntity(String)" : {\n      "$ref" : "#"\n    },\n    "trackedEntityType(String)" : {\n      "$ref" : "#"\n    },\n    "updatedAt(Instant)" : {\n      "$ref" : "#"\n    },\n    "updatedAtClient(Instant)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);