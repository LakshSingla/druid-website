"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"troubleshooting",title:"Troubleshooting query execution in Druid",sidebar_label:"Troubleshooting"},u=void 0,c={unversionedId:"querying/troubleshooting",id:"querying/troubleshooting",title:"Troubleshooting query execution in Druid",description:"\x3c!--",source:"@site/docs/26.0.0/querying/troubleshooting.md",sourceDirName:"querying",slug:"/querying/troubleshooting",permalink:"/docs/26.0.0/querying/troubleshooting",draft:!1,tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting query execution in Druid",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Query execution",permalink:"/docs/26.0.0/querying/query-execution"},next:{title:"Datasources",permalink:"/docs/26.0.0/querying/datasource"}},l={},d=[{value:"Query fails due to internal communication timeout",id:"query-fails-due-to-internal-communication-timeout",level:2}],p={toc:d},m="wrapper";function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This topic describes issues that may affect query execution in Druid, how to identify those issues, and strategies to resolve them."),(0,i.kt)("h2",{id:"query-fails-due-to-internal-communication-timeout"},"Query fails due to internal communication timeout"),(0,i.kt)("p",null,"In Druid's query processing, when the Broker sends a query to the data servers, the data servers process the query and push their intermediate results back to the Broker.\nBecause calls from the Broker to the data servers are synchronous, the Jetty server can time out in data servers in certain cases: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The data servers don't push any results to the Broker before the maximum idle time."),(0,i.kt)("li",{parentName:"ol"},"The data servers started to push data but paused for longer than the maximum idle time such as due to ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/operations/basic-cluster-tuning#broker-backpressure"},"Broker backpressure"),".")),(0,i.kt)("p",null,"When such timeout occurs, the server interrupts the connection between the Broker and data servers which causes the query to fail with a channel disconnection error. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "error": {\n      "error": "Unknown exception",\n      "errorMessage": "Query[6eee73a6-a95f-4bdc-821d-981e99e39242] url[https://localhost:8283/druid/v2/] failed with exception msg [Channel disconnected] (through reference chain: org.apache.druid.query.scan.ScanResultValue[\\"segmentId\\"])",\n      "errorClass": "com.fasterxml.jackson.databind.JsonMappingException",\n      "host": "localhost:8283"\n   }\n}\n')),(0,i.kt)("p",null,"Channel disconnection occurs for various reasons.\nTo verify that the error is due to web server timeout, search for the query ID in the Historical logs.\nThe query ID in the example above is ",(0,i.kt)("inlineCode",{parentName:"p"},"6eee73a6-a95f-4bdc-821d-981e99e39242"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},'"host"')," field in the error message above indicates the IP address of the Historical in question.\nIn the Historical logs, you will see a raised exception indicating ",(0,i.kt)("inlineCode",{parentName:"p"},"Idle timeout expired"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"2021-09-14T19:52:27,685 ERROR [qtp475526834-85[scan_[test_large_table]_6eee73a6-a95f-4bdc-821d-981e99e39242]] org.apache.druid.server.QueryResource - Unable to send query response. (java.io.IOException: java.util.concurrent.TimeoutException: Idle timeout expired: 300000/300000 ms)\n2021-09-14T19:52:27,685 ERROR [qtp475526834-85] org.apache.druid.server.QueryLifecycle - Exception while processing queryId [6eee73a6-a95f-4bdc-821d-981e99e39242] (java.io.IOException: java.util.concurrent.TimeoutException: Idle timeout expired: 300000/300000 ms)\n2021-09-14T19:52:27,686 WARN [qtp475526834-85] org.eclipse.jetty.server.HttpChannel - handleException /druid/v2/ java.io.IOException: java.util.concurrent.TimeoutException: Idle timeout expired: 300000/300000 ms\n")),(0,i.kt)("p",null,"To mitigate query failure due to web server timeout:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Increase the max idle time for the web server.\nSet the max idle time in the ",(0,i.kt)("inlineCode",{parentName:"li"},"druid.server.http.maxIdleTime")," property in the ",(0,i.kt)("inlineCode",{parentName:"li"},"historical/runtime.properties")," file.\nYou must restart the Druid cluster for this change to take effect.\nSee ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/"},"Configuration reference")," for more information on configuring the server. "),(0,i.kt)("li",{parentName:"ul"},"If the timeout occurs because the data servers have not pushed any results to the Broker, consider optimizing data server performance. Significant slowdown in the data servers may be a result of spilling too much data to disk in ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/groupbyquery#performance-tuning-for-groupby-v2"},"groupBy v2 queries"),", large ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/filters#in-filter"},(0,i.kt)("inlineCode",{parentName:"a"},"IN")," filters")," in the query, or an under scaled cluster. Analyze your ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/operations/metrics#query-metrics"},"Druid query metrics")," to determine the bottleneck."),(0,i.kt)("li",{parentName:"ul"},"If the timeout is caused by Broker backpressure, consider optimizing Broker performance. Check whether the connection is fast enough between the Broker and deep storage.")))}h.isMDXComponent=!0}}]);