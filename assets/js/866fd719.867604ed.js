"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[31036],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),y=o,m=f["".concat(s,".").concat(y)]||f[y]||l[y]||a;return t?r.createElement(m,p(p({ref:n},u),{},{components:t})):r.createElement(m,p({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55464:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),p=["components"],i={},s=void 0,c={unversionedId:"v2.37.6/app",id:"v2.37.6/app",title:"app",description:"",source:"@site/docs/v2.37.6/app.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/app",permalink:"/dhis2-json-schema-generator/v2.37.6/app",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apiTokenType",permalink:"/dhis2-json-schema-generator/v2.37.6/apiTokenType"},next:{title:"appActivities",permalink:"/dhis2-json-schema-generator/v2.37.6/appActivities"}},u={},l=[],f={toc:l};function y(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "activities" : {\n      "$ref" : "appActivities.json"\n    },\n    "appState" : {\n      "$ref" : "appStatus.json"\n    },\n    "appStorageSource" : {\n      "$ref" : "appStorageSource.json"\n    },\n    "appType" : {\n      "$ref" : "appType.json"\n    },\n    "app_hub_id" : {\n      "type" : "string"\n    },\n    "authorities" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "baseUrl" : {\n      "type" : "string"\n    },\n    "bundled" : {\n      "type" : "boolean"\n    },\n    "core_app" : {\n      "type" : "boolean"\n    },\n    "default_locale" : {\n      "type" : "string"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "developer" : {\n      "$ref" : "appDeveloper.json"\n    },\n    "folderName" : {\n      "type" : "string"\n    },\n    "icons" : {\n      "$ref" : "appIcons.json"\n    },\n    "installs_allowed_from" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "key" : {\n      "type" : "string"\n    },\n    "launchUrl" : {\n      "type" : "string"\n    },\n    "launch_path" : {\n      "type" : "string"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "settings" : {\n      "$ref" : "appSettings.json"\n    },\n    "short_name" : {\n      "type" : "string"\n    },\n    "version" : {\n      "type" : "string"\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);