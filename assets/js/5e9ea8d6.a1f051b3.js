"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"sql-data-types",title:"SQL data types",sidebar_label:"SQL data types"},o=void 0,u={unversionedId:"querying/sql-data-types",id:"querying/sql-data-types",title:"SQL data types",description:"\x3c!--",source:"@site/docs/latest/querying/sql-data-types.md",sourceDirName:"querying",slug:"/querying/sql-data-types",permalink:"/docs/latest/querying/sql-data-types",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-data-types",title:"SQL data types",sidebar_label:"SQL data types"},sidebar:"docs",previous:{title:"Overview and syntax",permalink:"/docs/latest/querying/sql"},next:{title:"Operators",permalink:"/docs/latest/querying/sql-operators"}},p={},d=[{value:"Standard types",id:"standard-types",level:2},{value:"Multi-value strings",id:"multi-value-strings",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Multi-value strings behavior",id:"multi-value-strings-behavior",level:2},{value:"NULL values",id:"null-values",level:2},{value:"Boolean logic",id:"boolean-logic",level:2},{value:"Nested columns",id:"nested-columns",level:2}],m={toc:d},c="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: Druid SQL and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes the SQL language.")),(0,i.kt)("p",null,"Columns in Druid are associated with a specific data type. This topic describes supported data types in ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL"),". "),(0,i.kt)("h2",{id:"standard-types"},"Standard types"),(0,i.kt)("p",null,"Druid natively supports the following basic column types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LONG: (64 bit signed int)"),(0,i.kt)("li",{parentName:"ul"},"FLOAT (32 bit float)"),(0,i.kt)("li",{parentName:"ul"},"DOUBLE: (64 bit float)"),(0,i.kt)("li",{parentName:"ul"},"STRING: (UTF-8 encoded strings and string arrays)"),(0,i.kt)("li",{parentName:"ul"},"COMPLEX: non-standard data types, such as nested JSON, hyperUnique and approxHistogram, and DataSketches"),(0,i.kt)("li",{parentName:"ul"},"ARRAY: arrays composed of any of these types")),(0,i.kt)("p",null,"Timestamps (including the ",(0,i.kt)("inlineCode",{parentName:"p"},"__time")," column) are treated by Druid as longs, with the value being the number of\nmilliseconds since 1970-01-01 00:00:00 UTC, not counting leap seconds. Therefore, timestamps in Druid do not carry any\ntimezone information, but only carry information about the exact moment in time they represent. See the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-scalar#date-and-time-functions"},"Time functions")," section for more information about timestamp handling."),(0,i.kt)("p",null,"Casts between two SQL types with the same Druid runtime type (see below table) have no effect, other than exceptions\nnoted in the table. Casts between two SQL types that have different Druid runtime types generate a runtime cast in\nDruid. If a value cannot be cast to the target type, as in ",(0,i.kt)("inlineCode",{parentName:"p"},"CAST('foo' AS BIGINT)"),", Druid either substitutes a default\nvalue (when ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = true"),", the default mode), or substitutes ",(0,i.kt)("a",{parentName:"p",href:"#null-values"},"NULL")," (when\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = false"),"). NULL values cast to non-nullable types are also substituted with a\ndefault value. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = true"),", a null VARCHAR cast to BIGINT is converted\nto a zero."),(0,i.kt)("p",null,"The following table describes how Druid maps SQL types onto native types when running queries."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SQL type"),(0,i.kt)("th",{parentName:"tr",align:null},"Druid runtime type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value",(0,i.kt)("sup",null,"*")),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid STRING columns are reported as VARCHAR. Can include ",(0,i.kt)("a",{parentName:"td",href:"#multi-value-strings"},"multi-value strings")," as well.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"DECIMAL uses floating point, not fixed point math")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,i.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid FLOAT columns are reported as FLOAT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REAL"),(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0.0")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid DOUBLE columns are reported as DOUBLE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid LONG columns (except ",(0,i.kt)("inlineCode",{parentName:"td"},"__time"),") are reported as BIGINT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"),", meaning 1970-01-01 00:00:00 UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"Druid's ",(0,i.kt)("inlineCode",{parentName:"td"},"__time")," column is reported as TIMESTAMP. Casts between string and timestamp types assume standard SQL formatting, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"2000-01-02 03:04:05"),", ",(0,i.kt)("em",{parentName:"td"},"not")," ISO8601 formatting. For handling other formats, use one of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/sql-scalar#date-and-time-functions"},"time functions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DATE"),(0,i.kt)("td",{parentName:"tr",align:null},"LONG"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"),", meaning 1970-01-01"),(0,i.kt)("td",{parentName:"tr",align:null},"Casting TIMESTAMP to DATE rounds down the timestamp to the nearest day. Casts between string and date types assume standard SQL formatting, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"2000-01-02"),". For handling other formats, use one of the ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/sql-scalar#date-and-time-functions"},"time functions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,i.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NULL")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid native array types work as SQL arrays, and multi-value strings can be converted to arrays. See the ",(0,i.kt)("a",{parentName:"td",href:"#arrays"},(0,i.kt)("inlineCode",{parentName:"a"},"ARRAY")," details"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OTHER"),(0,i.kt)("td",{parentName:"tr",align:null},"COMPLEX"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"May represent various Druid column types such as hyperUnique, approxHistogram, etc.")))),(0,i.kt)("sup",null,"*")," Default value applies if `druid.generic.useDefaultValueForNull = true` (the default mode). Otherwise, the default value is `NULL` for all types.",(0,i.kt)("h2",{id:"multi-value-strings"},"Multi-value strings"),(0,i.kt)("p",null,"Druid's native type system allows strings to potentially have multiple values. These\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/multi-value-dimensions"},"multi-value string dimensions")," are reported in SQL as ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR")," typed, and can be\nsyntactically used like any other ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR"),". Regular string functions that refer to multi-value string dimensions are\napplied to all values for each row individually. Multi-value string dimensions can also be treated as arrays via special\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-multivalue-string-functions"},"multi-value string functions"),", which can perform powerful array-aware operations, but retain\ntheir ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR")," typing and behavior."),(0,i.kt)("p",null,"Grouping by a multi-value expression observes the native Druid multi-value aggregation behavior, which is similar to\nan implicit SQL ",(0,i.kt)("inlineCode",{parentName:"p"},"UNNEST"),". Refer to the documentation on ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/multi-value-dimensions"},"multi-value string dimensions"),"\nfor additional details."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Because multi-value dimensions are treated by the SQL planner as ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR"),", there are some inconsistencies between how\nthey are handled in Druid SQL and in native queries. For example, expressions involving multi-value dimensions may be\nincorrectly optimized by the Druid SQL planner: ",(0,i.kt)("inlineCode",{parentName:"p"},"multi_val_dim = 'a' AND multi_val_dim = 'b'")," is optimized to\n",(0,i.kt)("inlineCode",{parentName:"p"},"false"),', even though it is possible for a single row to have both "a" and "b" as values for ',(0,i.kt)("inlineCode",{parentName:"p"},"multi_val_dim"),". The\nSQL behavior of multi-value dimensions may change in a future release to more closely align with their behavior\nin native queries, but the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-multivalue-string-functions"},"multi-value string functions")," should be able to provide\nnearly all possible native functionality.")),(0,i.kt)("h2",{id:"arrays"},"Arrays"),(0,i.kt)("p",null,"Druid supports ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," types constructed at query time, though it currently lacks the ability to store them in\nsegments. ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," types behave as standard SQL arrays, where results are grouped by matching entire arrays. This is in\ncontrast to the implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"UNNEST")," that occurs when grouping on multi-value dimensions directly or when used with the\nmulti-value functions. You can convert multi-value dimensions to standard SQL arrays either by explicitly by converting\nthem with ",(0,i.kt)("inlineCode",{parentName:"p"},"MV_TO_ARRAY")," or implicitly when used within the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-array-functions"},"array functions"),". Arrays may\nalso be constructed from multiple columns using the array functions."),(0,i.kt)("h2",{id:"multi-value-strings-behavior"},"Multi-value strings behavior"),(0,i.kt)("p",null,"The behavior of Druid ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/multi-value-dimensions"},"multi-value string dimensions")," varies depending on the context of\ntheir usage."),(0,i.kt)("p",null,"When used with standard ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR")," functions which expect a single input value per row, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"CONCAT"),", Druid will map\nthe function across all values in the row. If the row is null or empty, the function receives ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," as its input."),(0,i.kt)("p",null,"When used with the explicit ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-multivalue-string-functions"},"multi-value string functions"),", Druid processes the\nrow values as if they were ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," typed. Any operations which produce null and empty rows are distinguished as\nseparate values (unlike implicit mapping behavior). These multi-value string functions, typically denoted with an ",(0,i.kt)("inlineCode",{parentName:"p"},"MV_"),"\nprefix, retain their ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR")," type after the computation is complete. Note that Druid multi-value columns do ",(0,i.kt)("em",{parentName:"p"},"not"),"\ndistinguish between empty and null rows. An empty row will never appear natively as input to a multi-valued function,\nbut any multi-value function which manipulates the array form of the value may produce an empty array, which is handled\nseparately while processing."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Do not mix the usage of multi-value functions and normal scalar functions within the same expression, as the planner will be unable\nto determine how to properly process the value given its ambiguous usage. A multi-value string must be treated consistently within\nan expression.")),(0,i.kt)("p",null,"When converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," or used with ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-array-functions"},"array functions"),", multi-value strings behave as standard SQL arrays and can no longer\nbe manipulated with non-array functions."),(0,i.kt)("p",null,"Druid serializes multi-value ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR")," results as a JSON string of the array, if grouping was not applied on the value.\nIf the value was grouped, due to the implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"UNNEST")," behavior, all results will always be standard single value\n",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," typed results will be serialized into stringified JSON arrays if the context parameter\n",(0,i.kt)("inlineCode",{parentName:"p"},"sqlStringifyArrays")," is set, otherwise they remain in their array format."),(0,i.kt)("h2",{id:"null-values"},"NULL values"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#sql-compatible-null-handling"},(0,i.kt)("inlineCode",{parentName:"a"},"druid.generic.useDefaultValueForNull")),"\nruntime property controls Druid's NULL handling mode. For the most SQL compliant behavior, set this to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = true")," (the default mode), Druid treats NULLs and empty strings\ninterchangeably, rather than according to the SQL standard. In this mode Druid SQL only has partial support for NULLs.\nFor example, the expressions ",(0,i.kt)("inlineCode",{parentName:"p"},"col IS NULL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"col = ''")," are equivalent, and both evaluate to true if ",(0,i.kt)("inlineCode",{parentName:"p"},"col"),"\ncontains an empty string. Similarly, the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"COALESCE(col1, col2)")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"col2")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"col1")," is an empty\nstring. While the ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT(*)")," aggregator counts all rows, the ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT(expr)")," aggregator counts the number of rows\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"expr")," is neither null nor the empty string. Numeric columns in this mode are not nullable; any null or missing\nvalues are treated as zeroes."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.generic.useDefaultValueForNull = false"),", NULLs are treated more closely to the SQL standard. In this mode,\nnumeric NULL is permitted, and NULLs and empty strings are no longer treated as interchangeable. This property\naffects both storage and querying, and must be set on all Druid service types to be available at both ingestion time\nand query time. There is some overhead associated with the ability to handle NULLs; see\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design/segments#handling-null-values"},"segment internals")," documentation for more details."),(0,i.kt)("h2",{id:"boolean-logic"},"Boolean logic"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#expression-processing-configurations"},(0,i.kt)("inlineCode",{parentName:"a"},"druid.expressions.useStrictBooleans")),"\nruntime property controls Druid's boolean logic mode. For the most SQL compliant behavior, set this to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.expressions.useStrictBooleans = false")," (the default mode), Druid uses two-valued logic."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.expressions.useStrictBooleans = true"),", Druid uses three-valued logic for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/misc/math-expr"},"expressions")," evaluation, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"expression")," virtual columns or ",(0,i.kt)("inlineCode",{parentName:"p"},"expression")," filters.\nHowever, even in this mode, Druid uses two-valued logic for filter types other than ",(0,i.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,i.kt)("h2",{id:"nested-columns"},"Nested columns"),(0,i.kt)("p",null,"Druid supports storing nested data structures in segments using the native ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," type. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/nested-columns"},"Nested columns")," for more information."),(0,i.kt)("p",null,"You can interact with nested data using ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-json-functions"},"JSON functions"),", which can extract nested values, parse from string, serialize to string, and create new ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," structures."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEX")," types have limited functionality outside the specialized functions that use them, so their behavior is undefined when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grouping on complex values."),(0,i.kt)("li",{parentName:"ul"},"Filtering directly on complex values, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"WHERE json is NULL"),"."),(0,i.kt)("li",{parentName:"ul"},"Used as inputs to aggregators without specialized handling for a specific complex type.")),(0,i.kt)("p",null,"In many cases, functions are provided to translate ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEX")," value types to ",(0,i.kt)("inlineCode",{parentName:"p"},"STRING"),", which serves as a workaround solution until ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEX")," type functionality can be improved."))}h.isMDXComponent=!0}}]);