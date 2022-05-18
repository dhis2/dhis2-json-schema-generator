"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[6076],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return y}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),y=a,m=f["".concat(c,".").concat(y)]||f[y]||u[y]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87068:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={},c=void 0,p={unversionedId:"v2.35.13/validationNotificationTemplate",id:"v2.35.13/validationNotificationTemplate",title:"validationNotificationTemplate",description:"",source:"@site/docs/v2.35.13/validationNotificationTemplate.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/validationNotificationTemplate",permalink:"/dhis2-json-schema-generator/v2.35.13/validationNotificationTemplate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"users",permalink:"/dhis2-json-schema-generator/v2.35.13/users"},next:{title:"validationResult",permalink:"/dhis2-json-schema-generator/v2.35.13/validationResult"}},l={},u=[],f={toc:u};function y(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "displayMessageTemplate" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displaySubjectTemplate" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "messageTemplate" : {\n      "type" : "string"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "notifyParentOrganisationUnitOnly" : {\n      "type" : "boolean"\n    },\n    "notifyUsersInHierarchyOnly" : {\n      "type" : "boolean"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "recipientUserGroups" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroup.json"\n      }\n    },\n    "sendStrategy" : {\n      "$ref" : "sendStrategy.json"\n    },\n    "subjectTemplate" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "validationRules" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "validationRule.json"\n      }\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);