"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[90870],{3905:function(e,n,r){r.d(n,{Zo:function(){return f},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},f=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=o,y=l["".concat(s,".").concat(m)]||l[m]||p[m]||i;return r?t.createElement(y,a(a({ref:n},f),{},{components:r})):t.createElement(y,a({ref:n},f))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},68337:function(e,n,r){r.r(n),r.d(n,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},s=void 0,u={unversionedId:"v2.36.10/configuration",id:"v2.36.10/configuration",title:"configuration",description:"",source:"@site/docs/v2.36.10/configuration.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/configuration",permalink:"/dhis2-json-schema-generator/v2.36.10/configuration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"compression",permalink:"/dhis2-json-schema-generator/v2.36.10/compression"},next:{title:"configurationKey",permalink:"/dhis2-json-schema-generator/v2.36.10/configurationKey"}},f={},p=[],l={toc:p};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "corsWhitelist" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "feedbackRecipients" : {\n      "$ref" : "userGroup.json"\n    },\n    "infrastructuralDataElements" : {\n      "$ref" : "dataElementGroup.json"\n    },\n    "infrastructuralIndicators" : {\n      "$ref" : "indicatorGroup.json"\n    },\n    "infrastructuralPeriodType" : {\n      "$ref" : "periodType.json"\n    },\n    "offlineOrganisationUnitLevel" : {\n      "$ref" : "organisationUnitLevel.json"\n    },\n    "selfRegistrationOrgUnit" : {\n      "$ref" : "organisationUnit.json"\n    },\n    "selfRegistrationRole" : {\n      "$ref" : "userAuthorityGroup.json"\n    },\n    "systemId" : {\n      "type" : "string"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);