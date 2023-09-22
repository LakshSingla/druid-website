"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"hll-old",title:"Cardinality/HyperUnique aggregators"},s=void 0,u={unversionedId:"querying/hll-old",id:"querying/hll-old",title:"Cardinality/HyperUnique aggregators",description:"\x3c!--",source:"@site/docs/latest/querying/hll-old.md",sourceDirName:"querying",slug:"/querying/hll-old",permalink:"/docs/latest/querying/hll-old",draft:!1,tags:[],version:"current",frontMatter:{id:"hll-old",title:"Cardinality/HyperUnique aggregators"}},d={},p=[{value:"Cardinality aggregator",id:"cardinality-aggregator",level:2},{value:"Cardinality by value",id:"cardinality-by-value",level:3},{value:"Cardinality by row",id:"cardinality-by-row",level:3},{value:"HyperUnique aggregator",id:"hyperunique-aggregator",level:2}],c={toc:p},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cardinality-aggregator"},"Cardinality aggregator"),(0,i.kt)("p",null,"Computes the cardinality of a set of Apache Druid dimensions, using HyperLogLog to estimate the cardinality. Please note that this\naggregator will be much slower than indexing a column with the hyperUnique aggregator. This aggregator also runs over a dimension column, which\nmeans the string dimension cannot be removed from the dataset to improve rollup. In general, we strongly recommend using the hyperUnique aggregator\ninstead of the cardinality aggregator if you do not care about the individual values of a dimension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cardinality",\n  "name": "<output_name>",\n  "fields": [ <dimension1>, <dimension2>, ... ],\n  "byRow": <false | true> # (optional, defaults to false),\n  "round": <false | true> # (optional, defaults to false)\n}\n')),(0,i.kt)("p",null,'Each individual element of the "fields" list can be a String or ',(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/dimensionspecs"},"DimensionSpec"),". A String dimension in the fields list is equivalent to a DefaultDimensionSpec (no transformations)."),(0,i.kt)("p",null,'The HyperLogLog algorithm generates decimal estimates with some error. "round" can be set to true to round off estimated\nvalues to whole numbers. Note that even with rounding, the cardinality is still an estimate. The "round" field only\naffects query-time behavior, and is ignored at ingestion-time.'),(0,i.kt)("h3",{id:"cardinality-by-value"},"Cardinality by value"),(0,i.kt)("p",null,"When setting ",(0,i.kt)("inlineCode",{parentName:"p"},"byRow")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," (the default) it computes the cardinality of the set composed of the union of all dimension values for all the given dimensions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a single dimension, this is equivalent to")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(DISTINCT(dimension)) FROM <datasource>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For multiple dimensions, this is equivalent to something akin to")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(DISTINCT(value)) FROM (\n  SELECT dim_1 as value FROM <datasource>\n  UNION\n  SELECT dim_2 as value FROM <datasource>\n  UNION\n  SELECT dim_3 as value FROM <datasource>\n)\n")),(0,i.kt)("h3",{id:"cardinality-by-row"},"Cardinality by row"),(0,i.kt)("p",null,"When setting ",(0,i.kt)("inlineCode",{parentName:"p"},"byRow")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," it computes the cardinality by row, i.e. the cardinality of distinct dimension combinations.\nThis is equivalent to something akin to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM ( SELECT DIM1, DIM2, DIM3 FROM <datasource> GROUP BY DIM1, DIM2, DIM3 )\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Determine the number of distinct countries people are living in or have come from."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cardinality",\n  "name": "distinct_countries",\n  "fields": [ "country_of_origin", "country_of_residence" ]\n}\n')),(0,i.kt)("p",null,"Determine the number of distinct people (i.e. combinations of first and last name)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cardinality",\n  "name": "distinct_people",\n  "fields": [ "first_name", "last_name" ],\n  "byRow" : true\n}\n')),(0,i.kt)("p",null,"Determine the number of distinct starting characters of last names"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "cardinality",\n  "name": "distinct_last_name_first_char",\n  "fields": [\n    {\n     "type" : "extraction",\n     "dimension" : "last_name",\n     "outputName" :  "last_name_first_char",\n     "extractionFn" : { "type" : "substring", "index" : 0, "length" : 1 }\n    }\n  ],\n  "byRow" : true\n}\n')),(0,i.kt)("h2",{id:"hyperunique-aggregator"},"HyperUnique aggregator"),(0,i.kt)("p",null,"Uses ",(0,i.kt)("a",{parentName:"p",href:"http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf"},"HyperLogLog"),' to compute the estimated cardinality of a dimension that has been aggregated as a "hyperUnique" metric at indexing time.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "hyperUnique",\n  "name" : <output_name>,\n  "fieldName" : <metric_name>,\n  "isInputHyperUnique" : false,\n  "round" : false\n}\n')),(0,i.kt)("p",null,'"isInputHyperUnique" can be set to true to index precomputed HLL (Base64 encoded output from druid-hll is expected).\nThe "isInputHyperUnique" field only affects ingestion-time behavior, and is ignored at query-time.'),(0,i.kt)("p",null,'The HyperLogLog algorithm generates decimal estimates with some error. "round" can be set to true to round off estimated\nvalues to whole numbers. Note that even with rounding, the cardinality is still an estimate. The "round" field only\naffects query-time behavior, and is ignored at ingestion-time.'))}g.isMDXComponent=!0}}]);