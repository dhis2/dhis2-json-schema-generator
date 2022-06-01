"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[75977],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58786:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},s=void 0,u={unversionedId:"v2.36.10/eventBuilder",id:"v2.36.10/eventBuilder",title:"eventBuilder",description:"",source:"@site/docs/v2.36.10/eventBuilder.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/eventBuilder",permalink:"/dhis2-json-schema-generator/v2.36.10/eventBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"event",permalink:"/dhis2-json-schema-generator/v2.36.10/event"},next:{title:"eventChart",permalink:"/dhis2-json-schema-generator/v2.36.10/eventChart"}},l={},f=[],p={toc:f};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "assignedUser(String)" : {\n      "$ref" : "#"\n    },\n    "attributeCategoryOptions(String)" : {\n      "$ref" : "#"\n    },\n    "attributeOptionCombo(String)" : {\n      "$ref" : "#"\n    },\n    "completedAt(Instant)" : {\n      "$ref" : "#"\n    },\n    "completedBy(String)" : {\n      "$ref" : "#"\n    },\n    "createdAt(Instant)" : {\n      "$ref" : "#"\n    },\n    "createdAtClient(Instant)" : {\n      "$ref" : "#"\n    },\n    "dataValues(Set<DataValue>)" : {\n      "$ref" : "#"\n    },\n    "deleted(boolean)" : {\n      "$ref" : "#"\n    },\n    "enrollment(String)" : {\n      "$ref" : "#"\n    },\n    "enrollmentStatus(EnrollmentStatus)" : {\n      "$ref" : "#"\n    },\n    "event(String)" : {\n      "$ref" : "#"\n    },\n    "followup(boolean)" : {\n      "$ref" : "#"\n    },\n    "geometry(Geometry)" : {\n      "$ref" : "#"\n    },\n    "notes(List<Note>)" : {\n      "$ref" : "#"\n    },\n    "occurredAt(Instant)" : {\n      "$ref" : "#"\n    },\n    "orgUnit(String)" : {\n      "$ref" : "#"\n    },\n    "orgUnitName(String)" : {\n      "$ref" : "#"\n    },\n    "program(String)" : {\n      "$ref" : "#"\n    },\n    "programStage(String)" : {\n      "$ref" : "#"\n    },\n    "relationships(List<Relationship>)" : {\n      "$ref" : "#"\n    },\n    "scheduledAt(Instant)" : {\n      "$ref" : "#"\n    },\n    "status(EventStatus)" : {\n      "$ref" : "#"\n    },\n    "storedBy(String)" : {\n      "$ref" : "#"\n    },\n    "trackedEntity(String)" : {\n      "$ref" : "#"\n    },\n    "updatedAt(Instant)" : {\n      "$ref" : "#"\n    },\n    "updatedAtClient(Instant)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);