"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[53410],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=p(t),f=o,m=y["".concat(s,".").concat(f)]||y[f]||l[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},54462:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s=void 0,p={unversionedId:"v2.36.10/eventRow",id:"v2.36.10/eventRow",title:"eventRow",description:"",source:"@site/docs/v2.36.10/eventRow.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/eventRow",permalink:"/dhis2-json-schema-generator/v2.36.10/eventRow",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eventReport",permalink:"/dhis2-json-schema-generator/v2.36.10/eventReport"},next:{title:"eventRows",permalink:"/dhis2-json-schema-generator/v2.36.10/eventRows"}},u={},l=[],y={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "attributeCategoryOptions" : {\n      "type" : "string"\n    },\n    "attributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attribute_.json"\n      }\n    },\n    "dataValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataValue__.json"\n      }\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "dueDate" : {\n      "type" : "string"\n    },\n    "enrollment" : {\n      "type" : "string"\n    },\n    "event" : {\n      "type" : "string"\n    },\n    "eventDate" : {\n      "type" : "string"\n    },\n    "followup" : {\n      "type" : "boolean"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "notes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "note.json"\n      }\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "orgUnitName" : {\n      "type" : "string"\n    },\n    "program" : {\n      "type" : "string"\n    },\n    "programStage" : {\n      "type" : "string"\n    },\n    "trackedEntityInstance" : {\n      "type" : "string"\n    },\n    "trackedEntityInstanceCreated" : {\n      "type" : "string"\n    },\n    "trackedEntityInstanceInactive" : {\n      "type" : "boolean"\n    },\n    "trackedEntityInstanceOrgUnit" : {\n      "type" : "string"\n    },\n    "trackedEntityInstanceOrgUnitName" : {\n      "type" : "string"\n    }\n  },\n  "required" : [ "eventDate" ]\n}\n')))}f.isMDXComponent=!0}}]);