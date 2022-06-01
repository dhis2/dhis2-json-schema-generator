"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[16025],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=t.createContext({}),u=function(e){var r=t.useContext(f),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(f.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(f,".").concat(d)]||p[d]||l[d]||o;return n?t.createElement(m,c(c({ref:r},s),{},{components:n})):t.createElement(m,c({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var f in r)hasOwnProperty.call(r,f)&&(i[f]=r[f]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28185:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return f},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},f=void 0,u={unversionedId:"v2.37.6/trackerSideEffectBundleBuilder",id:"v2.37.6/trackerSideEffectBundleBuilder",title:"trackerSideEffectBundleBuilder",description:"",source:"@site/docs/v2.37.6/trackerSideEffectBundleBuilder.md",sourceDirName:"v2.37.6",slug:"/v2.37.6/trackerSideEffectBundleBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerSideEffectBundleBuilder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trackerSendMessageSideEffectBuilder",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerSendMessageSideEffectBuilder"},next:{title:"trackerSideEffectDataBundle",permalink:"/dhis2-json-schema-generator/v2.37.6/trackerSideEffectDataBundle"}},s={},l=[],p={toc:l};function d(e){var r=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "accessedBy(String)" : {\n      "$ref" : "#"\n    },\n    "enrollmentRuleEffects(Map<String, List<TrackerRuleEngineSideEffect>>)" : {\n      "$ref" : "#"\n    },\n    "eventRuleEffects(Map<String, List<TrackerRuleEngineSideEffect>>)" : {\n      "$ref" : "#"\n    },\n    "importStrategy(TrackerImportStrategy)" : {\n      "$ref" : "#"\n    },\n    "jobConfiguration(JobConfiguration)" : {\n      "$ref" : "#"\n    },\n    "jobId(String)" : {\n      "$ref" : "#"\n    },\n    "klass(Class<BaseIdentifiableObject>)" : {\n      "$ref" : "#"\n    },\n    "object(String)" : {\n      "$ref" : "#"\n    },\n    "program(Program)" : {\n      "$ref" : "#"\n    },\n    "programInstance(ProgramInstance)" : {\n      "$ref" : "#"\n    },\n    "programStageInstance(ProgramStageInstance)" : {\n      "$ref" : "#"\n    },\n    "uid(String)" : {\n      "$ref" : "#"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);