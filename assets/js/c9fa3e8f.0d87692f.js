"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),N=r,c=u["".concat(p,".").concat(N)]||u[N]||m[N]||i;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=N;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},19399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"sql-json-functions",title:"SQL JSON functions",sidebar_label:"JSON functions"},p=void 0,s={unversionedId:"querying/sql-json-functions",id:"querying/sql-json-functions",title:"SQL JSON functions",description:"\x3c!--",source:"@site/docs/latest/querying/sql-json-functions.md",sourceDirName:"querying",slug:"/querying/sql-json-functions",permalink:"/docs/latest/querying/sql-json-functions",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-json-functions",title:"SQL JSON functions",sidebar_label:"JSON functions"},sidebar:"docs",previous:{title:"Multi-value string functions",permalink:"/docs/latest/querying/sql-multivalue-string-functions"},next:{title:"All functions",permalink:"/docs/latest/querying/sql-functions"}},d={},u=[{value:"JSONPath syntax",id:"jsonpath-syntax",level:3}],m={toc:u},N="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(N,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Druid supports nested columns, which provide optimized storage and indexes for nested data structures. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/nested-columns"},"Nested columns")," for more information."),(0,i.kt)("p",null,"You can use the following JSON functions to extract, transform, and create ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," values."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JSON_KEYS(expr, path)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns an array of field names from ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," at the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"path"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JSON_OBJECT(KEY expr1 VALUE expr2[, KEY expr3 VALUE expr4, ...])")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a new ",(0,i.kt)("inlineCode",{parentName:"td"},"COMPLEX<json>")," object. The ",(0,i.kt)("inlineCode",{parentName:"td"},"KEY")," expressions must evaluate to string types. The ",(0,i.kt)("inlineCode",{parentName:"td"},"VALUE")," expressions can be composed of any input type, including other ",(0,i.kt)("inlineCode",{parentName:"td"},"COMPLEX<json>")," values. ",(0,i.kt)("inlineCode",{parentName:"td"},"JSON_OBJECT")," can accept colon-separated key-value pairs. The following syntax is equivalent: ",(0,i.kt)("inlineCode",{parentName:"td"},"JSON_OBJECT(expr1:expr2[, expr3:expr4, ...])"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JSON_PATHS(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns an array of all paths which refer to literal values in ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," in JSONPath format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JSON_QUERY(expr, path)")),(0,i.kt)("td",{parentName:"tr",align:null},"Extracts a ",(0,i.kt)("inlineCode",{parentName:"td"},"COMPLEX<json>")," value from ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),", at the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"path"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JSON_VALUE(expr, path [RETURNING sqlType])")),(0,i.kt)("td",{parentName:"tr",align:null},"Extracts a literal value from ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," at the specified ",(0,i.kt)("inlineCode",{parentName:"td"},"path"),". If you specify ",(0,i.kt)("inlineCode",{parentName:"td"},"RETURNING")," and an SQL type name (such as ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"BIGINT"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"DOUBLE"),", etc) the function plans the query using the suggested type. Otherwise, it attempts to infer the type based on the context. If it can't infer the type, it defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PARSE_JSON(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Parses ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," into a ",(0,i.kt)("inlineCode",{parentName:"td"},"COMPLEX<json>")," object. This operator deserializes JSON values when processing them, translating stringified JSON into a nested structure. If the input is not a ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR")," or it is invalid JSON, this function will result in an error.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TRY_PARSE_JSON(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Parses ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," into a ",(0,i.kt)("inlineCode",{parentName:"td"},"COMPLEX<json>")," object. This operator deserializes JSON values when processing them, translating stringified JSON into a nested structure. If the input is not a ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR")," or it is invalid JSON, this function will result in a ",(0,i.kt)("inlineCode",{parentName:"td"},"NULL")," value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TO_JSON_STRING(expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Serializes ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," into a JSON string.")))),(0,i.kt)("h3",{id:"jsonpath-syntax"},"JSONPath syntax"),(0,i.kt)("p",null,"Druid supports a subset of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/json-path/JsonPath/blob/master/README.md"},"JSONPath syntax")," operators, primarily limited to extracting individual values from nested data structures."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operator"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$")),(0,i.kt)("td",{parentName:"tr",align:null},"Root element. All JSONPath expressions start with this operator.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".<name>")),(0,i.kt)("td",{parentName:"tr",align:null},"Child element in dot notation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"['<name>']")),(0,i.kt)("td",{parentName:"tr",align:null},"Child element in bracket notation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[<number>]")),(0,i.kt)("td",{parentName:"tr",align:null},"Array index.")))),(0,i.kt)("p",null,"Consider the following example input JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"x":1, "y":[1, 2, 3]}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To return the entire JSON object:",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},"$"),"      -> ",(0,i.kt)("inlineCode",{parentName:"li"},'{"x":1, "y":[1, 2, 3]}')),(0,i.kt)("li",{parentName:"ul"},'To return the value of the key "x":',(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},"$.x"),"    -> ",(0,i.kt)("inlineCode",{parentName:"li"},"1")),(0,i.kt)("li",{parentName:"ul"},"For a key that contains an array, to return the entire array:",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},"$['y']")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]")),(0,i.kt)("li",{parentName:"ul"},"For a key that contains an array, to return an item in the array:",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},"$.y[1]")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"2"))))}c.isMDXComponent=!0}}]);