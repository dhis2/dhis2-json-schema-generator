"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82318],{3905:function(E,_,R){R.d(_,{Zo:function(){return S},kt:function(){return r}});var A=R(67294);function I(E,_,R){return _ in E?Object.defineProperty(E,_,{value:R,enumerable:!0,configurable:!0,writable:!0}):E[_]=R,E}function O(E,_){var R=Object.keys(E);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(E);_&&(A=A.filter((function(_){return Object.getOwnPropertyDescriptor(E,_).enumerable}))),R.push.apply(R,A)}return R}function T(E){for(var _=1;_<arguments.length;_++){var R=null!=arguments[_]?arguments[_]:{};_%2?O(Object(R),!0).forEach((function(_){I(E,_,R[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(R)):O(Object(R)).forEach((function(_){Object.defineProperty(E,_,Object.getOwnPropertyDescriptor(R,_))}))}return E}function L(E,_){if(null==E)return{};var R,A,I=function(E,_){if(null==E)return{};var R,A,I={},O=Object.keys(E);for(A=0;A<O.length;A++)R=O[A],_.indexOf(R)>=0||(I[R]=E[R]);return I}(E,_);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(E);for(A=0;A<O.length;A++)R=O[A],_.indexOf(R)>=0||Object.prototype.propertyIsEnumerable.call(E,R)&&(I[R]=E[R])}return I}var e=A.createContext({}),N=function(E){var _=A.useContext(e),R=_;return E&&(R="function"==typeof E?E(_):T(T({},_),E)),R},S=function(E){var _=N(E.components);return A.createElement(e.Provider,{value:_},E.children)},n={inlineCode:"code",wrapper:function(E){var _=E.children;return A.createElement(A.Fragment,{},_)}},t=A.forwardRef((function(E,_){var R=E.components,I=E.mdxType,O=E.originalType,e=E.parentName,S=L(E,["components","mdxType","originalType","parentName"]),t=N(R),r=I,C=t["".concat(e,".").concat(r)]||t[r]||n[r]||O;return R?A.createElement(C,T(T({ref:_},S),{},{components:R})):A.createElement(C,T({ref:_},S))}));function r(E,_){var R=arguments,I=_&&_.mdxType;if("string"==typeof E||I){var O=R.length,T=new Array(O);T[0]=t;var L={};for(var e in _)hasOwnProperty.call(_,e)&&(L[e]=_[e]);L.originalType=E,L.mdxType="string"==typeof E?E:I,T[1]=L;for(var N=2;N<O;N++)T[N]=R[N];return A.createElement.apply(null,T)}return A.createElement.apply(null,R)}t.displayName="MDXCreateElement"},71672:function(E,_,R){R.r(_),R.d(_,{assets:function(){return S},contentTitle:function(){return e},default:function(){return r},frontMatter:function(){return L},metadata:function(){return N},toc:function(){return n}});var A=R(87462),I=R(63366),O=(R(67294),R(3905)),T=["components"],L={},e=void 0,N={unversionedId:"schemas/icon",id:"schemas/icon",title:"icon",description:"",source:"@site/docs/schemas/icon.md",sourceDirName:"schemas",slug:"/schemas/icon",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/icon",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"i18nLocale",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/i18nLocale"},next:{title:"iconData",permalink:"/dhis2-json-schema-generator/v2.37.6/docs/index.html/schemas/iconData"}},S={},n=[],t={toc:n};function r(E){var _=E.components,R=(0,I.Z)(E,T);return(0,O.kt)("wrapper",(0,A.Z)({},t,R,{components:_,mdxType:"MDXLayout"}),(0,O.kt)("pre",null,(0,O.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "_2G", "_3G", "_4X4", "AGRICULTURE", "AGRICULTURE_WORKER", "ALERT", "ALERT_CIRCLE", "ALERT_TRIANGLE", "AMBULANCE", "AMBULATORY_CLINIC", "ANCV", "BABY_FEMALE_0203M", "BABY_FEMALE_0306M", "BABY_FEMALE_0609M", "BABY_MALE_0203M", "BABY_MALE_0306M", "BABY_MALE_0609M", "BASIC_MOTORCYCLE", "BIKE", "BILLS", "BLISTER_PILLS_OVAL_X1", "BLISTER_PILLS_OVAL_X14", "BLISTER_PILLS_OVAL_X16", "BLISTER_PILLS_OVAL_X4", "BLISTER_PILLS_ROUND_X1", "BLISTER_PILLS_ROUND_X14", "BLISTER_PILLS_ROUND_X16", "BLISTER_PILLS_ROUND_X4", "BLOOD_A_N", "BLOOD_A_P", "BLOOD_AB_N", "BLOOD_AB_P", "BLOOD_B_N", "BLOOD_B_P", "BLOOD_O_N", "BLOOD_O_P", "BLOOD_PRESSURE", "BLOOD_PRESSURE_2", "BLOOD_PRESSURE_MONITOR", "BLOOD_RH_N", "BLOOD_RH_P", "BOY_0105Y", "BOY_1015Y", "BREEDING_SITES", "CALENDAR", "CARDIOGRAM", "CARDIOGRAM_E", "CERVICAL_CANCER", "CHILD_CARE", "CHILD_PROGRAM", "CHILLS", "CHOLERA", "CHURCH", "CIRCLE_LARGE", "CIRCLE_MEDIUM", "CIRCLE_SMALL", "CITY", "CITY_WORKER", "CLEAN_HANDS", "CLINICAL_A", "CLINICAL_F", "CLINICAL_FE", "COINS", "COLD_CHAIN", "COMMUNICATION", "CONE_TEST_ON_NETS", "CONE_TEST_ON_WALLS", "CONSTRUCTION", "CONSTRUCTION_WORKER", "CONTACT_SUPPORT", "CONTRACEPTIVE_DIAPHRAGM", "CONTRACEPTIVE_INJECTION", "CONTRACEPTIVE_PATCH", "CONTRACEPTIVE_VOUCHER", "COPPER_IUD", "COUGHING", "CREDIT_CARD", "CROSS_COUNTRY_MOTORCYCLE", "DEFAULT", "DHIS2_LOGO", "DIARRHEA", "DISCRIMINATING_CONCENTRATION_BIOASSAYS", "DOCTOR", "DOMESTIC_WORKER", "DONKEY", "DRONE", "ECO_CARE", "ELDERLY", "ELECTRICITY", "EMERGENCY_POST", "EXPECTORATE", "FACTORY_WORKER", "FAMILY_PLANNING", "FEMALE_AND_MALE", "FEMALE_CONDOM", "FEMALE_SEX_WORKER", "FETUS", "FEVER", "FEVER_2", "FEVER_CHILLS", "FOREST", "FOREST_PERSONS", "FORUM", "GIRL_0105Y", "GIRL_1015Y", "GROUP_DISCUSSION_MEETING", "GROUP_DISCUSSION_MEETINGX3", "HAPPY", "HAZARDOUS", "HEADACHE", "HEALTH_WORKER", "HEALTH_WORKER_FORM", "HEART", "HEART_CARDIOGRAM", "HELICOPTER", "HIGH_BARS", "HIGH_LEVEL", "HIV_IND", "HIV_NEG", "HIV_POS", "HIV_SELF_TEST", "HOME", "HORMONAL_RING", "HOSPITAL", "HOSPITALIZED", "HOT_MEAL", "HPV", "I_CERTIFICATE_PAPER", "I_DOCUMENTS_ACCEPTED", "I_DOCUMENTS_DENIED", "I_EXAM_MULTIPLE_CHOICE", "I_EXAM_QUALIFICATION", "I_GROUPS_PERSPECTIVE_CROWD", "I_NOTE_ACTION", "I_SCHEDULE_SCHOOL_DATE_TIME", "I_TRAINING_CLASS", "I_UTENSILS", "IMM", "IMPLANT", "INFO", "INFORMATION_CAMPAIGN", "INPATIENT", "INSECTICIDE_RESISTANCE", "INTENSITY_CONCENTRATION_BIOASSAYS", "IUD", "JUSTICE", "LACTATION", "LETRINA", "LLIN", "LOW_BARS", "LOW_LEVEL", "MACHINERY", "MAGNIFYING_GLASS", "MALARIA_MIXED_MICROSCOPE", "MALARIA_NEGATIVE_MICROSCOPE", "MALARIA_OUTBREAK", "MALARIA_PF_MICROSCOPE", "MALARIA_PV_MICROSCOPE", "MALARIA_TESTING", "MALE_AND_FEMALE", "MALE_CONDOM", "MALE_SEX_WORKER", "MAN", "MARKET_STALL", "MASK", "MEASLES", "MEDICINES", "MEDIUM_BARS", "MEDIUM_LEVEL", "MEGAPHONE", "MENTAL_DISORDERS", "MICROSCOPE", "MILITARY_WORKER", "MINER_WORKER", "MOBILE_CLINIC", "MONEY_BAG", "MOSQUITO", "MOSQUITO_COLLECTION", "MSM", "NAUSEA", "NEGATIVE", "NETWORK_4G", "NETWORK_5G", "NEUROLOGY", "NEUTRAL", "NO", "NOT_OK", "NURSE", "OBSERVATION", "ODONTOLOGY", "ODONTOLOGY_IMPLANT", "OFFICER", "OK", "OLD_MAN", "OLD_WOMAN", "ORAL_CONTRACEPTION_PILLSX21", "ORAL_CONTRACEPTION_PILLSX28", "OUTPATIENT", "OVERWEIGHT", "PALM_BRANCHES_ROOF", "PAVE_ROAD", "PEACE", "PEOPLE", "PERSON", "PHONE", "PILL_1", "PILLS_2", "PILLS_3", "PILLS_4", "PLANTATION_WORKER", "POLYGON", "POSITIVE", "PREGNANT", "PREGNANT_0812W", "PREGNANT_2426W", "PREGNANT_32W", "PREGNANT_3638W", "PRISONER", "PROPER_ROOF", "PROVIDER_FST", "PWID", "QUESTION", "QUESTION_CIRCLE", "QUESTION_TRIANGLE", "RDT_RESULT_INVALID", "RDT_RESULT_MIXED", "RDT_RESULT_MIXED_INVALID", "RDT_RESULT_MIXED_INVALID_RECTANGULAR", "RDT_RESULT_MIXED_RECTANGULAR", "RDT_RESULT_NEG", "RDT_RESULT_NEG_INVALID", "RDT_RESULT_NEG_INVALID_RECTANGULAR", "RDT_RESULT_NEG_RECTANGULAR", "RDT_RESULT_NEGATIVE", "RDT_RESULT_NO_TEST", "RDT_RESULT_OUT_STOCK", "RDT_RESULT_PF", "RDT_RESULT_PF_INVALID", "RDT_RESULT_PF_INVALID_RECTANGULAR", "RDT_RESULT_PF_RECTANGULAR", "RDT_RESULT_POSITIVE", "RDT_RESULT_PV", "RDT_RESULT_PV_INVALID", "RDT_RESULT_PV_INVALID_RECTANGULAR", "RDT_RESULT_PV_RECTANGULAR", "REFERRAL", "REFUSED", "RIBBON", "RMNH", "RUNNING_WATER", "RURAL_POST", "SAD", "SANITIZER", "SAYANA_PRESS", "SECURITY_WORKER", "SEXUAL_REPRODUCTIVE_HEALTH", "SMALL_PLANE", "SOCIAL_DISTANCING", "SPRAYING", "SQUARE_LARGE", "SQUARE_MEDIUM", "SQUARE_SMALL", "STAR_LARGE", "STAR_MEDIUM", "STAR_SMALL", "STETHOSCOPE", "STI", "STOCK_OUT", "STOP", "SURGICAL_STERILIZATION", "SWEATING", "SYMPTOM", "SYNERGIST_INSECTICIDE_BIOASSAYS", "SYRINGE", "TAC", "TB", "TRANSGENDER", "TRAUMATISM", "TRAVEL", "TREATED_WATER", "TRIANGLE_LARGE", "TRIANGLE_MEDIUM", "TRIANGLE_SMALL", "TRUCK_DRIVER", "UN_PAVE_ROAD", "UNDERWEIGHT", "VESPA_MOTORCYCLE", "VIH_AIDS", "VIRUS", "VOMITING", "WAR", "WASH_HANDS", "WATER_SANITATION", "WATER_TREATMENT", "WEIGHT", "WOLD_CARE", "WOMAN", "YES", "YOUNG_PEOPLE" ]\n}\n')))}r.isMDXComponent=!0}}]);