"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22324],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return l}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=p(t),l=a,d=y["".concat(c,".").concat(l)]||y[l]||u[l]||i;return t?r.createElement(d,s(s({ref:n},g),{},{components:t})):r.createElement(d,s({ref:n},g))}));function l(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=y;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4295:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],o={},c=void 0,p={unversionedId:"schemas/aggregatedStatistics",id:"schemas/aggregatedStatistics",title:"aggregatedStatistics",description:"",source:"@site/docs/schemas/aggregatedStatistics.md",sourceDirName:"schemas",slug:"/schemas/aggregatedStatistics",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/aggregatedStatistics",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"accessObject",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/accessObject"},next:{title:"aggregationType",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/schemas/aggregationType"}},g={},u=[],y={toc:u};function l(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "activeUsers" : {\n      "type" : "integer"\n    },\n    "averageDashboardViews" : {\n      "type" : "integer"\n    },\n    "averageEventChartViews" : {\n      "type" : "integer"\n    },\n    "averageEventReportViews" : {\n      "type" : "integer"\n    },\n    "averageMapViews" : {\n      "type" : "integer"\n    },\n    "averagePassiveDashboardViews" : {\n      "type" : "integer"\n    },\n    "averageViews" : {\n      "type" : "integer"\n    },\n    "averageVisualizationViews" : {\n      "type" : "integer"\n    },\n    "dashboardViews" : {\n      "type" : "integer"\n    },\n    "dataSetReportViews" : {\n      "type" : "integer"\n    },\n    "day" : {\n      "type" : "integer"\n    },\n    "eventChartViews" : {\n      "type" : "integer"\n    },\n    "eventReportViews" : {\n      "type" : "integer"\n    },\n    "mapViews" : {\n      "type" : "integer"\n    },\n    "month" : {\n      "type" : "integer"\n    },\n    "passiveDashboardViews" : {\n      "type" : "integer"\n    },\n    "savedDashboards" : {\n      "type" : "integer"\n    },\n    "savedDataValues" : {\n      "type" : "integer"\n    },\n    "savedEventCharts" : {\n      "type" : "integer"\n    },\n    "savedEventReports" : {\n      "type" : "integer"\n    },\n    "savedIndicators" : {\n      "type" : "integer"\n    },\n    "savedMaps" : {\n      "type" : "integer"\n    },\n    "savedVisualizations" : {\n      "type" : "integer"\n    },\n    "totalViews" : {\n      "type" : "integer"\n    },\n    "users" : {\n      "type" : "integer"\n    },\n    "visualizationViews" : {\n      "type" : "integer"\n    },\n    "week" : {\n      "type" : "integer"\n    },\n    "year" : {\n      "type" : "integer"\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);