"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8358],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=s(t),c=l,h=m["".concat(o,".").concat(c)]||m[c]||p[c]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[m]="string"==typeof e?e:l,i[1]=u;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(87462),l=t(67294),r=t(86010),i=t(12466),u=t(16550),o=t(91980),s=t(67392),d=t(50012);function m(e){return function(e){var n,t;return null!=(n=null==(t=l.Children.map(e,(function(e){if(!e||(0,l.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,l.useMemo)((function(){var e=null!=n?n:m(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function c(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,r=(0,u.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,l.useCallback)((function(e){if(i){var n=new URLSearchParams(r.location.search);n.set(i,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[i,r])]}function y(e){var n,t,a,r,i=e.defaultValue,u=e.queryString,o=void 0!==u&&u,s=e.groupId,m=p(e),y=(0,l.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var l=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:i,tabValues:m})})),k=y[0],f=y[1],N=h({queryString:o,groupId:s}),v=N[0],g=N[1],b=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,d.Nk)(n),a=t[0],r=t[1],[a,(0,l.useCallback)((function(e){n&&r.set(e)}),[n,r])]),T=b[0],w=b[1],C=function(){var e=null!=v?v:T;return c({value:e,tabValues:m})?e:null}();return(0,l.useLayoutEffect)((function(){C&&f(C)}),[C]),{selectedValue:k,selectValue:(0,l.useCallback)((function(e){if(!c({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),g(e),w(e)}),[g,w,m]),tabValues:m}}var k=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){var n=e.className,t=e.block,u=e.selectedValue,o=e.selectValue,s=e.tabValues,d=[],m=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=d.indexOf(n),a=s[t].value;a!==u&&(m(n),o(a))},c=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,l=d.indexOf(e.currentTarget)+1;t=null!=(a=d[l])?a:d[0];break;case"ArrowLeft":var r,i=d.indexOf(e.currentTarget)-1;t=null!=(r=d[i])?r:d[d.length-1]}null==(n=t)||n.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},s.map((function(e){var n=e.value,t=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return d.push(e)},onKeyDown:c,onClick:p},i,{className:(0,r.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=r.find((function(e){return e.props.value===a}));return i?(0,l.cloneElement)(i,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})})))}function g(e){var n=y(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(N,(0,a.Z)({},e,n)),l.createElement(v,(0,a.Z)({},e,n)))}function b(e){var n=(0,k.Z)();return l.createElement(g,(0,a.Z)({key:String(n)},e))}},49879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=t(74866),u=t(85162),o=["components"],s={id:"tutorial-unnest-arrays",sidebar_label:"Unnesting arrays",title:"Unnest arrays within a column"},d=void 0,m={unversionedId:"tutorials/tutorial-unnest-arrays",id:"tutorials/tutorial-unnest-arrays",title:"Unnest arrays within a column",description:"\x3c!--",source:"@site/docs/latest/tutorials/tutorial-unnest-arrays.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-unnest-arrays",permalink:"/docs/latest/tutorials/tutorial-unnest-arrays",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-unnest-arrays",sidebar_label:"Unnesting arrays",title:"Unnest arrays within a column"},sidebar:"docs",previous:{title:"Get to know Query view",permalink:"/docs/latest/tutorials/tutorial-sql-query-view"},next:{title:"Jupyter Notebook tutorials",permalink:"/docs/latest/tutorials/tutorial-jupyter-index"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Load data with nested values",id:"load-data-with-nested-values",level:2},{value:"View the data",id:"view-the-data",level:2},{value:"Unnest using SQL queries",id:"unnest-using-sql-queries",level:2},{value:"Unnest a single source expression in a datasource",id:"unnest-a-single-source-expression-in-a-datasource",level:3},{value:"Unnest a virtual column",id:"unnest-a-virtual-column",level:3},{value:"Unnest multiple source expressions",id:"unnest-multiple-source-expressions",level:3},{value:"Unnest a column from a subset of a table",id:"unnest-a-column-from-a-subset-of-a-table",level:3},{value:"Unnest with a filter",id:"unnest-with-a-filter",level:3},{value:"Unnest and then GROUP BY",id:"unnest-and-then-group-by",level:3},{value:"Unnest using native queries",id:"unnest-using-native-queries",level:2},{value:"Scan query",id:"scan-query",level:3},{value:"groupBy query",id:"groupby-query",level:3},{value:"topN query",id:"topn-query",level:3},{value:"Unnest with a JOIN query",id:"unnest-with-a-join-query",level:3},{value:"Unnest a virtual column",id:"unnest-a-virtual-column-1",level:3},{value:"Unnest a column and a virtual column",id:"unnest-a-column-and-a-virtual-column",level:3},{value:"Learn more",id:"learn-more",level:2}],h={toc:c},y="wrapper";function k(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)(y,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you're looking for information about how to unnest ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPLEX<json>")," columns, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/nested-columns"},"Nested columns"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The unnest datasource and UNNEST SQL function are ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/development/experimental"},"experimental"),". Their API and behavior are subject\nto change in future releases. It is not recommended to use this feature in production at this time.")),(0,r.kt)("p",null,"This tutorial demonstrates how to use the unnest datasource to unnest a column that has data stored in arrays. For example, if you have a column named ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," with values like ",(0,r.kt)("inlineCode",{parentName:"p"},"[a,b]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[c,d,f]"),", the unnest datasource can output the data to a new column with individual rows that contain single values like ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),". When doing this, be mindful of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unnesting data can dramatically increase the total number of rows."),(0,r.kt)("li",{parentName:"ul"},"You cannot unnest an array within an array.")),(0,r.kt)("p",null,"You can use the Druid console  or API to unnest data. To start though, you may want to use the Druid console so that viewing the nested and unnested data is easier."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You need a Druid cluster, such as the ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/"},"quickstart"),". The cluster does not need any existing datasources. You'll load a basic one as part of this tutorial."),(0,r.kt)("h2",{id:"load-data-with-nested-values"},"Load data with nested values"),(0,r.kt)("p",null,"The data you're ingesting contains a handful of rows that resemble the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"t:2000-01-01, m1:1.0, m2:1.0, dim1:, dim2:[a], dim3:[a,b], dim4:[x,y], dim5:[a,b]\n")),(0,r.kt)("p",null,"The focus of this tutorial is on the nested array of values in ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3"),"."),(0,r.kt)("p",null,"You can load this data by running a query for SQL-based ingestion or submitting a JSON-based ingestion spec. The example loads data into a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"nested_data"),":"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"1",label:"SQL-based ingestion",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO nested_data OVERWRITE ALL\nSELECT\n  TIME_PARSE("t") as __time,\n  dim1,\n  dim2,\n  dim3,\n  dim4,\n  dim5,\n  m1,\n  m2\nFROM TABLE(\n    EXTERN(\n    \'{"type":"inline","data":"{\\"t\\":\\"2000-01-01\\",\\"m1\\":\\"1.0\\",\\"m2\\":\\"1.0\\",\\"dim1\\":\\"\\",\\"dim2\\":[\\"a\\"],\\"dim3\\":[\\"a\\",\\"b\\"],\\"dim4\\":[\\"x\\",\\"y\\"],\\"dim5\\":[\\"a\\",\\"b\\"]},\\n{\\"t\\":\\"2000-01-02\\",\\"m1\\":\\"2.0\\",\\"m2\\":\\"2.0\\",\\"dim1\\":\\"10.1\\",\\"dim2\\":[],\\"dim3\\":[\\"c\\",\\"d\\"],\\"dim4\\":[\\"e\\",\\"f\\"],\\"dim5\\":[\\"a\\",\\"b\\",\\"c\\",\\"d\\"]},\\n{\\"t\\":\\"2001-01-03\\",\\"m1\\":\\"6.0\\",\\"m2\\":\\"6.0\\",\\"dim1\\":\\"abc\\",\\"dim2\\":[\\"a\\"],\\"dim3\\":[\\"k\\",\\"l\\"]},\\n{\\"t\\":\\"2001-01-01\\",\\"m1\\":\\"4.0\\",\\"m2\\":\\"4.0\\",\\"dim1\\":\\"1\\",\\"dim2\\":[\\"a\\"],\\"dim3\\":[\\"g\\",\\"h\\"]},\\n{\\"t\\":\\"2001-01-02\\",\\"m1\\":\\"5.0\\",\\"m2\\":\\"5.0\\",\\"dim1\\":\\"def\\",\\"dim2\\":[\\"abc\\"],\\"dim3\\":[\\"i\\",\\"j\\"]},\\n{\\"t\\":\\"2001-01-03\\",\\"m1\\":\\"6.0\\",\\"m2\\":\\"6.0\\",\\"dim1\\":\\"abc\\",\\"dim2\\":[\\"a\\"],\\"dim3\\":[\\"k\\",\\"l\\"]},\\n{\\"t\\":\\"2001-01-02\\",\\"m1\\":\\"5.0\\",\\"m2\\":\\"5.0\\",\\"dim1\\":\\"def\\",\\"dim2\\":[\\"abc\\"],\\"dim3\\":[\\"m\\",\\"n\\"]}"}\',\n    \'{"type":"json"}\',\n    \'[{"name":"t","type":"string"},{"name":"dim1","type":"string"},{"name":"dim2","type":"string"},{"name":"dim3","type":"string"},{"name":"dim4","type":"string"},{"name":"dim5","type":"string"},{"name":"m1","type":"float"},{"name":"m2","type":"double"}]\'\n  )\n)\nPARTITIONED BY YEAR\n'))),(0,r.kt)(u.Z,{value:"2",label:"Ingestion spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "index_parallel",\n  "spec": {\n    "ioConfig": {\n      "type": "index_parallel",\n      "inputSource": {\n        "type": "inline",\n        "data":"{\\"t\\":\\"2000-01-01\\",\\"m1\\":\\"1.0\\",\\"m2\\":\\"1.0\\",\\"dim1\\":\\"\\",\\"dim2\\":[\\"a\\"],\\"dim3\\":[\\"a\\",\\"b\\"],\\"dim4\\":[\\"x\\",\\"y\\"],\\"dim5\\":[\\"a\\",\\"b\\"]},\\n{\\"t\\":\\"2000-01-02\\",\\"m1\\":\\"2.0\\",\\"m2\\":\\"2.0\\",\\"dim1\\":\\"10.1\\",\\"dim2\\":[],\\"dim3\\":[\\"c\\",\\"d\\"],\\"dim4\\":[\\"e\\",\\"f\\"],\\"dim5\\":[\\"a\\",\\"b\\",\\"c\\",\\"d\\"]},\\n{\\"t\\":\\"2001-01-03\\",\\"m1\\":\\"6.0\\",\\"m2\\":\\"6.0\\",\\"dim1\\":\\"abc\\",\\"dim2\\":[\\"a\\"],\\"dim3\\":[\\"k\\",\\"l\\"]},\\n{\\"t\\":\\"2001-01-01\\",\\"m1\\":\\"4.0\\",\\"m2\\":\\"4.0\\",\\"dim1\\":\\"1\\",\\"dim2\\":[\\"a\\"],\\"dim3\\":[\\"g\\",\\"h\\"]},\\n{\\"t\\":\\"2001-01-02\\",\\"m1\\":\\"5.0\\",\\"m2\\":\\"5.0\\",\\"dim1\\":\\"def\\",\\"dim2\\":[\\"abc\\"],\\"dim3\\":[\\"i\\",\\"j\\"]},\\n{\\"t\\":\\"2001-01-03\\",\\"m1\\":\\"6.0\\",\\"m2\\":\\"6.0\\",\\"dim1\\":\\"abc\\",\\"dim2\\":[\\"a\\"],\\"dim3\\":[\\"k\\",\\"l\\"]},\\n{\\"t\\":\\"2001-01-02\\",\\"m1\\":\\"5.0\\",\\"m2\\":\\"5.0\\",\\"dim1\\":\\"def\\",\\"dim2\\":[\\"abc\\"],\\"dim3\\":[\\"m\\",\\"n\\"]}"\n      },\n      "inputFormat": {\n        "type": "json"\n      }\n    },\n    "tuningConfig": {\n      "type": "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic"\n      }\n    },\n    "dataSchema": {\n      "dataSource": "nested_data",\n      "granularitySpec": {\n        "type": "uniform",\n        "queryGranularity": "NONE",\n        "rollup": false,\n        "segmentGranularity": "YEAR"\n      },\n      "timestampSpec": {\n        "column": "t",\n        "format": "auto"\n      },\n      "dimensionsSpec": {\n        "dimensions": [\n          "dim1",\n          "dim2",\n          "dim3",\n          "dim4",\n          "dim5"\n        ]\n      },\n      "metricsSpec": [\n        {\n          "name": "m1",\n          "type": "floatSum",\n          "fieldName": "m1"\n        },\n        {\n          "name": "m2",\n          "type": "doubleSum",\n          "fieldName": "m2"\n        }\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("h2",{id:"view-the-data"},"View the data"),(0,r.kt)("p",null,"Now that the data is loaded, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM nested_data\n")),(0,r.kt)("p",null,"In the results, notice that the column named ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," has nested values like ",(0,r.kt)("inlineCode",{parentName:"p"},'["a","b"]'),".  The example queries that follow unnest ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3"),"  and run queries against the unnested records. Depending on the type of queries you write, see either ",(0,r.kt)("a",{parentName:"p",href:"#unnest-using-sql-queries"},"Unnest using SQL queries")," or ",(0,r.kt)("a",{parentName:"p",href:"#unnest-using-native-queries"},"Unnest using native queries"),"."),(0,r.kt)("h2",{id:"unnest-using-sql-queries"},"Unnest using SQL queries"),(0,r.kt)("p",null,"The following is the general syntax for UNNEST:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_alias_name FROM datasource, UNNEST(source_expression) AS table_alias_name(column_alias_name)\n")),(0,r.kt)("p",null,"In addition, you must supply the following context parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"enableUnnest": "true"\n')),(0,r.kt)("p",null,"For more information about the syntax, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql#unnest"},"UNNEST"),"."),(0,r.kt)("h3",{id:"unnest-a-single-source-expression-in-a-datasource"},"Unnest a single source expression in a datasource"),(0,r.kt)("p",null,"The following query returns a column called ",(0,r.kt)("inlineCode",{parentName:"p"},"d3")," from the table ",(0,r.kt)("inlineCode",{parentName:"p"},"nested_data"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"d3")," contains the unnested values from the source column ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT d3 FROM "nested_data", UNNEST(MV_TO_ARRAY(dim3)) AS example_table(d3)\n')),(0,r.kt)("p",null,"Notice the MV_TO_ARRAY helper function, which converts the multi-value records in ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," to arrays. It is required since ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," is a multi-value string dimension."),(0,r.kt)("p",null,"If the column you are unnesting is not a string dimension, then you do not need to use the MV_TO_ARRAY helper function."),(0,r.kt)("h3",{id:"unnest-a-virtual-column"},"Unnest a virtual column"),(0,r.kt)("p",null,"You can unnest into a virtual column (multiple columns treated as one). The following query returns the two source columns and a third virtual column containing the unnested data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT dim4,dim5,d45 FROM nested_data, UNNEST(ARRAY[dim4,dim5]) AS example_table(d45)\n")),(0,r.kt)("p",null,"The virtual column ",(0,r.kt)("inlineCode",{parentName:"p"},"d45")," is the product of the two source columns. Notice how the total number of rows has grown. The table ",(0,r.kt)("inlineCode",{parentName:"p"},"nested_data")," had only seven rows originally."),(0,r.kt)("p",null,"Another way to unnest a virtual column is to concatenate them with ARRAY_CONCAT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT dim4,dim5,d45 FROM nested_data, UNNEST(ARRAY_CONCAT(dim4,dim5)) AS example_table(d45)\n")),(0,r.kt)("p",null,"Decide which method to use based on what your goals are."),(0,r.kt)("h3",{id:"unnest-multiple-source-expressions"},"Unnest multiple source expressions"),(0,r.kt)("p",null,"You can include multiple UNNEST clauses in a single query. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"UNNEST")," clause needs the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UNNEST(source_expression) AS table_alias_name(column_alias_name)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"table_alias_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"column_alias_name")," for each UNNEST clause should be unique."),(0,r.kt)("p",null,"The example query returns the following from  the ",(0,r.kt)("inlineCode",{parentName:"p"},"nested_data")," datasource:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the source columns ",(0,r.kt)("inlineCode",{parentName:"li"},"dim3"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"dim4"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"dim5")),(0,r.kt)("li",{parentName:"ul"},"an unnested version of ",(0,r.kt)("inlineCode",{parentName:"li"},"dim3")," aliased to ",(0,r.kt)("inlineCode",{parentName:"li"},"d3")),(0,r.kt)("li",{parentName:"ul"},"an unnested virtual column composed of ",(0,r.kt)("inlineCode",{parentName:"li"},"dim4")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"dim5")," aliased to ",(0,r.kt)("inlineCode",{parentName:"li"},"d45"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT dim3,dim4,dim5,d3,d45 FROM "nested_data", UNNEST(MV_TO_ARRAY("dim3")) AS foo1(d3), UNNEST(ARRAY[dim4,dim5]) AS foo2(d45)\n')),(0,r.kt)("h3",{id:"unnest-a-column-from-a-subset-of-a-table"},"Unnest a column from a subset of a table"),(0,r.kt)("p",null,"The following query uses only three columns from the ",(0,r.kt)("inlineCode",{parentName:"p"},"nested_data")," table as the datasource. From that subset, it unnests the column ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"d3")," and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"d3"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT d3 FROM (SELECT dim1, dim2, dim3 FROM "nested_data"), UNNEST(MV_TO_ARRAY(dim3)) AS example_table(d3)\n')),(0,r.kt)("h3",{id:"unnest-with-a-filter"},"Unnest with a filter"),(0,r.kt)("p",null,"You can specify which rows to unnest by including a filter in your query. The following query:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filters the source expression based on ",(0,r.kt)("inlineCode",{parentName:"li"},"dim2")),(0,r.kt)("li",{parentName:"ul"},"Unnests the records in ",(0,r.kt)("inlineCode",{parentName:"li"},"dim3")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"d3")),(0,r.kt)("li",{parentName:"ul"},"Returns the records for  the unnested ",(0,r.kt)("inlineCode",{parentName:"li"},"d3")," that have a ",(0,r.kt)("inlineCode",{parentName:"li"},"dim2")," record that matches the filter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT d3 FROM (SELECT * FROM nested_data WHERE dim2 IN ('abc')), UNNEST(MV_TO_ARRAY(dim3)) AS example_table(d3)\n")),(0,r.kt)("p",null,"You can also filter the results of an UNNEST clause. The following example unnests the inline array ",(0,r.kt)("inlineCode",{parentName:"p"},"[1,2,3]")," but only returns the rows that match the filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM UNNEST(ARRAY[1,2,3]) AS example_table(d1) WHERE d1 IN ('1','2')\n")),(0,r.kt)("p",null,"This means that you can run a query like the following where Druid only return rows that meet the following conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The unnested values of ",(0,r.kt)("inlineCode",{parentName:"li"},"dim3")," (aliased to ",(0,r.kt)("inlineCode",{parentName:"li"},"d3"),") matches ",(0,r.kt)("inlineCode",{parentName:"li"},"IN ('b', 'd')")),(0,r.kt)("li",{parentName:"ul"},"The value of ",(0,r.kt)("inlineCode",{parentName:"li"},"m1")," is less than 2.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM nested_data, UNNEST(MV_TO_ARRAY(\"dim3\")) AS foo(d3) WHERE d3 IN ('b', 'd') and m1 < 2\n")),(0,r.kt)("p",null,"The query only returns a single row since only one row meets the conditions. You can see the results change if you modify the filter."),(0,r.kt)("h3",{id:"unnest-and-then-group-by"},"Unnest and then GROUP BY"),(0,r.kt)("p",null,"The following query unnests ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," and then performs a GROUP BY on the output ",(0,r.kt)("inlineCode",{parentName:"p"},"d3"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT d3 FROM nested_data, UNNEST(MV_TO_ARRAY(dim3)) AS example_table(d3) GROUP BY d3\n")),(0,r.kt)("p",null,"You can further transform your results by  including clauses like ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY d3 DESC")," or LIMIT."),(0,r.kt)("h2",{id:"unnest-using-native-queries"},"Unnest using native queries"),(0,r.kt)("p",null,"The following section shows examples of how you can use the unnest datasource in queries. They all use the ",(0,r.kt)("inlineCode",{parentName:"p"},"nested_data")," table you created earlier in the tutorial."),(0,r.kt)("p",null,"You can use a single unnest datasource to unnest multiple columns. Be careful when doing this though because it can lead to a very large number of new rows."),(0,r.kt)("h3",{id:"scan-query"},"Scan query"),(0,r.kt)("p",null,"The following native Scan query returns the rows of the datasource and unnests the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," column by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"unnest")," datasource type:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "scan",\n  "dataSource": {\n    "type": "unnest",\n    "base": {\n      "type": "table",\n      "name": "nested_data"\n    },\n    "virtualColumn": {\n      "type": "expression",\n      "name": "unnest-dim3",\n      "expression": "\\"dim3\\""\n    }\n  },\n  "intervals": {\n    "type": "intervals",\n    "intervals": [\n      "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n    ]\n  },\n  "limit": 100,\n  "columns": [\n    "__time",\n    "dim1",\n    "dim2",\n    "dim3",\n    "m1",\n    "m2",\n    "unnest-dim3"\n  ],\n  "legacy": false,\n  "granularity": {\n    "type": "all"\n  },\n  "context": {\n    "debug": true,\n    "useCache": false\n  }\n}\n'))),(0,r.kt)("p",null,"In the results, notice that there are more rows than before and an additional column named ",(0,r.kt)("inlineCode",{parentName:"p"},"unnest-dim3"),". The values of ",(0,r.kt)("inlineCode",{parentName:"p"},"unnest-dim3")," are the same as the ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," column except the nested values are no longer nested and are each a separate record."),(0,r.kt)("p",null,"You can implement filters. For example, you can add the following to the Scan query to filter results to only rows that have the values ",(0,r.kt)("inlineCode",{parentName:"p"},'"a"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"abc"')," in ",(0,r.kt)("inlineCode",{parentName:"p"},'"dim2"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "filter": {\n    "type": "in",\n    "dimension": "dim2",\n    "values": [\n      "a",\n      "abc",\n      ]\n  },\n')),(0,r.kt)("h3",{id:"groupby-query"},"groupBy query"),(0,r.kt)("p",null,"The following query returns an unnested version of the column ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," as the column ",(0,r.kt)("inlineCode",{parentName:"p"},"unnest-dim3")," sorted in descending order."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": {\n    "type": "unnest",\n    "base": "nested_data",\n    "virtualColumn": {\n      "type": "expression",\n      "name": "unnest-dim3",\n      "expression": "\\"dim3\\""\n    }\n  },\n  "intervals": ["-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"],\n  "granularity": "all",\n  "dimensions": [\n    "unnest-dim3"\n  ],\n  "limitSpec": {\n    "type": "default",\n    "columns": [\n      {\n        "dimension": "unnest-dim3",\n        "direction": "descending"\n      }\n    ],\n    "limit": 1001\n  },\n  "context": {\n    "debug": true\n  }\n}\n'))),(0,r.kt)("h3",{id:"topn-query"},"topN query"),(0,r.kt)("p",null,"The example topN query unnests ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," into the column ",(0,r.kt)("inlineCode",{parentName:"p"},"unnest-dim3"),". The query uses the unnested column as the dimension for the topN query. The results are outputted to a column named ",(0,r.kt)("inlineCode",{parentName:"p"},"topN-unnest-d3")," and are sorted numerically in ascending order based on the column ",(0,r.kt)("inlineCode",{parentName:"p"},"a0"),", an aggregate value representing the minimum of ",(0,r.kt)("inlineCode",{parentName:"p"},"m1"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "topN",\n  "dataSource": {\n    "type": "unnest",\n    "base": {\n      "type": "table",\n      "name": "nested_data"\n    },\n    "virtualColumn": {\n      "type": "expression",\n      "name": "unnest-dim3",\n      "expression": "\\"dim3\\""\n    },\n  },\n  "dimension": {\n    "type": "default",\n    "dimension": "unnest-dim3",\n    "outputName": "topN-unnest-d3",\n    "outputType": "STRING"\n  },\n  "metric": {\n    "type": "inverted",\n    "metric": {\n      "type": "numeric",\n      "metric": "a0"\n    }\n  },\n  "threshold": 3,\n  "intervals": {\n    "type": "intervals",\n    "intervals": [\n      "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n    ]\n  },\n  "granularity": {\n    "type": "all"\n  },\n  "aggregations": [\n    {\n      "type": "floatMin",\n      "name": "a0",\n      "fieldName": "m1"\n    }\n  ],\n  "context": {\n    "debug": true\n  }\n}\n'))),(0,r.kt)("h3",{id:"unnest-with-a-join-query"},"Unnest with a JOIN query"),(0,r.kt)("p",null,"This query joins the ",(0,r.kt)("inlineCode",{parentName:"p"},"nested_data")," table with itself and outputs the unnested data into a new column called ",(0,r.kt)("inlineCode",{parentName:"p"},"unnest-dim3"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "scan",\n  "dataSource": {\n    "type": "unnest",\n    "base": {\n        "type": "join",\n        "left": {\n          "type": "table",\n          "name": "nested_data"\n        },\n        "right": {\n          "type": "query",\n          "query": {\n            "queryType": "scan",\n            "dataSource": {\n              "type": "table",\n              "name": "nested_data"\n            },\n            "intervals": {\n              "type": "intervals",\n              "intervals": [\n                "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n              ]\n            },\n            "virtualColumns": [\n              {\n                "type": "expression",\n                "name": "v0",\n                "expression": "\\"m2\\"",\n                "outputType": "FLOAT"\n              }\n            ],\n            "resultFormat": "compactedList",\n            "columns": [\n              "__time",\n              "dim1",\n              "dim2",\n              "dim3",\n              "m1",\n              "m2",\n              "v0"\n            ],\n            "legacy": false,\n            "context": {\n              "sqlOuterLimit": 1001,\n              "useNativeQueryExplain": true\n            },\n            "granularity": {\n              "type": "all"\n            }\n          }\n        },\n        "rightPrefix": "j0.",\n        "condition": "(\\"m1\\" == \\"j0.v0\\")",\n        "joinType": "INNER"\n      },\n    "virtualColumn": {\n      "type": "expression",\n      "name": "unnest-dim3",\n      "expression": "\\"dim3\\""\n    }\n    },\n  "intervals": {\n    "type": "intervals",\n    "intervals": [\n      "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n    ]\n  },\n  "resultFormat": "compactedList",\n  "limit": 1001,\n  "columns": [\n    "__time",\n    "dim1",\n    "dim2",\n    "dim3",\n    "j0.__time",\n    "j0.dim1",\n    "j0.dim2",\n    "j0.dim3",\n    "j0.m1",\n    "j0.m2",\n    "m1",\n    "m2",\n    "unnest-dim3"\n  ],\n  "legacy": false,\n  "context": {\n    "sqlOuterLimit": 1001,\n    "useNativeQueryExplain": true\n  },\n  "granularity": {\n    "type": "all"\n  }\n}\n'))),(0,r.kt)("h3",{id:"unnest-a-virtual-column-1"},"Unnest a virtual column"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"unnest")," datasource supports unnesting virtual columns, which is a queryable composite column that can draw data from multiple source columns."),(0,r.kt)("p",null,"The following query returns the columns ",(0,r.kt)("inlineCode",{parentName:"p"},"dim45")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"m1"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"dim45")," column is the unnested version of a virtual column that contains an array of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dim4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dim5")," columns."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "scan",\n  "dataSource":{\n    "type": "unnest",\n    "base": {\n      "type": "table",\n      "name": "nested_data"\n    },\n    "virtualColumn": {\n      "type": "expression",\n      "name": "dim45",\n      "expression": "array_concat(\\"dim4\\",\\"dim5\\")",\n      "outputType": "ARRAY<STRING>"\n    },\n  }\n  "intervals": {\n    "type": "intervals",\n    "intervals": [\n      "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n    ]\n  },\n  "resultFormat": "compactedList",\n  "limit": 1001,\n  "columns": [\n    "dim45",\n    "m1"\n  ],\n  "legacy": false,\n  "granularity": {\n    "type": "all"\n  },\n  "context": {\n    "debug": true,\n    "useCache": false\n  }\n}\n'))),(0,r.kt)("h3",{id:"unnest-a-column-and-a-virtual-column"},"Unnest a column and a virtual column"),(0,r.kt)("p",null,"The following Scan query unnests the column ",(0,r.kt)("inlineCode",{parentName:"p"},"dim3")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"d3")," and a virtual column composed of ",(0,r.kt)("inlineCode",{parentName:"p"},"dim4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dim5")," into the column ",(0,r.kt)("inlineCode",{parentName:"p"},"d45"),". It then returns those source columns and their unnested variants."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "scan",\n  "dataSource": {\n    "type": "unnest",\n    "base": {\n      "type": "unnest",\n      "base": {\n        "type": "table",\n        "name": "nested_data"\n      },\n\n"virtualColumn": {\n        "type": "expression",\n        "name": "d3",\n        "expression": "\\"dim3\\"",\n        "outputType": "STRING"\n      },\n    },\n    "virtualColumn": {\n      "type": "expression",\n      "name": "d45",\n      "expression": "array(\\"dim4\\",\\"dim5\\")",\n      "outputType": "ARRAY<STRING>"\n    },\n  },\n  "intervals": {\n    "type": "intervals",\n    "intervals": [\n      "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n    ]\n  },\n  "resultFormat": "compactedList",\n  "limit": 1001,\n  "columns": [\n    "dim3",\n    "d3",\n    "dim4",\n    "dim5",\n    "d45"\n  ],\n  "legacy": false,\n  "context": {\n    "enableUnnest": "true",\n    "queryId": "2618b9ce-6c0d-414e-b88d-16fb59b9c481",\n    "sqlOuterLimit": 1001,\n    "sqlQueryId": "2618b9ce-6c0d-414e-b88d-16fb59b9c481",\n    "useNativeQueryExplain": true\n  },\n  "granularity": {\n    "type": "all"\n  }\n}\n'))),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"For more information, see the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/querying/sql#unnest"},"UNNEST SQL function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/querying/datasource#unnest"},(0,r.kt)("inlineCode",{parentName:"a"},"unnest")," in Datasources"))))}k.isMDXComponent=!0}}]);