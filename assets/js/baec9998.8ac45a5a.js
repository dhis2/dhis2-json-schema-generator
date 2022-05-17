"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[63264],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return b}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),y=u(t),b=o,f=y["".concat(s,".").concat(b)]||y[b]||l[b]||a;return t?r.createElement(f,i(i({ref:e},c),{},{components:t})):r.createElement(f,i({ref:e},c))}));function b(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=n,p.mdxType="string"==typeof n?n:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},87519:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={},s=void 0,u={unversionedId:"v2.37.5/attribute",id:"v2.37.5/attribute",title:"attribute",description:"",source:"@site/docs/v2.37.5/attribute.md",sourceDirName:"v2.37.5",slug:"/v2.37.5/attribute",permalink:"/dhis2-json-schema-generator/v2.37.5/attribute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"assignedUserSelectionMode",permalink:"/dhis2-json-schema-generator/v2.37.5/assignedUserSelectionMode"},next:{title:"attributeType",permalink:"/dhis2-json-schema-generator/v2.37.5/attributeType"}},c={},l=[],y={toc:l};function b(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "categoryAttribute" : {\n      "type" : "boolean"\n    },\n    "categoryOptionAttribute" : {\n      "type" : "boolean"\n    },\n    "categoryOptionComboAttribute" : {\n      "type" : "boolean"\n    },\n    "categoryOptionGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "categoryOptionGroupSetAttribute" : {\n      "type" : "boolean"\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "constantAttribute" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataElementAttribute" : {\n      "type" : "boolean"\n    },\n    "dataElementGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "dataElementGroupSetAttribute" : {\n      "type" : "boolean"\n    },\n    "dataSetAttribute" : {\n      "type" : "boolean"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "documentAttribute" : {\n      "type" : "boolean"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "indicatorAttribute" : {\n      "type" : "boolean"\n    },\n    "indicatorGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "legendSetAttribute" : {\n      "type" : "boolean"\n    },\n    "mandatory" : {\n      "type" : "boolean"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "optionAttribute" : {\n      "type" : "boolean"\n    },\n    "optionSet" : {\n      "$ref" : "optionSet.json"\n    },\n    "optionSetAttribute" : {\n      "type" : "boolean"\n    },\n    "organisationUnitAttribute" : {\n      "type" : "boolean"\n    },\n    "organisationUnitGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "organisationUnitGroupSetAttribute" : {\n      "type" : "boolean"\n    },\n    "programAttribute" : {\n      "type" : "boolean"\n    },\n    "programIndicatorAttribute" : {\n      "type" : "boolean"\n    },\n    "programStageAttribute" : {\n      "type" : "boolean"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "sectionAttribute" : {\n      "type" : "boolean"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "sqlViewAttribute" : {\n      "type" : "boolean"\n    },\n    "trackedEntityAttributeAttribute" : {\n      "type" : "boolean"\n    },\n    "trackedEntityTypeAttribute" : {\n      "type" : "boolean"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "unique" : {\n      "type" : "boolean"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userAttribute" : {\n      "type" : "boolean"\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "validationRuleAttribute" : {\n      "type" : "boolean"\n    },\n    "validationRuleGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "valueType" : {\n      "$ref" : "valueType.json"\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);