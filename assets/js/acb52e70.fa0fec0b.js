"use strict";(self.webpackChunkjson_schemas=self.webpackChunkjson_schemas||[]).push([[19679],{3905:function(E,_,O){O.d(_,{Zo:function(){return R},kt:function(){return C}});var e=O(67294);function I(E,_,O){return _ in E?Object.defineProperty(E,_,{value:O,enumerable:!0,configurable:!0,writable:!0}):E[_]=O,E}function n(E,_){var O=Object.keys(E);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(E);_&&(e=e.filter((function(_){return Object.getOwnPropertyDescriptor(E,_).enumerable}))),O.push.apply(O,e)}return O}function T(E){for(var _=1;_<arguments.length;_++){var O=null!=arguments[_]?arguments[_]:{};_%2?n(Object(O),!0).forEach((function(_){I(E,_,O[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(O)):n(Object(O)).forEach((function(_){Object.defineProperty(E,_,Object.getOwnPropertyDescriptor(O,_))}))}return E}function t(E,_){if(null==E)return{};var O,e,I=function(E,_){if(null==E)return{};var O,e,I={},n=Object.keys(E);for(e=0;e<n.length;e++)O=n[e],_.indexOf(O)>=0||(I[O]=E[O]);return I}(E,_);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(E);for(e=0;e<n.length;e++)O=n[e],_.indexOf(O)>=0||Object.prototype.propertyIsEnumerable.call(E,O)&&(I[O]=E[O])}return I}var r=e.createContext({}),N=function(E){var _=e.useContext(r),O=_;return E&&(O="function"==typeof E?E(_):T(T({},_),E)),O},R=function(E){var _=N(E.components);return e.createElement(r.Provider,{value:_},E.children)},A={inlineCode:"code",wrapper:function(E){var _=E.children;return e.createElement(e.Fragment,{},_)}},S=e.forwardRef((function(E,_){var O=E.components,I=E.mdxType,n=E.originalType,r=E.parentName,R=t(E,["components","mdxType","originalType","parentName"]),S=N(O),C=I,D=S["".concat(r,".").concat(C)]||S[C]||A[C]||n;return O?e.createElement(D,T(T({ref:_},R),{},{components:O})):e.createElement(D,T({ref:_},R))}));function C(E,_){var O=arguments,I=_&&_.mdxType;if("string"==typeof E||I){var n=O.length,T=new Array(n);T[0]=S;var t={};for(var r in _)hasOwnProperty.call(_,r)&&(t[r]=_[r]);t.originalType=E,t.mdxType="string"==typeof E?E:I,T[1]=t;for(var N=2;N<n;N++)T[N]=O[N];return e.createElement.apply(null,T)}return e.createElement.apply(null,O)}S.displayName="MDXCreateElement"},87735:function(E,_,O){O.r(_),O.d(_,{assets:function(){return R},contentTitle:function(){return r},default:function(){return C},frontMatter:function(){return t},metadata:function(){return N},toc:function(){return A}});var e=O(87462),I=O(63366),n=(O(67294),O(3905)),T=["components"],t={},r=void 0,N={unversionedId:"v2.38.1/configurationKey",id:"v2.38.1/configurationKey",title:"configurationKey",description:"",source:"@site/docs/v2.38.1/configurationKey.md",sourceDirName:"v2.38.1",slug:"/v2.38.1/configurationKey",permalink:"/dhis2-json-schema-generator/v2.38.1/configurationKey",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"configuration",permalink:"/dhis2-json-schema-generator/v2.38.1/configuration"},next:{title:"constant",permalink:"/dhis2-json-schema-generator/v2.38.1/constant"}},R={},A=[],S={toc:A};function C(E){var _=E.components,O=(0,I.Z)(E,T);return(0,n.kt)("wrapper",(0,e.Z)({},S,O,{components:_,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema" : "https://json-schema.org/draft/2020-12/schema",\n  "type" : "string",\n  "enum" : [ "SYSTEM_READ_ONLY_MODE", "SYSTEM_SESSION_TIMEOUT", "SYSTEM_MONITORING_URL", "SYSTEM_MONITORING_USERNAME", "SYSTEM_MONITORING_PASSWORD", "SYSTEM_SQL_VIEW_TABLE_PROTECTION", "SYSTEM_PROGRAM_RULE_SERVER_EXECUTION", "SYSTEM_CACHE_MAX_SIZE_FACTOR", "SYSTEM_CACHE_CAP_PERCENTAGE", "NODE_ID", "ENCRYPTION_PASSWORD", "CONNECTION_DIALECT", "CONNECTION_DRIVER_CLASS", "CONNECTION_URL", "CONNECTION_USERNAME", "CONNECTION_PASSWORD", "CONNECTION_SCHEMA", "CONNECTION_POOL_MAX_SIZE", "CONNECTION_POOL_MIN_SIZE", "CONNECTION_POOL_INITIAL_SIZE", "CONNECTION_POOL_ACQUIRE_INCR", "CONNECTION_POOL_MAX_IDLE_TIME", "CONNECTION_POOL_MAX_IDLE_TIME_EXCESS_CON", "CONNECTION_POOL_IDLE_CON_TEST_PERIOD", "CONNECTION_POOL_TEST_ON_CHECKOUT", "CONNECTION_POOL_TEST_ON_CHECKIN", "CONNECTION_POOL_TIMEOUT", "CONNECTION_POOL_VALIDATION_TIMEOUT", "CONNECTION_POOL_NUM_THREADS", "CONNECTION_POOL_TEST_QUERY", "LDAP_URL", "LDAP_MANAGER_DN", "LDAP_MANAGER_PASSWORD", "LDAP_SEARCH_BASE", "LDAP_SEARCH_FILTER", "FILESTORE_PROVIDER", "FILESTORE_CONTAINER", "FILESTORE_LOCATION", "FILESTORE_IDENTITY", "FILESTORE_SECRET", "GOOGLE_SERVICE_ACCOUNT_CLIENT_ID", "META_DATA_SYNC_RETRY", "META_DATA_SYNC_RETRY_TIME_FREQUENCY_MILLISEC", "CLUSTER_HOSTNAME", "CLUSTER_MEMBERS", "CLUSTER_CACHE_PORT", "CLUSTER_CACHE_REMOTE_OBJECT_PORT", "REDIS_HOST", "REDIS_PORT", "REDIS_PASSWORD", "REDIS_USE_SSL", "REDIS_ENABLED", "FLYWAY_OUT_OF_ORDER_MIGRATION", "FLYWAY_REPAIR_BEFORE_MIGRATION", "PROGRAM_TEMPORARY_OWNERSHIP_TIMEOUT", "LEADER_TIME_TO_LIVE", "ANALYTICS_CACHE_EXPIRATION", "ARTEMIS_MODE", "ARTEMIS_HOST", "ARTEMIS_PORT", "ARTEMIS_USERNAME", "ARTEMIS_PASSWORD", "ARTEMIS_EMBEDDED_SECURITY", "ARTEMIS_EMBEDDED_PERSISTENCE", "ARTEMIS_EMBEDDED_THREADS", "LOGGING_FILE_MAX_SIZE", "LOGGING_FILE_MAX_ARCHIVES", "LOGGING_REQUEST_ID_ENABLED", "SERVER_BASE_URL", "SERVER_HTTPS", "MONITORING_API_ENABLED", "MONITORING_JVM_ENABLED", "MONITORING_DBPOOL_ENABLED", "MONITORING_HIBERNATE_ENABLED", "MONITORING_UPTIME_ENABLED", "MONITORING_CPU_ENABLED", "APPHUB_BASE_URL", "APPHUB_API_URL", "CHANGELOG_AGGREGATE", "CHANGELOG_TRACKER", "AUDIT_USE_IN_MEMORY_QUEUE_ENABLED", "AUDIT_LOGGER", "AUDIT_DATABASE", "AUDIT_METADATA_MATRIX", "AUDIT_AGGREGATE_MATRIX", "AUDIT_TRACKER_MATRIX", "OIDC_OAUTH2_LOGIN_ENABLED", "OIDC_LOGOUT_REDIRECT_URL", "OIDC_PROVIDER_GOOGLE_CLIENT_ID", "OIDC_PROVIDER_GOOGLE_CLIENT_SECRET", "OIDC_PROVIDER_GOOGLE_MAPPING_CLAIM", "OIDC_PROVIDER_GOOGLE_REDIRECT_URI", "OIDC_PROVIDER_WSO2_CLIENT_ID", "OIDC_PROVIDER_WSO2_CLIENT_SECRET", "OIDC_PROVIDER_WSO2_MAPPING_CLAIM", "OIDC_PROVIDER_WSO2_SERVER_URL", "OIDC_PROVIDER_WSO2_REDIRECT_URI", "OIDC_PROVIDER_WSO2_DISPLAY_ALIAS", "OIDC_PROVIDER_WSO2_ENABLE_LOGOUT", "SLOW_QUERY_LOGGING_THRESHOLD_TIME_MS", "ENABLE_QUERY_LOGGING", "METHOD_QUERY_LOGGING_ENABLED", "ELAPSED_TIME_QUERY_LOGGING_ENABLED", "DB_POOL_TYPE", "ACTIVE_READ_REPLICAS", "AUDIT_ENABLED", "ENABLE_OAUTH2_AUTHORIZATION_SERVER", "ENABLE_JWT_OIDC_TOKEN_AUTHENTICATION", "DEBEZIUM_ENABLED", "DEBEZIUM_CONNECTION_USERNAME", "DEBEZIUM_CONNECTION_PASSWORD", "DEBEZIUM_DB_HOSTNAME", "DEBEZIUM_DB_PORT", "DEBEZIUM_DB_NAME", "DEBEZIUM_SLOT_NAME", "DEBEZIUM_EXCLUDE_LIST", "DEBEZIUM_SHUTDOWN_ON_CONNECTOR_STOP", "ENABLE_API_TOKEN_AUTHENTICATION", "SYSTEM_UPDATE_NOTIFICATIONS_ENABLED", "MAX_SESSIONS_PER_USER" ]\n}\n')))}C.isMDXComponent=!0}}]);