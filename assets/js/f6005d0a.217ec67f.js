"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[84403],{3905:function(_,A,T){T.d(A,{Zo:function(){return r},kt:function(){return C}});var E=T(67294);function e(_,A,T){return A in _?Object.defineProperty(_,A,{value:T,enumerable:!0,configurable:!0,writable:!0}):_[A]=T,_}function S(_,A){var T=Object.keys(_);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(_);A&&(E=E.filter((function(A){return Object.getOwnPropertyDescriptor(_,A).enumerable}))),T.push.apply(T,E)}return T}function t(_){for(var A=1;A<arguments.length;A++){var T=null!=arguments[A]?arguments[A]:{};A%2?S(Object(T),!0).forEach((function(A){e(_,A,T[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(T)):S(Object(T)).forEach((function(A){Object.defineProperty(_,A,Object.getOwnPropertyDescriptor(T,A))}))}return _}function I(_,A){if(null==_)return{};var T,E,e=function(_,A){if(null==_)return{};var T,E,e={},S=Object.keys(_);for(E=0;E<S.length;E++)T=S[E],A.indexOf(T)>=0||(e[T]=_[T]);return e}(_,A);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(_);for(E=0;E<S.length;E++)T=S[E],A.indexOf(T)>=0||Object.prototype.propertyIsEnumerable.call(_,T)&&(e[T]=_[T])}return e}var O=E.createContext({}),n=function(_){var A=E.useContext(O),T=A;return _&&(T="function"==typeof _?_(A):t(t({},A),_)),T},r=function(_){var A=n(_.components);return E.createElement(O.Provider,{value:A},_.children)},L={inlineCode:"code",wrapper:function(_){var A=_.children;return E.createElement(E.Fragment,{},A)}},R=E.forwardRef((function(_,A){var T=_.components,e=_.mdxType,S=_.originalType,O=_.parentName,r=I(_,["components","mdxType","originalType","parentName"]),R=n(T),C=e,N=R["".concat(O,".").concat(C)]||R[C]||L[C]||S;return T?E.createElement(N,t(t({ref:A},r),{},{components:T})):E.createElement(N,t({ref:A},r))}));function C(_,A){var T=arguments,e=A&&A.mdxType;if("string"==typeof _||e){var S=T.length,t=new Array(S);t[0]=R;var I={};for(var O in A)hasOwnProperty.call(A,O)&&(I[O]=A[O]);I.originalType=_,I.mdxType="string"==typeof _?_:e,t[1]=I;for(var n=2;n<S;n++)t[n]=T[n];return E.createElement.apply(null,t)}return E.createElement.apply(null,T)}R.displayName="MDXCreateElement"},12360:function(_,A,T){T.r(A),T.d(A,{assets:function(){return r},contentTitle:function(){return O},default:function(){return C},frontMatter:function(){return I},metadata:function(){return n},toc:function(){return L}});var E=T(87462),e=T(63366),S=(T(67294),T(3905)),t=["components"],I={},O=void 0,n={unversionedId:"v2.35.13/settingKey",id:"v2.35.13/settingKey",title:"settingKey",description:"",source:"@site/docs/v2.35.13/settingKey.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/settingKey",permalink:"/dhis2-json-schema-generator/v2.35.13/settingKey",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"series_",permalink:"/dhis2-json-schema-generator/v2.35.13/series_"},next:{title:"simpleImageResource",permalink:"/dhis2-json-schema-generator/v2.35.13/simpleImageResource"}},r={},L=[],R={toc:L};function C(_){var A=_.components,T=(0,e.Z)(_,t);return(0,S.kt)("wrapper",(0,E.Z)({},R,T,{components:A,mdxType:"MDXLayout"}),(0,S.kt)("pre",null,(0,S.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "UI_LOCALE", "DB_LOCALE", "ANALYSIS_DISPLAY_PROPERTY", "ANALYSIS_DIGIT_GROUP_SEPARATOR", "CURRENT_DOMAIN_TYPE", "TRACKER_DASHBOARD_LAYOUT", "APPLICATION_TITLE", "APPLICATION_INTRO", "APPLICATION_NOTIFICATION", "APPLICATION_FOOTER", "APPLICATION_RIGHT_FOOTER", "FLAG", "FLAG_IMAGE", "START_MODULE", "FACTOR_OF_DEVIATION", "EMAIL_HOST_NAME", "EMAIL_PORT", "EMAIL_USERNAME", "EMAIL_TLS", "EMAIL_SENDER", "EMAIL_PASSWORD", "MIN_PASSWORD_LENGTH", "MAX_PASSWORD_LENGTH", "SMS_CONFIG", "CACHE_STRATEGY", "CACHEABILITY", "ANALYTICS_FINANCIAL_YEAR_START", "PHONE_NUMBER_AREA_CODE", "MULTI_ORGANISATION_UNIT_FORMS", "CONFIGURATION", "ACCOUNT_RECOVERY", "LOCK_MULTIPLE_FAILED_LOGINS", "GOOGLE_ANALYTICS_UA", "CREDENTIALS_EXPIRES", "CREDENTIALS_EXPIRY_ALERT", "SELF_REGISTRATION_NO_RECAPTCHA", "RECAPTCHA_SECRET", "RECAPTCHA_SITE", "CAN_GRANT_OWN_USER_AUTHORITY_GROUPS", "IGNORE_ANALYTICS_APPROVAL_YEAR_THRESHOLD", "ANALYTICS_MAX_LIMIT", "SQL_VIEW_MAX_LIMIT", "RESPECT_META_DATA_START_END_DATES_IN_ANALYTICS_TABLE_EXPORT", "SKIP_DATA_TYPE_VALIDATION_IN_ANALYTICS_TABLE_EXPORT", "SKIP_ZERO_VALUES_IN_ANALYTICS_TABLE_EXPORT", "CUSTOM_LOGIN_PAGE_LOGO", "CUSTOM_TOP_MENU_LOGO", "ANALYTICS_MAINTENANCE_MODE", "DATABASE_SERVER_CPUS", "LAST_SUCCESSFUL_ANALYTICS_TABLES_RUNTIME", "LAST_SUCCESSFUL_LATEST_ANALYTICS_PARTITION_RUNTIME", "LAST_MONITORING_RUN", "LAST_SUCCESSFUL_DATA_VALUE_SYNC", "LAST_SUCCESSFUL_EVENT_DATA_SYNC", "LAST_SUCCESSFUL_COMPLETE_DATA_SET_REGISTRATION_SYNC", "SKIP_SYNCHRONIZATION_FOR_DATA_CHANGED_BEFORE", "LAST_SUCCESSFUL_ANALYTICS_TABLES_UPDATE", "LAST_SUCCESSFUL_LATEST_ANALYTICS_PARTITION_UPDATE", "LAST_SUCCESSFUL_RESOURCE_TABLES_UPDATE", "LAST_SUCCESSFUL_SYSTEM_MONITORING_PUSH", "LAST_SUCCESSFUL_MONITORING", "NEXT_ANALYTICS_TABLE_UPDATE", "HELP_PAGE_LINK", "ACCEPTANCE_REQUIRED_FOR_APPROVAL", "SYSTEM_NOTIFICATIONS_EMAIL", "ANALYSIS_RELATIVE_PERIOD", "REQUIRE_ADD_TO_VIEW", "ALLOW_OBJECT_ASSIGNMENT", "USE_CUSTOM_LOGO_FRONT", "USE_CUSTOM_LOGO_BANNER", "METADATA_REPO_URL", "DATA_IMPORT_STRICT_PERIODS", "DATA_IMPORT_STRICT_DATA_ELEMENTS", "DATA_IMPORT_STRICT_CATEGORY_OPTION_COMBOS", "DATA_IMPORT_STRICT_ORGANISATION_UNITS", "DATA_IMPORT_STRICT_ATTRIBUTE_OPTION_COMBOS", "DATA_IMPORT_REQUIRE_CATEGORY_OPTION_COMBO", "DATA_IMPORT_REQUIRE_ATTRIBUTE_OPTION_COMBO", "CUSTOM_JS", "CUSTOM_CSS", "CALENDAR", "DATE_FORMAT", "STYLE", "REMOTE_INSTANCE_URL", "REMOTE_INSTANCE_USERNAME", "REMOTE_INSTANCE_PASSWORD", "GOOGLE_MAPS_API_KEY", "BING_MAPS_API_KEY", "LAST_SUCCESSFUL_METADATA_SYNC", "METADATAVERSION_ENABLED", "METADATA_FAILED_VERSION", "METADATA_LAST_FAILED_TIME", "LAST_SUCCESSFUL_SCHEDULED_PROGRAM_NOTIFICATIONS", "LAST_SUCCESSFUL_SCHEDULED_DATASET_NOTIFICATIONS", "REMOTE_METADATA_VERSION", "SYSTEM_METADATA_VERSION", "STOP_METADATA_SYNC", "FILE_RESOURCE_RETENTION_STRATEGY", "MAX_REMOTE_SERVER_AVAILABILITY_CHECK_ATTEMPTS", "MAX_SYNC_ATTEMPTS", "DELAY_BETWEEN_REMOTE_SERVER_AVAILABILITY_CHECK_ATTEMPTS", "LAST_SUCCESSFUL_DATA_STATISTICS", "ANALYTICS_HIDE_DAILY_PERIODS", "ANALYTICS_HIDE_WEEKLY_PERIODS", "ANALYTICS_HIDE_MONTHLY_PERIODS", "ANALYTICS_HIDE_BIMONTHLY_PERIODS", "ANALYTICS_CACHE_PROGRESSIVE_TTL_FACTOR", "ANALYTICS_CACHE_TTL_MODE" ]\n}\n')))}C.isMDXComponent=!0}}]);