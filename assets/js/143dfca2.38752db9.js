"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[30524],{3905:function(n,t,e){e.d(t,{Zo:function(){return c},kt:function(){return b}});var r=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function p(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var u=r.createContext({}),s=function(n){var t=r.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},c=function(n){var t=s(n.components);return r.createElement(u.Provider,{value:t},n.children)},l={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,a=n.originalType,u=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),y=s(e),b=o,m=y["".concat(u,".").concat(b)]||y[b]||l[b]||a;return e?r.createElement(m,i(i({ref:t},c),{},{components:e})):r.createElement(m,i({ref:t},c))}));function b(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var a=e.length,i=new Array(a);i[0]=y;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=n,p.mdxType="string"==typeof n?n:o,i[1]=p;for(var s=2;s<a;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}y.displayName="MDXCreateElement"},73927:function(n,t,e){e.r(t),e.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var r=e(87462),o=e(63366),a=(e(67294),e(3905)),i=["components"],p={},u=void 0,s={unversionedId:"v2.39.1/attribute",id:"v2.39.1/attribute",title:"attribute",description:"",source:"@site/docs/v2.39.1/attribute.md",sourceDirName:"v2.39.1",slug:"/v2.39.1/attribute",permalink:"/dhis2-json-schema-generator/v2.39.1/attribute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"atomicMode_",permalink:"/dhis2-json-schema-generator/v2.39.1/atomicMode_"},next:{title:"attributeBuilder",permalink:"/dhis2-json-schema-generator/v2.39.1/attributeBuilder"}},c={},l=[],y={toc:l};function b(n){var t=n.components,e=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},y,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "access" : {\n      "$ref" : "access.json"\n    },\n    "attributeValues" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "attributeValue.json"\n      }\n    },\n    "categoryAttribute" : {\n      "type" : "boolean"\n    },\n    "categoryOptionAttribute" : {\n      "type" : "boolean"\n    },\n    "categoryOptionComboAttribute" : {\n      "type" : "boolean"\n    },\n    "categoryOptionGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "categoryOptionGroupSetAttribute" : {\n      "type" : "boolean"\n    },\n    "code" : {\n      "type" : "string"\n    },\n    "constantAttribute" : {\n      "type" : "boolean"\n    },\n    "created" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "createdBy" : {\n      "$ref" : "user.json"\n    },\n    "dataElementAttribute" : {\n      "type" : "boolean"\n    },\n    "dataElementGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "dataElementGroupSetAttribute" : {\n      "type" : "boolean"\n    },\n    "dataSetAttribute" : {\n      "type" : "boolean"\n    },\n    "description" : {\n      "type" : "string"\n    },\n    "displayDescription" : {\n      "type" : "string"\n    },\n    "displayFormName" : {\n      "type" : "string"\n    },\n    "displayName" : {\n      "type" : "string"\n    },\n    "displayShortName" : {\n      "type" : "string"\n    },\n    "documentAttribute" : {\n      "type" : "boolean"\n    },\n    "eventChartAttribute" : {\n      "type" : "boolean"\n    },\n    "eventReportAttribute" : {\n      "type" : "boolean"\n    },\n    "externalAccess" : {\n      "type" : "boolean"\n    },\n    "favorite" : {\n      "type" : "boolean"\n    },\n    "favorites" : {\n      "type" : "array",\n      "items" : {\n        "type" : "string"\n      }\n    },\n    "formName" : {\n      "type" : "string"\n    },\n    "href" : {\n      "type" : "string"\n    },\n    "id" : {\n      "type" : "string"\n    },\n    "indicatorAttribute" : {\n      "type" : "boolean"\n    },\n    "indicatorGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "lastUpdated" : {\n      "type" : "string",\n      "format" : "date-time"\n    },\n    "lastUpdatedBy" : {\n      "$ref" : "user.json"\n    },\n    "legendSetAttribute" : {\n      "type" : "boolean"\n    },\n    "mandatory" : {\n      "type" : "boolean"\n    },\n    "mapAttribute" : {\n      "type" : "boolean"\n    },\n    "name" : {\n      "type" : "string"\n    },\n    "optionAttribute" : {\n      "type" : "boolean"\n    },\n    "optionSet" : {\n      "$ref" : "optionSet.json"\n    },\n    "optionSetAttribute" : {\n      "type" : "boolean"\n    },\n    "organisationUnitAttribute" : {\n      "type" : "boolean"\n    },\n    "organisationUnitGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "organisationUnitGroupSetAttribute" : {\n      "type" : "boolean"\n    },\n    "programAttribute" : {\n      "type" : "boolean"\n    },\n    "programIndicatorAttribute" : {\n      "type" : "boolean"\n    },\n    "programStageAttribute" : {\n      "type" : "boolean"\n    },\n    "publicAccess" : {\n      "type" : "string"\n    },\n    "relationshipTypeAttribute" : {\n      "type" : "boolean"\n    },\n    "sectionAttribute" : {\n      "type" : "boolean"\n    },\n    "sharing" : {\n      "$ref" : "sharing.json"\n    },\n    "shortName" : {\n      "type" : "string"\n    },\n    "sortOrder" : {\n      "type" : "integer"\n    },\n    "sqlViewAttribute" : {\n      "type" : "boolean"\n    },\n    "trackedEntityAttributeAttribute" : {\n      "type" : "boolean"\n    },\n    "trackedEntityTypeAttribute" : {\n      "type" : "boolean"\n    },\n    "translations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "translation.json"\n      }\n    },\n    "unique" : {\n      "type" : "boolean"\n    },\n    "user" : {\n      "$ref" : "user.json"\n    },\n    "userAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userAccess.json"\n      }\n    },\n    "userAttribute" : {\n      "type" : "boolean"\n    },\n    "userGroupAccesses" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "userGroupAccess.json"\n      }\n    },\n    "userGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "validationRuleAttribute" : {\n      "type" : "boolean"\n    },\n    "validationRuleGroupAttribute" : {\n      "type" : "boolean"\n    },\n    "valueType" : {\n      "$ref" : "valueType.json"\n    },\n    "visualizationAttribute" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);