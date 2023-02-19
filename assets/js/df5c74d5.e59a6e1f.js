"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[42607],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return E}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):O(O({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},T={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=_(e,["components","mdxType","originalType","parentName"]),l=i(r),E=a,p=l["".concat(c,".").concat(E)]||l[E]||T[E]||o;return r?n.createElement(p,O(O({ref:t},u),{},{components:r})):n.createElement(p,O({ref:t},u))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,O=new Array(o);O[0]=l;var _={};for(var c in t)hasOwnProperty.call(t,c)&&(_[c]=t[c]);_.originalType=e,_.mdxType="string"==typeof e?e:a,O[1]=_;for(var i=2;i<o;i++)O[i]=r[i];return n.createElement.apply(null,O)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},72564:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return E},frontMatter:function(){return _},metadata:function(){return i},toc:function(){return T}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),O=["components"],_={},c=void 0,i={unversionedId:"v2.37.7/dataValueImportConflict",id:"v2.37.7/dataValueImportConflict",title:"dataValueImportConflict",description:"",source:"@site/docs/v2.37.7/dataValueImportConflict.md",sourceDirName:"v2.37.7",slug:"/v2.37.7/dataValueImportConflict",permalink:"/dhis2-json-schema-generator/v2.37.7/dataValueImportConflict",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dataValueBuilder",permalink:"/dhis2-json-schema-generator/v2.37.7/dataValueBuilder"},next:{title:"dataValueSet",permalink:"/dhis2-json-schema-generator/v2.37.7/dataValueSet"}},u={},T=[],l={toc:T};function E(e){var t=e.components,r=(0,a.Z)(e,O);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "DATA_ELEMENT_NOT_FOUND", "PERIOD_NOT_VALID", "ORG_UNIT_NOT_FOUND", "CATEGORY_OPTION_COMBO_NOT_FOUND", "CATEGORY_OPTION_COMBO_NOT_ACCESSIBLE", "ATTR_OPTION_COMBO_NOT_FOUND", "ATTR_OPTION_COMBO_NOT_ACCESSIBLE", "ORG_UNIT_NOT_IN_USER_HIERARCHY", "DATA_ELEMENT_VALUE_NOT_DEFINED", "DATA_ELEMENT_VALUE_NOT_VALID", "COMMENT_NOT_VALID", "DATA_ELEMENT_INVALID_OPTION", "CATEGORY_OPTION_COMBO_NOT_SPECIFIED", "ATTR_OPTION_COMBO_NOT_SPECIFIED", "PERIOD_TYPE_NOT_VALID_FOR_DATA_ELEMENT", "DATA_ELEMENT_STRICT", "CATEGORY_OPTION_COMBO_STRICT", "ATTR_OPTION_COMBO_STRICT", "ORG_UNIT_STRICT", "STORED_BY_NOT_VALID", "PERIOD_NOT_VALID_FOR_ATTR_OPTION_COMBO", "ORG_UNIT_NOT_VALID_FOR_ATTR_OPTION_COMBO", "PERIOD_EXPIRED", "PERIOD_AFTER_DATA_ELEMENT_PERIODS", "VALUE_ALREADY_APPROVED", "PERIOD_NOT_OPEN_FOR_DATA_SET", "PERIOD_NOT_CONFORM_TO_OPEN_PERIODS", "FILE_RESOURCE_NOT_FOUND" ]\n}\n')))}E.isMDXComponent=!0}}]);