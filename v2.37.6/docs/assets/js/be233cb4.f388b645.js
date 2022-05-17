"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74860],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=p(t),m=a,b=y["".concat(c,".").concat(m)]||y[m]||u[m]||o;return t?r.createElement(b,i(i({ref:n},l),{},{components:t})):r.createElement(b,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},49663:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={},c=void 0,p={unversionedId:"schemas/schema",id:"schemas/schema",title:"schema",description:"",source:"@site/docs/schemas/schema.md",sourceDirName:"schemas",slug:"/schemas/schema",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/schema",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"schedulingType",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/schedulingType"},next:{title:"schemas",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/"}},l={},u=[],y={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "apiEndpoint" : {\n      "type" : "string"\n    },\n    "authorities" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "authority.json"\n      }\n    },\n    "collectionName" : {\n      "type" : "string"\n    },\n    "dataReadShareable" : {\n      "type" : "boolean"\n    },\n    "dataShareable" : {\n      "type" : "boolean"\n    },\n    "dataWriteShareable" : {\n      "type" : "boolean"\n    },\n    "defaultPrivate" : {\n      "type" : "boolean"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "embeddedObject" : {\n      "type" : "boolean"\n    },\n    "favoritable" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "identifiableObject" : {\n      "type" : "boolean"\n    },\n    "implicitPrivateAuthority" : {\n      "type" : "boolean"\n    },\n    "klass" : {\n      "type" : "string"\n    },\n    "metadata" : {\n      "type" : "boolean"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "nameableObject" : {\n      "type" : "boolean"\n    },\n    "namespace" : {\n      "type" : "string"\n    },\n    "order" : {\n      "type" : "integer"\n    },\n    "persisted" : {\n      "type" : "boolean"\n    },\n    "plural" : {\n      "type" : "string"\n    },\n    "properties" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "property.json"\n      }\n    },\n    "references" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "relativeApiEndpoint" : {\n      "type" : "string"\n    },\n    "secondaryMetadata" : {\n      "type" : "boolean"\n    },\n    "shareable" : {\n      "type" : "boolean"\n    },\n    "singular" : {\n      "type" : "string"\n    },\n    "subscribable" : {\n      "type" : "boolean"\n    },\n    "subscribableObject" : {\n      "type" : "boolean"\n    },\n    "translatable" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);