"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[28703],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return r?t.createElement(d,i(i({ref:n},p),{},{components:r})):t.createElement(d,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36871:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},s=void 0,u={unversionedId:"v2.36.11/sharing",id:"v2.36.11/sharing",title:"sharing",description:"",source:"@site/docs/v2.36.11/sharing.md",sourceDirName:"v2.36.11",slug:"/v2.36.11/sharing",permalink:"/dhis2-json-schema-generator/v2.36.11/sharing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"settingKey",permalink:"/dhis2-json-schema-generator/v2.36.11/settingKey"},next:{title:"sharingBuilder",permalink:"/dhis2-json-schema-generator/v2.36.11/sharingBuilder"}},p={},l=[],f={toc:l};function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "external" : {\n      "type" : "boolean"\n    },\n    "owner" : {\n      "type" : "string"\n    },\n    "public" : {\n      "type" : "string"\n    },\n    "userGroups" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "additionalProperties" : {\n        "$ref" : "userGroupAccess_.json"\n      }\n    },\n    "users" : {\n      "type" : "object",\n      "$comment" : "Undefined",\n      "additionalProperties" : {\n        "$ref" : "userAccess_.json"\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);