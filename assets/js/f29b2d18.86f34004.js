"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[63752],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=p(t),d=a,f=y["".concat(s,".").concat(d)]||y[d]||l[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},73842:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={},s=void 0,p={unversionedId:"v2.37.7/trackedEntityInstance",id:"v2.37.7/trackedEntityInstance",title:"trackedEntityInstance",description:"",source:"@site/docs/v2.37.7/trackedEntityInstance.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/trackedEntityInstance",permalink:"/dhis2-json-schema-generator/v2.37.7/trackedEntityInstance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackedEntityDataValueAudit",permalink:"/dhis2-json-schema-generator/v2.37.7/trackedEntityDataValueAudit"},next:{title:"trackedEntityInstanceAudit",permalink:"/dhis2-json-schema-generator/v2.37.7/trackedEntityInstanceAudit"}},u={},l=[],y={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "attributes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attribute_.json"\n      }\n    },\n    "coordinates" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string"\n    },\n    "createdAtClient" : {\n      "type" : "string"\n    },\n    "createdByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "enrollments" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "enrollment.json"\n      }\n    },\n    "featureType" : {\n      "$ref" : "featureType.json"\n    },\n    "geometry" : {\n      "anyOf" : [ {\n        "type" : "array"\n      }, {\n        "type" : "object"\n      } ],\n      "$comment" : "Undefined"\n    },\n    "inactive" : {\n      "type" : "boolean"\n    },\n    "lastUpdated" : {\n      "type" : "string"\n    },\n    "lastUpdatedAtClient" : {\n      "type" : "string"\n    },\n    "lastUpdatedByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "potentialDuplicate" : {\n      "type" : "boolean"\n    },\n    "programOwners" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "programOwner.json"\n      }\n    },\n    "relationships" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationship.json"\n      }\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "trackedEntityInstance" : {\n      "type" : "string"\n    },\n    "trackedEntityType" : {\n      "type" : "string"\n    }\n  },\n  "required" : [ "created", "createdAtClient", "lastUpdated", "lastUpdatedAtClient", "orgUnit", "trackedEntityInstance", "trackedEntityType" ]\n}\n')))}d.isMDXComponent=!0}}]);