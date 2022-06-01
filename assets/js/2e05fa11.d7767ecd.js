"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[67715],{3905:function(E,_,e){e.d(_,{Zo:function(){return N},kt:function(){return S}});var O=e(67294);function n(E,_,e){return _ in E?Object.defineProperty(E,_,{value:e,enumerable:!0,configurable:!0,writable:!0}):E[_]=e,E}function t(E,_){var e=Object.keys(E);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(E);_&&(O=O.filter((function(_){return Object.getOwnPropertyDescriptor(E,_).enumerable}))),e.push.apply(e,O)}return e}function r(E){for(var _=1;_<arguments.length;_++){var e=null!=arguments[_]?arguments[_]:{};_%2?t(Object(e),!0).forEach((function(_){n(E,_,e[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(_){Object.defineProperty(E,_,Object.getOwnPropertyDescriptor(e,_))}))}return E}function I(E,_){if(null==E)return{};var e,O,n=function(E,_){if(null==E)return{};var e,O,n={},t=Object.keys(E);for(O=0;O<t.length;O++)e=t[O],_.indexOf(e)>=0||(n[e]=E[e]);return n}(E,_);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(E);for(O=0;O<t.length;O++)e=t[O],_.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(E,e)&&(n[e]=E[e])}return n}var T=O.createContext({}),R=function(E){var _=O.useContext(T),e=_;return E&&(e="function"==typeof E?E(_):r(r({},_),E)),e},N=function(E){var _=R(E.components);return O.createElement(T.Provider,{value:_},E.children)},o={inlineCode:"code",wrapper:function(E){var _=E.children;return O.createElement(O.Fragment,{},_)}},A=O.forwardRef((function(E,_){var e=E.components,n=E.mdxType,t=E.originalType,T=E.parentName,N=I(E,["components","mdxType","originalType","parentName"]),A=R(e),S=n,C=A["".concat(T,".").concat(S)]||A[S]||o[S]||t;return e?O.createElement(C,r(r({ref:_},N),{},{components:e})):O.createElement(C,r({ref:_},N))}));function S(E,_){var e=arguments,n=_&&_.mdxType;if("string"==typeof E||n){var t=e.length,r=new Array(t);r[0]=A;var I={};for(var T in _)hasOwnProperty.call(_,T)&&(I[T]=_[T]);I.originalType=E,I.mdxType="string"==typeof E?E:n,r[1]=I;for(var R=2;R<t;R++)r[R]=e[R];return O.createElement.apply(null,r)}return O.createElement.apply(null,e)}A.displayName="MDXCreateElement"},8043:function(E,_,e){e.r(_),e.d(_,{assets:function(){return N},contentTitle:function(){return T},default:function(){return S},frontMatter:function(){return I},metadata:function(){return R},toc:function(){return o}});var O=e(87462),n=e(63366),t=(e(67294),e(3905)),r=["components"],I={},T=void 0,R={unversionedId:"v2.35.13/configurationKey",id:"v2.35.13/configurationKey",title:"configurationKey",description:"",source:"@site/docs/v2.35.13/configurationKey.md",sourceDirName:"v2.35.13",slug:"/v2.35.13/configurationKey",permalink:"/dhis2-json-schema-generator/v2.35.13/configurationKey",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"configuration",permalink:"/dhis2-json-schema-generator/v2.35.13/configuration"},next:{title:"constant",permalink:"/dhis2-json-schema-generator/v2.35.13/constant"}},N={},o=[],A={toc:o};function S(E){var _=E.components,e=(0,n.Z)(E,r);return(0,t.kt)("wrapper",(0,O.Z)({},A,e,{components:_,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "SYSTEM_READ_ONLY_MODE", "SYSTEM_SESSION_TIMEOUT", "SYSTEM_INTERNAL_SERVICE_API", "SYSTEM_MONITORING_URL", "SYSTEM_MONITORING_USERNAME", "SYSTEM_MONITORING_PASSWORD", "SYSTEM_SQL_VIEW_TABLE_PROTECTION", "SYSTEM_PROGRAM_RULE_SERVER_EXECUTION", "NODE_ID", "ENCRYPTION_PASSWORD", "CONNECTION_DIALECT", "CONNECTION_DRIVER_CLASS", "CONNECTION_URL", "CONNECTION_USERNAME", "CONNECTION_PASSWORD", "CONNECTION_SCHEMA", "CONNECTION_POOL_MAX_SIZE", "CONNECTION_POOL_MIN_SIZE", "CONNECTION_POOL_INITIAL_SIZE", "CONNECTION_POOL_ACQUIRE_INCR", "CONNECTION_POOL_MAX_IDLE_TIME", "CONNECTION_POOL_MAX_IDLE_TIME_EXCESS_CON", "CONNECTION_POOL_IDLE_CON_TEST_PERIOD", "CONNECTION_POOL_TEST_ON_CHECKOUT", "CONNECTION_POOL_TEST_ON_CHECKIN", "CONNECTION_POOL_NUM_THREADS", "CONNECTION_POOL_TEST_QUERY", "LDAP_URL", "LDAP_MANAGER_DN", "LDAP_MANAGER_PASSWORD", "LDAP_SEARCH_BASE", "LDAP_SEARCH_FILTER", "FILESTORE_PROVIDER", "FILESTORE_CONTAINER", "FILESTORE_LOCATION", "FILESTORE_IDENTITY", "FILESTORE_SECRET", "GOOGLE_SERVICE_ACCOUNT_CLIENT_ID", "META_DATA_SYNC_RETRY", "META_DATA_SYNC_RETRY_TIME_FREQUENCY_MILLISEC", "CLUSTER_HOSTNAME", "CLUSTER_MEMBERS", "CLUSTER_CACHE_PORT", "CLUSTER_CACHE_REMOTE_OBJECT_PORT", "REDIS_HOST", "REDIS_PORT", "REDIS_PASSWORD", "REDIS_ENABLED", "REDIS_USE_SSL", "FLYWAY_OUT_OF_ORDER_MIGRATION", "FLYWAY_REPAIR_BEFORE_MIGRATION", "PROGRAM_TEMPORARY_OWNERSHIP_TIMEOUT", "LEADER_TIME_TO_LIVE", "ANALYTICS_CACHE_EXPIRATION", "ARTEMIS_MODE", "ARTEMIS_HOST", "ARTEMIS_PORT", "ARTEMIS_USERNAME", "ARTEMIS_PASSWORD", "ARTEMIS_EMBEDDED_SECURITY", "ARTEMIS_EMBEDDED_PERSISTENCE", "ARTEMIS_EMBEDDED_THREADS", "LOGGING_FILE_MAX_SIZE", "LOGGING_FILE_MAX_ARCHIVES", "LOGGING_REQUEST_ID_HASH", "LOGGING_REQUEST_ID_ENABLED", "LOGGING_REQUEST_ID_MAX_SIZE", "SERVER_BASE_URL", "SERVER_HTTPS", "MONITORING_PROVIDER", "MONITORING_API_ENABLED", "MONITORING_JVM_ENABLED", "MONITORING_DBPOOL_ENABLED", "MONITORING_HIBERNATE_ENABLED", "MONITORING_UPTIME_ENABLED", "MONITORING_CPU_ENABLED", "APPHUB_BASE_URL", "APPHUB_API_URL", "CHANGELOG_AGGREGATE", "CHANGELOG_TRACKER", "AUDIT_USE_INMEMORY_QUEUE_ENABLED", "AUDIT_USE_IN_MEMORY_QUEUE_ENABLED", "AUDIT_LOGGER", "AUDIT_DATABASE", "AUDIT_METADATA_MATRIX", "AUDIT_TRACKER_MATRIX", "AUDIT_AGGREGATE_MATRIX", "OIDC_OAUTH2_LOGIN_ENABLED", "OIDC_LOGOUT_REDIRECT_URL", "OIDC_PROVIDER_GOOGLE_CLIENT_ID", "OIDC_PROVIDER_GOOGLE_CLIENT_SECRET", "OIDC_PROVIDER_GOOGLE_MAPPING_CLAIM", "OIDC_PROVIDER_WSO2_CLIENT_ID", "OIDC_PROVIDER_WSO2_CLIENT_SECRET", "OIDC_PROVIDER_WSO2_MAPPING_CLAIM", "OIDC_PROVIDER_WSO2_SERVER_URL", "OIDC_PROVIDER_WSO2_DISPLAY_ALIAS", "OIDC_PROVIDER_WSO2_ENABLE_LOGOUT" ]\n}\n')))}S.isMDXComponent=!0}}]);