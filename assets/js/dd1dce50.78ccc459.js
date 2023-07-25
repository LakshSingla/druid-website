"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[261],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),g=a,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||s;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),i=["components"],o={id:"indexing-service",title:"Indexing Service"},l=void 0,d={unversionedId:"design/indexing-service",id:"design/indexing-service",title:"Indexing Service",description:"\x3c!--",source:"@site/docs/latest/design/indexing-service.md",sourceDirName:"design",slug:"/design/indexing-service",permalink:"/docs/latest/design/indexing-service",draft:!1,tags:[],version:"current",frontMatter:{id:"indexing-service",title:"Indexing Service"}},c={},p=[{value:"Overlord",id:"overlord",level:2},{value:"Middle Managers",id:"middle-managers",level:2},{value:"Peons",id:"peons",level:2},{value:"Tasks",id:"tasks",level:2}],u={toc:p},g="wrapper";function m(e){var n=e.components,o=(0,a.Z)(e,i);return(0,s.kt)(g,(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Apache Druid indexing service is a highly-available, distributed service that runs indexing related tasks."),(0,s.kt)("p",null,"Indexing ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/tasks"},"tasks")," create (and sometimes destroy) Druid ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/design/segments"},"segments"),". The indexing service has a master/slave like architecture."),(0,s.kt)("p",null,"The indexing service is composed of three main components: a ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/design/peons"},"Peon")," component that can run a single task, a ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/design/middlemanager"},"Middle Manager")," component that manages Peons, and an ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/design/overlord"},"Overlord")," component that manages task distribution to MiddleManagers.\nOverlords and MiddleManagers may run on the same process or across multiple processes while MiddleManagers and Peons always run on the same process."),(0,s.kt)("p",null,"Tasks are managed using API endpoints on the Overlord service. Please see ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/operations/api-reference#tasks"},"Overlord Task API")," for more information."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Indexing Service",src:t(20682).Z,title:"Indexing Service",width:"532",height:"621"})),(0,s.kt)("h2",{id:"overlord"},"Overlord"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/design/overlord"},"Overlord"),"."),(0,s.kt)("h2",{id:"middle-managers"},"Middle Managers"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/design/middlemanager"},"Middle Manager"),"."),(0,s.kt)("h2",{id:"peons"},"Peons"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/design/peons"},"Peon"),"."),(0,s.kt)("h2",{id:"tasks"},"Tasks"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/tasks"},"Tasks"),"."))}m.isMDXComponent=!0},20682:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/indexing_service-e985270b9e0e342af71c0673407e5673.png"}}]);