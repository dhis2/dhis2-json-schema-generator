"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[95181],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,g=f["".concat(i,".").concat(m)]||f[m]||l[m]||o;return n?t.createElement(g,s(s({ref:r},u),{},{components:n})):t.createElement(g,s({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68463:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],c={},i=void 0,p={unversionedId:"v2.37.4/programMessageBuilder",id:"v2.37.4/programMessageBuilder",title:"programMessageBuilder",description:"",source:"@site/docs/v2.37.4/programMessageBuilder.md",sourceDirName:"v2.37.4",slug:"/v2.37.4/programMessageBuilder",permalink:"/dhis2-json-schema-generator/v2.37.4/programMessageBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programMessageBatch",permalink:"/dhis2-json-schema-generator/v2.37.4/programMessageBatch"},next:{title:"programMessageCategory",permalink:"/dhis2-json-schema-generator/v2.37.4/programMessageCategory"}},u={},l=[],f={toc:l};function m(e){var r=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "deliveryChannels(Set<DeliveryChannel>)" : {\n      "$ref" : "#"\n    },\n    "messageStatus(ProgramMessageStatus)" : {\n      "$ref" : "#"\n    },\n    "notificationTemplate(String)" : {\n      "$ref" : "#"\n    },\n    "processedDate(Date)" : {\n      "$ref" : "#"\n    },\n    "programInstance(ProgramInstance)" : {\n      "$ref" : "#"\n    },\n    "programStageInstance(ProgramStageInstance)" : {\n      "$ref" : "#"\n    },\n    "recipients(ProgramMessageRecipients)" : {\n      "$ref" : "#"\n    },\n    "storeCopy(boolean)" : {\n      "$ref" : "#"\n    },\n    "subject(String)" : {\n      "$ref" : "#"\n    },\n    "text(String)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);