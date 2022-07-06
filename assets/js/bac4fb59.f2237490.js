"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[46462],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||c;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},79339:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=t(87462),a=t(63366),c=(t(67294),t(3905)),o=["components"],i={},u=void 0,s={unversionedId:"v2.38.1/trackerIdSchemeParamBuilder",id:"v2.38.1/trackerIdSchemeParamBuilder",title:"trackerIdSchemeParamBuilder",description:"",source:"@site/docs/v2.38.1/trackerIdSchemeParamBuilder.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/trackerIdSchemeParamBuilder",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerIdSchemeParamBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerIdSchemeParam",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerIdSchemeParam"},next:{title:"trackerIdSchemeParams",permalink:"/dhis2-json-schema-generator/v2.38.1/trackerIdSchemeParams"}},l={},m=[],p={toc:m};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "idScheme(TrackerIdScheme)" : {\n      "$ref" : "#"\n    },\n    "value(String)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);