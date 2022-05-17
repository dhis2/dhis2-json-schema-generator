"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69109],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,y=m["".concat(p,".").concat(f)]||m[f]||l[f]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26721:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={},p=void 0,c={unversionedId:"schemas/dashboardSearchResult",id:"schemas/dashboardSearchResult",title:"dashboardSearchResult",description:"",source:"@site/docs/schemas/dashboardSearchResult.md",sourceDirName:"schemas",slug:"/schemas/dashboardSearchResult",permalink:"/schemas/dashboardSearchResult",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dashboardItemType",permalink:"/schemas/dashboardItemType"},next:{title:"dashboardWidgetAppSettings",permalink:"/schemas/dashboardWidgetAppSettings"}},u={},l=[],m={toc:l};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "appCount" : {\n      "type" : "integer"\n    },\n    "apps" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "app.json"\n      }\n    },\n    "eventChartCount" : {\n      "type" : "integer"\n    },\n    "eventCharts" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "eventChart.json"\n      }\n    },\n    "eventReportCount" : {\n      "type" : "integer"\n    },\n    "eventReports" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "eventReport.json"\n      }\n    },\n    "mapCount" : {\n      "type" : "integer"\n    },\n    "maps" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "map.json"\n      }\n    },\n    "reportCount" : {\n      "type" : "integer"\n    },\n    "reports" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "report.json"\n      }\n    },\n    "resourceCount" : {\n      "type" : "integer"\n    },\n    "resources" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "document.json"\n      }\n    },\n    "searchCount" : {\n      "type" : "integer"\n    },\n    "userCount" : {\n      "type" : "integer"\n    },\n    "users" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "user.json"\n      }\n    },\n    "visualizationCount" : {\n      "type" : "integer"\n    },\n    "visualizations" : {\n      "type" : "array",\n      "items" : {\n        "$ref" : "simpleVisualizationView.json"\n      }\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);