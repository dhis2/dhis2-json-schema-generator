"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[62918],{3905:function(e,E,r){r.d(E,{Zo:function(){return s},kt:function(){return f}});var t=r(67294);function n(e,E,r){return E in e?Object.defineProperty(e,E,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[E]=r,e}function o(e,E){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);E&&(t=t.filter((function(E){return Object.getOwnPropertyDescriptor(e,E).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var E=1;E<arguments.length;E++){var r=null!=arguments[E]?arguments[E]:{};E%2?o(Object(r),!0).forEach((function(E){n(e,E,r[E])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(E){Object.defineProperty(e,E,Object.getOwnPropertyDescriptor(r,E))}))}return e}function c(e,E){if(null==e)return{};var r,t,n=function(e,E){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],E.indexOf(r)>=0||(n[r]=e[r]);return n}(e,E);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],E.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),u=function(e){var E=t.useContext(i),r=E;return e&&(r="function"==typeof e?e(E):a(a({},E),e)),r},s=function(e){var E=u(e.components);return t.createElement(i.Provider,{value:E},e.children)},p={inlineCode:"code",wrapper:function(e){var E=e.children;return t.createElement(t.Fragment,{},E)}},l=t.forwardRef((function(e,E){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(i,".").concat(f)]||l[f]||p[f]||o;return r?t.createElement(m,a(a({ref:E},s),{},{components:r})):t.createElement(m,a({ref:E},s))}));function f(e,E){var r=arguments,n=E&&E.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=l;var c={};for(var i in E)hasOwnProperty.call(E,i)&&(c[i]=E[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},87223:function(e,E,r){r.r(E),r.d(E,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var t=r(87462),n=r(63366),o=(r(67294),r(3905)),a=["components"],c={},i=void 0,u={unversionedId:"v2.36.10/errorCode",id:"v2.36.10/errorCode",title:"errorCode",description:"",source:"@site/docs/v2.36.10/errorCode.md",sourceDirName:"v2.36.10",slug:"/v2.36.10/errorCode",permalink:"/dhis2-json-schema-generator/v2.36.10/errorCode",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"encryptionStatus",permalink:"/dhis2-json-schema-generator/v2.36.10/encryptionStatus"},next:{title:"errorReport",permalink:"/dhis2-json-schema-generator/v2.36.10/errorReport"}},s={},p=[],l={toc:p};function f(e){var E=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:E,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "E1000", "E1001", "E1002", "E1100", "E1101", "E1102", "E1103", "E1104", "E1105", "E1106", "E1107", "E2000", "E2001", "E2002", "E2003", "E2004", "E2005", "E2006", "E2007", "E2008", "E2009", "E2010", "E2011", "E2012", "E2013", "E2014", "E2015", "E2016", "E2017", "E2018", "E2019", "E2020", "E2021", "E2022", "E2023", "E2024", "E2025", "E2026", "E2027", "E2028", "E2029", "E2030", "E2031", "E2032", "E2033", "E2034", "E2035", "E2036", "E2037", "E2200", "E2201", "E2202", "E2203", "E2204", "E2205", "E2206", "E2207", "E2208", "E3000", "E3001", "E3002", "E3003", "E3004", "E3005", "E3006", "E3008", "E3009", "E3010", "E3011", "E3012", "E3013", "E3014", "E3015", "E3016", "E3017", "E3018", "E4000", "E4001", "E4002", "E4003", "E4004", "E4005", "E4006", "E4007", "E4008", "E4009", "E4010", "E4011", "E4012", "E4013", "E4014", "E4015", "E4016", "E4017", "E4018", "E4019", "E4020", "E4021", "E4022", "E4023", "E4024", "E4025", "E4026", "E4027", "E4028", "E4029", "E4030", "E4032", "E4033", "E4053", "E4300", "E4301", "E4302", "E4303", "E4304", "E4305", "E4306", "E4307", "E4308", "E4309", "E4310", "E4311", "E4312", "E4313", "E5000", "E5001", "E5002", "E5003", "E5004", "E5005", "E6000", "E6001", "E6100", "E6101", "E6200", "E7000", "E7002", "E7003", "E7004", "E7005", "E7006", "E7007", "E7010", "E7100", "E7101", "E7102", "E7103", "E7104", "E7105", "E7106", "E7107", "E7108", "E7109", "E7110", "E7111", "E7112", "E7113", "E7114", "E7115", "E7116", "E7117", "E7118", "E7119", "E7120", "E7121", "E7122", "E7123", "E7124", "E7125", "E7126", "E7127", "E7128", "E7129", "E7130", "E7131", "E7132", "E7133", "E7200", "E7201", "E7202", "E7203", "E7204", "E7205", "E7206", "E7207", "E7208", "E7209", "E7210", "E7211", "E7212", "E7213", "E7214", "E7215", "E7216", "E7217", "E7218", "E7219", "E7220", "E7221", "E7222", "E7223", "E7224", "E7225", "E7226", "E7227", "E7300", "E7301", "E7400", "E7500", "E7501", "E7502", "E7503" ]\n}\n')))}f.isMDXComponent=!0}}]);