"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41888],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(67294);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=c,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?t.createElement(d,a(a({ref:n},l),{},{components:r})):t.createElement(d,a({ref:n},l))}));function f(e,n){var r=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78762:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var t=r(87462),c=r(63366),o=(r(67294),r(3905)),a=["components"],i={},s=void 0,u={unversionedId:"schemas/schedulingFrequency",id:"schemas/schedulingFrequency",title:"schedulingFrequency",description:"",source:"@site/docs/schemas/schedulingFrequency.md",sourceDirName:"schemas",slug:"/schemas/schedulingFrequency",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/schedulingFrequency",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sMSSpecialCharacter",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/sMSSpecialCharacter"},next:{title:"schedulingType",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/schedulingType"}},l={},p=[],m={toc:p};function f(e){var n=e.components,r=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "DAILY", "WEEKLY", "MONTHLY" ]\n}\n')))}f.isMDXComponent=!0}}]);