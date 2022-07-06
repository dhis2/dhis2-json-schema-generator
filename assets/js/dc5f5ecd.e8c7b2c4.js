"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[83687],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return b}});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=o.createContext({}),p=function(n){var e=o.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=p(n.components);return o.createElement(i.Provider,{value:e},n.children)},y={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,i=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=p(t),b=r,f=u["".concat(i,".").concat(b)]||u[b]||y[b]||a;return t?o.createElement(f,l(l({ref:e},c),{},{components:t})):o.createElement(f,l({ref:e},c))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s.mdxType="string"==typeof n?n:r,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6104:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return y}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),l=["components"],s={},i=void 0,p={unversionedId:"v2.37.7/relativePeriods",id:"v2.37.7/relativePeriods",title:"relativePeriods",description:"",source:"@site/docs/v2.37.7/relativePeriods.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/relativePeriods",permalink:"/dhis2-json-schema-generator/v2.37.7/relativePeriods",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"relativePeriodEnum",permalink:"/dhis2-json-schema-generator/v2.37.7/relativePeriodEnum"},next:{title:"renderDevice",permalink:"/dhis2-json-schema-generator/v2.37.7/renderDevice"}},c={},y=[],u={toc:y};function b(n){var e=n.components,t=(0,r.Z)(n,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "object",\n  "properties" : {\n    "biMonthsThisYear" : {\n      "type" : "boolean"\n    },\n    "last10FinancialYears" : {\n      "type" : "boolean"\n    },\n    "last10Years" : {\n      "type" : "boolean"\n    },\n    "last12Months" : {\n      "type" : "boolean"\n    },\n    "last12Weeks" : {\n      "type" : "boolean"\n    },\n    "last14Days" : {\n      "type" : "boolean"\n    },\n    "last180Days" : {\n      "type" : "boolean"\n    },\n    "last2SixMonths" : {\n      "type" : "boolean"\n    },\n    "last30Days" : {\n      "type" : "boolean"\n    },\n    "last3Days" : {\n      "type" : "boolean"\n    },\n    "last3Months" : {\n      "type" : "boolean"\n    },\n    "last4BiWeeks" : {\n      "type" : "boolean"\n    },\n    "last4Quarters" : {\n      "type" : "boolean"\n    },\n    "last4Weeks" : {\n      "type" : "boolean"\n    },\n    "last52Weeks" : {\n      "type" : "boolean"\n    },\n    "last5FinancialYears" : {\n      "type" : "boolean"\n    },\n    "last5Years" : {\n      "type" : "boolean"\n    },\n    "last60Days" : {\n      "type" : "boolean"\n    },\n    "last6BiMonths" : {\n      "type" : "boolean"\n    },\n    "last6Months" : {\n      "type" : "boolean"\n    },\n    "last7Days" : {\n      "type" : "boolean"\n    },\n    "last90Days" : {\n      "type" : "boolean"\n    },\n    "lastBiWeek" : {\n      "type" : "boolean"\n    },\n    "lastBimonth" : {\n      "type" : "boolean"\n    },\n    "lastFinancialYear" : {\n      "type" : "boolean"\n    },\n    "lastMonth" : {\n      "type" : "boolean"\n    },\n    "lastQuarter" : {\n      "type" : "boolean"\n    },\n    "lastSixMonth" : {\n      "type" : "boolean"\n    },\n    "lastWeek" : {\n      "type" : "boolean"\n    },\n    "lastYear" : {\n      "type" : "boolean"\n    },\n    "monthsLastYear" : {\n      "type" : "boolean"\n    },\n    "monthsThisYear" : {\n      "type" : "boolean"\n    },\n    "quartersLastYear" : {\n      "type" : "boolean"\n    },\n    "quartersThisYear" : {\n      "type" : "boolean"\n    },\n    "thisBiWeek" : {\n      "type" : "boolean"\n    },\n    "thisBimonth" : {\n      "type" : "boolean"\n    },\n    "thisDay" : {\n      "type" : "boolean"\n    },\n    "thisFinancialYear" : {\n      "type" : "boolean"\n    },\n    "thisMonth" : {\n      "type" : "boolean"\n    },\n    "thisQuarter" : {\n      "type" : "boolean"\n    },\n    "thisSixMonth" : {\n      "type" : "boolean"\n    },\n    "thisWeek" : {\n      "type" : "boolean"\n    },\n    "thisYear" : {\n      "type" : "boolean"\n    },\n    "weeksThisYear" : {\n      "type" : "boolean"\n    },\n    "yesterday" : {\n      "type" : "boolean"\n    }\n  }\n}\n')))}b.isMDXComponent=!0}}]);