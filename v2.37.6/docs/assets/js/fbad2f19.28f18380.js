"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15321],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],c={},p=void 0,i={unversionedId:"schemas/dataApprovalPermissions",id:"schemas/dataApprovalPermissions",title:"dataApprovalPermissions",description:"",source:"@site/docs/schemas/dataApprovalPermissions.md",sourceDirName:"schemas",slug:"/schemas/dataApprovalPermissions",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/dataApprovalPermissions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataApprovalLevel",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/dataApprovalLevel"},next:{title:"dataApprovalState",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/dataApprovalState"}},l={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "approvedAt" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "approvedBy" : {\n      "type" : "string"\n    },\n    "mayAccept" : {\n      "type" : "boolean"\n    },\n    "mayApprove" : {\n      "type" : "boolean"\n    },\n    "mayReadData" : {\n      "type" : "boolean"\n    },\n    "mayUnaccept" : {\n      "type" : "boolean"\n    },\n    "mayUnapprove" : {\n      "type" : "boolean"\n    },\n    "state" : {\n      "type" : "string"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);