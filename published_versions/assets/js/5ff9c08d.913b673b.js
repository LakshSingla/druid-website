"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3143],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"dynamic-configuration-api",title:"Dynamic configuration API",sidebar_label:"Dynamic configuration"},l=void 0,d={unversionedId:"api-reference/dynamic-configuration-api",id:"api-reference/dynamic-configuration-api",title:"Dynamic configuration API",description:"\x3c!--",source:"@site/docs/latest/api-reference/dynamic-configuration-api.md",sourceDirName:"api-reference",slug:"/api-reference/dynamic-configuration-api",permalink:"/docs/latest/api-reference/dynamic-configuration-api",draft:!1,tags:[],version:"current",frontMatter:{id:"dynamic-configuration-api",title:"Dynamic configuration API",sidebar_label:"Dynamic configuration"},sidebar:"docs",previous:{title:"Service status",permalink:"/docs/latest/api-reference/service-status-api"},next:{title:"Legacy metadata",permalink:"/docs/latest/api-reference/legacy-metadata-api"}},p={},u=[{value:"Coordinator dynamic configuration",id:"coordinator-dynamic-configuration",level:2},{value:"Overlord dynamic configuration",id:"overlord-dynamic-configuration",level:2}],s={toc:u},m="wrapper";function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document describes the API endpoints to retrieve and manage the dynamic configurations for the ",(0,a.kt)("a",{parentName:"p",href:"../configuration/index.html#overlord-dynamic-configuration"},"Coordinator")," and ",(0,a.kt)("a",{parentName:"p",href:"../configuration/index.html#dynamic-configuration"},"Overlord")," in Apache Druid."),(0,a.kt)("h2",{id:"coordinator-dynamic-configuration"},"Coordinator dynamic configuration"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#dynamic-configuration"},"Coordinator Dynamic Configuration")," for details."),(0,a.kt)("p",null,"Note that all ",(0,a.kt)("em",{parentName:"p"},"interval")," URL parameters are ISO 8601 strings delimited by a ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," instead of a ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"\nas in ",(0,a.kt)("inlineCode",{parentName:"p"},"2016-06-27_2016-06-28"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/config")),(0,a.kt)("p",null,"Retrieves current coordinator dynamic configuration."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/config/history?interval={interval}&count={count}")),(0,a.kt)("p",null,"Retrieves history of changes to overlord dynamic configuration. Accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," and  ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," query string parameters\nto filter by interval and limit the number of results respectively."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /druid/coordinator/v1/config")),(0,a.kt)("p",null,"Update overlord dynamic worker configuration."),(0,a.kt)("h2",{id:"overlord-dynamic-configuration"},"Overlord dynamic configuration"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#overlord-dynamic-configuration"},"Overlord Dynamic Configuration")," for details."),(0,a.kt)("p",null,"Note that all ",(0,a.kt)("em",{parentName:"p"},"interval")," URL parameters are ISO 8601 strings delimited by a ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," instead of a ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"\nas in ",(0,a.kt)("inlineCode",{parentName:"p"},"2016-06-27_2016-06-28"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/indexer/v1/worker")),(0,a.kt)("p",null,"Retrieves current overlord dynamic configuration."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/indexer/v1/worker/history?interval={interval}&count={count}")),(0,a.kt)("p",null,"Retrieves history of changes to overlord dynamic configuration. Accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," and  ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," query string parameters\nto filter by interval and limit the number of results respectively."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/indexer/v1/workers")),(0,a.kt)("p",null,"Retrieves a list of all the worker nodes in the cluster along with its metadata."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /druid/indexer/v1/scaling")),(0,a.kt)("p",null,"Retrieves overlord scaling events if auto-scaling runners are in use."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /druid/indexer/v1/worker")),(0,a.kt)("p",null,"Update overlord dynamic worker configuration."))}f.isMDXComponent=!0}}]);