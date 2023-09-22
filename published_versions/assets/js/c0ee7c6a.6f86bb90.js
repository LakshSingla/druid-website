"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"tutorial-transform-spec",title:"Transform input data",sidebar_label:"Transform input data"},s=void 0,p={unversionedId:"tutorials/tutorial-transform-spec",id:"tutorials/tutorial-transform-spec",title:"Transform input data",description:"\x3c!--",source:"@site/docs/latest/tutorials/tutorial-transform-spec.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-transform-spec",permalink:"/docs/latest/tutorials/tutorial-transform-spec",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-transform-spec",title:"Transform input data",sidebar_label:"Transform input data"},sidebar:"docs",previous:{title:"Write an ingestion spec",permalink:"/docs/latest/tutorials/tutorial-ingestion-spec"},next:{title:"Convert ingestion spec to SQL",permalink:"/docs/latest/tutorials/tutorial-msq-convert-spec"}},u={},m=[{value:"Sample data",id:"sample-data",level:2},{value:"Load data with transform specs",id:"load-data-with-transform-specs",level:2},{value:"Query the transformed data",id:"query-the-transformed-data",level:2}],c={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will demonstrate how to use transform specs to filter and transform input data during ingestion."),(0,i.kt)("p",null,"For this tutorial, we'll assume you've already downloaded Apache Druid as described in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/"},"single-machine quickstart")," and have it running on your local machine."),(0,i.kt)("p",null,"It will also be helpful to have finished ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/tutorial-batch"},"Load a file")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/tutorial-query"},"Query data")," tutorials."),(0,i.kt)("h2",{id:"sample-data"},"Sample data"),(0,i.kt)("p",null,"We've included sample data for this tutorial at ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/transform-data.json"),", reproduced here for convenience:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2018-01-01T07:01:35Z","animal":"octopus",  "location":1, "number":100}\n{"timestamp":"2018-01-01T05:01:35Z","animal":"mongoose", "location":2,"number":200}\n{"timestamp":"2018-01-01T06:01:35Z","animal":"snake", "location":3, "number":300}\n{"timestamp":"2018-01-01T01:01:35Z","animal":"lion", "location":4, "number":300}\n')),(0,i.kt)("h2",{id:"load-data-with-transform-specs"},"Load data with transform specs"),(0,i.kt)("p",null,"We will ingest the sample data using the following spec, which demonstrates the use of transform specs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "index_parallel",\n  "spec" : {\n    "dataSchema" : {\n      "dataSource" : "transform-tutorial",\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "iso"\n      },\n      "dimensionsSpec" : {\n        "dimensions" : [\n          "animal",\n          { "name": "location", "type": "long" }\n        ]\n      },\n      "metricsSpec" : [\n        { "type" : "count", "name" : "count" },\n        { "type" : "longSum", "name" : "number", "fieldName" : "number" },\n        { "type" : "longSum", "name" : "triple-number", "fieldName" : "triple-number" }\n      ],\n      "granularitySpec" : {\n        "type" : "uniform",\n        "segmentGranularity" : "week",\n        "queryGranularity" : "minute",\n        "intervals" : ["2018-01-01/2018-01-03"],\n        "rollup" : true\n      },\n      "transformSpec": {\n        "transforms": [\n          {\n            "type": "expression",\n            "name": "animal",\n            "expression": "concat(\'super-\', animal)"\n          },\n          {\n            "type": "expression",\n            "name": "triple-number",\n            "expression": "number * 3"\n          }\n        ],\n        "filter": {\n          "type":"or",\n          "fields": [\n            { "type": "selector", "dimension": "animal", "value": "super-mongoose" },\n            { "type": "selector", "dimension": "triple-number", "value": "300" },\n            { "type": "selector", "dimension": "location", "value": "3" }\n          ]\n        }\n      }\n    },\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "local",\n        "baseDir" : "quickstart/tutorial",\n        "filter" : "transform-data.json"\n      },\n      "inputFormat" : {\n        "type" :"json"\n      },\n      "appendToExisting" : false\n    },\n    "tuningConfig" : {\n      "type" : "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic"\n      },\n      "maxRowsInMemory" : 25000\n    }\n  }\n}\n')),(0,i.kt)("p",null,"In the transform spec, we have two expression transforms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"super-animal"),': prepends "super-" to the values in the ',(0,i.kt)("inlineCode",{parentName:"li"},"animal")," column. This will override the ",(0,i.kt)("inlineCode",{parentName:"li"},"animal")," column with the transformed version, since the transform's name is ",(0,i.kt)("inlineCode",{parentName:"li"},"animal"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"triple-number"),": multiplies the ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," column by 3. This will create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"triple-number")," column. Note that we are ingesting both the original and the transformed column.")),(0,i.kt)("p",null,"Additionally, we have an OR filter with three clauses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"super-animal"),' values that match "super-mongoose"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"triple-number")," values that match 300"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"location")," values that match 3")),(0,i.kt)("p",null,'This filter selects the first 3 rows, and it will exclude the final "lion" row in the input data. Note that the filter is applied after the transformation.'),(0,i.kt)("p",null,"Let's submit this task now, which has been included at ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/transform-index.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/transform-index.json --url http://localhost:8081\n")),(0,i.kt)("h2",{id:"query-the-transformed-data"},"Query the transformed data"),(0,i.kt)("p",null,"Let's run ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/dsql")," and issue a ",(0,i.kt)("inlineCode",{parentName:"p"},'select * from "transform-tutorial";')," query to see what was ingested:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'dsql> select * from "transform-tutorial";\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 animal         \u2502 count \u2502 location \u2502 number \u2502 triple-number \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T05:01:00.000Z \u2502 super-mongoose \u2502     1 \u2502        2 \u2502    200 \u2502           600 \u2502\n\u2502 2018-01-01T06:01:00.000Z \u2502 super-snake    \u2502     1 \u2502        3 \u2502    300 \u2502           900 \u2502\n\u2502 2018-01-01T07:01:00.000Z \u2502 super-octopus  \u2502     1 \u2502        1 \u2502    100 \u2502           300 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 3 rows in 0.03s.\n')),(0,i.kt)("p",null,'The "lion" row has been discarded, the ',(0,i.kt)("inlineCode",{parentName:"p"},"animal")," column has been transformed, and we have both the original and transformed ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," column."))}f.isMDXComponent=!0}}]);