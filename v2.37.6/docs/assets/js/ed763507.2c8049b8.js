"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55116],{3905:function(_,e,E){E.d(e,{Zo:function(){return R},kt:function(){return a}});var T=E(67294);function t(_,e,E){return e in _?Object.defineProperty(_,e,{value:E,enumerable:!0,configurable:!0,writable:!0}):_[e]=E,_}function O(_,e){var E=Object.keys(_);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(_);e&&(T=T.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),E.push.apply(E,T)}return E}function n(_){for(var e=1;e<arguments.length;e++){var E=null!=arguments[e]?arguments[e]:{};e%2?O(Object(E),!0).forEach((function(e){t(_,e,E[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(E)):O(Object(E)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(E,e))}))}return _}function r(_,e){if(null==_)return{};var E,T,t=function(_,e){if(null==_)return{};var E,T,t={},O=Object.keys(_);for(T=0;T<O.length;T++)E=O[T],e.indexOf(E)>=0||(t[E]=_[E]);return t}(_,e);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(_);for(T=0;T<O.length;T++)E=O[T],e.indexOf(E)>=0||Object.prototype.propertyIsEnumerable.call(_,E)&&(t[E]=_[E])}return t}var I=T.createContext({}),N=function(_){var e=T.useContext(I),E=e;return _&&(E="function"==typeof _?_(e):n(n({},e),_)),E},R=function(_){var e=N(_.components);return T.createElement(I.Provider,{value:e},_.children)},o={inlineCode:"code",wrapper:function(_){var e=_.children;return T.createElement(T.Fragment,{},e)}},S=T.forwardRef((function(_,e){var E=_.components,t=_.mdxType,O=_.originalType,I=_.parentName,R=r(_,["components","mdxType","originalType","parentName"]),S=N(E),a=t,A=S["".concat(I,".").concat(a)]||S[a]||o[a]||O;return E?T.createElement(A,n(n({ref:e},R),{},{components:E})):T.createElement(A,n({ref:e},R))}));function a(_,e){var E=arguments,t=e&&e.mdxType;if("string"==typeof _||t){var O=E.length,n=new Array(O);n[0]=S;var r={};for(var I in e)hasOwnProperty.call(e,I)&&(r[I]=e[I]);r.originalType=_,r.mdxType="string"==typeof _?_:t,n[1]=r;for(var N=2;N<O;N++)n[N]=E[N];return T.createElement.apply(null,n)}return T.createElement.apply(null,E)}S.displayName="MDXCreateElement"},14462:function(_,e,E){E.r(e),E.d(e,{assets:function(){return R},contentTitle:function(){return I},default:function(){return a},frontMatter:function(){return r},metadata:function(){return N},toc:function(){return o}});var T=E(87462),t=E(63366),O=(E(67294),E(3905)),n=["components"],r={},I=void 0,N={unversionedId:"schemas/gS1Elements",id:"schemas/gS1Elements",title:"gS1Elements",description:"",source:"@site/docs/schemas/gS1Elements.md",sourceDirName:"schemas",slug:"/schemas/gS1Elements",permalink:"/schemas/gS1Elements",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"formType",permalink:"/schemas/formType"},next:{title:"gatewayResponse",permalink:"/schemas/gatewayResponse"}},R={},o=[],S={toc:o};function a(_){var e=_.components,E=(0,t.Z)(_,n);return(0,O.kt)("wrapper",(0,T.Z)({},S,E,{components:e,mdxType:"MDXLayout"}),(0,O.kt)("pre",null,(0,O.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "GS1_E0_IDENTIFIER", "GS1_E1_IDENTIFIER", "GS1_E2_IDENTIFIER", "GS1_E3_IDENTIFIER", "GS1_E4_IDENTIFIER", "GS1_I1_IDENTIFIER", "GS1_C1_IDENTIFIER", "GS1_e0_IDENTIFIER", "GS1_e1_IDENTIFIER", "GS1_e2_IDENTIFIER", "GS1_d2_IDENTIFIER", "GS1_Q3_IDENTIFIER", "GS1_J1_IDENTIFIER", "GS1_d1_IDENTIFIER", "GS1_Q1_IDENTIFIER", "GS1_GROUP_SEPARATOR", "SSCC", "GTIN", "CONTENT", "LOT_NUMBER", "PROD_DATE", "DUE_DATE", "PACK_DATE", "BEST_BEFORE_DATE", "SELL_BY", "EXP_DATE", "VARIANT", "SERIAL_NUMBER", "CPV", "TPX", "ADDITIONAL_ID", "CUSTOMER_PART_NUMBER", "MTO_VARIANT_NUMBER", "PCN", "SECONDARY_SERIAL", "REF_TO_SOURCE", "GDTI", "GLN_EXTENSION_COMPONENT", "GCN", "VAR_COUNT", "NET_WEIGHT_KG", "LENGTH_M", "WIDTH_M", "HEIGHT_M", "AREA_M2", "NET_VOLUME_L", "NET_VOLUME_M3", "NET_WEIGHT_LB", "LENGTH_I", "LENGTH_F", "LENGTH_Y", "WIDTH_I", "WIDTH_F", "WIDTH_Y", "HEIGHT_I", "HEIGHT_F", "HEIGHT_Y", "GROSS_WEIGHT_GF", "LENGTH_M_LOG", "WIDTH_M_LOG", "HEIGHT_M_LOG", "AREA_M2_LOG", "VOLUME_L_LOG", "VOLUME_M3_LOG", "KG_PER_M2", "GROSS_WHEIGHT_LB", "LENGTH_I_LOG", "LENGTH_F_LOG", "LENGTH_Y_LOG", "WIDTH_I_LOG", "WIDTH_F_LOG", "WIDTH_Y_LOG", "HEIGHT_I_LOG", "HEIGHT_F_LOG", "HEIGHT_Y_LOG", "AREA_I2", "AREA_F2", "AREA_Y2", "AREA_I2_LOG", "AREA_F2_LOG", "AREA_Y2_LOG", "NET_WEIGHT_T", "NET_VOLUME_OZ", "NET_VOLUME_Q", "NET_VOLUME_G", "VOLUME_Q_LOG", "VOLUME_G_LOG", "VOLUME_I3", "VOLUME_F3", "VOLUME_Y3", "VOLUME_I3_LOG", "VOLUME_F3_LOG", "VOLUME_Y3_LOG", "COUNT", "AMOUNT", "AMOUNT_ISO", "PRICE", "PRICE_ISO", "PRCNT_OFF", "PRICE_UOM", "ORDER_NUMBER", "GINC", "ROUTE", "SHIP_TO_GLOB_LOC", "BILL_TO_LOC", "PURCHASED_FROM", "SHIP_FOR_LOG", "LOC_NUMBER", "PAY_TO", "PROD_SERV_LOC", "PARTY", "SHIP_TO_POST", "SHIP_TO_POST_ISO", "ORIGIN", "COUNTRY_INITIAL_PROCESS", "COUNTRY_PROCESS", "COUNTRY_DISASSEMBLY", "COUNTRY_FULL_PROCESS", "ORIGIN_SUBDIVISION", "SHIP_TO_COMP", "SHIP_TO_NAME", "SHIP_TO_ADD1", "SHIP_TO_ADD2", "SHIP_TO_SUB", "SHIP_TO_LOCALITY", "SHIP_TO_REG", "SHIP_TO_COUNTRY", "SHIP_TO_PHONE", "RTN_TO_COMP", "RTN_TO_NAME", "RTN_TO_ADD1", "RTN_TO_ADD2", "RTN_TO_SUB", "RTN_TO_LOCALITY", "RTN_TO_REG", "RTN_TO_COUNTRY", "RTN_TO_POST", "RTN_TO_PHONE", "SRV_DESCRIPTION", "DANGEROUS_GOODS", "AUTH_LEAV", "SIG_REQUIRED", "NBEF_DEL_DT", "NAFT_DEL_DT", "REL_DATE", "NSN", "MEAT_CUT", "EXP_TIME", "ACTIVE_POTENCY", "CATCH_AREA", "FIRST_FREEZE_DATE", "HARVEST_DATE", "AQUATIC_SPECIES", "FISHING_GEAR_TYPE", "PROD_METHID", "REFURB_LOT", "FUNC_STAT", "REV_STAT", "GIAI_ASSEMBLY", "PROCESSOR_NUMBER", "UIC_EXT", "NHRN_PZN", "NHRN_CIP", "NHRN_CN", "NHRN_DRN", "NHRN_AIM", "CERT_NUMBER", "PROTOCOL", "DIMENSIONS", "CMT_NUMBER", "GRAI", "GIAI", "PRICE_PER_UNIT", "ITIP", "IBAN", "PROD_TIME", "OPTSEN", "CPID", "CPID_SERIAL", "VERSION", "GMN", "GSRN_PROVIDER", "GSRN_RECIPIENT", "SRIN", "REF_NUMBER", "ITIP_CONTENT", "COUPON_USA", "POINTS", "POSITIVE_OFFER_COUPON_USA", "PRODUCT_URL", "AGREEMENT_INTERNAL", "COMPANY_INTERNAL_1", "COMPANY_INTERNAL_2", "COMPANY_INTERNAL_3", "COMPANY_INTERNAL_4", "COMPANY_INTERNAL_5", "COMPANY_INTERNAL_6", "COMPANY_INTERNAL_7", "COMPANY_INTERNAL_8", "COMPANY_INTERNAL_9" ]\n}\n')))}a.isMDXComponent=!0}}]);