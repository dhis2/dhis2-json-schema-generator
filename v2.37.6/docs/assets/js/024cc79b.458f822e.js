"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89845],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,y=m["".concat(p,".").concat(f)]||m[f]||l[f]||o;return t?n.createElement(y,c(c({ref:r},s),{},{components:t})):n.createElement(y,c({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34314:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={},p=void 0,u={unversionedId:"schemas/programTemplateVariable",id:"schemas/programTemplateVariable",title:"programTemplateVariable",description:"",source:"@site/docs/schemas/programTemplateVariable.md",sourceDirName:"schemas",slug:"/schemas/programTemplateVariable",permalink:"/schemas/programTemplateVariable",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"programTempOwnershipAudit",permalink:"/schemas/programTempOwnershipAudit"},next:{title:"programTrackedEntityAttribute",permalink:"/schemas/programTrackedEntityAttribute"}},s={},l=[],m={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "PROGRAM_NAME", "ORG_UNIT_NAME", "CURRENT_DATE", "ENROLLMENT_DATE", "DAYS_SINCE_ENROLLMENT_DATE", "INCIDENT_DATE", "PROGRAM_ID", "ENROLLMENT_ORG_UNIT_ID", "ENROLLMENT_ID", "TRACKED_ENTITY_ID" ]\n}\n')))}f.isMDXComponent=!0}}]);