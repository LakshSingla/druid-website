"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6296],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var s=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,s,o=function(e,r){if(null==e)return{};var t,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=s.createContext({}),d=function(e){var r=s.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},c=function(e){var r=d(e.components);return s.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},h=s.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),h=o,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return t?s.createElement(g,n(n({ref:r},c),{},{components:t})):s.createElement(g,n({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,n=new Array(a);n[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:o,n[1]=i;for(var d=2;d<a;d++)n[d]=t[d];return s.createElement.apply(null,n)}return s.createElement.apply(null,t)}h.displayName="MDXCreateElement"},59382:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var s=t(87462),o=t(63366),a=(t(67294),t(3905)),n=["components"],i={id:"processes",title:"Processes and servers"},l=void 0,d={unversionedId:"design/processes",id:"design/processes",title:"Processes and servers",description:"\x3c!--",source:"@site/docs/26.0.0/design/processes.md",sourceDirName:"design",slug:"/design/processes",permalink:"/docs/26.0.0/design/processes",draft:!1,tags:[],version:"current",frontMatter:{id:"processes",title:"Processes and servers"},sidebar:"docs",previous:{title:"Segments",permalink:"/docs/26.0.0/design/segments"},next:{title:"Deep storage",permalink:"/docs/26.0.0/dependencies/deep-storage"}},c={},p=[{value:"Process types",id:"process-types",level:2},{value:"Server types",id:"server-types",level:2},{value:"Master server",id:"master-server",level:3},{value:"Coordinator process",id:"coordinator-process",level:4},{value:"Overlord process",id:"overlord-process",level:4},{value:"Query server",id:"query-server",level:3},{value:"Broker process",id:"broker-process",level:4},{value:"Router process (optional)",id:"router-process-optional",level:4},{value:"Data server",id:"data-server",level:3},{value:"Historical process",id:"historical-process",level:3},{value:"Middle Manager process",id:"middle-manager-process",level:3},{value:"Peon processes",id:"peon-processes",level:4},{value:"Indexer process (optional)",id:"indexer-process-optional",level:3},{value:"Pros and cons of colocation",id:"pros-and-cons-of-colocation",level:2},{value:"Coordinators and Overlords",id:"coordinators-and-overlords",level:3},{value:"Unified Process",id:"unified-process",level:4},{value:"Historicals and MiddleManagers",id:"historicals-and-middlemanagers",level:3}],u={toc:p},h="wrapper";function g(e){var r=e.components,i=(0,o.Z)(e,n);return(0,a.kt)(h,(0,s.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"process-types"},"Process types"),(0,a.kt)("p",null,"Druid has several process types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/coordinator"},"Coordinator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/overlord"},"Overlord")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/broker"},"Broker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/historical"},"Historical")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/middlemanager"},"MiddleManager")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/peons"},"Peons")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/indexer"},"Indexer (Optional)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/26.0.0/design/router"},"Router (Optional)"))),(0,a.kt)("h2",{id:"server-types"},"Server types"),(0,a.kt)("p",null,"Druid processes can be deployed any way you like, but for ease of deployment we suggest organizing them into three server types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Master")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Query")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(90685).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"This section describes the Druid processes and the suggested Master/Query/Data server organization, as shown in the architecture diagram above."),(0,a.kt)("h3",{id:"master-server"},"Master server"),(0,a.kt)("p",null,'A Master server manages data ingestion and availability: it is responsible for starting new ingestion jobs and coordinating availability of data on the "Data servers" described below.'),(0,a.kt)("p",null,"Within a Master server, functionality is split between two processes, the Coordinator and Overlord."),(0,a.kt)("h4",{id:"coordinator-process"},"Coordinator process"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/coordinator"},(0,a.kt)("strong",{parentName:"a"},"Coordinator"))," processes watch over the Historical processes on the Data servers. They are responsible for assigning segments to specific servers, and for ensuring segments are well-balanced across Historicals."),(0,a.kt)("h4",{id:"overlord-process"},"Overlord process"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/overlord"},(0,a.kt)("strong",{parentName:"a"},"Overlord"))," processes watch over the MiddleManager processes on the Data servers and are the controllers of data ingestion into Druid. They are responsible for assigning ingestion tasks to MiddleManagers and for coordinating segment publishing."),(0,a.kt)("h3",{id:"query-server"},"Query server"),(0,a.kt)("p",null,"A Query server provides the endpoints that users and client applications interact with, routing queries to Data servers or other Query servers (and optionally proxied Master server requests as well)."),(0,a.kt)("p",null,"Within a Query server, functionality is split between two processes, the Broker and Router."),(0,a.kt)("h4",{id:"broker-process"},"Broker process"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/broker"},(0,a.kt)("strong",{parentName:"a"},"Broker"))," processes receive queries from external clients and forward those queries to Data servers. When Brokers receive results from those subqueries, they merge those results and return them to the\ncaller. End users typically query Brokers rather than querying Historicals or MiddleManagers processes on Data servers directly."),(0,a.kt)("h4",{id:"router-process-optional"},"Router process (optional)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/router"},(0,a.kt)("strong",{parentName:"a"},"Router"))," processes are ",(0,a.kt)("em",{parentName:"p"},"optional")," processes that provide a unified API gateway in front of Druid Brokers,\nOverlords, and Coordinators. They are optional since you can also simply contact the Druid Brokers, Overlords, and\nCoordinators directly."),(0,a.kt)("p",null,"The Router also runs the ",(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/web-console"},"web console"),", a management UI for datasources, segments, tasks, data processes (Historicals and MiddleManagers), and coordinator dynamic configuration. The user can also run SQL and native Druid queries within the console."),(0,a.kt)("h3",{id:"data-server"},"Data server"),(0,a.kt)("p",null,"A Data server executes ingestion jobs and stores queryable data."),(0,a.kt)("p",null,"Within a Data server, functionality is split between two processes, the Historical and MiddleManager."),(0,a.kt)("h3",{id:"historical-process"},"Historical process"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/historical"},(0,a.kt)("strong",{parentName:"a"},"Historical")),' processes are the workhorses that handle storage and querying on "historical" data\n(including any streaming data that has been in the system long enough to be committed). Historical processes\ndownload segments from deep storage and respond to queries about these segments. They don\'t accept writes.'),(0,a.kt)("h3",{id:"middle-manager-process"},"Middle Manager process"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/middlemanager"},(0,a.kt)("strong",{parentName:"a"},"MiddleManager"))," processes handle ingestion of new data into the cluster. They are responsible\nfor reading from external data sources and publishing new Druid segments."),(0,a.kt)("h4",{id:"peon-processes"},"Peon processes"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/peons"},(0,a.kt)("strong",{parentName:"a"},"Peon"))," processes are task execution engines spawned by MiddleManagers. Each Peon runs a separate JVM and is responsible for executing a single task. Peons always run on the same host as the MiddleManager that spawned them."),(0,a.kt)("h3",{id:"indexer-process-optional"},"Indexer process (optional)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/indexer"},(0,a.kt)("strong",{parentName:"a"},"Indexer"))," processes are an alternative to MiddleManagers and Peons. Instead of\nforking separate JVM processes per-task, the Indexer runs tasks as individual threads within a single JVM process."),(0,a.kt)("p",null,"The Indexer is designed to be easier to configure and deploy compared to the MiddleManager + Peon system and to\nbetter enable resource sharing across tasks. The Indexer is a newer feature and is currently designated\n",(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/experimental"},"experimental")," due to the fact that its memory management system is still under\ndevelopment. It will continue to mature in future versions of Druid."),(0,a.kt)("p",null,"Typically, you would deploy either MiddleManagers or Indexers, but not both."),(0,a.kt)("h2",{id:"pros-and-cons-of-colocation"},"Pros and cons of colocation"),(0,a.kt)("p",null,"Druid processes can be colocated based on the Master/Data/Query server organization as\ndescribed above. This organization generally results in better utilization of\nhardware resources for most clusters."),(0,a.kt)("p",null,"For very large scale clusters, however, it can be desirable to split the Druid processes\nsuch that they run on individual servers to avoid resource contention."),(0,a.kt)("p",null,"This section describes guidelines and configuration parameters related to process colocation."),(0,a.kt)("h3",{id:"coordinators-and-overlords"},"Coordinators and Overlords"),(0,a.kt)("p",null,"The workload on the Coordinator process tends to increase with the number of segments in the cluster. The Overlord's workload also increases based on the number of segments in the cluster, but to a lesser degree than the Coordinator."),(0,a.kt)("p",null,"In clusters with very high segment counts, it can make sense to separate the Coordinator and Overlord processes to provide more resources for the Coordinator's segment balancing workload."),(0,a.kt)("h4",{id:"unified-process"},"Unified Process"),(0,a.kt)("p",null,"The Coordinator and Overlord processes can be run as a single combined process by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"druid.coordinator.asOverlord.enabled")," property."),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/#coordinator-operation"},"Coordinator Configuration: Operation")," for details."),(0,a.kt)("h3",{id:"historicals-and-middlemanagers"},"Historicals and MiddleManagers"),(0,a.kt)("p",null,"With higher levels of ingestion or query load, it can make sense to deploy the Historical and MiddleManager processes on separate hosts to to avoid CPU and memory contention."),(0,a.kt)("p",null,"The Historical also benefits from having free memory for memory mapped segments, which can be another reason to deploy the Historical and MiddleManager processes separately."))}g.isMDXComponent=!0},90685:(e,r,t)=>{t.d(r,{Z:()=>s});const s=t.p+"assets/images/druid-architecture-c89f21addd50d76d07dbc3a730cd856f.png"}}]);