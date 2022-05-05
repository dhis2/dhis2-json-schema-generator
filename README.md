DHIS2 JSON Schema Generator
===========================

Usage Examples
--------------

Generate JSON Schemas for DHIS2 API version `2.37.3` and write them to the directory `schemas`:
```shell
mvn package exec:java 
```

Generate JSON Schemas for DHIS API version `2.37.2` and write them to the directory `schemas`:
```shell
mvn package exec:java -Ddhis2.api.version=2.37.2
```

Generate JSON Schemas for DHIS API version `2.37.3` and write them to the directory `output`:
```shell
mvn package exec:java -Doutput.dir=output
```