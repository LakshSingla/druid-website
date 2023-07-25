"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"protobuf",title:"Protobuf"},p=void 0,l={unversionedId:"development/extensions-core/protobuf",id:"development/extensions-core/protobuf",title:"Protobuf",description:"\x3c!--",source:"@site/docs/26.0.0/development/extensions-core/protobuf.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/protobuf",permalink:"/docs/26.0.0/development/extensions-core/protobuf",draft:!1,tags:[],version:"current",frontMatter:{id:"protobuf",title:"Protobuf"}},c={},m=[{value:"Example: Load Protobuf messages from Kafka",id:"example-load-protobuf-messages-from-kafka",level:2},{value:"Proto file",id:"proto-file",level:3},{value:"When using a descriptor file",id:"when-using-a-descriptor-file",level:3},{value:"When using Schema Registry",id:"when-using-schema-registry",level:3},{value:"Create Kafka Supervisor",id:"create-kafka-supervisor",level:2},{value:"When using a descriptor file",id:"when-using-a-descriptor-file-1",level:3},{value:"When using Schema Registry",id:"when-using-schema-registry-1",level:3},{value:"Adding Protobuf messages to Kafka",id:"adding-protobuf-messages-to-kafka",level:2},{value:"Generating the example files",id:"generating-the-example-files",level:2},{value:"<code>metrics.desc</code>",id:"metricsdesc",level:3},{value:"<code>metrics_pb2.py</code>",id:"metrics_pb2py",level:3},{value:"<code>pb_publisher.py</code>",id:"pb_publisherpy",level:3}],u={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This Apache Druid extension enables Druid to ingest and understand the Protobuf data format. Make sure to ",(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions#loading-extensions"},"include")," ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-protobuf-extensions")," in the extensions load list."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-protobuf-extensions")," provides the ",(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/ingestion/data-formats#protobuf-parser"},"Protobuf Parser"),"\nfor ",(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/ingestion/#streaming"},"stream ingestion"),". See corresponding docs for details."),(0,a.kt)("h2",{id:"example-load-protobuf-messages-from-kafka"},"Example: Load Protobuf messages from Kafka"),(0,a.kt)("p",null,"This example demonstrates how to load Protobuf messages from Kafka.  Please read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/tutorials/tutorial-kafka"},"Load from Kafka tutorial")," first, and see ",(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions-core/kafka-ingestion"},"Kafka Indexing Service")," documentation for more details."),(0,a.kt)("p",null,"The files used in this example are found at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/tree/master/examples/quickstart/protobuf"},(0,a.kt)("inlineCode",{parentName:"a"},"./examples/quickstart/protobuf")," in your Druid directory"),"."),(0,a.kt)("p",null,"For this example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kafka broker host is ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:9092")),(0,a.kt)("li",{parentName:"ul"},"Kafka topic is ",(0,a.kt)("inlineCode",{parentName:"li"},"metrics_pb")),(0,a.kt)("li",{parentName:"ul"},"Datasource name is ",(0,a.kt)("inlineCode",{parentName:"li"},"metrics-protobuf"))),(0,a.kt)("p",null,"Here is a JSON example of the 'metrics' data schema used in the example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "unit": "milliseconds",\n  "http_method": "GET",\n  "value": 44,\n  "timestamp": "2017-04-06T02:36:22Z",\n  "http_code": "200",\n  "page": "/",\n  "metricType": "request/latency",\n  "server": "www1.example.com"\n}\n')),(0,a.kt)("h3",{id:"proto-file"},"Proto file"),(0,a.kt)("p",null,"The corresponding proto file for our 'metrics' dataset looks like this. You can use Protobuf ",(0,a.kt)("inlineCode",{parentName:"p"},"inputFormat")," with a proto file or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/index.html"},"Confluent Schema Registry"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'syntax = "proto3";\nmessage Metrics {\n  string unit = 1;\n  string http_method = 2;\n  int32 value = 3;\n  string timestamp = 4;\n  string http_code = 5;\n  string page = 6;\n  string metricType = 7;\n  string server = 8;\n}\n')),(0,a.kt)("h3",{id:"when-using-a-descriptor-file"},"When using a descriptor file"),(0,a.kt)("p",null,"Next, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc")," Protobuf compiler to generate the descriptor file and save it as ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics.desc"),". The descriptor file must be either in the classpath or reachable by URL.  In this example the descriptor file was saved at ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/metrics.desc"),", however this file is also available in the example files. From your Druid install directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"protoc -o /tmp/metrics.desc ./quickstart/protobuf/metrics.proto\n")),(0,a.kt)("h3",{id:"when-using-schema-registry"},"When using Schema Registry"),(0,a.kt)("p",null,"Make sure your Schema Registry version is later than 5.5. Next, we can post a schema to add it to the registry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /subjects/test/versions HTTP/1.1\nHost: schemaregistry.example1.com\nAccept: application/vnd.schemaregistry.v1+json, application/vnd.schemaregistry+json, application/json\n\n{\n    "schemaType": "PROTOBUF",\n    "schema": "syntax = \\"proto3\\";\\nmessage Metrics {\\n  string unit = 1;\\n  string http_method = 2;\\n  int32 value = 3;\\n string timestamp = 4;\\n string http_code = 5;\\n string page = 6;\\n string metricType = 7;\\n string server = 8;\\n}\\n"\n}\n')),(0,a.kt)("p",null,"This feature uses Confluent's Protobuf provider which is not included in the Druid distribution and must be installed separately. You can fetch it and its dependencies from the Confluent repository and Maven Central at: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://packages.confluent.io/maven/io/confluent/kafka-protobuf-provider/6.0.1/kafka-protobuf-provider-6.0.1.jar"},"https://packages.confluent.io/maven/io/confluent/kafka-protobuf-provider/6.0.1/kafka-protobuf-provider-6.0.1.jar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-stdlib/1.4.0/kotlin-stdlib-1.4.0.jar"},"https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-stdlib/1.4.0/kotlin-stdlib-1.4.0.jar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/com/squareup/wire/wire-schema/3.2.2/wire-schema-3.2.2.jar"},"https://repo1.maven.org/maven2/com/squareup/wire/wire-schema/3.2.2/wire-schema-3.2.2.jar"))),(0,a.kt)("p",null,"Copy or symlink those files inside the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions/protobuf-extensions")," under the distribution root directory."),(0,a.kt)("h2",{id:"create-kafka-supervisor"},"Create Kafka Supervisor"),(0,a.kt)("p",null,"Below is the complete Supervisor spec JSON to be submitted to the Overlord.\nMake sure these keys are properly configured for successful ingestion."),(0,a.kt)("h3",{id:"when-using-a-descriptor-file-1"},"When using a descriptor file"),(0,a.kt)("p",null,"Important supervisor properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.descriptor")," for the descriptor file URL"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.protoMessageType")," from the proto definition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.type")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"file"),", indicate use descriptor file to decode Protobuf file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"inputFormat")," should have ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"protobuf"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"type": "kafka",\n"spec": {\n    "dataSchema": {\n        "dataSource": "metrics-protobuf",\n        "timestampSpec": {\n            "column": "timestamp",\n            "format": "auto"\n        },\n        "dimensionsSpec": {\n            "dimensions": [\n                "unit",\n                "http_method",\n                "http_code",\n                "page",\n                "metricType",\n                "server"\n            ],\n            "dimensionExclusions": [\n                "timestamp",\n                "value"\n            ]\n        },\n        "metricsSpec": [\n            {\n                "name": "count",\n                "type": "count"\n            },\n            {\n                "name": "value_sum",\n                "fieldName": "value",\n                "type": "doubleSum"\n            },\n            {\n                "name": "value_min",\n                "fieldName": "value",\n                "type": "doubleMin"\n            },\n            {\n                "name": "value_max",\n                "fieldName": "value",\n                "type": "doubleMax"\n            }\n        ],\n        "granularitySpec": {\n            "type": "uniform",\n            "segmentGranularity": "HOUR",\n            "queryGranularity": "NONE"\n        }\n    },\n    "tuningConfig": {\n        "type": "kafka",\n        "maxRowsPerSegment": 5000000\n    },\n    "ioConfig": {\n        "topic": "metrics_pb",\n        "consumerProperties": {\n            "bootstrap.servers": "localhost:9092"\n        },\n        "inputFormat": {\n            "type": "protobuf",\n            "protoBytesDecoder": {\n                "type": "file",\n                "descriptor": "file:///tmp/metrics.desc",\n                "protoMessageType": "Metrics"\n            },\n            "flattenSpec": {\n                "useFieldDiscovery": true\n            },\n            "binaryAsString": false\n        },\n        "taskCount": 1,\n        "replicas": 1,\n        "taskDuration": "PT1H",\n        "type": "kafka"\n    }\n}\n}\n')),(0,a.kt)("p",null,"To adopt to old version. You can use old parser style, which also works."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parser": {\n    "type": "protobuf",\n    "descriptor": "file:///tmp/metrics.desc",\n    "protoMessageType": "Metrics"\n  }\n}\n')),(0,a.kt)("h3",{id:"when-using-schema-registry-1"},"When using Schema Registry"),(0,a.kt)("p",null,"Important supervisor properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.url")," for the schema registry URL with single instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.urls")," for the schema registry URLs with multi instances."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.capacity")," capacity for schema registry cached schemas."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.config")," to send additional configurations, configured for Schema Registry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.headers")," to send headers to the Schema Registry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protoBytesDecoder.type")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"schema_registry"),", indicate use schema registry to decode Protobuf file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parser")," should have ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"protobuf"),", but note that the ",(0,a.kt)("inlineCode",{parentName:"li"},"format")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"parseSpec")," must be ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parser": {\n    "type": "protobuf",\n    "protoBytesDecoder": {\n      "urls": ["http://schemaregistry.example1.com:8081","http://schemaregistry.example2.com:8081"],\n      "type": "schema_registry",\n      "capacity": 100,\n      "config" : {\n           "basic.auth.credentials.source": "USER_INFO",\n           "basic.auth.user.info": "fred:letmein",\n           "schema.registry.ssl.truststore.location": "/some/secrets/kafka.client.truststore.jks",\n           "schema.registry.ssl.truststore.password": "<password>",\n           "schema.registry.ssl.keystore.location": "/some/secrets/kafka.client.keystore.jks",\n           "schema.registry.ssl.keystore.password": "<password>",\n           "schema.registry.ssl.key.password": "<password>",\n             ... \n      },\n      "headers": {\n          "traceID" : "b29c5de2-0db4-490b-b421",\n          "timeStamp" : "1577191871865",\n          ...\n      }\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"adding-protobuf-messages-to-kafka"},"Adding Protobuf messages to Kafka"),(0,a.kt)("p",null,"If necessary, from your Kafka installation directory run the following command to create the Kafka topic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic metrics_pb\n")),(0,a.kt)("p",null,"This example script requires ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka-python")," modules. With the topic in place, messages can be inserted running the following command from your Druid installation directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/generate-example-metrics | python /quickstart/protobuf/pb_publisher.py\n")),(0,a.kt)("p",null,"You can confirm that data has been inserted to your Kafka topic using the following command from your Kafka installation directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/kafka-console-consumer --zookeeper localhost --topic metrics_pb\n")),(0,a.kt)("p",null,"which should print messages like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'millisecondsGETR"2017-04-06T03:23:56Z*2002/list:request/latencyBwww1.example.com\n')),(0,a.kt)("p",null,"If your supervisor created in the previous step is running, the indexing tasks should begin producing the messages and the data will soon be available for querying in Druid."),(0,a.kt)("h2",{id:"generating-the-example-files"},"Generating the example files"),(0,a.kt)("p",null,"The files provided in the example quickstart can be generated in the following manner starting with only ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics.proto"),"."),(0,a.kt)("h3",{id:"metricsdesc"},(0,a.kt)("inlineCode",{parentName:"h3"},"metrics.desc")),(0,a.kt)("p",null,"The descriptor file is generated using ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc")," Protobuf compiler. Given a ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," file, a ",(0,a.kt)("inlineCode",{parentName:"p"},".desc")," file can be generated like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"protoc -o metrics.desc metrics.proto\n")),(0,a.kt)("h3",{id:"metrics_pb2py"},(0,a.kt)("inlineCode",{parentName:"h3"},"metrics_pb2.py")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"metrics_pb2.py")," is also generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," protoc -o metrics.desc metrics.proto --python_out=.\n")),(0,a.kt)("h3",{id:"pb_publisherpy"},(0,a.kt)("inlineCode",{parentName:"h3"},"pb_publisher.py")),(0,a.kt)("p",null,"After ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics_pb2.py")," is generated, another script can be constructed to parse JSON data, convert it to Protobuf, and produce to a Kafka topic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\n\nimport sys\nimport json\n\nfrom kafka import KafkaProducer\nfrom metrics_pb2 import Metrics\n\n\nproducer = KafkaProducer(bootstrap_servers='localhost:9092')\ntopic = 'metrics_pb'\n\nfor row in iter(sys.stdin):\n    d = json.loads(row)\n    metrics = Metrics()\n    for k, v in d.items():\n        setattr(metrics, k, v)\n    pb = metrics.SerializeToString()\n    producer.send(topic, pb)\n\nproducer.flush()\n")))}f.isMDXComponent=!0}}]);