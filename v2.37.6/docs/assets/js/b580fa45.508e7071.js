"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74850],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||a;return n?t.createElement(d,c(c({ref:r},u),{},{components:n})):t.createElement(d,c({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=l;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1746:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],s={},i=void 0,p={unversionedId:"schemas/programExpression",id:"schemas/programExpression",title:"programExpression",description:"",source:"@site/docs/schemas/programExpression.md",sourceDirName:"schemas",slug:"/schemas/programExpression",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/programExpression",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programDataElementDimensionItem",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/programDataElementDimensionItem"},next:{title:"programIndicator",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/programIndicator"}},u={},m=[],l={toc:m};function f(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "description" : {\n      "type" : "string"\n    },\n    "expression" : {\n      "type" : "string"\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);