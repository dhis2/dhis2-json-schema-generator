"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[39713],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return l}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),E=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=E(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),_=E(n),l=o,O=_["".concat(s,".").concat(l)]||_[l]||p[l]||a;return n?r.createElement(O,c(c({ref:t},u),{},{components:n})):r.createElement(O,c({ref:t},u))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=_;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var E=2;E<a;E++)c[E]=n[E];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},26123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return i},metadata:function(){return E},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={},s=void 0,E={unversionedId:"v2.38.1/gatewayResponse",id:"v2.38.1/gatewayResponse",title:"gatewayResponse",description:"",source:"@site/docs/v2.38.1/gatewayResponse.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/gatewayResponse",permalink:"/dhis2-json-schema-generator/v2.38.1/gatewayResponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gS1Elements",permalink:"/dhis2-json-schema-generator/v2.38.1/gS1Elements"},next:{title:"genericHttpGetGatewayConfig",permalink:"/dhis2-json-schema-generator/v2.38.1/genericHttpGetGatewayConfig"}},u={},p=[],_={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "SUCCESS", "SENT", "FAILED", "PENDING", "SERVICE_NOT_AVAILABLE", "ENCODING_FAILURE", "PROCESSING", "QUEUED", "NO_GATEWAY_CONFIGURATION", "NO_DEFAULT_GATEWAY", "AUTHENTICATION_FAILED", "NO_RECIPIENT", "SMS_DISABLED", "SMPP_SESSION_FAILURE", "SMS_TEXT_MESSAGE_TOO_LONG", "RESULT_CODE_0", "RESULT_CODE_1", "RESULT_CODE_22", "RESULT_CODE_23", "RESULT_CODE_24", "RESULT_CODE_25", "RESULT_CODE_26", "RESULT_CODE_27", "RESULT_CODE_28", "RESULT_CODE_40", "RESULT_CODE_201", "RESULT_CODE_403", "RESULT_CODE_200", "RESULT_CODE_202", "RESULT_CODE_207", "RESULT_CODE_400", "RESULT_CODE_401", "RESULT_CODE_402", "RESULT_CODE_404", "RESULT_CODE_405", "RESULT_CODE_410", "RESULT_CODE_429", "RESULT_CODE_503", "RESULT_CODE_504" ]\n}\n')))}l.isMDXComponent=!0}}]);