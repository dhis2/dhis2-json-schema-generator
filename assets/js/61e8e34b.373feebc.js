"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[47514],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,v=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(v,p(p({ref:n},l),{},{components:t})):r.createElement(v,p({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9375:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),p=["components"],i={},c=void 0,s={unversionedId:"v2.37.5/dataApprovalPermissions",id:"v2.37.5/dataApprovalPermissions",title:"dataApprovalPermissions",description:"",source:"@site/docs/v2.37.5/dataApprovalPermissions.md",sourceDirName:"v2.37.5",slug:"/v2.37.5/dataApprovalPermissions",permalink:"/dhis2-json-schema-generator/v2.37.5/dataApprovalPermissions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataApprovalLevel",permalink:"/dhis2-json-schema-generator/v2.37.5/dataApprovalLevel"},next:{title:"dataApprovalState",permalink:"/dhis2-json-schema-generator/v2.37.5/dataApprovalState"}},l={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "approvedAt" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "approvedBy" : {\n      "type" : "string"\n    },\n    "mayAccept" : {\n      "type" : "boolean"\n    },\n    "mayApprove" : {\n      "type" : "boolean"\n    },\n    "mayReadData" : {\n      "type" : "boolean"\n    },\n    "mayUnaccept" : {\n      "type" : "boolean"\n    },\n    "mayUnapprove" : {\n      "type" : "boolean"\n    },\n    "state" : {\n      "type" : "string"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);