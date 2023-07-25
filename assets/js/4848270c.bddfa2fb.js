"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[208],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),g=a,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},72034:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"middlemanager",title:"MiddleManager Process"},l=void 0,d={unversionedId:"design/middlemanager",id:"design/middlemanager",title:"MiddleManager Process",description:"\x3c!--",source:"@site/docs/26.0.0/design/middlemanager.md",sourceDirName:"design",slug:"/design/middlemanager",permalink:"/docs/26.0.0/design/middlemanager",draft:!1,tags:[],version:"current",frontMatter:{id:"middlemanager",title:"MiddleManager Process"}},c={},p=[{value:"Configuration",id:"configuration",level:3},{value:"HTTP endpoints",id:"http-endpoints",level:3},{value:"Overview",id:"overview",level:3},{value:"Running",id:"running",level:3}],u={toc:p},g="wrapper";function f(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(g,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For Apache Druid MiddleManager Process Configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/#middlemanager-and-peons"},"Indexing Service Configuration"),"."),(0,i.kt)("p",null,"For basic tuning guidance for the MiddleManager process, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/basic-cluster-tuning#middlemanager"},"Basic cluster tuning"),"."),(0,i.kt)("h3",{id:"http-endpoints"},"HTTP endpoints"),(0,i.kt)("p",null,"For a list of API endpoints supported by the MiddleManager, please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/operations/api-reference#middlemanager"},"API reference"),"."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The MiddleManager process is a worker process that executes submitted tasks. Middle Managers forward tasks to Peons that run in separate JVMs.\nThe reason we have separate JVMs for tasks is for resource and log isolation. Each ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/peons"},"Peon")," is capable of running only one task at a time, however, a MiddleManager may have multiple Peons."),(0,i.kt)("h3",{id:"running"},"Running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server middleManager\n")))}f.isMDXComponent=!0}}]);