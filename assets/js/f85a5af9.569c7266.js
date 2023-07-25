"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"compaction",title:"Compaction",description:"Defines compaction and automatic compaction (auto-compaction or autocompaction) for segment optimization. Use cases and strategies for compaction. Describes compaction task configuration."},s=void 0,m={unversionedId:"data-management/compaction",id:"data-management/compaction",title:"Compaction",description:"Defines compaction and automatic compaction (auto-compaction or autocompaction) for segment optimization. Use cases and strategies for compaction. Describes compaction task configuration.",source:"@site/docs/26.0.0/data-management/compaction.md",sourceDirName:"data-management",slug:"/data-management/compaction",permalink:"/docs/26.0.0/data-management/compaction",draft:!1,tags:[],version:"current",frontMatter:{id:"compaction",title:"Compaction",description:"Defines compaction and automatic compaction (auto-compaction or autocompaction) for segment optimization. Use cases and strategies for compaction. Describes compaction task configuration."},sidebar:"docs",previous:{title:"Schema changes",permalink:"/docs/26.0.0/data-management/schema-changes"},next:{title:"Automatic compaction",permalink:"/docs/26.0.0/data-management/automatic-compaction"}},p={},c=[{value:"Compaction strategies",id:"compaction-strategies",level:2},{value:"Types of compaction",id:"types-of-compaction",level:2},{value:"Data handling with compaction",id:"data-handling-with-compaction",level:2},{value:"Segment granularity handling",id:"segment-granularity-handling",level:3},{value:"Query granularity handling",id:"query-granularity-handling",level:3},{value:"Dimension handling",id:"dimension-handling",level:3},{value:"Rollup",id:"rollup",level:3},{value:"Setting up manual compaction",id:"setting-up-manual-compaction",level:2},{value:"Example compaction task",id:"example-compaction-task",level:3},{value:"Compaction I/O configuration",id:"compaction-io-configuration",level:3},{value:"Interval <code>inputSpec</code>",id:"interval-inputspec",level:4},{value:"Segments <code>inputSpec</code>",id:"segments-inputspec",level:4},{value:"Compaction dimensions spec",id:"compaction-dimensions-spec",level:3},{value:"Compaction transform spec",id:"compaction-transform-spec",level:3},{value:"Compaction granularity spec",id:"compaction-granularity-spec",level:3},{value:"Learn more",id:"learn-more",level:2}],u={toc:c},d="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Query performance in Apache Druid depends on optimally sized segments. Compaction is one strategy you can use to optimize segment size for your Druid database. Compaction tasks read an existing set of segments for a given time interval and combine the data into a new "compacted" set of segments. In some cases the compacted segments are larger, but there are fewer of them. In other cases the compacted segments may be smaller. Compaction tends to increase performance because optimized segments require less per-segment processing and less memory overhead for ingestion and for querying paths.'),(0,r.kt)("h2",{id:"compaction-strategies"},"Compaction strategies"),(0,r.kt)("p",null,"There are several cases to consider compaction for segment optimization:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With streaming ingestion, data can arrive out of chronological order creating many small segments."),(0,r.kt)("li",{parentName:"ul"},"If you append data using ",(0,r.kt)("inlineCode",{parentName:"li"},"appendToExisting")," for ",(0,r.kt)("a",{parentName:"li",href:"/docs/26.0.0/ingestion/native-batch"},"native batch")," ingestion creating suboptimal segments."),(0,r.kt)("li",{parentName:"ul"},"When you use ",(0,r.kt)("inlineCode",{parentName:"li"},"index_parallel")," for parallel batch indexing and the parallel ingestion tasks create many small segments."),(0,r.kt)("li",{parentName:"ul"},"When a misconfigured ingestion task creates oversized segments.")),(0,r.kt)("p",null,"By default, compaction does not modify the underlying data of the segments. However, there are cases when you may want to modify data during compaction to improve query performance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If, after ingestion, you realize that data for the time interval is sparse, you can use compaction to increase the segment granularity."),(0,r.kt)("li",{parentName:"ul"},"If you don't need fine-grained granularity for older data, you can use compaction to change older segments to a coarser query granularity. For example, from ",(0,r.kt)("inlineCode",{parentName:"li"},"minute")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"hour")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"hour")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"day"),". This reduces the storage space required for older data."),(0,r.kt)("li",{parentName:"ul"},"You can change the dimension order to improve sorting and reduce segment size."),(0,r.kt)("li",{parentName:"ul"},"You can remove unused columns in compaction or implement an aggregation metric for older data."),(0,r.kt)("li",{parentName:"ul"},"You can change segment rollup from dynamic partitioning with best-effort rollup to hash or range partitioning with perfect rollup. For more information on rollup, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/26.0.0/ingestion/rollup#perfect-rollup-vs-best-effort-rollup"},"perfect vs best-effort rollup"),".")),(0,r.kt)("p",null,"Compaction does not improve performance in all situations. For example, if you rewrite your data with each ingestion task, you don't need to use compaction. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/segment-optimization"},"Segment optimization")," for additional guidance to determine if compaction will help in your environment."),(0,r.kt)("h2",{id:"types-of-compaction"},"Types of compaction"),(0,r.kt)("p",null,"You can configure the Druid Coordinator to perform automatic compaction, also called auto-compaction, for a datasource. Using its ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/coordinator#segment-search-policy-in-automatic-compaction"},"segment search policy"),", the Coordinator periodically identifies segments for compaction starting from newest to oldest. When the Coordinator discovers segments that have not been compacted or segments that were compacted with a different or changed spec, it submits compaction tasks for the time interval covering those segments."),(0,r.kt)("p",null,"Automatic compaction works in most use cases and should be your first option. To learn more, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/data-management/automatic-compaction"},"Automatic compaction"),"."),(0,r.kt)("p",null,"In cases where you require more control over compaction, you can manually submit compaction tasks. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic compaction is running into the limit of task slots available to it, so tasks are waiting for previous automatic compaction tasks to complete. Manual compaction can use all available task slots, therefore you can complete compaction more quickly by submitting more concurrent tasks for more intervals."),(0,r.kt)("li",{parentName:"ul"},"You want to force compaction for a specific time range or you want to compact data out of chronological order.")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#setting-up-manual-compaction"},"Setting up a manual compaction task")," for more about manual compaction tasks."),(0,r.kt)("h2",{id:"data-handling-with-compaction"},"Data handling with compaction"),(0,r.kt)("p",null,"During compaction, Druid overwrites the original set of segments with the compacted set. Druid also locks the segments for the time interval being compacted to ensure data consistency. By default, compaction tasks do not modify the underlying data. You can configure the compaction task to change the query granularity or add or remove dimensions in the compaction task. This means that the only changes to query results should be the result of intentional, not automatic, changes."),(0,r.kt)("p",null,"You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"dropExisting")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ioConfig"),' to "true" in the compaction task to configure Druid to replace all existing segments fully contained by the interval. See the suggestion for reindexing with finer granularity under ',(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/ingestion/native-batch#implementation-considerations"},"Implementation considerations")," for an example."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"WARNING: ",(0,r.kt)("inlineCode",{parentName:"p"},"dropExisting")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ioConfig")," is a beta feature.")),(0,r.kt)("p",null,"If an ingestion task needs to write data to a segment for a time interval locked for compaction, by default the ingestion task supersedes the compaction task and the compaction task fails without finishing. For manual compaction tasks, you can adjust the input spec interval to avoid conflicts between ingestion and compaction. For automatic compaction, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"skipOffsetFromLatest")," key to adjust the auto-compaction starting point from the current time to reduce the chance of conflicts between ingestion and compaction.\nAnother option is to set the compaction task to higher priority than the ingestion task.\nFor more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/data-management/automatic-compaction#avoid-conflicts-with-ingestion"},"Avoid conflicts with ingestion"),"."),(0,r.kt)("h3",{id:"segment-granularity-handling"},"Segment granularity handling"),(0,r.kt)("p",null,"Unless you modify the segment granularity in ",(0,r.kt)("a",{parentName:"p",href:"#compaction-granularity-spec"},(0,r.kt)("inlineCode",{parentName:"a"},"granularitySpec")),", Druid attempts to retain the granularity for the compacted segments. When segments have different segment granularities with no overlap in interval Druid creates a separate compaction task for each to retain the segment granularity in the compacted segment."),(0,r.kt)("p",null,"If segments have different segment granularities before compaction but there is some overlap in interval, Druid attempts find start and end of the overlapping interval and uses the closest segment granularity level for the compacted segment."),(0,r.kt)("p",null,'For example consider two overlapping segments: segment "A" for the interval 01/01/2021-01/02/2021 with day granularity and segment "B" for the interval 01/01/2021-02/01/2021. Druid attempts to combine and compact the overlapped segments. In this example, the earliest start time for the two segments is 01/01/2020 and the latest end time of the two segments is 02/01/2020. Druid compacts the segments together even though they have different segment granularity. Druid uses month segment granularity for the newly compacted segment even though segment A\'s original segment granularity was DAY.'),(0,r.kt)("h3",{id:"query-granularity-handling"},"Query granularity handling"),(0,r.kt)("p",null,"Unless you modify the query granularity in the ",(0,r.kt)("a",{parentName:"p",href:"#compaction-granularity-spec"},(0,r.kt)("inlineCode",{parentName:"a"},"granularitySpec")),", Druid retains the query granularity for the compacted segments. If segments have different query granularities before compaction, Druid chooses the finest level of granularity for the resulting compacted segment. For example if a compaction task combines two segments, one with day query granularity and one with minute query granularity, the resulting segment uses minute query granularity."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In Apache Druid 0.21.0 and prior, Druid sets the granularity for compacted segments to the default granularity of ",(0,r.kt)("inlineCode",{parentName:"p"},"NONE")," regardless of the query granularity of the original segments.")),(0,r.kt)("p",null,"If you configure query granularity in compaction to go from a finer granularity like month to a coarser query granularity like year, then Druid overshadows the original segment with coarser granularity. Because the new segments have a coarser granularity, running a kill task to remove the overshadowed segments for those intervals will cause you to permanently lose the finer granularity data."),(0,r.kt)("h3",{id:"dimension-handling"},"Dimension handling"),(0,r.kt)("p",null,"Apache Druid supports schema changes. Therefore, dimensions can be different across segments even if they are a part of the same datasource. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/segments#segments-with-different-schemas"},"Segments with different schemas"),". If the input segments have different dimensions, the resulting compacted segment includes all dimensions of the input segments."),(0,r.kt)("p",null,"Even when the input segments have the same set of dimensions, the dimension order or the data type of dimensions can be different. The dimensions of recent segments precede that of old segments in terms of data types and the ordering because more recent segments are more likely to have the preferred order and data types."),(0,r.kt)("p",null,"If you want to control dimension ordering or ensure specific values for dimension types, you can configure a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," in the compaction task spec."),(0,r.kt)("h3",{id:"rollup"},"Rollup"),(0,r.kt)("p",null,"Druid only rolls up the output segment when ",(0,r.kt)("inlineCode",{parentName:"p"},"rollup")," is set for all input segments.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/ingestion/rollup"},"Roll-up")," for more details.\nYou can check that your segments are rolled up or not by using ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/segmentmetadataquery#analysistypes"},"Segment Metadata Queries"),"."),(0,r.kt)("h2",{id:"setting-up-manual-compaction"},"Setting up manual compaction"),(0,r.kt)("p",null,"To perform a manual compaction, you submit a compaction task. Compaction tasks merge all segments for the defined interval according to the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "compact",\n    "id": <task_id>,\n    "dataSource": <task_datasource>,\n    "ioConfig": <IO config>,\n    "dimensionsSpec": <custom dimensionsSpec>,\n    "transformSpec": <custom transformSpec>,\n    "metricsSpec": <custom metricsSpec>,\n    "tuningConfig": <parallel indexing task tuningConfig>,\n    "granularitySpec": <compaction task granularitySpec>,\n    "context": <task context>\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Task type. Set the value to ",(0,r.kt)("inlineCode",{parentName:"td"},"compact"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"Task ID"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dataSource")),(0,r.kt)("td",{parentName:"tr",align:null},"Data source name to compact"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ioConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"I/O configuration for compaction task. See ",(0,r.kt)("a",{parentName:"td",href:"#compaction-io-configuration"},"Compaction I/O configuration")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dimensionsSpec")),(0,r.kt)("td",{parentName:"tr",align:null},"When set, the compaction task uses the specified ",(0,r.kt)("inlineCode",{parentName:"td"},"dimensionsSpec")," rather than generating one from existing segments. See ",(0,r.kt)("a",{parentName:"td",href:"#compaction-dimensions-spec"},"Compaction dimensionsSpec")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transformSpec")),(0,r.kt)("td",{parentName:"tr",align:null},"When set, the compaction task uses the specified ",(0,r.kt)("inlineCode",{parentName:"td"},"transformSpec")," rather than using ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),". See ",(0,r.kt)("a",{parentName:"td",href:"#compaction-transform-spec"},"Compaction transformSpec")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metricsSpec")),(0,r.kt)("td",{parentName:"tr",align:null},"When set, the compaction task uses the specified ",(0,r.kt)("inlineCode",{parentName:"td"},"metricsSpec")," rather than generating one from existing segments."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"segmentGranularity")),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"granularitySpec"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tuningConfig")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/26.0.0/ingestion/native-batch#tuningconfig"},"Tuning configuration")," for parallel indexing. ",(0,r.kt)("inlineCode",{parentName:"td"},"awaitSegmentAvailabilityTimeoutMillis")," value is not supported for compaction tasks. Leave this parameter at the default value, 0."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"granularitySpec")),(0,r.kt)("td",{parentName:"tr",align:null},"When set, the compaction task uses the specified ",(0,r.kt)("inlineCode",{parentName:"td"},"granularitySpec")," rather than generating one from existing segments. See ",(0,r.kt)("a",{parentName:"td",href:"#compaction-granularity-spec"},"Compaction ",(0,r.kt)("inlineCode",{parentName:"a"},"granularitySpec"))," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/26.0.0/ingestion/tasks#context"},"Task context")),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Use ",(0,r.kt)("inlineCode",{parentName:"p"},"granularitySpec")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"segmentGranularity")," and only set one of these values. If you specify different values for these in the same compaction spec, the task fails.")),(0,r.kt)("p",null,"To control the number of result segments per time chunk, you can set ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/ingestion/native-batch#partitionsspec"},(0,r.kt)("inlineCode",{parentName:"a"},"maxRowsPerSegment"))," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/ingestion/native-batch#tuningconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"numShards")),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can run multiple compaction tasks in parallel. For example, if you want to compact the data for a year, you are not limited to running a single task for the entire year. You can run 12 compaction tasks with month-long intervals.")),(0,r.kt)("p",null,"A compaction task internally generates an ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"index_parallel")," task spec for performing compaction work with some fixed parameters. For example, its ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSource")," is always the ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/ingestion/native-batch-input-sources"},(0,r.kt)("inlineCode",{parentName:"a"},"druid")," input source"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"metricsSpec")," include all dimensions and metrics of the input segments by default."),(0,r.kt)("p",null,"Compaction tasks fetch all ",(0,r.kt)("a",{parentName:"p",href:"#compaction-io-configuration"},"relevant segments")," prior to launching any subtasks, ",(0,r.kt)("em",{parentName:"p"},"unless")," the following items are all set. It is strongly recommended to set all of these items to maximize performance and minimize disk usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"compact")," task:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#compaction-granularity-spec"},(0,r.kt)("inlineCode",{parentName:"a"},"granularitySpec")),". All three values must be set to non-null values: ",(0,r.kt)("inlineCode",{parentName:"li"},"segmentGranularity"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"queryGranularity"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"rollup"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#compaction-dimensions-spec"},(0,r.kt)("inlineCode",{parentName:"a"},"dimensionsSpec"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metricsSpec"))),(0,r.kt)("p",null,"Compaction tasks exit without doing anything and issue a failure status code in either of the following cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the interval you specify has no data segments loaded."),(0,r.kt)("li",{parentName:"ul"},"If the interval you specify is empty.")),(0,r.kt)("p",null,"Note that the metadata between input segments and the resulting compacted segments may differ if the metadata among the input segments differs as well. If all input segments have the same metadata, however, the resulting output segment will have the same metadata as all input segments."),(0,r.kt)("h3",{id:"example-compaction-task"},"Example compaction task"),(0,r.kt)("p",null,"The following JSON illustrates a compaction task to compact ",(0,r.kt)("em",{parentName:"p"},"all segments")," within the interval ",(0,r.kt)("inlineCode",{parentName:"p"},"2020-01-01/2021-01-01")," and create new segments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "compact",\n  "dataSource": "wikipedia",\n  "ioConfig": {\n    "type": "compact",\n    "inputSpec": {\n      "type": "interval",\n      "interval": "2020-01-01/2021-01-01"\n    }\n  },\n  "granularitySpec": {\n    "segmentGranularity": "day",\n    "queryGranularity": "hour"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"granularitySpec")," is an optional field.\nIf you don't specify ",(0,r.kt)("inlineCode",{parentName:"p"},"granularitySpec"),", Druid retains the original segment and query granularities when compaction is complete."),(0,r.kt)("h3",{id:"compaction-io-configuration"},"Compaction I/O configuration"),(0,r.kt)("p",null,"The compaction ",(0,r.kt)("inlineCode",{parentName:"p"},"ioConfig")," requires specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSpec")," as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Task type. Set the value to ",(0,r.kt)("inlineCode",{parentName:"td"},"compact"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inputSpec")),(0,r.kt)("td",{parentName:"tr",align:null},"Specification of the target ",(0,r.kt)("a",{parentName:"td",href:"#interval-inputspec"},"intervals")," or ",(0,r.kt)("a",{parentName:"td",href:"#segments-inputspec"},"segments"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropExisting")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the task replaces all existing segments fully contained by either of the following:",(0,r.kt)("br",null),"- the ",(0,r.kt)("inlineCode",{parentName:"td"},"interval")," in the ",(0,r.kt)("inlineCode",{parentName:"td"},"interval")," type ",(0,r.kt)("inlineCode",{parentName:"td"},"inputSpec"),".",(0,r.kt)("br",null),"- the umbrella interval of the ",(0,r.kt)("inlineCode",{parentName:"td"},"segments")," in the ",(0,r.kt)("inlineCode",{parentName:"td"},"segment")," type ",(0,r.kt)("inlineCode",{parentName:"td"},"inputSpec"),".",(0,r.kt)("br",null),"If compaction fails, Druid does not change any of the existing segments.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"WARNING"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"dropExisting")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"ioConfig")," is a beta feature."),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"Druid supports two supported ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSpec")," formats:"),(0,r.kt)("h4",{id:"interval-inputspec"},"Interval ",(0,r.kt)("inlineCode",{parentName:"h4"},"inputSpec")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Task type. Set the value to ",(0,r.kt)("inlineCode",{parentName:"td"},"interval"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"interval")),(0,r.kt)("td",{parentName:"tr",align:null},"Interval to compact."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h4",{id:"segments-inputspec"},"Segments ",(0,r.kt)("inlineCode",{parentName:"h4"},"inputSpec")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Task type. Set the value to ",(0,r.kt)("inlineCode",{parentName:"td"},"segments"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"segments")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of segment IDs."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"compaction-dimensions-spec"},"Compaction dimensions spec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dimensions")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of dimension names or objects. Cannot have the same column in both ",(0,r.kt)("inlineCode",{parentName:"td"},"dimensions")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"dimensionExclusions"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),", which preserves the original dimensions."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dimensionExclusions")),(0,r.kt)("td",{parentName:"tr",align:null},"The names of dimensions to exclude from compaction. Only names are supported here, not objects. This list is only used if the dimensions list is null or empty; otherwise it is ignored. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"compaction-transform-spec"},"Compaction transform spec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filter")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"filter")," conditionally filters input rows during compaction. Only rows that pass the filter will be included in the compacted segments. Any of Druid's standard ",(0,r.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/filters"},"query filters")," can be used. Defaults to 'null', which will not filter any row."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"compaction-granularity-spec"},"Compaction granularity spec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"segmentGranularity")),(0,r.kt)("td",{parentName:"tr",align:null},"Time chunking period for the segment granularity. Defaults to 'null', which preserves the original segment granularity. Accepts all ",(0,r.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/granularities"},"Query granularity")," values."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"queryGranularity")),(0,r.kt)("td",{parentName:"tr",align:null},"The resolution of timestamp storage within each segment. Defaults to 'null', which preserves the original query granularity. Accepts all ",(0,r.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/granularities"},"Query granularity")," values."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rollup")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables compaction-time rollup. To preserve the original setting, keep the default value. To enable compaction-time rollup, set the value to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". Once the data is rolled up, you can no longer recover individual records."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"See the following topics for more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/26.0.0/operations/segment-optimization"},"Segment optimization")," for guidance to determine if compaction will help in your case."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/26.0.0/data-management/automatic-compaction"},"Automatic compaction")," for how to enable and configure automatic compaction.")))}g.isMDXComponent=!0}}]);