"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,c=g["".concat(s,".").concat(m)]||g[m]||d[m]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>g});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"moving-average-query",title:"Moving Average Query"},s=void 0,p={unversionedId:"development/extensions-contrib/moving-average-query",id:"development/extensions-contrib/moving-average-query",title:"Moving Average Query",description:"\x3c!--",source:"@site/docs/latest/development/extensions-contrib/moving-average-query.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/moving-average-query",permalink:"/docs/latest/development/extensions-contrib/moving-average-query",draft:!1,tags:[],version:"current",frontMatter:{id:"moving-average-query",title:"Moving Average Query"}},u={},g=[{value:"Overview",id:"overview",level:2},{value:"High level algorithm",id:"high-level-algorithm",level:4},{value:"Main enhancements provided by this extension:",id:"main-enhancements-provided-by-this-extension",level:4},{value:"Further reading",id:"further-reading",level:4},{value:"Operations",id:"operations",level:2},{value:"Installation",id:"installation",level:3},{value:"Enabling",id:"enabling",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Query spec",id:"query-spec",level:2},{value:"Averagers",id:"averagers",level:2},{value:"Properties",id:"properties",level:3},{value:"Averager types:",id:"averager-types",level:3},{value:"Standard averagers",id:"standard-averagers",level:4},{value:"Cycle size (Day of Week)",id:"cycle-size-day-of-week",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"Post averager example",id:"post-averager-example",level:3},{value:"Cycle size example",id:"cycle-size-example",level:3}],d={toc:g},m="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Moving Average Query")," is an extension which provides support for ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Moving_average"},"Moving Average")," and other Aggregate ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Structured_Query_Language/Window_functions"},"Window Functions")," in Druid queries."),(0,i.kt)("p",null,"These Aggregate Window Functions consume standard Druid Aggregators and outputs additional windowed aggregates called ",(0,i.kt)("a",{parentName:"p",href:"#averagers"},"Averagers"),"."),(0,i.kt)("h4",{id:"high-level-algorithm"},"High level algorithm"),(0,i.kt)("p",null,"Moving Average encapsulates the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/groupbyquery"},"groupBy query")," (Or ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/timeseriesquery"},"timeseries")," in case of no dimensions) in order to rely on the maturity of these query types."),(0,i.kt)("p",null,"It runs the query in two main phases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Runs an inner ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/groupbyquery"},"groupBy")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/timeseriesquery"},"timeseries")," query to compute Aggregators (i.e. daily count of events)."),(0,i.kt)("li",{parentName:"ol"},"Passes over aggregated results in Broker, in order to compute Averagers (i.e. moving 7 day average of the daily count).")),(0,i.kt)("h4",{id:"main-enhancements-provided-by-this-extension"},"Main enhancements provided by this extension:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Functionality: Extending druid query functionality (i.e. initial introduction of Window Functions)."),(0,i.kt)("li",{parentName:"ol"},"Performance: Improving performance of such moving aggregations by eliminating multiple segment scans.")),(0,i.kt)("h4",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Moving_average"},"Moving Average")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Structured_Query_Language/Window_functions"},"Window Functions")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/analytic-function-concepts"},"Analytic Functions")),(0,i.kt)("h2",{id:"operations"},"Operations"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/pull-deps"},"pull-deps")," tool shipped with Druid to install this ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions#community-extensions"},"extension")," on all Druid broker and router nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'java -classpath "<your_druid_dir>/lib/*" org.apache.druid.cli.Main tools pull-deps -c org.apache.druid.extensions.contrib:druid-moving-average-query:{VERSION}\n')),(0,i.kt)("h3",{id:"enabling"},"Enabling"),(0,i.kt)("p",null,"After installation, to enable this extension, just add ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-moving-average-query")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.extensions.loadList")," in broker and routers' ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime.properties")," file and then restart broker and router nodes."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'druid.extensions.loadList=["druid-moving-average-query"]\n')),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"There are currently no configuration properties specific to Moving Average."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"movingAverage is missing support for the following groupBy properties: ",(0,i.kt)("inlineCode",{parentName:"li"},"subtotalsSpec"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"virtualColumns"),"."),(0,i.kt)("li",{parentName:"ul"},"movingAverage is missing support for the following timeseries properties: ",(0,i.kt)("inlineCode",{parentName:"li"},"descending"),"."),(0,i.kt)("li",{parentName:"ul"},"movingAverage is missing support for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/druid/issues/4349"},"SQL-compatible null handling")," (So setting druid.generic.useDefaultValueForNull in configuration will give an error).")),(0,i.kt)("h2",{id:"query-spec"},"Query spec"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Most properties in the query spec derived from  ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/groupbyquery"},"groupBy query")," / ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/timeseriesquery"},"timeseries"),", see documentation for these query types.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryType"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "movingAverage"; this is the first thing Druid looks at to figure out how to interpret the query.'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,i.kt)("td",{parentName:"tr",align:null},"A String or Object defining the data source to query, very similar to a table in a relational database. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/datasource"},"DataSource")," for more information."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dimensions"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON list of ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/dimensionspecs"},"DimensionSpec")," (Notice that property is optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"limitSpec"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/limitspec"},"LimitSpec")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"having"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/having"},"Having")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"granularity"),(0,i.kt)("td",{parentName:"tr",align:null},"A period granularity; See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/granularities#period-granularities"},"Period Granularities")),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/filters"},"Filters")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aggregations"),(0,i.kt)("td",{parentName:"tr",align:null},"Aggregations forms the input to Averagers; See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/aggregations"},"Aggregations")),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"postAggregations"),(0,i.kt)("td",{parentName:"tr",align:null},"Supports only aggregations as input; See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/post-aggregations"},"Post Aggregations")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"intervals"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON Object representing ISO-8601 Intervals. This defines the time ranges to run the query over."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"An additional JSON Object which can be used to specify certain flags."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"averagers"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the moving average function; See ",(0,i.kt)("a",{parentName:"td",href:"#averagers"},"Averagers")),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"postAveragers"),(0,i.kt)("td",{parentName:"tr",align:null},"Support input of both averagers and aggregations; Syntax is identical to postAggregations (See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/post-aggregations"},"Post Aggregations"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("h2",{id:"averagers"},"Averagers"),(0,i.kt)("p",null,"Averagers are used to define the Moving-Average function. Averagers are not limited to an average - they can also provide other types of window functions such as MAX()/MIN()."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"These are properties which are common to all Averagers:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"Averager type; See ",(0,i.kt)("a",{parentName:"td",href:"#averager-types"},"Averager types")),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"Averager name"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fieldName"),(0,i.kt)("td",{parentName:"tr",align:null},"Input name (An aggregation name)"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"buckets"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of lookback buckets (time periods), including current one. Must be >0"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cycleSize"),(0,i.kt)("td",{parentName:"tr",align:null},"Cycle size; Used to calculate day-of-week option; See ",(0,i.kt)("a",{parentName:"td",href:"#cycle-size-day-of-week"},"Cycle size (Day of Week)")),(0,i.kt)("td",{parentName:"tr",align:null},"no, defaults to 1")))),(0,i.kt)("h3",{id:"averager-types"},"Averager types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#standard-averagers"},"Standard averagers"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"doubleMean"),(0,i.kt)("li",{parentName:"ul"},"doubleMeanNoNulls"),(0,i.kt)("li",{parentName:"ul"},"doubleSum"),(0,i.kt)("li",{parentName:"ul"},"doubleMax"),(0,i.kt)("li",{parentName:"ul"},"doubleMin"),(0,i.kt)("li",{parentName:"ul"},"longMean"),(0,i.kt)("li",{parentName:"ul"},"longMeanNoNulls"),(0,i.kt)("li",{parentName:"ul"},"longSum"),(0,i.kt)("li",{parentName:"ul"},"longMax"),(0,i.kt)("li",{parentName:"ul"},"longMin")))),(0,i.kt)("h4",{id:"standard-averagers"},"Standard averagers"),(0,i.kt)("p",null,"These averagers offer four functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mean (Average)"),(0,i.kt)("li",{parentName:"ul"},"MeanNoNulls (Ignores empty buckets)."),(0,i.kt)("li",{parentName:"ul"},"Sum"),(0,i.kt)("li",{parentName:"ul"},"Max"),(0,i.kt)("li",{parentName:"ul"},"Min")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ignoring nulls"),":\nUsing a MeanNoNulls averager is useful when the interval starts at the dataset beginning time.\nIn that case, the first records will ignore missing buckets and average won't be artificially low.\nHowever, this also means that empty days in a sparse dataset will also be ignored."),(0,i.kt)("p",null,"Example of usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "type" : "doubleMean", "name" : <output_name>, "fieldName": <input_name> }\n')),(0,i.kt)("h3",{id:"cycle-size-day-of-week"},"Cycle size (Day of Week)"),(0,i.kt)("p",null,"This optional parameter is used to calculate over a single bucket within each cycle instead of all buckets.\nA prime example would be weekly buckets, resulting in a Day of Week calculation. (Other examples: Month of year, Hour of day)."),(0,i.kt)("p",null,"I.e. when using these parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"granularity"),": period=P1D (daily)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"buckets"),": 28"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"cycleSize"),": 7")),(0,i.kt)("p",null,"Within each output record, the averager will compute the result over the following buckets: current (#0), #7, #14, #21.\nWhereas without specifying cycleSize it would have computed over all 28 buckets."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"All examples are based on the Wikipedia dataset provided in the Druid ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/"},"tutorials"),"."),(0,i.kt)("h3",{id:"basic-example"},"Basic example"),(0,i.kt)("p",null,"Calculating a 7-buckets moving average for Wikipedia edit deltas."),(0,i.kt)("p",null,"Query syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "movingAverage",\n  "dataSource": "wikipedia",\n  "granularity": {\n    "type": "period",\n    "period": "PT30M"\n  },\n  "intervals": [\n    "2015-09-12T00:00:00Z/2015-09-13T00:00:00Z"\n  ],\n  "aggregations": [\n    {\n      "name": "delta30Min",\n      "fieldName": "delta",\n      "type": "longSum"\n    }\n  ],\n  "averagers": [\n    {\n      "name": "trailing30MinChanges",\n      "fieldName": "delta30Min",\n      "type": "longMean",\n      "buckets": 7\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n   "version" : "v1",\n   "timestamp" : "2015-09-12T00:30:00.000Z",\n   "event" : {\n     "delta30Min" : 30490,\n     "trailing30MinChanges" : 4355.714285714285\n   }\n }, {\n   "version" : "v1",\n   "timestamp" : "2015-09-12T01:00:00.000Z",\n   "event" : {\n     "delta30Min" : 96526,\n     "trailing30MinChanges" : 18145.14285714286\n   }\n }, {\n...\n...\n...\n}, {\n  "version" : "v1",\n  "timestamp" : "2015-09-12T23:00:00.000Z",\n  "event" : {\n    "delta30Min" : 119100,\n    "trailing30MinChanges" : 198697.2857142857\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2015-09-12T23:30:00.000Z",\n  "event" : {\n    "delta30Min" : 177882,\n    "trailing30MinChanges" : 193890.0\n  }\n}\n')),(0,i.kt)("h3",{id:"post-averager-example"},"Post averager example"),(0,i.kt)("p",null,"Calculating a 7-buckets moving average for Wikipedia edit deltas, plus a ratio between the current period and the moving average."),(0,i.kt)("p",null,"Query syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "movingAverage",\n  "dataSource": "wikipedia",\n  "granularity": {\n    "type": "period",\n    "period": "PT30M"\n  },\n  "intervals": [\n    "2015-09-12T22:00:00Z/2015-09-13T00:00:00Z"\n  ],\n  "aggregations": [\n    {\n      "name": "delta30Min",\n      "fieldName": "delta",\n      "type": "longSum"\n    }\n  ],\n  "averagers": [\n    {\n      "name": "trailing30MinChanges",\n      "fieldName": "delta30Min",\n      "type": "longMean",\n      "buckets": 7\n    }\n  ],\n  "postAveragers" : [\n    {\n      "name": "ratioTrailing30MinChanges",\n      "type": "arithmetic",\n      "fn": "/",\n      "fields": [\n        {\n          "type": "fieldAccess",\n          "fieldName": "delta30Min"\n        },\n        {\n          "type": "fieldAccess",\n          "fieldName": "trailing30MinChanges"\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2015-09-12T22:00:00.000Z",\n  "event" : {\n    "delta30Min" : 144269,\n    "trailing30MinChanges" : 204088.14285714287,\n    "ratioTrailing30MinChanges" : 0.7068955500319539\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2015-09-12T22:30:00.000Z",\n  "event" : {\n    "delta30Min" : 242860,\n    "trailing30MinChanges" : 214031.57142857142,\n    "ratioTrailing30MinChanges" : 1.134692411867141\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2015-09-12T23:00:00.000Z",\n  "event" : {\n    "delta30Min" : 119100,\n    "trailing30MinChanges" : 198697.2857142857,\n    "ratioTrailing30MinChanges" : 0.5994042624782422\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2015-09-12T23:30:00.000Z",\n  "event" : {\n    "delta30Min" : 177882,\n    "trailing30MinChanges" : 193890.0,\n    "ratioTrailing30MinChanges" : 0.9174377224199288\n  }\n} ]\n')),(0,i.kt)("h3",{id:"cycle-size-example"},"Cycle size example"),(0,i.kt)("p",null,"Calculating an average of every first 10-minutes of the last 3 hours:"),(0,i.kt)("p",null,"Query syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "movingAverage",\n  "dataSource": "wikipedia",\n  "granularity": {\n    "type": "period",\n    "period": "PT10M"\n  },\n  "intervals": [\n    "2015-09-12T00:00:00Z/2015-09-13T00:00:00Z"\n  ],\n  "aggregations": [\n    {\n      "name": "delta10Min",\n      "fieldName": "delta",\n      "type": "doubleSum"\n    }\n  ],\n  "averagers": [\n    {\n      "name": "trailing10MinPerHourChanges",\n      "fieldName": "delta10Min",\n      "type": "doubleMeanNoNulls",\n      "buckets": 18,\n      "cycleSize": 6\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);