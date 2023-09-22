"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7542],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93556:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"overlord",title:"Overlord Process"},s=void 0,d={unversionedId:"design/overlord",id:"design/overlord",title:"Overlord Process",description:"\x3c!--",source:"@site/docs/latest/design/overlord.md",sourceDirName:"design",slug:"/design/overlord",permalink:"/docs/latest/design/overlord",draft:!1,tags:[],version:"current",frontMatter:{id:"overlord",title:"Overlord Process"}},c={},u=[{value:"Configuration",id:"configuration",level:3},{value:"HTTP endpoints",id:"http-endpoints",level:3},{value:"Overview",id:"overview",level:3},{value:"Blacklisted workers",id:"blacklisted-workers",level:3},{value:"Autoscaling",id:"autoscaling",level:3}],p={toc:u},f="wrapper";function g(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"For Apache Druid Overlord Process Configuration, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#overlord"},"Overlord Configuration"),"."),(0,a.kt)("p",null,"For basic tuning guidance for the Overlord process, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/operations/basic-cluster-tuning#overlord"},"Basic cluster tuning"),"."),(0,a.kt)("h3",{id:"http-endpoints"},"HTTP endpoints"),(0,a.kt)("p",null,"For a list of API endpoints supported by the Overlord, please see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/api-reference/service-status-api#overlord"},"Service status API reference"),"."),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Overlord process is responsible for accepting tasks, coordinating task distribution, creating locks around tasks, and returning statuses to callers. Overlord can be configured to run in one of two modes - local or remote (local being default).\nIn local mode Overlord is also responsible for creating Peons for executing tasks. When running the Overlord in local mode, all MiddleManager and Peon configurations must be provided as well.\nLocal mode is typically used for simple workflows.  In remote mode, the Overlord and MiddleManager are run in separate processes and you can run each on a different server.\nThis mode is recommended if you intend to use the indexing service as the single endpoint for all Druid indexing."),(0,a.kt)("h3",{id:"blacklisted-workers"},"Blacklisted workers"),(0,a.kt)("p",null,"If a MiddleManager has task failures above a threshold, the Overlord will blacklist these MiddleManagers. No more than 20% of the MiddleManagers can be blacklisted. Blacklisted MiddleManagers will be periodically whitelisted."),(0,a.kt)("p",null,"The following variables can be used to set the threshold and blacklist timeouts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"druid.indexer.runner.maxRetriesBeforeBlacklist\ndruid.indexer.runner.workerBlackListBackoffTime\ndruid.indexer.runner.workerBlackListCleanupPeriod\ndruid.indexer.runner.maxPercentageBlacklistWorkers\n")),(0,a.kt)("h3",{id:"autoscaling"},"Autoscaling"),(0,a.kt)("p",null,"The Autoscaling mechanisms currently in place are tightly coupled with our deployment infrastructure but the framework should be in place for other implementations. We are highly open to new implementations or extensions of the existing mechanisms. In our own deployments, MiddleManager processes are Amazon AWS EC2 nodes and they are provisioned to register themselves in a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ning/galaxy"},"galaxy")," environment."),(0,a.kt)("p",null,"If autoscaling is enabled, new MiddleManagers may be added when a task has been in pending state for too long. MiddleManagers may be terminated if they have not run any tasks for a period of time."))}g.isMDXComponent=!0}}]);