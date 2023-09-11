"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,N=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(N,i(i({ref:t},u),{},{components:n})):a.createElement(N,i({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>N,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"virtual-columns",title:"Virtual columns"},p=void 0,s={unversionedId:"querying/virtual-columns",id:"querying/virtual-columns",title:"Virtual columns",description:"\x3c!--",source:"@site/docs/latest/querying/virtual-columns.md",sourceDirName:"querying",slug:"/querying/virtual-columns",permalink:"/docs/latest/querying/virtual-columns",draft:!1,tags:[],version:"current",frontMatter:{id:"virtual-columns",title:"Virtual columns"},sidebar:"docs",previous:{title:"String comparators",permalink:"/docs/latest/querying/sorting-orders"},next:{title:"Spatial filters",permalink:"/docs/latest/development/geo"}},u={},d=[{value:"Virtual column types",id:"virtual-column-types",level:2},{value:"Expression virtual column",id:"expression-virtual-column",level:3},{value:"Nested field virtual column",id:"nested-field-virtual-column",level:3},{value:"Nested path part",id:"nested-path-part",level:4},{value:"List filtered virtual column",id:"list-filtered-virtual-column",level:3}],m={toc:d},c="wrapper";function N(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes the native\nlanguage. For information about functions available in SQL, refer to the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-scalar"},"SQL documentation"),".")),(0,l.kt)("p",null,'Virtual columns are queryable column "views" created from a set of columns during a query.'),(0,l.kt)("p",null,"A virtual column can potentially draw from multiple underlying columns, although a virtual column always presents itself as a single column."),(0,l.kt)("p",null,"Virtual columns can be referenced by their output names to be used as ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/dimensionspecs"},"dimensions")," or as inputs to ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/filters"},"filters")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/aggregations"},"aggregators"),"."),(0,l.kt)("p",null,"Each Apache Druid query can accept a list of virtual columns as a parameter. The following scan query is provided as an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n "queryType": "scan",\n "dataSource": "page_data",\n "columns":[],\n "virtualColumns": [\n    {\n      "type": "expression",\n      "name": "fooPage",\n      "expression": "concat(\'foo\' + page)",\n      "outputType": "STRING"\n    },\n    {\n      "type": "expression",\n      "name": "tripleWordCount",\n      "expression": "wordCount * 3",\n      "outputType": "LONG"\n    }\n  ],\n "intervals": [\n   "2013-01-01/2019-01-02"\n ]\n}\n')),(0,l.kt)("h2",{id:"virtual-column-types"},"Virtual column types"),(0,l.kt)("h3",{id:"expression-virtual-column"},"Expression virtual column"),(0,l.kt)("p",null,"Expression virtual columns use Druid's native ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/misc/math-expr"},"expression")," system to allow defining query time\ntransforms of inputs from one or more columns."),(0,l.kt)("p",null,"The expression virtual column has the following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "expression",\n  "name": <name of the virtual column>,\n  "expression": <row expression>,\n  "outputType": <output value type of expression>\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be ",(0,l.kt)("inlineCode",{parentName:"td"},'"expression"')," to indicate that this is an expression virtual column."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the virtual column."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"An ",(0,l.kt)("a",{parentName:"td",href:"/docs/latest/misc/math-expr"},"expression")," that takes a row as input and outputs a value for the virtual column."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputType"),(0,l.kt)("td",{parentName:"tr",align:null},"The expression's output will be coerced to this type. Can be LONG, FLOAT, DOUBLE, STRING, ARRAY types, or COMPLEX types."),(0,l.kt)("td",{parentName:"tr",align:null},"no, default is FLOAT")))),(0,l.kt)("h3",{id:"nested-field-virtual-column"},"Nested field virtual column"),(0,l.kt)("p",null,"The nested field virtual column is an optimized virtual column that can provide direct access into various paths of\na ",(0,l.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," column, including using their indexes."),(0,l.kt)("p",null,"This virtual column is used for the SQL operators ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON_VALUE")," (if ",(0,l.kt)("inlineCode",{parentName:"p"},"processFromRaw")," is set to false) or ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON_QUERY"),"\n(if ",(0,l.kt)("inlineCode",{parentName:"p"},"processFromRaw")," is true), and accepts 'JSONPath' or 'jq' syntax string representations of paths, or a parsed\nlist of \"path parts\" in order to determine what should be selected from the column."),(0,l.kt)("p",null,"You can define a nested field virtual column with any of the following equivalent syntaxes. The examples all produce\nthe same output value, with each example showing a different way to specify how to access the nested value. The first\nis using JSONPath syntax ",(0,l.kt)("inlineCode",{parentName:"p"},"path"),", the second with a jq ",(0,l.kt)("inlineCode",{parentName:"p"},"path"),", and the third uses ",(0,l.kt)("inlineCode",{parentName:"p"},"pathParts"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "type": "nested-field",\n      "columnName": "shipTo",\n      "outputName": "v0",\n      "expectedType": "STRING",\n      "path": "$.phoneNumbers[1].number"\n    }\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "type": "nested-field",\n      "columnName": "shipTo",\n      "outputName": "v1",\n      "expectedType": "STRING",\n      "path": ".phoneNumbers[1].number",\n      "useJqSyntax": true\n    }\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "type": "nested-field",\n      "columnName": "shipTo",\n      "outputName": "v2",\n      "expectedType": "STRING",\n      "pathParts": [\n        {\n          "type": "field",\n          "field": "phoneNumbers"\n        },\n        {\n          "type": "arrayElement",\n          "index": 1\n        },\n        {\n          "type": "field",\n          "field": "number"\n        }\n      ]\n    }\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be ",(0,l.kt)("inlineCode",{parentName:"td"},'"nested-field"')," to indicate that this is a nested field virtual column."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columnName"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the ",(0,l.kt)("inlineCode",{parentName:"td"},"COMPLEX<json>")," input column."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputName"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the virtual column."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expectedType"),(0,l.kt)("td",{parentName:"tr",align:null},"The native Druid output type of the column, Druid will coerce output to this type if it does not match the underlying data. This can be ",(0,l.kt)("inlineCode",{parentName:"td"},"STRING"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"LONG"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"FLOAT"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"DOUBLE"),", or ",(0,l.kt)("inlineCode",{parentName:"td"},"COMPLEX<json>"),". Extracting ",(0,l.kt)("inlineCode",{parentName:"td"},"ARRAY")," types is not yet supported."),(0,l.kt)("td",{parentName:"tr",align:null},"no, default ",(0,l.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pathParts"),(0,l.kt)("td",{parentName:"tr",align:null},"The parsed path parts used to locate the nested values. ",(0,l.kt)("inlineCode",{parentName:"td"},"path")," will be translated into ",(0,l.kt)("inlineCode",{parentName:"td"},"pathParts")," internally. One of ",(0,l.kt)("inlineCode",{parentName:"td"},"path")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"pathParts")," must be set"),(0,l.kt)("td",{parentName:"tr",align:null},"no, if ",(0,l.kt)("inlineCode",{parentName:"td"},"path")," is defined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"processFromRaw"),(0,l.kt)("td",{parentName:"tr",align:null},'If set to true, the virtual column will process the "raw" JSON data to extract values rather than using an optimized "literal" value selector. This option allows extracting non-literal values (such as nested JSON objects or arrays) as a ',(0,l.kt)("inlineCode",{parentName:"td"},"COMPLEX<json>")," at the cost of much slower performance."),(0,l.kt)("td",{parentName:"tr",align:null},"no, default false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"'JSONPath' (or 'jq') syntax path. One of ",(0,l.kt)("inlineCode",{parentName:"td"},"path")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"pathParts")," must be set."),(0,l.kt)("td",{parentName:"tr",align:null},"no, if ",(0,l.kt)("inlineCode",{parentName:"td"},"pathParts")," is defined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useJqSyntax"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, parse ",(0,l.kt)("inlineCode",{parentName:"td"},"path")," using 'jq' syntax instead of 'JSONPath'."),(0,l.kt)("td",{parentName:"tr",align:null},"no, default is false")))),(0,l.kt)("h4",{id:"nested-path-part"},"Nested path part"),(0,l.kt)("p",null,"Specify ",(0,l.kt)("inlineCode",{parentName:"p"},"pathParts")," as an array of objects that describe each component of the path to traverse. Each object can take the following properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be 'field' or 'arrayElement'. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"field")," when accessing a specific field in a nested structure. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"arrayElement")," when accessing a specific integer position of an array (zero based)."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the 'field' in a 'field' ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," path part"),(0,l.kt)("td",{parentName:"tr",align:null},"yes, if ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," is 'field'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"The array element index if ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"arrayElement")),(0,l.kt)("td",{parentName:"tr",align:null},"yes, if ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," is 'arrayElement'")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/nested-columns"},"Nested columns")," for more information on ingesting and storing nested data."),(0,l.kt)("h3",{id:"list-filtered-virtual-column"},"List filtered virtual column"),(0,l.kt)("p",null,"This virtual column provides an alternative way to use\n",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/querying/dimensionspecs#filtered-dimensionspecs"},"'list filtered' dimension spec")," as a virtual column. It has optimized\naccess to the underlying column value indexes that can provide a small performance improvement in some cases."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "type": "mv-filtered",\n      "name": "filteredDim3",\n      "delegate": "dim3",\n      "values": ["hello", "world"],\n      "isAllowList": true\n    }\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Must be ",(0,l.kt)("inlineCode",{parentName:"td"},'"mv-filtered"')," to indicate that this is a list filtered virtual column."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The output name of the virtual column"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delegate"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the multi-value STRING input column to filter"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"Set of STRING values to allow or deny"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isAllowList"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the output of the virtual column will be limited to the set specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"values"),", else it will provide all values ",(0,l.kt)("em",{parentName:"td"},"except")," those specified."),(0,l.kt)("td",{parentName:"tr",align:null},"No, default true")))))}N.isMDXComponent=!0}}]);