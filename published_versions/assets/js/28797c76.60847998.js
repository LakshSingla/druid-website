"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"high-availability",title:"High availability"},c=void 0,s={unversionedId:"operations/high-availability",id:"operations/high-availability",title:"High availability",description:"\x3c!--",source:"@site/docs/latest/operations/high-availability.md",sourceDirName:"operations",slug:"/operations/high-availability",permalink:"/docs/latest/operations/high-availability",draft:!1,tags:[],version:"current",frontMatter:{id:"high-availability",title:"High availability"},sidebar:"docs",previous:{title:"Alerts",permalink:"/docs/latest/operations/alerts"},next:{title:"Rolling updates",permalink:"/docs/latest/operations/rolling-updates"}},p={},u=[],d={toc:u},m="wrapper";function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache ZooKeeper, metadata store, the coordinator, the overlord, and brokers are recommended to set up a high availability environment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For highly-available ZooKeeper, you will need a cluster of 3 or 5 ZooKeeper nodes.\nWe recommend either installing ZooKeeper on its own hardware, or running 3 or 5 Master servers (where overlords or coordinators are running)\nand configuring ZooKeeper on them appropriately. See the ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/current/zookeeperAdmin"},"ZooKeeper admin guide")," for more details."),(0,i.kt)("li",{parentName:"ul"},"For highly-available metadata storage, we recommend MySQL or PostgreSQL with replication and failover enabled.\nSee ",(0,i.kt)("a",{parentName:"li",href:"https://www.mysql.com/products/enterprise/high_availability.html"},"MySQL Enterprise High Availability")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/high-availability.html"},"PostgreSQL's High Availability, Load Balancing, and Replication")," for more information."),(0,i.kt)("li",{parentName:"ul"},"For highly-available Apache Druid Coordinators and Overlords, we recommend to run multiple servers.\nIf they are all configured to use the same ZooKeeper cluster and metadata storage,\nthen they will automatically failover between each other as necessary.\nOnly one will be active at a time, but inactive servers will redirect to the currently active server."),(0,i.kt)("li",{parentName:"ul"},"Druid Brokers can be scaled out and all running servers will be active and queryable.\nWe recommend placing them behind a load balancer.")))}h.isMDXComponent=!0}}]);