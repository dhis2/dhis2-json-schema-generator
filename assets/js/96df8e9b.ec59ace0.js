"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[49427],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=c(t),f=o,m=y["".concat(p,".").concat(f)]||y[f]||u[f]||a;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},25539:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},p=void 0,c={unversionedId:"v2.39.1/event",id:"v2.39.1/event",title:"event",description:"",source:"@site/docs/v2.39.1/event.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/event",permalink:"/dhis2-json-schema-generator/v2.39.1/event",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"errorReportsWebMessageResponse",permalink:"/dhis2-json-schema-generator/v2.39.1/errorReportsWebMessageResponse"},next:{title:"eventBuilder",permalink:"/dhis2-json-schema-generator/v2.39.1/eventBuilder"}},l={},u=[],y={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "assignedUser" : {\n      "type" : "string"\n    },\n    "assignedUserDisplayName" : {\n      "type" : "string"\n    },\n    "assignedUserFirstName" : {\n      "type" : "string"\n    },\n    "assignedUserSurname" : {\n      "type" : "string"\n    },\n    "assignedUserUsername" : {\n      "type" : "string"\n    },\n    "attributeCategoryOptions" : {\n      "type" : "string"\n    },\n    "attributeOptionCombo" : {\n      "type" : "string"\n    },\n    "completedBy" : {\n      "type" : "string"\n    },\n    "completedDate" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string"\n    },\n    "createdAtClient" : {\n      "type" : "string"\n    },\n    "createdByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "dataValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataValue__.json"\n      }\n    },\n    "deleted" : {\n      "type" : "boolean"\n    },\n    "dueDate" : {\n      "type" : "string"\n    },\n    "enrollment" : {\n      "type" : "string"\n    },\n    "enrollmentStatus" : {\n      "$ref" : "enrollmentStatus.json"\n    },\n    "event" : {\n      "type" : "string"\n    },\n    "eventDate" : {\n      "type" : "string"\n    },\n    "followup" : {\n      "type" : "boolean"\n    },\n    "geometry" : {\n      "$comment" : "Undefined"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string"\n    },\n    "lastUpdatedAtClient" : {\n      "type" : "string"\n    },\n    "lastUpdatedByUserInfo" : {\n      "$ref" : "userInfoSnapshot.json"\n    },\n    "notes" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "note.json"\n      }\n    },\n    "orgUnit" : {\n      "type" : "string"\n    },\n    "orgUnitName" : {\n      "type" : "string"\n    },\n    "program" : {\n      "type" : "string"\n    },\n    "programStage" : {\n      "type" : "string"\n    },\n    "programType" : {\n      "$ref" : "programType.json"\n    },\n    "relationships" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "relationship.json"\n      }\n    },\n    "status" : {\n      "$ref" : "eventStatus.json"\n    },\n    "storedBy" : {\n      "type" : "string"\n    },\n    "trackedEntityInstance" : {\n      "type" : "string"\n    }\n  },\n  "required" : [ "createdAtClient", "enrollment", "enrollmentStatus", "event", "eventDate", "lastUpdatedAtClient", "program", "programStage", "programType", "status" ]\n}\n')))}f.isMDXComponent=!0}}]);