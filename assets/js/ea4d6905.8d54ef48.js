"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[44898],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,y=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22913:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={},c=void 0,l={unversionedId:"v40.0/enrollment",id:"v40.0/enrollment",title:"enrollment",description:"",source:"@site/docs/v40.0/enrollment.md",sourceDirName:"v40.0",slug:"/v40.0/enrollment",permalink:"/dhis2-json-schema-generator/v40.0/enrollment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"endpointItem",permalink:"/dhis2-json-schema-generator/v40.0/endpointItem"},next:{title:"enrollmentBuilder",permalink:"/dhis2-json-schema-generator/v40.0/enrollmentBuilder"}},p={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "attributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attribute_.json"\n      }\n    },\n    "completedBy" : {\n      "type" : "string"\n    },\n    "completedDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "created" : {\n      "type" : "string"\n    },\n    "createdAtClient" : {\n      "type" : "string"\n    },\n    "createdByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "enrollment" : {\n      "type" : "string"\n    },\n    "enrollmentDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "events" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "event.json"\n      }\n    },\n    "followup" : {\n      "type" : "boolean"\n    },\n    "geometry" : {\n      "$comment" : "Undefined"\n    },\n    "incidentDate" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdated" : {\n      "type" : "string"\n    },\n    "lastUpdatedAtClient" : {\n      "type" : "string"\n    },\n    "lastUpdatedByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "notes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "note.json"\n      }\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "orgUnitName" : {\n      "type" : "string"\n    },\n    "program" : {\n      "type" : "string"\n    },\n    "relationships" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationship.json"\n      }\n    },\n    "status" : {\n      "$ref" : "enrollmentStatus.json"\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "trackedEntityInstance" : {\n      "type" : "string"\n    },\n    "trackedEntityType" : {\n      "type" : "string"\n    }\n  },\n  "required" : [ "created", "createdAtClient", "enrollment", "enrollmentDate", "incidentDate", "lastUpdated", "lastUpdatedAtClient", "program", "status", "trackedEntityInstance", "trackedEntityType" ]\n}\n')))}f.isMDXComponent=!0}}]);