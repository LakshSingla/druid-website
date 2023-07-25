"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4523],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=h;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},98082:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={id:"broker",title:"Broker"},c=void 0,l={unversionedId:"design/broker",id:"design/broker",title:"Broker",description:"\x3c!--",source:"@site/docs/26.0.0/design/broker.md",sourceDirName:"design",slug:"/design/broker",permalink:"/docs/26.0.0/design/broker",draft:!1,tags:[],version:"current",frontMatter:{id:"broker",title:"Broker"}},u={},p=[{value:"Configuration",id:"configuration",level:3},{value:"HTTP endpoints",id:"http-endpoints",level:3},{value:"Overview",id:"overview",level:3},{value:"Running",id:"running",level:3},{value:"Forwarding queries",id:"forwarding-queries",level:3},{value:"Caching",id:"caching",level:3}],d={toc:p},h="wrapper";function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)(h,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"For Apache Druid Broker Process Configuration, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/#broker"},"Broker Configuration"),"."),(0,s.kt)("p",null,"For basic tuning guidance for the Broker process, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/basic-cluster-tuning#broker"},"Basic cluster tuning"),"."),(0,s.kt)("h3",{id:"http-endpoints"},"HTTP endpoints"),(0,s.kt)("p",null,"For a list of API endpoints supported by the Broker, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/api-reference#broker"},"Broker API"),"."),(0,s.kt)("h3",{id:"overview"},"Overview"),(0,s.kt)("p",null,"The Broker is the process to route queries to if you want to run a distributed cluster. It understands the metadata published to ZooKeeper about what segments exist on what processes and routes queries such that they hit the right processes. This process also merges the result sets from all of the individual processes together.\nOn start up, Historical processes announce themselves and the segments they are serving in Zookeeper."),(0,s.kt)("h3",{id:"running"},"Running"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server broker\n")),(0,s.kt)("h3",{id:"forwarding-queries"},"Forwarding queries"),(0,s.kt)("p",null,"Most Druid queries contain an interval object that indicates a span of time for which data is requested. Likewise, Druid ",(0,s.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/segments"},"Segments")," are partitioned to contain data for some interval of time and segments are distributed across a cluster. Consider a simple datasource with 7 segments where each segment contains data for a given day of the week. Any query issued to the datasource for more than one day of data will hit more than one segment. These segments will likely be distributed across multiple processes, and hence, the query will likely hit multiple processes."),(0,s.kt)("p",null,"To determine which processes to forward queries to, the Broker process first builds a view of the world from information in Zookeeper. Zookeeper maintains information about ",(0,s.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/historical"},"Historical")," and streaming ingestion ",(0,s.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/peons"},"Peon")," processes and the segments they are serving. For every datasource in Zookeeper, the Broker process builds a timeline of segments and the processes that serve them. When queries are received for a specific datasource and interval, the Broker process performs a lookup into the timeline associated with the query datasource for the query interval and retrieves the processes that contain data for the query. The Broker process then forwards down the query to the selected processes."),(0,s.kt)("h3",{id:"caching"},"Caching"),(0,s.kt)("p",null,"Broker processes employ a cache with an LRU cache invalidation strategy. The Broker cache stores per-segment results. The cache can be local to each Broker process or shared across multiple processes using an external distributed cache such as ",(0,s.kt)("a",{parentName:"p",href:"http://memcached.org/"},"memcached"),". Each time a broker process receives a query, it first maps the query to a set of segments. A subset of these segment results may already exist in the cache and the results can be directly pulled from the cache. For any segment results that do not exist in the cache, the broker process will forward the query to the\nHistorical processes. Once the Historical processes return their results, the Broker will store those results in the cache. Real-time segments are never cached and hence requests for real-time data will always be forwarded to real-time processes. Real-time data is perpetually changing and caching the results would be unreliable."))}f.isMDXComponent=!0}}]);