"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"tutorial-retention",title:"Configure data retention",sidebar_label:"Configure data retention"},s=void 0,u={unversionedId:"tutorials/tutorial-retention",id:"tutorials/tutorial-retention",title:"Configure data retention",description:"\x3c!--",source:"@site/docs/27.0.0/tutorials/tutorial-retention.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-retention",permalink:"/docs/27.0.0/tutorials/tutorial-retention",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-retention",title:"Configure data retention",sidebar_label:"Configure data retention"},sidebar:"docs",previous:{title:"Theta sketches",permalink:"/docs/27.0.0/tutorials/tutorial-sketches-theta"},next:{title:"Update existing data",permalink:"/docs/27.0.0/tutorials/tutorial-update-data"}},p={},d=[{value:"Load the example data",id:"load-the-example-data",level:2},{value:"Set retention rules",id:"set-retention-rules",level:2},{value:"Further reading",id:"further-reading",level:2}],c={toc:d},h="wrapper";function f(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)(h,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial demonstrates how to configure retention rules on a datasource to set the time intervals of data that will be retained or dropped."),(0,i.kt)("p",null,"For this tutorial, we'll assume you've already downloaded Apache Druid as described in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/tutorials/"},"single-machine quickstart")," and have it running on your local machine."),(0,i.kt)("p",null,"It will also be helpful to have finished ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/tutorials/tutorial-batch"},"Load a file")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/tutorials/tutorial-query"},"Query data")," tutorials."),(0,i.kt)("h2",{id:"load-the-example-data"},"Load the example data"),(0,i.kt)("p",null,"For this tutorial, we'll be using the Wikipedia edits sample data, with an ingestion task spec that will create a separate segment for each hour in the input data."),(0,i.kt)("p",null,"The ingestion spec can be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/retention-index.json"),". Let's submit that spec, which will create a datasource called ",(0,i.kt)("inlineCode",{parentName:"p"},"retention-tutorial"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/retention-index.json --url http://localhost:8081\n")),(0,i.kt)("p",null,"After the ingestion completes, go to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888/unified-console.html#datasources"},"http://localhost:8888/unified-console.html#datasources")," in a browser to access the web console's datasource view."),(0,i.kt)("p",null,"This view shows the available datasources and a summary of the retention rules for each datasource:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Summary",src:n(96050).Z,title:"Summary",width:"1136",height:"218"})),(0,i.kt)("p",null,"Currently there are no rules set for the ",(0,i.kt)("inlineCode",{parentName:"p"},"retention-tutorial")," datasource. Note that there are default rules for the cluster: load forever with 2 replicas in ",(0,i.kt)("inlineCode",{parentName:"p"},"_default_tier"),"."),(0,i.kt)("p",null,"This means that all data will be loaded regardless of timestamp, and each segment will be replicated to two Historical processes in the default tier."),(0,i.kt)("p",null,"In this tutorial, we will ignore the tiering and redundancy concepts for now."),(0,i.kt)("p",null,"Let's view the segments for the ",(0,i.kt)("inlineCode",{parentName:"p"},"retention-tutorial"),' datasource by clicking the "24 Segments" link next to "Fully Available".'),(0,i.kt)("p",null,"The segments view (",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888/unified-console.html#segments"},"http://localhost:8888/unified-console.html#segments"),") provides information about what segments a datasource contains. The page shows that there are 24 segments, each one containing data for a specific hour of 2015-09-12:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Original segments",src:n(96090).Z,title:"Original segments",width:"1971",height:"944"})),(0,i.kt)("h2",{id:"set-retention-rules"},"Set retention rules"),(0,i.kt)("p",null,"Suppose we want to drop data for the first 12 hours of 2015-09-12 and keep data for the later 12 hours of 2015-09-12."),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888/unified-console.html#datasources"},"datasources view")," and click the blue pencil icon next to ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster default: loadForever")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"retention-tutorial")," datasource."),(0,i.kt)("p",null,"A rule configuration window will appear:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rule configuration",src:n(9468).Z,title:"Rule configuration",width:"792",height:"307"})),(0,i.kt)("p",null,"Now click the ",(0,i.kt)("inlineCode",{parentName:"p"},"+ New rule")," button twice."),(0,i.kt)("p",null,"In the upper rule box, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"by interval"),", and then enter ",(0,i.kt)("inlineCode",{parentName:"p"},"2015-09-12T12:00:00.000Z/2015-09-13T00:00:00.000Z")," in field next to ",(0,i.kt)("inlineCode",{parentName:"p"},"by interval"),". Replicas can remain at 2 in the ",(0,i.kt)("inlineCode",{parentName:"p"},"_default_tier"),"."),(0,i.kt)("p",null,"In the lower rule box, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Drop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"forever"),"."),(0,i.kt)("p",null,"The rules should look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set rules",src:n(57015).Z,title:"Set rules",width:"787",height:"560"})),(0,i.kt)("p",null,"Now click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next"),". The rule configuration process will ask for a user name and comment, for change logging purposes. You can enter ",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial")," for both."),(0,i.kt)("p",null,"Now click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),". You can see the new rules in the datasources view:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New rules",src:n(44013).Z,title:"New rules",width:"1968",height:"218"})),(0,i.kt)("p",null,"Give the cluster a few minutes to apply the rule change, and go to the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888/unified-console.html#segments"},"segments view")," in the web console.\nThe segments for the first 12 hours of 2015-09-12 are now gone:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New segments",src:n(2080).Z,title:"New segments",width:"1973",height:"567"})),(0,i.kt)("p",null,"The resulting retention rule chain is the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"loadByInterval 2015-09-12T12/2015-09-13 (12 hours)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"dropForever")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"loadForever (default rule)"))),(0,i.kt)("p",null,"The rule chain is evaluated from top to bottom, with the default rule chain always added at the bottom."),(0,i.kt)("p",null,"The tutorial rule chain we just created loads data if it is within the specified 12 hour interval."),(0,i.kt)("p",null,"If data is not within the 12 hour interval, the rule chain evaluates ",(0,i.kt)("inlineCode",{parentName:"p"},"dropForever")," next, which will drop any data."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dropForever")," terminates the rule chain, effectively overriding the default ",(0,i.kt)("inlineCode",{parentName:"p"},"loadForever")," rule, which will never be reached in this rule chain."),(0,i.kt)("p",null,"Note that in this tutorial we defined a load rule on a specific interval."),(0,i.kt)("p",null,"If instead you want to retain data based on how old it is (e.g., retain data that ranges from 3 months in the past to the present time), you would define a Period load rule instead."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/operations/rule-configuration"},"Load rules"))))}f.isMDXComponent=!0},96050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial-retention-01-09f120b6b0b2bc901f08801e508e778c.png"},96090:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial-retention-02-c388e3c07c39dc0f5ff33b78b68db565.png"},9468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial-retention-03-4082b62d45d1ffdf102f31209ab141f2.png"},57015:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial-retention-04-b0841ac2bfbb857680b28192306b1931.png"},44013:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial-retention-05-54500f6be8508fb4ddf4468830bd94cd.png"},2080:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial-retention-06-8c3d36ef058fbe029fe3ef423d2341de.png"}}]);