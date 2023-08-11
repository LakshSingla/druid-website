"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,f=s["".concat(m,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"index",title:"Data management",sidebar_label:"Overview"},m=void 0,l={unversionedId:"data-management/index",id:"data-management/index",title:"Data management",description:"\x3c!--",source:"@site/docs/27.0.0/data-management/index.md",sourceDirName:"data-management",slug:"/data-management/",permalink:"/docs/27.0.0/data-management/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Data management",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Troubleshooting FAQ",permalink:"/docs/27.0.0/ingestion/faq"},next:{title:"Data updates",permalink:"/docs/27.0.0/data-management/update"}},p={},s=[],d={toc:s},u="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Druid stores data ",(0,o.kt)("a",{parentName:"p",href:"/docs/27.0.0/design/architecture#datasources-and-segments"},"partitioned by time chunk")," in immutable\nfiles called ",(0,o.kt)("a",{parentName:"p",href:"/docs/27.0.0/design/segments"},"segments"),". Data management operations involving replacing, or deleting,\nthese segments include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/27.0.0/data-management/update"},"Updates")," to existing data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/27.0.0/data-management/delete"},"Deletion")," of existing data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/27.0.0/data-management/schema-changes"},"Schema changes")," for new and existing data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/27.0.0/data-management/compaction"},"Compaction")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/27.0.0/data-management/automatic-compaction"},"automatic compaction"),", which reindex existing data to\noptimize storage footprint and performance.")))}f.isMDXComponent=!0}}]);