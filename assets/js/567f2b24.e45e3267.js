"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={layout:"doc_page",title:"Indexer Process"},l=void 0,d={unversionedId:"design/indexer",id:"design/indexer",title:"Indexer Process",description:"\x3c!--",source:"@site/docs/latest/design/indexer.md",sourceDirName:"design",slug:"/design/indexer",permalink:"/docs/latest/design/indexer",draft:!1,tags:[],version:"current",frontMatter:{layout:"doc_page",title:"Indexer Process"}},p={},u=[{value:"Configuration",id:"configuration",level:3},{value:"HTTP endpoints",id:"http-endpoints",level:3},{value:"Running",id:"running",level:3},{value:"Task resource sharing",id:"task-resource-sharing",level:3},{value:"Query resources",id:"query-resources",level:4},{value:"Server HTTP threads",id:"server-http-threads",level:4},{value:"Memory sharing",id:"memory-sharing",level:4},{value:"Concurrent segment persist/merge limits",id:"concurrent-segment-persistmerge-limits",level:4},{value:"Current limitations",id:"current-limitations",level:3}],c={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Indexer is an optional and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/experimental"},"experimental")," feature.\nIts memory management system is still under development and will be significantly enhanced in later releases. ")),(0,i.kt)("p",null,"The Apache Druid Indexer process is an alternative to the MiddleManager + Peon task execution system. Instead of forking a separate JVM process per-task, the Indexer runs tasks as separate threads within a single JVM process."),(0,i.kt)("p",null,"The Indexer is designed to be easier to configure and deploy compared to the MiddleManager + Peon system and to better enable resource sharing across tasks."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For Apache Druid Indexer Process Configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#indexer"},"Indexer Configuration"),"."),(0,i.kt)("h3",{id:"http-endpoints"},"HTTP endpoints"),(0,i.kt)("p",null,"The Indexer process shares the same HTTP endpoints as the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/api-reference#middlemanager"},"MiddleManager"),"."),(0,i.kt)("h3",{id:"running"},"Running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server indexer\n")),(0,i.kt)("h3",{id:"task-resource-sharing"},"Task resource sharing"),(0,i.kt)("p",null,"The following resources are shared across all tasks running inside an Indexer process."),(0,i.kt)("h4",{id:"query-resources"},"Query resources"),(0,i.kt)("p",null,"The query processing threads and buffers are shared across all tasks. The Indexer will serve queries from a single endpoint shared by all tasks."),(0,i.kt)("p",null,"If ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#indexer-caching"},"query caching")," is enabled, the query cache is also shared across all tasks."),(0,i.kt)("h4",{id:"server-http-threads"},"Server HTTP threads"),(0,i.kt)("p",null,"The Indexer maintains two equally sized pools of HTTP threads. "),(0,i.kt)("p",null,'One pool is exclusively used for task control messages between the Overlord and the Indexer ("chat handler threads"). The other pool is used for handling all other HTTP requests.'),(0,i.kt)("p",null,"The size of the pools are configured by the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.server.http.numThreads")," configuration (e.g., if this is set to 10, there will be 10 chat handler threads and 10 non-chat handler threads)."),(0,i.kt)("p",null,"In addition to these two pools, 2 separate threads are allocated for lookup handling. If lookups are not used, these threads will not be used."),(0,i.kt)("h4",{id:"memory-sharing"},"Memory sharing"),(0,i.kt)("p",null,"The Indexer uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.globalIngestionHeapLimitBytes")," configuration to impose a global heap limit across all of the tasks it is running. "),(0,i.kt)("p",null,"This global limit is evenly divided across the number of task slots configured by ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.capacity"),"."),(0,i.kt)("p",null,"To apply the per-task heap limit, the Indexer will override ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," in task tuning configs (i.e., ignoring the default value or any user configured value). ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRowsInMemory")," will also be overridden to an essentially unlimited value: the Indexer does not support row limits."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.globalIngestionHeapLimitBytes")," is set to 1/6th of the available JVM heap. This default is chosen to align with the default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," in task tuning configs when using the MiddleManager/Peon system, which is also 1/6th of the JVM heap."),(0,i.kt)("p",null,"The peak usage for rows held in heap memory relates to the interaction between the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPendingPersists")," properties in the task tuning configs. When the amount of row data held in-heap by a task reaches the limit specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory"),", a task will persist the in-heap row data. After the persist has been started, the task can again ingest up to ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," bytes worth of row data while the persist is running."),(0,i.kt)("p",null,"This means that the peak in-heap usage for row data can be up to approximately ",(0,i.kt)("inlineCode",{parentName:"p"},"maxBytesInMemory")," * (2 + ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPendingPersists"),"). The default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"maxPendingPersists")," is 0, which allows for 1 persist to run concurrently with ingestion work."),(0,i.kt)("p",null,"The remaining portion of the heap is reserved for query processing and segment persist/merge operations, and miscellaneous heap usage."),(0,i.kt)("h4",{id:"concurrent-segment-persistmerge-limits"},"Concurrent segment persist/merge limits"),(0,i.kt)("p",null,"To help reduce peak memory usage, the Indexer imposes a limit on the number of concurrent segment persist/merge operations across all running tasks."),(0,i.kt)("p",null,"By default, the number of concurrent persist/merge operations is limited to (",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.capacity")," / 2), rounded down. This limit can be configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.worker.numConcurrentMerges")," property."),(0,i.kt)("h3",{id:"current-limitations"},"Current limitations"),(0,i.kt)("p",null,"Separate task logs are not currently supported when using the Indexer; all task log messages will instead be logged in the Indexer process log."),(0,i.kt)("p",null,"The Indexer currently imposes an identical memory limit on each task. In later releases, the per-task memory limit will be removed and only the global limit will apply. The limit on concurrent merges will also be removed."),(0,i.kt)("p",null,"In later releases, per-task memory usage will be dynamically managed. Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/issues/7900"},"https://github.com/apache/druid/issues/7900")," for details on future enhancements to the Indexer."))}m.isMDXComponent=!0}}]);