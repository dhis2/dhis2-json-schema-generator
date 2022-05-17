"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[27312],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=s(r),f=o,d=y["".concat(u,".").concat(f)]||y[f]||p[f]||a;return r?t.createElement(d,c(c({ref:n},l),{},{components:r})):t.createElement(d,c({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=y;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},62384:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={},u=void 0,s={unversionedId:"v2.37.6/analyticsPeriodBoundaryType",id:"v2.37.6/analyticsPeriodBoundaryType",title:"analyticsPeriodBoundaryType",description:"",source:"@site/docs/v2.37.6/analyticsPeriodBoundaryType.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/analyticsPeriodBoundaryType",permalink:"/dhis2-json-schema-generator/v2.37.6/analyticsPeriodBoundaryType",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"analyticsPeriodBoundary",permalink:"/dhis2-json-schema-generator/v2.37.6/analyticsPeriodBoundary"},next:{title:"analyticsTableHook",permalink:"/dhis2-json-schema-generator/v2.37.6/analyticsTableHook"}},l={},p=[],y={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "BEFORE_START_OF_REPORTING_PERIOD", "BEFORE_END_OF_REPORTING_PERIOD", "AFTER_START_OF_REPORTING_PERIOD", "AFTER_END_OF_REPORTING_PERIOD" ]\n}\n')))}f.isMDXComponent=!0}}]);