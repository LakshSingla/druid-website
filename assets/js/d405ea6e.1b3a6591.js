"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"filters",title:"Query filters",sidebar_label:"Filters"},s=void 0,p={unversionedId:"querying/filters",id:"querying/filters",title:"Query filters",description:"\x3c!--",source:"@site/docs/26.0.0/querying/filters.md",sourceDirName:"querying",slug:"/querying/filters",permalink:"/docs/26.0.0/querying/filters",draft:!1,tags:[],version:"current",frontMatter:{id:"filters",title:"Query filters",sidebar_label:"Filters"},sidebar:"docs",previous:{title:"DatasourceMetadata",permalink:"/docs/26.0.0/querying/datasourcemetadataquery"},next:{title:"Granularities",permalink:"/docs/26.0.0/querying/granularities"}},u={},m=[{value:"Selector filter",id:"selector-filter",level:2},{value:"Column comparison filter",id:"column-comparison-filter",level:2},{value:"Regular expression filter",id:"regular-expression-filter",level:2},{value:"Logical expression filters",id:"logical-expression-filters",level:2},{value:"AND",id:"and",level:3},{value:"OR",id:"or",level:3},{value:"NOT",id:"not",level:3},{value:"JavaScript filter",id:"javascript-filter",level:2},{value:"Extraction filter",id:"extraction-filter",level:2},{value:"Search filter",id:"search-filter",level:2},{value:"Search query spec",id:"search-query-spec",level:3},{value:"Contains",id:"contains",level:4},{value:"Insensitive Contains",id:"insensitive-contains",level:4},{value:"Fragment",id:"fragment",level:4},{value:"In filter",id:"in-filter",level:2},{value:"Like filter",id:"like-filter",level:2},{value:"Bound filter",id:"bound-filter",level:2},{value:"Interval filter",id:"interval-filter",level:2},{value:"Filtering with extraction functions",id:"filtering-with-extraction-functions",level:2},{value:"Column types",id:"column-types",level:2},{value:"Filtering on numeric columns",id:"filtering-on-numeric-columns",level:3},{value:"Filtering on the timestamp column",id:"filtering-on-the-timestamp-column",level:3},{value:"True filter",id:"true-filter",level:3},{value:"Expression filter",id:"expression-filter",level:3}],d={toc:m},c="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/"},"native queries"),".\nThis document describes the native\nlanguage. For information about aggregators available in SQL, refer to the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-scalar"},"SQL documentation"),".")),(0,i.kt)("p",null,"A filter is a JSON object indicating which rows of data should be included in the computation for a query. It\u2019s essentially the equivalent of the WHERE clause in SQL.\nFilters are commonly applied on dimensions, but can be applied on aggregated metrics, for example, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/aggregations#filtered-aggregator"},"Filtered aggregator")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/having"},"Having filters"),"."),(0,i.kt)("p",null,"Apache Druid supports the following types of filters."),(0,i.kt)("h2",{id:"selector-filter"},"Selector filter"),(0,i.kt)("p",null,"The simplest filter is a selector filter. The selector filter will match a specific dimension with a specific value. Selector filters can be used as the base filters for more complex Boolean expressions of filters."),(0,i.kt)("p",null,"The grammar for a SELECTOR filter is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": { "type": "selector", "dimension": <dimension_string>, "value": <dimension_value_string> }\n')),(0,i.kt)("p",null,"This is the equivalent of ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE <dimension_string> = '<dimension_value_string>'")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE <dimension_string> IS NULL"),"\n(if the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("p",null,"The selector filter supports the use of extraction functions, see ",(0,i.kt)("a",{parentName:"p",href:"#filtering-with-extraction-functions"},"Filtering with Extraction Functions")," for details."),(0,i.kt)("h2",{id:"column-comparison-filter"},"Column comparison filter"),(0,i.kt)("p",null,"The column comparison filter is similar to the selector filter, but instead compares dimensions to each other. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": { "type": "columnComparison", "dimensions": [<dimension_a>, <dimension_b>] }\n')),(0,i.kt)("p",null,"This is the equivalent of ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE <dimension_a> = <dimension_b>"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dimensions")," is list of ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/dimensionspecs"},"DimensionSpecs"),", making it possible to apply an extraction function if needed."),(0,i.kt)("h2",{id:"regular-expression-filter"},"Regular expression filter"),(0,i.kt)("p",null,"The regular expression filter is similar to the selector filter, but using regular expressions. It matches the specified dimension with the given pattern. The pattern can be any standard ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html"},"Java regular expression"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": { "type": "regex", "dimension": <dimension_string>, "pattern": <pattern_string> }\n')),(0,i.kt)("p",null,"The regex filter supports the use of extraction functions, see ",(0,i.kt)("a",{parentName:"p",href:"#filtering-with-extraction-functions"},"Filtering with Extraction Functions")," for details."),(0,i.kt)("h2",{id:"logical-expression-filters"},"Logical expression filters"),(0,i.kt)("h3",{id:"and"},"AND"),(0,i.kt)("p",null,"The grammar for an AND filter is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": { "type": "and", "fields": [<filter>, <filter>, ...] }\n')),(0,i.kt)("p",null,"The filters in fields can be any other filter defined on this page."),(0,i.kt)("h3",{id:"or"},"OR"),(0,i.kt)("p",null,"The grammar for an OR filter is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": { "type": "or", "fields": [<filter>, <filter>, ...] }\n')),(0,i.kt)("p",null,"The filters in fields can be any other filter defined on this page."),(0,i.kt)("h3",{id:"not"},"NOT"),(0,i.kt)("p",null,"The grammar for a NOT filter is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": { "type": "not", "field": <filter> }\n')),(0,i.kt)("p",null,"The filter specified at field can be any other filter defined on this page."),(0,i.kt)("h2",{id:"javascript-filter"},"JavaScript filter"),(0,i.kt)("p",null,"The JavaScript filter matches a dimension against the specified JavaScript function predicate. The filter matches values for which the function returns true."),(0,i.kt)("p",null,"The function takes a single argument, the dimension value, and returns either true or false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "javascript",\n  "dimension" : <dimension_string>,\n  "function" : "function(value) { <...> }"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"\nThe following matches any dimension values for the dimension ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," between ",(0,i.kt)("inlineCode",{parentName:"p"},"'bar'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"'foo'")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "javascript",\n  "dimension" : "name",\n  "function" : "function(x) { return(x >= \'bar\' && x <= \'foo\') }"\n}\n')),(0,i.kt)("p",null,"The JavaScript filter supports the use of extraction functions, see ",(0,i.kt)("a",{parentName:"p",href:"#filtering-with-extraction-functions"},"Filtering with Extraction Functions")," for details."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"JavaScript-based functionality is disabled by default. Please refer to the Druid ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/javascript"},"JavaScript programming guide")," for guidelines about using Druid's JavaScript functionality, including instructions on how to enable it.")),(0,i.kt)("h2",{id:"extraction-filter"},"Extraction filter"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The extraction filter is now deprecated. The selector filter with an extraction function specified\nprovides identical functionality and should be used instead.")),(0,i.kt)("p",null,"Extraction filter matches a dimension using some specific ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/dimensionspecs#extraction-functions"},"Extraction function"),".\nThe following filter matches the values for which the extraction function has transformation entry ",(0,i.kt)("inlineCode",{parentName:"p"},"input_key=output_value")," where\n",(0,i.kt)("inlineCode",{parentName:"p"},"output_value")," is equal to the filter ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"input_key")," is present as dimension."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"\nThe following matches dimension values in ",(0,i.kt)("inlineCode",{parentName:"p"},"[product_1, product_3, product_5]")," for the column ",(0,i.kt)("inlineCode",{parentName:"p"},"product")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "filter": {\n        "type": "extraction",\n        "dimension": "product",\n        "value": "bar_1",\n        "extractionFn": {\n            "type": "lookup",\n            "lookup": {\n                "type": "map",\n                "map": {\n                    "product_1": "bar_1",\n                    "product_5": "bar_1",\n                    "product_3": "bar_1"\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"search-filter"},"Search filter"),(0,i.kt)("p",null,"Search filters can be used to filter on partial string matches."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "filter": {\n        "type": "search",\n        "dimension": "product",\n        "query": {\n          "type": "insensitive_contains",\n          "value": "foo"\n        }\n    }\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "search".'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"The dimension to perform the search over."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON object for the type of search. See ",(0,i.kt)("a",{parentName:"td",href:"#search-query-spec"},"search query spec")," for more information."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"extractionFn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#filtering-with-extraction-functions"},"Extraction function")," to apply to the dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"The search filter supports the use of extraction functions, see ",(0,i.kt)("a",{parentName:"p",href:"#filtering-with-extraction-functions"},"Filtering with Extraction Functions")," for details."),(0,i.kt)("h3",{id:"search-query-spec"},"Search query spec"),(0,i.kt)("h4",{id:"contains"},"Contains"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "contains".'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"A String value to run the search over."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"caseSensitive"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether two string should be compared as case sensitive or not"),(0,i.kt)("td",{parentName:"tr",align:null},"no (default == false)")))),(0,i.kt)("h4",{id:"insensitive-contains"},"Insensitive Contains"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "insensitive_contains".'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"A String value to run the search over."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))),(0,i.kt)("p",null,'Note that an "insensitive_contains" search is equivalent to a "contains" search with "caseSensitive": false (or not\nprovided).'),(0,i.kt)("h4",{id:"fragment"},"Fragment"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "fragment".'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"values"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON array of String values to run the search over."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"caseSensitive"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether strings should be compared as case sensitive or not. Default: false(insensitive)"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("h2",{id:"in-filter"},"In filter"),(0,i.kt)("p",null,"In filter can be used to express the following SQL query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT COUNT(*) AS 'Count' FROM `table` WHERE `outlaw` IN ('Good', 'Bad', 'Ugly')\n")),(0,i.kt)("p",null,'The grammar for a "in" filter is as follows:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "in",\n    "dimension": "outlaw",\n    "values": ["Good", "Bad", "Ugly"]\n}\n')),(0,i.kt)("p",null,'The "in" filter supports the use of extraction functions, see ',(0,i.kt)("a",{parentName:"p",href:"#filtering-with-extraction-functions"},"Filtering with Extraction Functions")," for details."),(0,i.kt)("p",null,"If an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"values"),' array is passed to the "in" filter, it will simply return an empty result.'),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"dimension"),' is a multi-valued dimension, the "in" filter will return true if one of the dimension values is\nin the ',(0,i.kt)("inlineCode",{parentName:"p"},"values")," array."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," array contains ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),', the "in" filter matches null values. This differs from the SQL IN filter, which\ndoes not match NULL values.'),(0,i.kt)("h2",{id:"like-filter"},"Like filter"),(0,i.kt)("p",null,'Like filters can be used for basic wildcard searches. They are equivalent to the SQL LIKE operator. Special characters\nsupported are "%" (matches any number of characters) and "',"_",'" (matches any one character).'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},'This should always be "like".'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The dimension to filter on"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pattern"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},'LIKE pattern, such as "foo%" or "___bar".'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"escape"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"An escape character that can be used to escape special characters."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"extractionFn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#filtering-with-extraction-functions"},"Extraction function")),(0,i.kt)("td",{parentName:"tr",align:null},"Extraction function to apply to the dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"Like filters support the use of extraction functions, see ",(0,i.kt)("a",{parentName:"p",href:"#filtering-with-extraction-functions"},"Filtering with Extraction Functions")," for details."),(0,i.kt)("p",null,"This Like filter expresses the condition ",(0,i.kt)("inlineCode",{parentName:"p"},'last_name LIKE "D%"'),' (i.e. last_name starts with "D").'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "like",\n    "dimension": "last_name",\n    "pattern": "D%"\n}\n')),(0,i.kt)("h2",{id:"bound-filter"},"Bound filter"),(0,i.kt)("p",null,'Bound filters can be used to filter on ranges of dimension values. It can be used for comparison filtering like\ngreater than, less than, greater than or equal to, less than or equal to, and "between" (if both "lower" and\n"upper" are set).'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},'This should always be "bound".'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The dimension to filter on"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lower"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The lower bound for the filter"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upper"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The upper bound for the filter"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lowerStrict"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},'Perform strict comparison on the lower bound (">" instead of ">=")'),(0,i.kt)("td",{parentName:"tr",align:null},"no, default: false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upperStrict"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},'Perform strict comparison on the upper bound ("<" instead of "<=")'),(0,i.kt)("td",{parentName:"tr",align:null},"no, default: false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ordering"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},'Specifies the sorting order to use when comparing values against the bound. Can be one of the following values: "lexicographic", "alphanumeric", "numeric", "strlen", "version". See ',(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/sorting-orders"},"Sorting Orders")," for more details."),(0,i.kt)("td",{parentName:"tr",align:null},'no, default: "lexicographic"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"extractionFn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#filtering-with-extraction-functions"},"Extraction function")),(0,i.kt)("td",{parentName:"tr",align:null},"Extraction function to apply to the dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"Bound filters support the use of extraction functions, see ",(0,i.kt)("a",{parentName:"p",href:"#filtering-with-extraction-functions"},"Filtering with Extraction Functions")," for details."),(0,i.kt)("p",null,"The following bound filter expresses the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"21 <= age <= 31"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "bound",\n    "dimension": "age",\n    "lower": "21",\n    "upper": "31" ,\n    "ordering": "numeric"\n}\n')),(0,i.kt)("p",null,"This filter expresses the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"foo <= name <= hoo"),", using the default lexicographic sorting order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "bound",\n    "dimension": "name",\n    "lower": "foo",\n    "upper": "hoo"\n}\n')),(0,i.kt)("p",null,"Using strict bounds, this filter expresses the condition ",(0,i.kt)("inlineCode",{parentName:"p"},"21 < age < 31")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "bound",\n    "dimension": "age",\n    "lower": "21",\n    "lowerStrict": true,\n    "upper": "31" ,\n    "upperStrict": true,\n    "ordering": "numeric"\n}\n')),(0,i.kt)("p",null,'The user can also specify a one-sided bound by omitting "upper" or "lower". This filter expresses ',(0,i.kt)("inlineCode",{parentName:"p"},"age < 31"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "bound",\n    "dimension": "age",\n    "upper": "31" ,\n    "upperStrict": true,\n    "ordering": "numeric"\n}\n')),(0,i.kt)("p",null,"Likewise, this filter expresses ",(0,i.kt)("inlineCode",{parentName:"p"},"age >= 18")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "bound",\n    "dimension": "age",\n    "lower": "18" ,\n    "ordering": "numeric"\n}\n')),(0,i.kt)("h2",{id:"interval-filter"},"Interval filter"),(0,i.kt)("p",null,"The Interval filter enables range filtering on columns that contain long millisecond values, with the boundaries specified as ISO 8601 time intervals. It is suitable for the ",(0,i.kt)("inlineCode",{parentName:"p"},"__time")," column, long metric columns, and dimensions with values that can be parsed as long milliseconds."),(0,i.kt)("p",null,"This filter converts the ISO 8601 intervals to long millisecond start/end ranges and translates to an OR of Bound filters on those millisecond ranges, with numeric comparison. The Bound filters will have left-closed and right-open matching (i.e., start <= time < end)."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},'This should always be "interval".'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The dimension to filter on"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"intervals"),(0,i.kt)("td",{parentName:"tr",align:null},"Array"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON array containing ISO-8601 interval strings. This defines the time ranges to filter on."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"extractionFn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#filtering-with-extraction-functions"},"Extraction function")),(0,i.kt)("td",{parentName:"tr",align:null},"Extraction function to apply to the dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"The interval filter supports the use of extraction functions, see ",(0,i.kt)("a",{parentName:"p",href:"#filtering-with-extraction-functions"},"Filtering with Extraction Functions")," for details."),(0,i.kt)("p",null,"If an extraction function is used with this filter, the extraction function should output values that are parseable as long milliseconds."),(0,i.kt)("p",null,"The following example filters on the time ranges of October 1-7, 2014 and November 15-16, 2014."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type" : "interval",\n    "dimension" : "__time",\n    "intervals" : [\n      "2014-10-01T00:00:00.000Z/2014-10-07T00:00:00.000Z",\n      "2014-11-15T00:00:00.000Z/2014-11-16T00:00:00.000Z"\n    ]\n}\n')),(0,i.kt)("p",null,"The filter above is equivalent to the following OR of Bound filters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "or",\n    "fields": [\n      {\n        "type": "bound",\n        "dimension": "__time",\n        "lower": "1412121600000",\n        "lowerStrict": false,\n        "upper": "1412640000000" ,\n        "upperStrict": true,\n        "ordering": "numeric"\n      },\n      {\n         "type": "bound",\n         "dimension": "__time",\n         "lower": "1416009600000",\n         "lowerStrict": false,\n         "upper": "1416096000000" ,\n         "upperStrict": true,\n         "ordering": "numeric"\n      }\n    ]\n}\n')),(0,i.kt)("h2",{id:"filtering-with-extraction-functions"},"Filtering with extraction functions"),(0,i.kt)("p",null,'All filters except the "spatial" filter support extraction functions.\nAn extraction function is defined by setting the "extractionFn" field on a filter.\nSee ',(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/dimensionspecs#extraction-functions"},"Extraction function")," for more details on extraction functions."),(0,i.kt)("p",null,'If specified, the extraction function will be used to transform input values before the filter is applied.\nThe example below shows a selector filter combined with an extraction function. This filter will transform input values\naccording to the values defined in the lookup map; transformed values will then be matched with the string "bar_1".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"\nThe following matches dimension values in ",(0,i.kt)("inlineCode",{parentName:"p"},"[product_1, product_3, product_5]")," for the column ",(0,i.kt)("inlineCode",{parentName:"p"},"product")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "filter": {\n        "type": "selector",\n        "dimension": "product",\n        "value": "bar_1",\n        "extractionFn": {\n            "type": "lookup",\n            "lookup": {\n                "type": "map",\n                "map": {\n                    "product_1": "bar_1",\n                    "product_5": "bar_1",\n                    "product_3": "bar_1"\n                }\n            }\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"column-types"},"Column types"),(0,i.kt)("p",null,"Druid supports filtering on timestamp, string, long, and float columns."),(0,i.kt)("p",null,"Note that only string columns have bitmap indexes. Therefore, queries that filter on other column types will need to\nscan those columns."),(0,i.kt)("h3",{id:"filtering-on-numeric-columns"},"Filtering on numeric columns"),(0,i.kt)("p",null,'When filtering on numeric columns, you can write filters as if they were strings. In most cases, your filter will be\nconverted into a numeric predicate and will be applied to the numeric column values directly. In some cases (such as\nthe "regex" filter) the numeric column values will be converted to strings during the scan.'),(0,i.kt)("p",null,"For example, filtering on a specific value, ",(0,i.kt)("inlineCode",{parentName:"p"},"myFloatColumn = 10.1"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": {\n  "type": "selector",\n  "dimension": "myFloatColumn",\n  "value": "10.1"\n}\n')),(0,i.kt)("p",null,"Filtering on a range of values, ",(0,i.kt)("inlineCode",{parentName:"p"},"10 <= myFloatColumn < 20"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": {\n  "type": "bound",\n  "dimension": "myFloatColumn",\n  "ordering": "numeric",\n  "lower": "10",\n  "lowerStrict": false,\n  "upper": "20",\n  "upperStrict": true\n}\n')),(0,i.kt)("h3",{id:"filtering-on-the-timestamp-column"},"Filtering on the timestamp column"),(0,i.kt)("p",null,"Query filters can also be applied to the timestamp column. The timestamp column has long millisecond values. To refer\nto the timestamp column, use the string ",(0,i.kt)("inlineCode",{parentName:"p"},"__time")," as the dimension name. Like numeric dimensions, timestamp filters\nshould be specified as if the timestamp values were strings."),(0,i.kt)("p",null,"If the user wishes to interpret the timestamp with a specific format, timezone, or locale, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/dimensionspecs#time-format-extraction-function"},"Time Format Extraction Function")," is useful."),(0,i.kt)("p",null,"For example, filtering on a long timestamp value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": {\n  "type": "selector",\n  "dimension": "__time",\n  "value": "124457387532"\n}\n')),(0,i.kt)("p",null,"Filtering on day of week:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": {\n  "type": "selector",\n  "dimension": "__time",\n  "value": "Friday",\n  "extractionFn": {\n    "type": "timeFormat",\n    "format": "EEEE",\n    "timeZone": "America/New_York",\n    "locale": "en"\n  }\n}\n')),(0,i.kt)("p",null,"Filtering on a set of ISO 8601 intervals:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type" : "interval",\n    "dimension" : "__time",\n    "intervals" : [\n      "2014-10-01T00:00:00.000Z/2014-10-07T00:00:00.000Z",\n      "2014-11-15T00:00:00.000Z/2014-11-16T00:00:00.000Z"\n    ]\n}\n')),(0,i.kt)("h3",{id:"true-filter"},"True filter"),(0,i.kt)("p",null,"The true filter is a filter which matches all values.  It can be used to temporarily disable other filters without removing the filter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{ "type" : "true" }\n')),(0,i.kt)("h3",{id:"expression-filter"},"Expression filter"),(0,i.kt)("p",null,"The expression filter allows for the implementation of arbitrary conditions, leveraging the Druid expression system. "),(0,i.kt)("p",null,"This filter allows for more flexibility, but it might be less performant than a combination of the other filters on this page due to the fact that not all filter optimizations are in place yet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{ \n    "type" : "expression" ,\n    "expression" : "((product_type == 42) && (!is_deleted))"\n}\n')),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/misc/math-expr"},"Druid expression system")," for more details."))}f.isMDXComponent=!0}}]);