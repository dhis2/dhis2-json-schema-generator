"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[11566],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(t),y=o,m=f["".concat(p,".").concat(y)]||f[y]||l[y]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51352:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={},p=void 0,c={unversionedId:"v2.37.4/dashboardSearchResult",id:"v2.37.4/dashboardSearchResult",title:"dashboardSearchResult",description:"",source:"@site/docs/v2.37.4/dashboardSearchResult.md",sourceDirName:"v2.37.4",slug:"/v2.37.4/dashboardSearchResult",permalink:"/dhis2-json-schema-generator/v2.37.4/dashboardSearchResult",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dashboardItemType",permalink:"/dhis2-json-schema-generator/v2.37.4/dashboardItemType"},next:{title:"dashboardWidgetAppSettings",permalink:"/dhis2-json-schema-generator/v2.37.4/dashboardWidgetAppSettings"}},u={},l=[],f={toc:l};function y(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "appCount" : {\n      "type" : "integer"\n    },\n    "apps" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "app.json"\n      }\n    },\n    "eventChartCount" : {\n      "type" : "integer"\n    },\n    "eventCharts" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "eventChart.json"\n      }\n    },\n    "eventReportCount" : {\n      "type" : "integer"\n    },\n    "eventReports" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "eventReport.json"\n      }\n    },\n    "mapCount" : {\n      "type" : "integer"\n    },\n    "maps" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "map.json"\n      }\n    },\n    "reportCount" : {\n      "type" : "integer"\n    },\n    "reports" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "report.json"\n      }\n    },\n    "resourceCount" : {\n      "type" : "integer"\n    },\n    "resources" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "document.json"\n      }\n    },\n    "searchCount" : {\n      "type" : "integer"\n    },\n    "userCount" : {\n      "type" : "integer"\n    },\n    "users" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "user.json"\n      }\n    },\n    "visualizationCount" : {\n      "type" : "integer"\n    },\n    "visualizations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "simpleVisualizationView.json"\n      }\n    }\n  }\n}\n')))}y.isMDXComponent=!0}}]);