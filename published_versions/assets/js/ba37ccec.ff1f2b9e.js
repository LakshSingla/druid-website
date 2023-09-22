"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"aliyun-oss",title:"Aliyun OSS"},s=void 0,d={unversionedId:"development/extensions-contrib/aliyun-oss",id:"development/extensions-contrib/aliyun-oss",title:"Aliyun OSS",description:"\x3c!--",source:"@site/docs/latest/development/extensions-contrib/aliyun-oss-extensions.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/aliyun-oss",permalink:"/docs/latest/development/extensions-contrib/aliyun-oss",draft:!1,tags:[],version:"current",frontMatter:{id:"aliyun-oss",title:"Aliyun OSS"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Enabling",id:"enabling",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Reading data from OSS",id:"reading-data-from-oss",level:2},{value:"OSS Input Source",id:"oss-input-source",level:3},{value:"OSS Object",id:"oss-object",level:4},{value:"Properties Object",id:"properties-object",level:4},{value:"Reading from a file",id:"reading-from-a-file",level:3},{value:"Reading files in folders",id:"reading-files-in-folders",level:3},{value:"Reading from other buckets",id:"reading-from-other-buckets",level:3},{value:"Reading with customized accessKey",id:"reading-with-customized-accesskey",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:u},c="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.aliyun.com"},"Alibaba Cloud")," is the 3rd largest cloud infrastructure provider in the world. It provides its own storage solution known as OSS, ",(0,l.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/oss"},"Object Storage Service"),".\nThis document describes how to use OSS as Druid deep storage."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/operations/pull-deps"},"pull-deps")," tool shipped with Druid to install the ",(0,l.kt)("inlineCode",{parentName:"p"},"aliyun-oss-extensions")," extension, as described ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions#community-extensions"},"here")," on middle manager and historical nodes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'java -classpath "{YOUR_DRUID_DIR}/lib/*" org.apache.druid.cli.Main tools pull-deps -c org.apache.druid.extensions.contrib:aliyun-oss-extensions:{YOUR_DRUID_VERSION}\n')),(0,l.kt)("h2",{id:"enabling"},"Enabling"),(0,l.kt)("p",null,"After installation, add this ",(0,l.kt)("inlineCode",{parentName:"p"},"aliyun-oss-extensions")," extension to ",(0,l.kt)("inlineCode",{parentName:"p"},"druid.extensions.loadList")," in common.runtime.properties and then restart middle manager and historical nodes."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"First add the following OSS configurations to common.runtime.properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.oss.accessKey")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"AccessKey ID")," of the account to be used to access the OSS bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.oss.secretKey")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"AccessKey Secret")," of the account to be used to access the OSS bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.oss.endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"The endpoint URL of your OSS storage. ",(0,l.kt)("br",null),"If your Druid cluster is also hosted in the same region on Alibaba Cloud as the region of your OSS bucket, it's recommended to use the internal network endpoint url, so that any inbound and outbound traffic to the OSS bucket is free of charge."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("p",null,"To use OSS as deep storage, add the following configurations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,l.kt)("td",{parentName:"tr",align:null},"Global deep storage provider. Must be set to ",(0,l.kt)("inlineCode",{parentName:"td"},"oss")," to make use of this extension."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.oss.bucket")),(0,l.kt)("td",{parentName:"tr",align:null},"Storage bucket name."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.oss.prefix")),(0,l.kt)("td",{parentName:"tr",align:null},"Folder where segments will be published to. ",(0,l.kt)("inlineCode",{parentName:"td"},"druid/segments")," is recommended."),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,"If OSS is used as deep storage for segment files, it's also recommended saving index logs in the OSS too.\nTo do this, add following configurations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.indexer.logs.type")),(0,l.kt)("td",{parentName:"tr",align:null},"Global deep storage provider. Must be set to ",(0,l.kt)("inlineCode",{parentName:"td"},"oss")," to make use of this extension."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.indexer.logs.oss.bucket")),(0,l.kt)("td",{parentName:"tr",align:null},"The bucket used to keep logs. It could be the same as ",(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.oss.bucket")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.indexer.logs.oss.prefix")),(0,l.kt)("td",{parentName:"tr",align:null},"Folder where log files will be published to. ",(0,l.kt)("inlineCode",{parentName:"td"},"druid/logs")," is recommended."),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("h2",{id:"reading-data-from-oss"},"Reading data from OSS"),(0,l.kt)("p",null,"Currently, Web Console does not support ingestion from OSS, but it could be done by submitting an ingestion task with OSS's input source configuration."),(0,l.kt)("p",null,"Below shows the configurations of OSS's input source."),(0,l.kt)("h3",{id:"oss-input-source"},"OSS Input Source"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"This should be ",(0,l.kt)("inlineCode",{parentName:"td"},"oss"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uris"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON array of URIs where OSS objects to be ingested are located.",(0,l.kt)("br",null),"For example, ",(0,l.kt)("inlineCode",{parentName:"td"},"oss://{your_bucket}/{source_file_path}")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uris")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"prefixes")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"objects")," must be set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefixes"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON array of URI prefixes for the locations of OSS objects to be ingested. Empty objects starting with one of the given prefixes will be skipped."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uris")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"prefixes")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"objects")," must be set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"objects"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON array of ",(0,l.kt)("a",{parentName:"td",href:"#oss-object"},"OSS Objects")," to be ingested."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uris")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"prefixes")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"objects")," must be set")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#properties-object"},"Properties Object")," for overriding the default OSS configuration. See below for more information."),(0,l.kt)("td",{parentName:"tr",align:null},"no (defaults will be used if not given)")))),(0,l.kt)("h4",{id:"oss-object"},"OSS Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the OSS bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"The path where data is located."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("h4",{id:"properties-object"},"Properties Object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accessKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"/docs/latest/operations/password-provider"},"Password Provider")," or plain text string of this OSS InputSource's access key"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secretKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"/docs/latest/operations/password-provider"},"Password Provider")," or plain text string of this OSS InputSource's secret key"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"The endpoint of this OSS InputSource"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("h3",{id:"reading-from-a-file"},"Reading from a file"),(0,l.kt)("p",null,"Say that the file ",(0,l.kt)("inlineCode",{parentName:"p"},"rollup-data.json"),", which can be found under Druid's ",(0,l.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial")," directory, has been uploaded to a folder ",(0,l.kt)("inlineCode",{parentName:"p"},"druid")," in your OSS bucket, the bucket for which your Druid is configured.\nIn this case, the ",(0,l.kt)("inlineCode",{parentName:"p"},"uris")," property of the OSS's input source can be used for reading, as shown:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "index_parallel",\n  "spec" : {\n    "dataSchema" : {\n      "dataSource" : "rollup-tutorial-from-oss",\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "iso"\n      },\n      "dimensionsSpec" : {\n        "dimensions" : [\n          "srcIP",\n          "dstIP"\n        ]\n      },\n      "metricsSpec" : [\n        { "type" : "count", "name" : "count" },\n        { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n        { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" }\n      ],\n      "granularitySpec" : {\n        "type" : "uniform",\n        "segmentGranularity" : "week",\n        "queryGranularity" : "minute",\n        "intervals" : ["2018-01-01/2018-01-03"],\n        "rollup" : true\n      }\n    },\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "oss",\n        "uris" : [\n          "oss://{YOUR_BUCKET_NAME}/druid/rollup-data.json"\n        ]\n      },\n      "inputFormat" : {\n        "type" : "json"\n      },\n      "appendToExisting" : false\n    },\n    "tuningConfig" : {\n      "type" : "index_parallel",\n      "maxRowsPerSegment" : 5000000,\n      "maxRowsInMemory" : 25000\n    }\n  }\n}\n')),(0,l.kt)("p",null,"By posting the above ingestion task spec to ",(0,l.kt)("inlineCode",{parentName:"p"},"http://{YOUR_ROUTER_IP}:8888/druid/indexer/v1/task"),", an ingestion task will be created by the indexing service to ingest."),(0,l.kt)("h3",{id:"reading-files-in-folders"},"Reading files in folders"),(0,l.kt)("p",null,"If we want to read files in a same folder, we could use the ",(0,l.kt)("inlineCode",{parentName:"p"},"prefixes")," property to specify the folder name where Druid could find input files instead of specifying file URIs one by one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "oss",\n        "prefixes" : [\n          "oss://{YOUR_BUCKET_NAME}/2020", "oss://{YOUR_BUCKET_NAME}/2021"\n        ]\n      },\n      "inputFormat" : {\n        "type" : "json"\n      },\n      "appendToExisting" : false\n    }\n...\n')),(0,l.kt)("p",null,"The spec above tells the ingestion task to read all files under ",(0,l.kt)("inlineCode",{parentName:"p"},"2020")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"2021")," folders."),(0,l.kt)("h3",{id:"reading-from-other-buckets"},"Reading from other buckets"),(0,l.kt)("p",null,"If you want to read from files in buckets which are different from the bucket Druid is configured, use ",(0,l.kt)("inlineCode",{parentName:"p"},"objects")," property of OSS's InputSource for task submission as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "oss",\n        "objects" : [\n          {"bucket": "YOUR_BUCKET_NAME", "path": "druid/rollup-data.json"}\n        ]\n      },\n      "inputFormat" : {\n        "type" : "json"\n      },\n      "appendToExisting" : false\n    }\n...\n')),(0,l.kt)("h3",{id:"reading-with-customized-accesskey"},"Reading with customized accessKey"),(0,l.kt)("p",null,"If the default ",(0,l.kt)("inlineCode",{parentName:"p"},"druid.oss.accessKey")," is not able to access a bucket, ",(0,l.kt)("inlineCode",{parentName:"p"},"properties")," could be used to customize these secret information as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'...\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "oss",\n        "objects" : [\n          {"bucket": "YOUR_BUCKET_NAME", "path": "druid/rollup-data.json"}\n        ],\n        "properties": {\n          "endpoint": "YOUR_ENDPOINT_OF_BUCKET",\n          "accessKey": "YOUR_ACCESS_KEY",\n          "secretKey": "YOUR_SECRET_KEY"\n        }\n      },\n      "inputFormat" : {\n        "type" : "json"\n      },\n      "appendToExisting" : false\n    }\n...\n')),(0,l.kt)("p",null,"This ",(0,l.kt)("inlineCode",{parentName:"p"},"properties")," could be applied to any of ",(0,l.kt)("inlineCode",{parentName:"p"},"uris"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"objects"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"prefixes")," property above."),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"When using OSS as deep storage or reading from OSS, the most problems that users will encounter are related to OSS permission.\nPlease refer to the official ",(0,l.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/42777.htm"},"OSS permission troubleshooting document")," to find a solution."))}k.isMDXComponent=!0}}]);