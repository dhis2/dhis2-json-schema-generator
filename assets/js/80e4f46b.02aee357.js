"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[96653],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return l}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),O=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=O(e.components);return r.createElement(u.Provider,{value:t},e.children)},T={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=O(n),l=o,f=s["".concat(u,".").concat(l)]||s[l]||T[l]||c;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var O=2;O<c;O++)a[O]=n[O];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},48555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return l},frontMatter:function(){return i},metadata:function(){return O},toc:function(){return T}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],i={},u=void 0,O={unversionedId:"v2.39.1/objectType",id:"v2.39.1/objectType",title:"objectType",description:"",source:"@site/docs/v2.39.1/objectType.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/objectType",permalink:"/dhis2-json-schema-generator/v2.39.1/objectType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"objectStyle",permalink:"/dhis2-json-schema-generator/v2.39.1/objectStyle"},next:{title:"objectValueTypeRenderingOption",permalink:"/dhis2-json-schema-generator/v2.39.1/objectValueTypeRenderingOption"}},p={},T=[],s={toc:T};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "DATA_ELEMENT", "DATA_ELEMENT_GROUP", "INDICATOR", "INDICATOR_GROUP", "DATA_SET", "ORGANISATION_UNIT", "ORGANISATION_UNIT_GROUP", "ORGANISATION_UNIT_GROUP_SET", "USER", "USER_GROUP", "PROGRAM", "PROGRAM_STAGE", "TRACKED_ENTITY_TYPE", "TRACKED_ENTITY_ATTRIBUTE", "CATEGORY_OPTION", "CATEGORY_OPTION_GROUP", "DOCUMENT", "OPTION", "OPTION_SET", "CONSTANT", "LEGEND_SET", "PROGRAM_INDICATOR", "SQL_VIEW", "SECTION", "CATEGORY_OPTION_COMBO", "CATEGORY_OPTION_GROUP_SET", "DATA_ELEMENT_GROUP_SET", "VALIDATION_RULE", "VALIDATION_RULE_GROUP", "CATEGORY", "VISUALIZATION", "MAP", "EVENT_REPORT", "EVENT_CHART", "RELATIONSHIP_TYPE" ]\n}\n')))}l.isMDXComponent=!0}}]);