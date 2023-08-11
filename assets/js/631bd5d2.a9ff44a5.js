"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"index",title:"SQL-based ingestion",sidebar_label:"SQL-based ingestion",description:"Introduces multi-stage query architecture and its task engine"},l=void 0,p={unversionedId:"multi-stage-query/index",id:"multi-stage-query/index",title:"SQL-based ingestion",description:"Introduces multi-stage query architecture and its task engine",source:"@site/docs/27.0.0/multi-stage-query/index.md",sourceDirName:"multi-stage-query",slug:"/multi-stage-query/",permalink:"/docs/27.0.0/multi-stage-query/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"SQL-based ingestion",sidebar_label:"SQL-based ingestion",description:"Introduces multi-stage query architecture and its task engine"},sidebar:"docs",previous:{title:"Task reference",permalink:"/docs/27.0.0/ingestion/tasks"},next:{title:"Key concepts",permalink:"/docs/27.0.0/multi-stage-query/concepts"}},u={},c=[{value:"Vocabulary",id:"vocabulary",level:2},{value:"Load the extension",id:"load-the-extension",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:c},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," This page describes SQL-based batch ingestion using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/multi-stage-query/"},(0,i.kt)("inlineCode",{parentName:"a"},"druid-multi-stage-query")),"\nextension, new in Druid 24.0. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/ingestion/#batch"},"ingestion methods")," table to determine which\ningestion method is right for you.")),(0,i.kt)("p",null,"Apache Druid supports SQL-based ingestion using the bundled ",(0,i.kt)("a",{parentName:"p",href:"#load-the-extension"},(0,i.kt)("inlineCode",{parentName:"a"},"druid-multi-stage-query")," extension"),".\nThis extension adds a ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/multi-stage-query/concepts#multi-stage-query-task-engine"},"multi-stage query task engine for SQL")," that allows running SQL\n",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/multi-stage-query/concepts#insert"},"INSERT")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/multi-stage-query/concepts#replace"},"REPLACE")," statements as batch tasks. As an experimental feature,\nthe task engine also supports running ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries as batch tasks."),(0,i.kt)("p",null,"Nearly all ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," capabilities are available in the multi-stage query (MSQ) task engine, with certain exceptions listed on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/multi-stage-query/known-issues#select-statement"},"Known\nissues")," page. This allows great flexibility to apply transformations, filters, JOINs,\naggregations, and so on as part of ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT ... SELECT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"REPLACE ... SELECT")," statements. This also allows in-database\ntransformation: creating new tables based on queries of other tables."),(0,i.kt)("h2",{id:"vocabulary"},"Vocabulary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Controller"),": An indexing service task of type ",(0,i.kt)("inlineCode",{parentName:"p"},"query_controller")," that manages\nthe execution of a query. There is one controller task per query.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Worker"),": Indexing service tasks of type ",(0,i.kt)("inlineCode",{parentName:"p"},"query_worker")," that execute a\nquery. There can be multiple worker tasks per query. Internally,\nthe tasks process items in parallel using their processing pools (up to ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.processing.numThreads")," of execution parallelism\nwithin a worker task).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stage"),": A stage of query execution that is parallelized across\nworker tasks. Workers exchange data with each other between stages.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Partition"),": A slice of data output by worker tasks. In INSERT or REPLACE\nqueries, the partitions of the final stage become Druid segments.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Shuffle"),": Workers exchange data between themselves on a per-partition basis in a process called\nshuffling. During a shuffle, each output partition is sorted by a clustering key."))),(0,i.kt)("h2",{id:"load-the-extension"},"Load the extension"),(0,i.kt)("p",null,"To add the extension to an existing cluster, add ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-multi-stage-query")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.extensions.loadlist")," in your\n",(0,i.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file."),(0,i.kt)("p",null,"For more information about how to load an extension, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/configuration/extensions#loading-extensions"},"Loading extensions"),"."),(0,i.kt)("p",null,"To use ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/multi-stage-query/reference#extern-function"},"EXTERN"),', you need READ permission on the resource named "EXTERNAL" of the resource type\n"EXTERNAL". If you encounter a 403 error when trying to use ',(0,i.kt)("inlineCode",{parentName:"p"},"EXTERN"),", verify that you have the correct permissions.\nThe same is true of any of the input-source specific table function such as ",(0,i.kt)("inlineCode",{parentName:"p"},"S3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"LOCALFILES"),"."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/multi-stage-query/concepts"},"Read about key concepts")," to learn more about how SQL-based ingestion and multi-stage queries work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/multi-stage-query/examples"},"Check out the examples")," to see SQL-based ingestion in action."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/operations/web-console"},"Explore the Query view")," to get started\xa0in the web console.")))}g.isMDXComponent=!0}}]);