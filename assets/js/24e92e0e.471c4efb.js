"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[49003],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),y=o,m=f["".concat(c,".").concat(y)]||f[y]||l[y]||s;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1249:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={},c=void 0,u={unversionedId:"v2.38.1/fileResource",id:"v2.38.1/fileResource",title:"fileResource",description:"",source:"@site/docs/v2.38.1/fileResource.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/fileResource",permalink:"/dhis2-json-schema-generator/v2.38.1/fileResource",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fieldBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/fieldBuilder"},next:{title:"fileResourceDomain",permalink:"/dhis2-json-schema-generator/v2.38.1/fileResourceDomain"}},p={},l=[],f={toc:l};function y(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "contentLength" : {\n      "type" : "integer"\n    },\n    "contentMd5" : {\n      "type" : "string"\n    },\n    "contentType" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "domain" : {\n      "$ref" : "fileResourceDomain.json"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "hasMultipleStorageFiles" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "storageStatus" : {\n      "$ref" : "fileResourceStorageStatus.json"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);