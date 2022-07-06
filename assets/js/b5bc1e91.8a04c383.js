"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[6207],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,g=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return r?t.createElement(g,s(s({ref:n},u),{},{components:r})):t.createElement(g,s({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89543:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={},c=void 0,p={unversionedId:"v2.37.7/programMessageRecipients",id:"v2.37.7/programMessageRecipients",title:"programMessageRecipients",description:"",source:"@site/docs/v2.37.7/programMessageRecipients.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/programMessageRecipients",permalink:"/dhis2-json-schema-generator/v2.37.7/programMessageRecipients",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programMessageCategory",permalink:"/dhis2-json-schema-generator/v2.37.7/programMessageCategory"},next:{title:"programMessageStatus",permalink:"/dhis2-json-schema-generator/v2.37.7/programMessageStatus"}},u={},l=[],m={toc:l};function f(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "emailAddresses" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "organisationUnit" : {\n      "$ref" : "organisationUnit.json"\n    },\n    "phoneNumbers" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "trackedEntityInstance" : {\n      "$ref" : "trackedEntityInstance_.json"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);