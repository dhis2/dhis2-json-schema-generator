"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[78393],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90551:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s=void 0,p={unversionedId:"v2.37.4/passwordValidationError",id:"v2.37.4/passwordValidationError",title:"passwordValidationError",description:"",source:"@site/docs/v2.37.4/passwordValidationError.md",sourceDirName:"v2.37.4",slug:"/v2.37.4/passwordValidationError",permalink:"/dhis2-json-schema-generator/v2.37.4/passwordValidationError",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"parserType",permalink:"/dhis2-json-schema-generator/v2.37.4/parserType"},next:{title:"patch",permalink:"/dhis2-json-schema-generator/v2.37.4/patch"}},u={},l=[],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "PASSWORD_IS_MANDATORY", "PASSWORD_TOO_LONG_TOO_SHORT", "PASSWORD_MUST_HAVE_DIGIT", "PASSWORD_MUST_HAVE_UPPER", "PASSWORD_MUST_HAVE_SPECIAL", "PASSWORD_CONTAINS_RESERVED_WORD", "PASSWORD_CONTAINS_NAME_OR_EMAIL", "PASSWORD_ALREADY_USED_BEFORE" ]\n}\n')))}d.isMDXComponent=!0}}]);