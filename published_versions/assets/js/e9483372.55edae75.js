"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8903],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>f});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?n.createElement(f,s(s({ref:a},u),{},{components:t})):n.createElement(f,s({ref:a},u))}));function f(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4672:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),s=["components"],o={title:"Use Cases",canonical:"https://druid.apache.org/use-cases"},l=void 0,c={type:"mdx",permalink:"/use-cases",source:"@site/src/pages/use-cases.md",title:"Use Cases",description:"Use cases",frontMatter:{title:"Use Cases",canonical:"https://druid.apache.org/use-cases"}},u=[{value:"Power real-time analytics, data applications, and more",id:"power-real-time-analytics-data-applications-and-more",level:2},{value:"User activity and behavior",id:"user-activity-and-behavior",level:2},{value:"Network flows",id:"network-flows",level:2},{value:"Digital marketing",id:"digital-marketing",level:2},{value:"Application performance management",id:"application-performance-management",level:2},{value:"IoT and device metrics",id:"iot-and-device-metrics",level:2},{value:"OLAP and business intelligence",id:"olap-and-business-intelligence",level:2}],d={toc:u},p="wrapper";function m(e){var a=e.components,t=(0,i.Z)(e,s);return(0,r.kt)(p,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"simple-header"},(0,r.kt)("div",{class:"container"},(0,r.kt)("h1",null,"Use cases"))),(0,r.kt)("h2",{id:"power-real-time-analytics-data-applications-and-more"},"Power real-time analytics, data applications, and more"),(0,r.kt)("p",null,"Apache Druid is a database that is most often used for powering use cases where real-time ingest, fast query performance, and high uptime are important. As such, Druid is commonly used for powering GUIs of analytical applications, or as a backend for highly-concurrent APIs that need fast aggregations. Druid works best with event-oriented data."),(0,r.kt)("p",null,"Common application areas for Druid include:"),(0,r.kt)("div",{class:"fancy-list"},(0,r.kt)("ui",null,(0,r.kt)("li",null,"Clickstream analytics (web and mobile analytics)"),(0,r.kt)("li",null,"Risk/fraud analysis"),(0,r.kt)("li",null,"Network telemetry analytics (network performance monitoring)"),(0,r.kt)("li",null,"Server metrics storage"),(0,r.kt)("li",null,"Supply chain analytics (manufacturing metrics)"),(0,r.kt)("li",null,"Application performance metrics"),(0,r.kt)("li",null,"Business intelligence / OLAP"))),(0,r.kt)("p",null,"Some of these use cases are described in more detail below. For an overview of technical differentiation, please see the ",(0,r.kt)("a",{parentName:"p",href:"faq"},"FAQ"),"."),(0,r.kt)("p",null,"If you are experimenting with a new use case for Druid or have questions about Druid's capabilities and features, join the ",(0,r.kt)("a",{parentName:"p",href:"http://apachedruidworkspace.slack.com/"},"Apache Druid Slack")," channel! There, you can connect with Druid experts, ask questions, and get help in real time."),(0,r.kt)("div",{class:"zigzag-features"},(0,r.kt)("div",{class:"zigzag-feature"},(0,r.kt)("span",{class:"fa fa-users fa"}),(0,r.kt)("h2",{id:"user-activity-and-behavior"},"User activity and behavior"),(0,r.kt)("p",null,"Druid is often used for clickstreams, viewstreams, and activity streams.\nSpecific use cases include measuring user engagement, tracking A/B test data for product releases, and understanding usage patterns."),(0,r.kt)("p",null,"Druid can compute user metrics such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/aggregations"},"distinct counts")," both exactly and approximately.\nThis mean measures such as daily active users can be computed in under a second approximately (with 98% avg. accuracy) to view general trends, or computed exactly to present to key stakeholders.\nFurthermore, Druid can be used for ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/datasketches-extension"},"funnel analysis"),", and to measure how many users took one action, but did not take another action.\nSuch analysis is useful is tracking user signups for a product."),(0,r.kt)("p",null,"Druid\u2019s search and filter capabilities enable rapid, easy drill-downs of users along any set of attributes.\nMeasure and compare user activity by age, gender, location, and much more.")),(0,r.kt)("div",{class:"zigzag-feature"},(0,r.kt)("span",{class:"fa fa-project-diagram fa"}),(0,r.kt)("h2",{id:"network-flows"},"Network flows"),(0,r.kt)("p",null,"Druid is commonly used to collect and analyze network flows.\nDruid is used to arbitrarily slice and dice flow data along any set of attributes."),(0,r.kt)("p",null,"Druid helps with network flow analysis by being able to ingest large amounts of flow records, and by being able to group or rank across dozens of attributes at query time at interactive speeds.\nThese attributes often include core attributes like IP and port, as well as attributes added through enhancement such as geolocation, service, application, facility, and ASN.\nDruid's ability to handle flexible schemas means that you can add any attributes you want.")),(0,r.kt)("div",{class:"zigzag-feature"},(0,r.kt)("span",{class:"fa fa-comments-dollar fa"}),(0,r.kt)("h2",{id:"digital-marketing"},"Digital marketing"),(0,r.kt)("p",null,"Druid is commonly used to store and query online advertising data.\nThis data typically comes from ad servers and is critical to measure and understand advertising campaign performance, click through rates, conversion rates (attrition rates), and much more."),(0,r.kt)("p",null,"Druid was initially designed to power a user-facing analytics application for digital advertising data.\nDruid has seen substantial production use for this type of data and the largest users in the world have petabytes of data stored on thousands of servers."),(0,r.kt)("p",null,"Druid can be used to compute impressions, clicks, eCPM, and key conversion metrics, filtered on publisher, campaign, user information, and dozens of other dimensions supporting full slice and dice capability.")),(0,r.kt)("div",{class:"zigzag-feature"},(0,r.kt)("span",{class:"fa fa-tachometer-alt fa"}),(0,r.kt)("h2",{id:"application-performance-management"},"Application performance management"),(0,r.kt)("p",null,"Druid is often used to track the operational data generated by applications.\nSimilar to the user activity use case, this data can be about how users are interacting with an application or it can be the metrics emitted by the application itself.\nDruid can be used to drill into how different components of an application are performing, identify bottlenecks, and troubleshoot issues."),(0,r.kt)("p",null,"Unlike many traditional solutions, there are few limits to the volume, complexity, and throughput of the data.\nRapidly analyze application events with thousands of attributes, and compute complex metrics on load, performance, and usage.\nFor example, rank API endpoints based on 95th percentile query latency, and slice and dice how these metrics change based on any ad-hoc set of attributes such as time of day, user demographic, or datacenter location.")),(0,r.kt)("div",{class:"zigzag-feature"},(0,r.kt)("span",{class:"fa fa-thermometer-three-quarters fa"}),(0,r.kt)("h2",{id:"iot-and-device-metrics"},"IoT and device metrics"),(0,r.kt)("p",null,"Druid can be used as a time series solution for server and device metrics.\nIngest machine generated data in real-time, and perform rapid ad-hoc analytics to measure performance, optimize hardware resources, or identify issues."),(0,r.kt)("p",null,"Unlike many traditional timeseries databases, Druid is an analytics engine at heart.\nDruid combines ideas of timeseries databases, column-oriented analytic databases, and search systems.\nDruid supports time-based partitioning, column-oriented storage, and search indexes in a single system.\nThis means time-based queries, numerical aggregations, and search and filter queries are all extremely fast."),(0,r.kt)("p",null,"You can include millions of unique dimension values with your metrics, and arbitrarily group and filter on any combination of dimensions (dimensions in Druid are similar to tags in TSDBs).\nYou can group and rank on tags, and compute a variety of complex metrics.\nFurthermore, you search and filter on tag values orders of magnitude faster than in traditional timeseries databases.")),(0,r.kt)("div",{class:"zigzag-feature"},(0,r.kt)("span",{class:"fa fa-chart-pie fa"}),(0,r.kt)("h2",{id:"olap-and-business-intelligence"},"OLAP and business intelligence"),(0,r.kt)("p",null,"Druid is commonly used for BI use cases.\nOrganizations have deployed Druid to accelerate queries and power applications.\nUnlike SQL-on-Hadoop engines such as Presto or Hive, Druid is designed for high concurrency and sub-second queries, powering interactive data exploration through a UI.\nIn general this makes Druid a better fit for truly interactive visual analytics."),(0,r.kt)("p",null,"Druid is a great fit if you need a user-facing application and you want your users to be able to run their own self service drill-down queries.\nYou can either develop your own application using Druid's API or use one of the ",(0,r.kt)("a",{parentName:"p",href:"/libraries"},"many off the shelf applications")," that work with Druid."))))}m.isMDXComponent=!0}}]);