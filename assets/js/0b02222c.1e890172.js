"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[96304],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=p(t),f=o,d=y["".concat(c,".").concat(f)]||y[f]||l[f]||a;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},11799:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},c=void 0,p={unversionedId:"v40.0/userCredentialsDto",id:"v40.0/userCredentialsDto",title:"userCredentialsDto",description:"",source:"@site/docs/v40.0/userCredentialsDto.md",sourceDirName:"v40.0",slug:"/v40.0/userCredentialsDto",permalink:"/dhis2-json-schema-generator/v40.0/userCredentialsDto",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"userBuilder",permalink:"/dhis2-json-schema-generator/v40.0/userBuilder"},next:{title:"userDatastoreEntry",permalink:"/dhis2-json-schema-generator/v40.0/userDatastoreEntry"}},u={},l=[],y={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "accountExpiry" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "catDimensionConstraints" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "category.json"\n      }\n    },\n    "cogsDimensionConstraints" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "categoryOptionGroupSet.json"\n      }\n    },\n    "disabled" : {\n      "type" : "boolean"\n    },\n    "externalAuth" : {\n      "type" : "boolean"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "idToken" : {\n      "type" : "string"\n    },\n    "invitation" : {\n      "type" : "boolean"\n    },\n    "lastLogin" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "ldapId" : {\n      "type" : "string"\n    },\n    "openId" : {\n      "type" : "string"\n    },\n    "password" : {\n      "type" : "string"\n    },\n    "passwordLastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "previousPasswords" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "restoreExpiry" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "restoreToken" : {\n      "type" : "string"\n    },\n    "selfRegistered" : {\n      "type" : "boolean"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "twoFA" : {\n      "type" : "boolean"\n    },\n    "uid" : {\n      "type" : "string"\n    },\n    "userRoles" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userRole.json"\n      }\n    },\n    "username" : {\n      "type" : "string"\n    },\n    "uuid" : {\n      "type" : "string"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);