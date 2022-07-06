"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[57835],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return y}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),y=a,m=f["".concat(c,".").concat(y)]||f[y]||u[y]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41920:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={},c=void 0,p={unversionedId:"v2.38.1/dataSetNotificationTemplate",id:"v2.38.1/dataSetNotificationTemplate",title:"dataSetNotificationTemplate",description:"",source:"@site/docs/v2.38.1/dataSetNotificationTemplate.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/dataSetNotificationTemplate",permalink:"/dhis2-json-schema-generator/v2.38.1/dataSetNotificationTemplate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataSetNotificationRecipient",permalink:"/dhis2-json-schema-generator/v2.38.1/dataSetNotificationRecipient"},next:{title:"dataSetNotificationTemplateVariables",permalink:"/dhis2-json-schema-generator/v2.38.1/dataSetNotificationTemplateVariables"}},l={},u=[],f={toc:u};function y(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataSetNotificationTrigger" : {\n      "$ref" : "dataSetNotificationTrigger.json"\n    },\n    "dataSets" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "dataSet.json"\n      }\n    },\n    "deliveryChannels" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "deliveryChannel.json"\n      }\n    },\n    "displayMessageTemplate" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displaySubjectTemplate" : {\n      "type" : "string"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "messageTemplate" : {\n      "type" : "string"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "notificationRecipient" : {\n      "$ref" : "dataSetNotificationRecipient.json"\n    },\n    "notifyParentOrganisationUnitOnly" : {\n      "type" : "boolean"\n    },\n    "notifyUsersInHierarchyOnly" : {\n      "type" : "boolean"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "recipientUserGroup" : {\n      "$ref" : "userGroup.json"\n    },\n    "relativeScheduledDays" : {\n      "type" : "integer"\n    },\n    "sendStrategy" : {\n      "$ref" : "sendStrategy.json"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "subjectTemplate" : {\n      "type" : "string"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);