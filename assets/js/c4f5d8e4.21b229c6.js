/*! For license information please see c4f5d8e4.21b229c6.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[4195],{41354:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});var n=a(7452),i=a(67294);function r(e){var t=e.data;return i.createElement("div",{className:"druid-feature"},i.createElement("h5",null,t.title),i.createElement("p",null,t.description))}function l(e){var t=e.jsonData;return i.createElement("div",{className:"druid-feature-container"},t.map((function(e){return i.createElement(r,{key:e.id,data:e})})))}var s=[{title:"Interactive Query Engine",description:"Druid utilizes scatter/gather for high speed queries with data preloaded into memory or local storage to avoid data movement and network latency"},{title:"Tiering & QoS",description:"Configurable tiering with quality of service enables the ideal price-performance for mixed workloads, guarantees priority, and avoids resource contention"},{title:"Optimized Data Format",description:"Ingested data is automatically columnarized, time indexed, dictionary encoded, bitmap indexed, and type-aware compressed"},{title:"Elastic Architecture",description:"Loosely coupled components for ingestion, queries and orchestration combined with a deep storage layer enable easy & quick scale-up & scale-out"},{title:"True Stream Ingestion",description:"A connector-free integration with streaming platforms enables query-on-arrival, high scalability, low latency, and guaranteed consistency"},{title:"Non-stop Reliability",description:"Automatic data services including continuous backup, automated recovery, and multi-node replication ensure high availability and durability"}];function o(e){var t=e.data;return i.createElement("div",null,i.createElement("p",null,i.createElement("i",{className:"fa fa-solid fa-calendar cal-icon"}),i.createElement("b",null,t.date),i.createElement("br",null),t.name,i.createElement("br",null),t.info,i.createElement("br",null),i.createElement("a",{href:t.link},"Learn more")))}function c(e){var t=e.jsonData,a=new Date;return i.createElement("div",null," ",0===t.length?i.createElement("p",null,"Nothing scheduled yet."):t.map((function(e){return new Date(e.date)>=a?i.createElement(o,{key:e.name,data:e}):null})))}var m=[{date:"2023-07-27",name:"In-person (Americas)",info:"Real-Time Meetup: Druid Roadmap + Success Stories from Conviva & ThousandEyes",link:"https://www.meetup.com/druidio/events/294343938/"},{date:"2023-03-02",name:"Virtual Drop-in (Asia)",info:"Apache Druid Meetup by Imply",link:"https://www.meetup.com/bangalore-druid-meetup-group/events/291483003/"}];function d(e){var t=e.data;return i.createElement("div",null,i.createElement("p",null,i.createElement("a",{href:t.link},i.createElement("b",null,t.title)),t.name,i.createElement("br",null),t.date))}function u(e){var t=e.jsonData.slice(0,5);return i.createElement("div",null,t.map((function(e){return i.createElement(d,{key:e.name,data:e})})))}var p=[{date:"2023-04-23",title:"Multi-Value Dimensions in Apache Druid (Part 5)",name:"Hellmar Becker",link:"https://blog.hellmar-becker.de/2023/04/23/multivalue-dimensions-in-apache-druid-part-5/",company:"Imply"},{date:"2023-04-08",title:"Druid Sneak Peek: Timeseries Interpolation",name:"Hellmar Becker",link:"https://blog.hellmar-becker.de/2023/04/08/druid-sneak-peek-timeseries-interpolation/",company:"Imply"},{date:"2023-03-07",title:"Selective Bulk Upserts in Apache Druid",name:"Hellmar Becker",link:"https://blog.hellmar-becker.de/2023/03/07/selective-bulk-upserts-in-apache-druid/",company:"Imply"},{date:"2023-01-27",title:"Primary and secondary partitioning",name:"Sergio Ferragut",link:"https://imply.io/blog/real-time-analytics-database-uses-partitioning-and-pruning-to-achieve-its-legendary-performance/",company:"Imply"},{date:"2023-01-27",title:"Using Apache Druid for analyzing streaming data",name:"Julia Brouillette",link:"https://devops.com/stream-big-think-bigger-analyze-streaming-data-at-scale/",company:"Imply"},{date:"2022-12-15",title:"Why Confluent analyzes Kafka streams with Druid",name:"Matt Armstrong",link:"https://www.youtube.com/watch?v=Bozxc3vP1PA",company:"Imply"},{date:"2022-12-14",title:"Support for nested JSON columns in Druid",name:"Karthik Kasibhatla",link:"https://imply.io/blog/native-support-for-semi-structured-data-in-apache-druid/",company:"Imply"},{date:"2022-12-02",title:"Apache Druid's fit in the modern data stack",name:"David Wang",link:"https://imply.io/videos/apache-druids-fit-in-the-modern-data-stack/",company:"Imply"},{date:"2023-01-22",title:"Apache Druid: Data Lifecycle Management",name:"Hellmar Becker",link:"https://blog.hellmar-becker.de/2023/01/22/apache-druid-data-lifecycle-management/",company:"Imply"},{date:"2022-03-20",title:"Druid Data Cookbook: Quantiles in Druid with Data Sketches",name:"Hellmar Becker",link:"https://blog.hellmar-becker.de/2022/03/20/druid-data-cookbook-quantiles-in-druid-with-datasketches/",company:"Imply"},{date:"2022-02-09",title:"Druid Data Cookbook: Ingestion Transforms",name:"Hellmar Becker",link:"https://blog.hellmar-becker.de/2022/02/09/druid-data-cookbook-ingestion-transforms/",company:"Imply"},{date:"2022-02-04",title:"Multi-dimensional range partitioning",name:"Kashif Faraz",link:"https://imply.io/blog/multi-dimensional-range-partitioning/",company:"Imply"},{date:"2021-12-16",title:"Seeking the Perfect Apache Druid Rollup",name:"Neil Buesing",link:"https://www.rilldata.com/blog/seeking-the-perfect-apache-druid-rollup",company:"Rill Data"},{date:"2021-11-08",title:"Scaling Apache Druid for Real-Time Cloud Analytics at Confluent",name:"Harini Rajendran, Zohreh Krimi",link:"https://www.confluent.io/blog/scaling-apache-druid-for-real-time-cloud-analytics-at-confluent/",company:"Confluent"},{date:"2021-10-01",title:"Setting up Apache Druid on Kubernetes in under 30 minutes",name:"Adheip Singh",link:"https://www.rilldata.com/blog/setting-up-apache-druid-on-kubernetes-part-one",company:"Rill Data"},{date:"2021-09-25",title:"Multi-Value Dimensions in Apache Druid (Part 3)",name:"Hellmar Becker",link:"https://blog.hellmar-becker.de/2021/09/25/multivalue-dimensions-in-apache-druid-part-3/",company:"Imply"},{date:"2021-09-08",title:"Anomaly detection using Druid and Imply Pivot",name:"Vijay Narayanan",link:"https://vijay-narayanan-bigdata.medium.com/anomaly-detection-using-druid-and-imply-pivot-d6cd5bf158db",company:"Imply"},{date:"2021-08-16",title:"Druid: Event-Driven Data with Eric Tschetter",name:"Jeff Meyerson",link:"https://softwareengineeringdaily.com/2021/08/16/druid-event-driven-data-with-eric-tschetter/",company:"SE Daily"},{date:"2021-08-18",title:"Augmented analytics on business metrics by Cuebook with Apache Druid",name:"Sachin Bansal",link:"https://imply.io/post/augmented-analytics-on-business-metrics-by-cuebook",company:"Cuebook"},{date:"2021-08-11",title:"Was ist Apache Druid?",name:"Stefan Luber",link:"https://www.bigdata-insider.de/was-ist-apache-druid-a-1044465/",company:"Big Data Insider"},{date:"2021-08-09",title:"Funnel Analysis with Spark, Druid and DataSketches",name:"Itai Yaffe, Yakir Buskila",link:"https://youtu.be/dOBb0IOdsnU",company:"Databricks Data and AI Summit 2021"},{date:"2021-07-26",title:"Apache Druid Deep Dive",name:"Jon King",link:"https://youtu.be/TkARXVqDvEw",company:"RVA Data Engineering"},{date:"2021-07-21",title:"Apache Druid \u2013 Datenspeicher mit geringen Latenzen",name:"Thomas Joos, Nico Litzel",link:"https://www.bigdata-insider.de/apache-druid-datenspeicher-mit-geringen-latenzen-a-1034042/",company:"Big Data Insider"},{date:"2021-06-17",title:"Casting the spell: Druid in Practice",name:"Itai Yaffe, Yakir Buskila",link:"https://youtu.be/QAitmv8QRq4",company:"Berlin Buzzwords 2021"},{date:"2021-06-07",title:"Intro to Apache Druid \u2026 What is this Devilry",name:"Daniel Beach",link:"https://www.confessionsofadataguy.com/intro-to-apache-druid-what-is-this-devilry/",company:"Confessions of a Data Guy Blog"},{date:"2021-02-22",title:"Data Modeling and Query Performance in Apache Druid",name:"Matt Sarrel",link:"https://www.druidforum.org/t/data-modeling-and-query-performance-in-apache-druid/5942",company:"Imply"},{date:"2020-04-16",title:"Apache Druid Vision and Roadmap",name:"Gian Merlino",link:"https://youtu.be/IhqDsoIHqWY",company:"Imply"},{date:"2020-04-16",title:"Automating CI/CD for Druid Clusters at Athena Health",name:"Shyam Mudambi, Ramesh Kempanna and Karthik Urs",link:"https://youtu.be/XGzMJBM8xeg",company:"Athena Health"},{date:"2020-04-13",title:"Holistic AML compliance using Apache Druid",name:"Arpit Dubey",link:"https://youtu.be/Ly3HFbbEihQ",company:"DBS"},{date:"2020-04-13",title:"How Apache Druid Powers Real-Time Analytics at BT",name:"Pankaj Tiwari",link:"https://youtu.be/QZUunUDQ8p4",company:"BT"},{date:"2020-04-13",title:"Analytics over Terabytes of Data at Twitter using Apache Druid",name:"Swapnesh Gandhi",link:"https://imply.io/virtual-druid-summit/analytics-over-terabytes-of-data-at-twitter-apache-druid",company:"MoPub"},{date:"2020-04-13",title:"Using Druid for Network Monitoring and Trust Analytics at Cisco",name:"TJ Giuli and Abhishek Balaji Radhakrishnan",link:"https://youtu.be/KXytFBehvXA",company:"Cisco"},{date:"2020-04-13",title:"Apache Druid Fireside Chat (Ask Us Anything",name:"Fangjin Yang, Gian Merlino and Vadim Ogievetsky",link:"https://youtu.be/5JJccj_dSBk",company:"Imply"},{date:"2020-03-03",title:"How Netflix uses Druid for Real-time Insights to Ensure a High-Quality Experience",name:"Ben Sykes",link:"https://netflixtechblog.com/how-netflix-uses-druid-for-real-time-insights-to-ensure-a-high-quality-experience-19e1e8568d06",company:"Netflix"},{date:"2020-01-30",title:"Introducing Druid 0.17.0",name:"Gian Merlino",link:"https://imply.io/post/announcing-druid-0.17.0",company:"Imply"},{date:"2019-12-10",title:"Druid: Reflections at a Milestone",name:"Gian Merlino",link:"https://imply.io/post/reflecting-on-druid",company:"Imply"},{date:"2019-11-21",title:"How Nielsen Marketing Cloud Uses Druid for Audience and Marketing Performance Analysis",name:"Itai Yaffe",link:"https://imply.io/post/nielsen-marketing-audience-analysis",company:"Nielsen"},{date:"2019-10-16",title:"Druid query view: An elegant SQL interface for a more civilized age",name:"Margaret Brewster",link:"https://imply.io/post/druid-console-query-view",company:"Imply"},{date:"2019-09-15",title:"Data Retention and Deletion in Apache Druid",name:"Dana Assa and Itai Yaffe",link:"https://medium.com/nmc-techblog/data-retention-and-deletion-in-apache-druid-74ffd12398a8",company:"Nielsen"},{date:"2019-08-11",title:"Understanding Spark Streaming with Kafka and Druid",name:"Daria Litvinov",link:"https://medium.com/outbrain-engineering/understanding-spark-streaming-with-kafka-and-druid-25b69e28dcb7",company:"Outbrain"},{date:"2019-07-08",title:"The Zscaler difference - security at cloud scale",name:"Subramanian Srinivasan and Kevin Fletcher",link:"https://imply.io/post/druid-at-zscaler-security-log-analytics",company:"Zscaler"},{date:"2019-07-03",title:"Interactive Analytics at MoPub: Querying Terabytes of Data in Seconds",name:"Aaron Rolett and Shravana Krishnamurthy",link:"https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/interactive-analytics-at-mopub.html",company:"Twitter"},{date:"2019-06-27",title:"Enrich API Brings Higher Match Rates with Multi-Field Enrichment Capabilities",name:"Ken Michie",link:"https://www.fullcontact.com/blog/enrich-api-brings-higher-match-rates-with-multi-field-enrichment-capabilities/",company:"FullContact"},{date:"2019-05-29",title:"Monitoring at eBay with Druid",name:"Mohan Garadi",link:"https://www.ebayinc.com/stories/blogs/tech/monitoring-at-ebay-with-druid/",company:"ebay"},{date:"2019-05-22",title:"Setting the stage for fast analytics with Druid",name:"Surekha Saharan and Benjamin Hopp",link:"https://speakerdeck.com/implydatainc/setting-the-stage-for-fast-analytics-with-druid",company:"Imply"},{date:"2019-03-15",title:"Data Engineering At Booking.com - a case study",name:"Andreas Kretz",link:"https://youtu.be/9GE3yiVo1FM",company:"Booking.com"},{date:"2018-11-14",title:"How Druid enables analytics at Airbnb",name:"Pala Muthiah and Jinyang Li",link:"https://medium.com/airbnb-engineering/druid-airbnb-data-platform-601c312f2a4c",company:"Airbnb"},{date:"2018-09-25",title:"Data Analytics and Processing at Snap",name:"Charles Allen",link:"https://www.slideshare.net/CharlesAllen9/data-analytics-and-processing-at-snap-druid-meetup-la-september-2018",company:"Snap, Inc."},{date:"2018-09-13",title:"Securing Druid",name:"Jon Wei",link:"https://imply.io/post/securing-druid",company:"Imply"},{date:"2018-08-30",title:"Streaming SQL and Druid",name:"Arup Malakar",link:"https://youtu.be/ovZ9iAkQllo",company:"Lyft"},{date:"2018-06-19",title:"PayPal merchant ecosystem using Apache Spark, Hive, Druid, and HBase",name:"Deepika Khera & Kasi Natarajan",link:"https://youtu.be/HJvuU0CQS44",company:"Paypal"}];function h(e){var t=e.data;return i.createElement("div",null,i.createElement("p",null,i.createElement("a",{href:"https://github.com/apache/druid/releases/tag/druid-"+t.version},i.createElement("b",null,t.version)),t.date))}function y(e){var t=e.jsonData.slice(0,5);return i.createElement("div",null,t.map((function(e){return i.createElement(h,{key:e.version,data:e})})))}var f=a(60701),g=a(94184),k=a.n(g),b=a(85893);const E=["xxl","xl","lg","md","sm","xs"],v="xs",w=i.createContext({prefixes:{},breakpoints:E,minBreakpoint:v}),{Consumer:D,Provider:A}=w;function N(e,t){const{prefixes:a}=(0,i.useContext)(w);return e||a[t]||t}function S(){const{breakpoints:e}=(0,i.useContext)(w);return e}function I(){const{minBreakpoint:e}=(0,i.useContext)(w);return e}const B=i.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},i)=>{const r=N(e,"row"),l=S(),s=I(),o=`${r}-cols`,c=[];return l.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const i=e!==s?`-${e}`:"";null!=a&&c.push(`${o}${i}-${a}`)})),(0,b.jsx)(a,{ref:i,...n,className:k()(t,r,...c)})}));B.displayName="Row";const x=B;const C=i.forwardRef(((e,t)=>{const[{className:a,...n},{as:i="div",bsPrefix:r,spans:l}]=function({as:e,bsPrefix:t,className:a,...n}){t=N(t,"col");const i=S(),r=I(),l=[],s=[];return i.forEach((e=>{const a=n[e];let i,o,c;delete n[e],"object"==typeof a&&null!=a?({span:i,offset:o,order:c}=a):i=a;const m=e!==r?`-${e}`:"";i&&l.push(!0===i?`${t}${m}`:`${t}${m}-${i}`),null!=c&&s.push(`order${m}-${c}`),null!=o&&s.push(`offset${m}-${o}`)})),[{...n,className:k()(a,...l,...s)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,b.jsx)(i,{...n,ref:t,className:k()(a,!l.length&&r)})}));C.displayName="Col";const M=C,P=i.forwardRef((({bsPrefix:e,fluid:t,as:a="div",className:n,...i},r)=>{const l=N(e,"container"),s="string"==typeof t?`-${t}`:"-fluid";return(0,b.jsx)(a,{ref:r,...i,className:k()(n,t?`${l}${s}`:l)})}));P.displayName="Container",P.defaultProps={fluid:!1};const R=P,H=function(){return i.createElement(n.Z,{title:"Apache Druid"},i.createElement("div",null,i.createElement("main",{className:"druid-masthead"},i.createElement(R,null,i.createElement(x,null,i.createElement(M,null,i.createElement("div",{className:"text-center"},i.createElement("h1",null,"Apache",i.createElement("sup",null,"\xae")," Druid"),i.createElement("p",{className:"lead"},"Druid is a high performance, real-time analytics database that delivers sub-second queries on streaming and batch data at scale and under load."),i.createElement("p",null,i.createElement("a",{className:"button",href:"/downloads.html"},i.createElement("span",{className:"fa fa-download"})," Download"),i.createElement("a",{className:"button",href:"/community/join-slack?v=1"},i.createElement("span",{className:"fab fa-slack"})," Join Slack"),i.createElement("a",{className:"button",href:"https://github.com/apache/druid/"},i.createElement("span",{className:"fab fa-github"})," GitHub")),i.createElement("p",null)))))),i.createElement(R,null,i.createElement(x,null,i.createElement(M,null,i.createElement("h2",null,"Overview"),i.createElement("div",{className:"features"},i.createElement("div",{className:"feature"},i.createElement("span",{className:"fa fa-bolt"}),i.createElement("h5",null,"Sub-second queries at any scale"),i.createElement("p",null,"Execute OLAP queries in milliseconds on high-cardinality and high-dimensional data sets with billions to trillions of rows without pre-defining or caching queries in advance.")),i.createElement("div",{className:"feature"},i.createElement("span",{className:"fa fa-dollar-sign"}),i.createElement("h5",null,"High concurrency at the lowest cost "),i.createElement("p",null,"Build real-time analytics applications that supports 100s to 100,000s queries per second at consistent performance with a highly efficient architecture that uses less infrastructure than other databases.")),i.createElement("div",{className:"feature"},i.createElement("span",{className:"fa fa-chart-line"}),i.createElement("h5",null,"Real-time and historical insights"),i.createElement("p",null,"Unlock streaming data potential through Druid's native integration with Apache Kafka and Amazon Kinesis as it supports query-on-arrival at millions of events per second, low latency ingestion, and guaranteed consistency."))),i.createElement("h2",null,"Key Druid Features"),i.createElement("div",null,i.createElement(l,{jsonData:s})),i.createElement("br",null),i.createElement("h2",null,"Learn more"),i.createElement("div",{className:"features"},i.createElement("div",{className:"feature"},i.createElement("span",{className:"fa fa-power-off fa"}),i.createElement("h5",null," Powered By"),i.createElement("p",null,"Druid is proven in production at the ",i.createElement("a",{href:"/druid-powered"},"world's leading companies")," at massive scale.")),i.createElement("div",{className:"feature"},i.createElement("span",{className:"fa fa-info fa"}),i.createElement("h5",null," FAQ"),i.createElement("p",null,"Learn about some of the ",i.createElement("a",{href:"faq"},"most common questions about Druid"),".")),i.createElement("div",{className:"feature"},i.createElement("span",{className:"fa fa-flag-checkered fa"}),i.createElement("h5",null," Quickstart"),i.createElement("p",null,i.createElement("a",{href:"/docs/latest/tutorials/"},"Get started with Druid")," in minutes. Load your own data and query it.")),i.createElement("div",{className:"feature"},i.createElement("span",{className:"fa fa-question-circle fa"}),i.createElement("h5",null," Get Help"),i.createElement("p",null,"Get help from a ",i.createElement("a",{href:"/community/"},"wide network of community members")," about using Druid.")),i.createElement("div",{className:"feature"},i.createElement("span",{className:"fa fa-podcast fa"}),i.createElement("h5",null," Podcast"),i.createElement("p",null,"Hear from the Druid community on ",i.createElement("a",{href:"https://podcasts.apple.com/us/podcast/tales-at-scale/id1655951714"},"Apple"),", ",i.createElement("a",{href:"https://open.spotify.com/show/6KAKYLJvCVegsFfKvbfDnt"},"Spotify"),", and ",i.createElement("a",{href:"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5saWJzeW4uY29tLzQ0ODE3OS9yc3M"},"Google"),".")))),i.createElement(M,{md:3},i.createElement("div",{className:"widget-container"},i.createElement("h3",null,"Upcoming Events"),i.createElement(c,{jsonData:m}),i.createElement("a",{className:"button",href:"https://www.meetup.com/topics/apache-druid/"},"Join a Druid Meetup!"),i.createElement("br",null)),i.createElement("div",{className:"widget-container"},i.createElement("h3",null,"Featured Content"),i.createElement(u,{jsonData:p})),i.createElement("div",{className:"widget-container"},i.createElement("h3",null,"Recent releases"),i.createElement(y,{jsonData:f.w})))))))}},60701:e=>{e.exports.w=[{version:"26.0.0",date:"May 23 2023"},{version:"25.0.0",date:"Jan 4 2023"},{version:"24.0.2",date:"Dec 21 2022"}]},94184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var l=i.apply(null,a);l&&e.push(l)}}else if("object"===r){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},75251:(e,t,a)=>{"use strict";a(27418);var n=a(67294),i=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;i=r("react.element"),r("react.fragment")}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,r={},c=null,m=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)s.call(t,n)&&!o.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:m,props:r,_owner:l.current}}t.jsx=c},85893:(e,t,a)=>{"use strict";e.exports=a(75251)}}]);