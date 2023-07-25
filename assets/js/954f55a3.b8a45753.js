"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"bloom-filter",title:"Bloom Filter"},s=void 0,m={unversionedId:"development/extensions-core/bloom-filter",id:"development/extensions-core/bloom-filter",title:"Bloom Filter",description:"\x3c!--",source:"@site/docs/latest/development/extensions-core/bloom-filter.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/bloom-filter",permalink:"/docs/latest/development/extensions-core/bloom-filter",draft:!1,tags:[],version:"current",frontMatter:{id:"bloom-filter",title:"Bloom Filter"}},p={},u=[{value:"Filtering queries with a Bloom Filter",id:"filtering-queries-with-a-bloom-filter",level:2},{value:"JSON Specification of Bloom Filter",id:"json-specification-of-bloom-filter",level:3},{value:"Serialized Format for BloomKFilter",id:"serialized-format-for-bloomkfilter",level:3},{value:"Filtering SQL Queries",id:"filtering-sql-queries",level:3},{value:"Expression and Virtual Column Support",id:"expression-and-virtual-column-support",level:3},{value:"Bloom Filter Query Aggregator",id:"bloom-filter-query-aggregator",level:2},{value:"JSON Specification of Bloom Filter Aggregator",id:"json-specification-of-bloom-filter-aggregator",level:3},{value:"Example",id:"example",level:3},{value:"SQL Bloom Filter Aggregator",id:"sql-bloom-filter-aggregator",level:3}],d={toc:u},c="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To use this Apache Druid extension, ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions#loading-extensions"},"include")," ",(0,l.kt)("inlineCode",{parentName:"p"},"druid-bloom-filter")," in the extensions load list."),(0,l.kt)("p",null,"This extension adds the ability to both construct bloom filters from query results, and filter query results by testing\nagainst a bloom filter. A Bloom filter is a probabilistic data structure for performing a set membership check. A bloom\nfilter is a good candidate to use with Druid for cases where an explicit filter is impossible, e.g. filtering a query\nagainst a set of millions of values."),(0,l.kt)("p",null,"Following are some characteristics of Bloom filters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bloom filters are highly space efficient when compared to using a HashSet."),(0,l.kt)("li",{parentName:"ul"},"Because of the probabilistic nature of bloom filters, false positive results are possible (element was not actually\ninserted into a bloom filter during construction, but ",(0,l.kt)("inlineCode",{parentName:"li"},"test()")," says true)"),(0,l.kt)("li",{parentName:"ul"},"False negatives are not possible (if element is present then ",(0,l.kt)("inlineCode",{parentName:"li"},"test()")," will never say false)."),(0,l.kt)("li",{parentName:"ul"},"The false positive probability of this implementation is currently fixed at 5%, but increasing the number of entries\nthat the filter can hold can decrease this false positive rate in exchange for overall size."),(0,l.kt)("li",{parentName:"ul"},"Bloom filters are sensitive to number of elements that will be inserted in the bloom filter. During the creation of bloom filter expected number of entries must be specified. If the number of insertions exceed\nthe specified initial number of entries then false positive probability will increase accordingly.")),(0,l.kt)("p",null,"This extension is currently based on ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.hive.common.util.BloomKFilter")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"hive-storage-api"),". Internally,\nthis implementation uses Murmur3 as the hash algorithm."),(0,l.kt)("p",null,"To construct a BloomKFilter externally with Java to use as a filter in a Druid query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BloomKFilter bloomFilter = new BloomKFilter(1500);\nbloomFilter.addString("value 1");\nbloomFilter.addString("value 2");\nbloomFilter.addString("value 3");\nByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();\nBloomKFilter.serialize(byteArrayOutputStream, bloomFilter);\nString base64Serialized = Base64.encodeBase64String(byteArrayOutputStream.toByteArray());\n')),(0,l.kt)("p",null,"This string can then be used in the native or SQL Druid query."),(0,l.kt)("h2",{id:"filtering-queries-with-a-bloom-filter"},"Filtering queries with a Bloom Filter"),(0,l.kt)("h3",{id:"json-specification-of-bloom-filter"},"JSON Specification of Bloom Filter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "bloom",\n  "dimension" : <dimension_name>,\n  "bloomKFilter" : <serialized_bytes_for_BloomKFilter>,\n  "extractionFn" : <extraction_fn>\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"Filter Type. Should always be ",(0,l.kt)("inlineCode",{parentName:"td"},"bloom")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dimension")),(0,l.kt)("td",{parentName:"tr",align:null},"The dimension to filter over."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bloomKFilter")),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 encoded Binary representation of ",(0,l.kt)("inlineCode",{parentName:"td"},"org.apache.hive.common.util.BloomKFilter")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"extractionFn")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/latest/querying/dimensionspecs#extraction-functions"},"Extraction function")," to apply to the dimension values"),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("h3",{id:"serialized-format-for-bloomkfilter"},"Serialized Format for BloomKFilter"),(0,l.kt)("p",null," Serialized BloomKFilter format:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 byte for the number of hash functions."),(0,l.kt)("li",{parentName:"ul"},"1 big endian int(That is how OutputStream works) for the number of longs in the bitset"),(0,l.kt)("li",{parentName:"ul"},"big endian longs in the BloomKFilter bitset")),(0,l.kt)("p",null,"Note: ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.hive.common.util.BloomKFilter")," provides a serialize method which can be used to serialize bloom filters to outputStream."),(0,l.kt)("h3",{id:"filtering-sql-queries"},"Filtering SQL Queries"),(0,l.kt)("p",null,"Bloom filters can be used in SQL ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses via the ",(0,l.kt)("inlineCode",{parentName:"p"},"bloom_filter_test")," operator:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*) FROM druid.foo WHERE bloom_filter_test(<expr>, '<serialized_bytes_for_BloomKFilter>')\n")),(0,l.kt)("h3",{id:"expression-and-virtual-column-support"},"Expression and Virtual Column Support"),(0,l.kt)("p",null,"The bloom filter extension also adds a bloom filter ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/misc/math-expr"},"Druid expression")," which shares syntax\nwith the SQL operator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bloom_filter_test(<expr>, '<serialized_bytes_for_BloomKFilter>')\n")),(0,l.kt)("h2",{id:"bloom-filter-query-aggregator"},"Bloom Filter Query Aggregator"),(0,l.kt)("p",null,"Input for a ",(0,l.kt)("inlineCode",{parentName:"p"},"bloomKFilter")," can also be created from a druid query with the ",(0,l.kt)("inlineCode",{parentName:"p"},"bloom")," aggregator. Note that it is very\nimportant to set a reasonable value for the ",(0,l.kt)("inlineCode",{parentName:"p"},"maxNumEntries")," parameter, which is the maximum number of distinct entries\nthat the bloom filter can represent without increasing the false positive rate. It may be worth performing a query using\none of the unique count sketches to calculate the value for this parameter in order to build a bloom filter appropriate\nfor the query."),(0,l.kt)("h3",{id:"json-specification-of-bloom-filter-aggregator"},"JSON Specification of Bloom Filter Aggregator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "type": "bloom",\n      "name": <output_field_name>,\n      "maxNumEntries": <maximum_number_of_elements_for_BloomKFilter>\n      "field": <dimension_spec>\n    }\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggregator Type. Should always be ",(0,l.kt)("inlineCode",{parentName:"td"},"bloom")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Output field name"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"field")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/latest/querying/dimensionspecs"},"DimensionSpec")," to add to ",(0,l.kt)("inlineCode",{parentName:"td"},"org.apache.hive.common.util.BloomKFilter")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maxNumEntries")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of distinct values supported by ",(0,l.kt)("inlineCode",{parentName:"td"},"org.apache.hive.common.util.BloomKFilter"),", default ",(0,l.kt)("inlineCode",{parentName:"td"},"1500")),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "timeseries",\n  "dataSource": "wikiticker",\n  "intervals": [ "2015-09-12T00:00:00.000/2015-09-13T00:00:00.000" ],\n  "granularity": "day",\n  "aggregations": [\n    {\n      "type": "bloom",\n      "name": "userBloom",\n      "maxNumEntries": 100000,\n      "field": {\n        "type":"default",\n        "dimension":"user",\n        "outputType": "STRING"\n      }\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[{"timestamp":"2015-09-12T00:00:00.000Z","result":{"userBloom":"BAAAJhAAAA..."}}]\n')),(0,l.kt)("p",null,"These values can then be set in the filter specification described above."),(0,l.kt)("p",null,"Ordering results by a bloom filter aggregator, for example in a TopN query, will perform a comparatively expensive\nlinear scan ",(0,l.kt)("em",{parentName:"p"},"of the filter itself")," to count the number of set bits as a means of approximating how many items have been\nadded to the set. As such, ordering by an alternate aggregation is recommended if possible."),(0,l.kt)("h3",{id:"sql-bloom-filter-aggregator"},"SQL Bloom Filter Aggregator"),(0,l.kt)("p",null,"Bloom filters can be computed in SQL expressions with the ",(0,l.kt)("inlineCode",{parentName:"p"},"bloom_filter")," aggregator:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT BLOOM_FILTER(<expression>, <max number of entries>) FROM druid.foo WHERE dim2 = 'abc'\n")),(0,l.kt)("p",null,"but requires the setting ",(0,l.kt)("inlineCode",{parentName:"p"},"druid.sql.planner.serializeComplexValues")," to be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". Bloom filter results in a SQL\nresponse are serialized into a base64 string, which can then be used in subsequent queries as a filter."))}f.isMDXComponent=!0}}]);