"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63550],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,y=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={},s=void 0,p={unversionedId:"schemas/completeDataSetRegistrationRequest",id:"schemas/completeDataSetRegistrationRequest",title:"completeDataSetRegistrationRequest",description:"",source:"@site/docs/schemas/completeDataSetRegistrationRequest.md",sourceDirName:"schemas",slug:"/schemas/completeDataSetRegistrationRequest",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/completeDataSetRegistrationRequest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"completeDataSetRegistration",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/completeDataSetRegistration"},next:{title:"completeDataSetRegistration_",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/completeDataSetRegistration_"}},u={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "cc" : {\n      "type" : "string"\n    },\n    "cd" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "completed" : {\n      "type" : "boolean"\n    },\n    "cp" : {\n      "type" : "string"\n    },\n    "ds" : {\n      "type" : "string"\n    },\n    "multiOu" : {\n      "type" : "boolean"\n    },\n    "ou" : {\n      "type" : "string"\n    },\n    "pe" : {\n      "type" : "string"\n    },\n    "sb" : {\n      "type" : "string"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);