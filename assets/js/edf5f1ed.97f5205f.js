"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[24722],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return y}});var t=r(67294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),y=s,m=f["".concat(c,".").concat(y)]||f[y]||l[y]||o;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function y(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20279:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var t=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={},c=void 0,u={unversionedId:"v2.37.4/userAuthorityGroup",id:"v2.37.4/userAuthorityGroup",title:"userAuthorityGroup",description:"",source:"@site/docs/v2.37.4/userAuthorityGroup.md",sourceDirName:"v2.37.4",slug:"/v2.37.4/userAuthorityGroup",permalink:"/dhis2-json-schema-generator/v2.37.4/userAuthorityGroup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"userAccess_",permalink:"/dhis2-json-schema-generator/v2.37.4/userAccess_"},next:{title:"userCredentials",permalink:"/dhis2-json-schema-generator/v2.37.4/userCredentials"}},p={},l=[],f={toc:l};function y(e){var n=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "authorities" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "users" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "user.json"\n      }\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);