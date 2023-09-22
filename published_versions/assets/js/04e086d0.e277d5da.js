"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2402],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,g=h["".concat(c,".").concat(m)]||h[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"caching",title:"Query caching",description:"Describes Apache Druid per-segment and whole-query cache types. Identifies services where you can enable caching and suggestions for caching strategy."},c=void 0,l={unversionedId:"querying/caching",id:"querying/caching",title:"Query caching",description:"Describes Apache Druid per-segment and whole-query cache types. Identifies services where you can enable caching and suggestions for caching strategy.",source:"@site/docs/26.0.0/querying/caching.md",sourceDirName:"querying",slug:"/querying/caching",permalink:"/docs/26.0.0/querying/caching",draft:!1,tags:[],version:"current",frontMatter:{id:"caching",title:"Query caching",description:"Describes Apache Druid per-segment and whole-query cache types. Identifies services where you can enable caching and suggestions for caching strategy."},sidebar:"docs",previous:{title:"Multitenancy",permalink:"/docs/26.0.0/querying/multitenancy"},next:{title:"Using query caching",permalink:"/docs/26.0.0/querying/using-caching"}},u={},h=[{value:"Cache types",id:"cache-types",level:2},{value:"Per-segment caching",id:"per-segment-caching",level:3},{value:"Whole-query caching",id:"whole-query-caching",level:3},{value:"Where to enable caching",id:"where-to-enable-caching",level:2},{value:"Performance considerations for caching",id:"performance-considerations-for-caching",level:2},{value:"Scenarios where caching does not increase query performance",id:"scenarios-where-caching-does-not-increase-query-performance",level:3},{value:"Learn more",id:"learn-more",level:2}],p={toc:h},m="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can enable caching in Apache Druid to improve query times for frequently accessed data. This topic defines the different types of caching for Druid. It describes the default caching behavior and provides guidance and examples to help you hone your caching strategy."),(0,i.kt)("p",null,"If you're unfamiliar with Druid architecture, review the following topics before proceeding with caching:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/architecture"},"Druid Design")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/segments"},"Segments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/query-execution"},"Query execution"))),(0,i.kt)("p",null,"For instructions to configure query caching see ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/using-caching"},"Using query caching"),"."),(0,i.kt)("p",null,"Cache monitoring, including the hit rate and number of evictions, is available in ",(0,i.kt)("a",{parentName:"p",href:"../operations/metrics.html#cache"},"Druid metrics"),"."),(0,i.kt)("p",null,"Query-level caching is in addition to ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/historical"},"data-level caching")," on Historicals."),(0,i.kt)("h2",{id:"cache-types"},"Cache types"),(0,i.kt)("p",null,"Druid supports two types of query caching:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#per-segment-caching"},"Per-segment caching")," stores partial query results for a specific segment. It is enabled by default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#whole-query-caching"},"Whole-query caching")," stores final query results.")),(0,i.kt)("p",null,"Druid invalidates any cache the moment any underlying data change to avoid returning stale results. This is especially important for ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," datasources that have highly-variable underlying data segments, including real-time data segments."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Druid can store cache data on the local JVM heap or in an external distributed key/value store (e.g. memcached)")),(0,i.kt)("p",{parentName:"blockquote"},"The default is a local cache based upon ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ben-manes/caffeine"},"Caffeine"),". The default maximum cache storage size is the minimum of 1 GiB / ten percent of maximum runtime memory for the JVM, with no cache expiration. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/#cache-configuration"},"Cache configuration")," for information on how to configure cache storage.  When using caffeine, the cache is inside the JVM heap and is directly measurable.  Heap usage will grow up to the maximum configured size, and then the least recently used segment results will be evicted and replaced with newer results.")),(0,i.kt)("h3",{id:"per-segment-caching"},"Per-segment caching"),(0,i.kt)("p",null,"The primary form of caching in Druid is a ",(0,i.kt)("em",{parentName:"p"},"per-segment results cache"),".  This cache stores partial query results on a per-segment basis and is enabled on Historical services by default."),(0,i.kt)("p",null,"The per-segment results cache allows Druid to maintain a low-eviction-rate cache for segments that do not change, especially important for those segments that ",(0,i.kt)("a",{parentName:"p",href:"../design/historical.html"},"historical")," processes pull into their local ",(0,i.kt)("em",{parentName:"p"},"segment cache")," from ",(0,i.kt)("a",{parentName:"p",href:"../dependencies/deep-storage.html"},"deep storage"),". Real-time segments, on the other hand, continue to have results computed at query time."),(0,i.kt)("p",null,"Druid may potentially merge per-segment cached results with the results of later queries that use a similar basic shape with similar filters, aggregations, etc. For example, if the query is identical except that it covers a different time period."),(0,i.kt)("p",null,"Per-segment caching is controlled by the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"useCache")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"populateCache"),"."),(0,i.kt)("p",null,"Use per-segment caching with real-time data. For example, your queries request data actively arriving from Kafka alongside intervals in segments that are loaded on Historicals.  Druid can merge cached results from Historical segments with real-time results from the stream.  ",(0,i.kt)("a",{parentName:"p",href:"#whole-query-caching"},"Whole-query caching"),", on the other hand, is not helpful in this scenario because new data from real-time ingestion will continually invalidate the entire cached result."),(0,i.kt)("h3",{id:"whole-query-caching"},"Whole-query caching"),(0,i.kt)("p",null,"With ",(0,i.kt)("em",{parentName:"p"},"whole-query caching"),", Druid caches the entire results of individual queries, meaning the Broker no longer needs to merge per-segment results from data processes."),(0,i.kt)("p",null,"Use ",(0,i.kt)("em",{parentName:"p"},"whole-query caching")," on the Broker to increase query efficiency when there is little risk of ingestion invalidating the cache at a segment level.  This applies particularly, for example, when ",(0,i.kt)("em",{parentName:"p"},"not")," using real-time ingestion.  Perhaps your queries tend to use batch-ingested data, in which case per-segment caching would be less efficient since the underlying segments hardly ever change, yet Druid would continue to acquire per-segment results for each query."),(0,i.kt)("h2",{id:"where-to-enable-caching"},"Where to enable caching"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Per-segment cache")," is available as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On Historicals, the default. Enable segment-level cache population on Historicals for larger production clusters to prevent Brokers from having to merge all query results. When you enable cache population on Historicals instead of Brokers, the Historicals merge their own local results and put less strain on the Brokers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On ingestion tasks in the Peon or Indexer service. Larger production clusters should enable segment-level cache population on task services only to prevent Brokers from having to merge all query results. When you enable cache population on task execution services instead of Brokers, the task execution services to merge their own local results and put less strain on the Brokers."),(0,i.kt)("p",{parentName:"li"},"   Task executor services only support caches that store data locally. For example the ",(0,i.kt)("inlineCode",{parentName:"p"},"caffeine")," cache. This restriction exists because the cache stores results at the level of intermediate partial segments generated by the ingestion tasks. These intermediate partial segments may not be identical across task replicas. Therefore task executor services ignore remote cache types such as ",(0,i.kt)("inlineCode",{parentName:"p"},"memcached"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On Brokers for small production clusters with less than five servers. "))),(0,i.kt)("p",null,"Avoid using per-segment cache at the Broker for large production clusters. When the Broker cache is enabled (",(0,i.kt)("inlineCode",{parentName:"p"},"druid.broker.cache.populateCache")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"populateCache")," ",(0,i.kt)("em",{parentName:"p"},"is not")," ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,i.kt)("a",{parentName:"p",href:"../querying/query-context.html"},"query context"),", individual Historicals will ",(0,i.kt)("em",{parentName:"p"},"not")," merge individual segment-level results, and instead pass these back to the lead Broker.  The Broker must then carry out a large merge from ",(0,i.kt)("em",{parentName:"p"},"all")," segments on its own."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Whole-query cache")," is available exclusively on Brokers."),(0,i.kt)("h2",{id:"performance-considerations-for-caching"},"Performance considerations for caching"),(0,i.kt)("p",null,"Caching enables increased concurrency on the same system, therefore leading to noticeable performance improvements for queries on Druid clusters handling throughput for concurrent, mixed workloads."),(0,i.kt)("p",null,"If you are looking to improve response time for a single query or page load, you should ignore caching. In general, response time for a single task should meet performance objectives even when the cache is cold."),(0,i.kt)("p",null,"During query processing, the per-segment cache intercepts the query and sends the results directly to the Broker. This way the query bypasses the data server processing threads. For queries requiring minimal processing in the Broker, cached queries are very quick. If work done on the Broker causes a query bottleneck, enabling caching results in little noticeable query improvement."),(0,i.kt)("p",null,"The largest performance gains from segment caching tend to apply to ",(0,i.kt)("inlineCode",{parentName:"p"},"topN")," and time series queries. For ",(0,i.kt)("inlineCode",{parentName:"p"},"groupBy")," queries, if the bottleneck is in the merging phase on the broker, the impact is less. The same applies to queries with or without joins."),(0,i.kt)("h3",{id:"scenarios-where-caching-does-not-increase-query-performance"},"Scenarios where caching does not increase query performance"),(0,i.kt)("p",null,"Caching does not solve all types of query performance issues. For each cache type there are scenarios where caching is likely to be of little benefit."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Per-segment caching")," doesn't work for the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"queries containing a sub-query in them. However the output of sub-queries may be cached. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/query-execution"},"Query execution")," for more details on sub-queries execution."),(0,i.kt)("li",{parentName:"ul"},"queries with joins do not support any caching on the broker."),(0,i.kt)("li",{parentName:"ul"},"GroupBy v2 queries do not support any caching on broker."),(0,i.kt)("li",{parentName:"ul"},"queries with ",(0,i.kt)("inlineCode",{parentName:"li"},"bySegment")," set in the query context are not cached on the broker.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Whole-query caching")," doesn't work for the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"queries that involve an inline datasource or a lookup datasource."),(0,i.kt)("li",{parentName:"ul"},"GroupBy v2 queries."),(0,i.kt)("li",{parentName:"ul"},"queries with joins."),(0,i.kt)("li",{parentName:"ul"},"queries with a union datasource.")),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,"See the following topics for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/using-caching"},"Using query caching")," to learn how to configure and use caching."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/architecture"},"Druid Design")," to learn about Druid processes.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/segments"},"Segments")," to learn how Druid stores data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/query-execution"},"Query execution")," to learn how Druid services process query statements.")))}g.isMDXComponent=!0}}]);