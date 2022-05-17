DHIS2 JSON Schema Generator
===========================

Usage Examples
--------------

Generate JSON Schemas for DHIS2 API version `2.37.3` in the `schemas` directory and write the documentation to the `docs` directory:
```shell
mvn package exec:java 
```

Generate JSON Schemas for DHIS API version `2.37.2` in the `schemas` directory and write the documentation to the `docs` directory:
```shell
mvn package exec:java -Ddhis2.api.version=2.37.2
```

Generate JSON Schemas for DHIS API version `2.37.2` in the `v2.37.2` directory and write the documentation to the `v2.37` directory:
```shell
mvn package exec:java -Ddhis2.api.version=2.37.2 -Dschemas.output.dir=v2.37.2 -Ddocs.output.dir=v2.37
```