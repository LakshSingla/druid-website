"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,k=p["".concat(d,".").concat(c)]||p[c]||m[c]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"kubernetes",title:"Kubernetes"},d=void 0,s={unversionedId:"development/extensions-core/kubernetes",id:"development/extensions-core/kubernetes",title:"Kubernetes",description:"\x3c!--",source:"@site/docs/26.0.0/development/extensions-core/kubernetes.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/kubernetes",permalink:"/docs/26.0.0/development/extensions-core/kubernetes",draft:!1,tags:[],version:"current",frontMatter:{id:"kubernetes",title:"Kubernetes"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Gotchas",id:"gotchas",level:3}],m={toc:p},c="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Consider this an ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/experimental"},"EXPERIMENTAL")," feature mostly because it has not been tested yet on a wide variety of long running Druid clusters."),(0,i.kt)("p",null,"Apache Druid Extension to enable using Kubernetes API Server for node discovery and leader election. This extension allows Druid cluster deployment on Kubernetes without Zookeeper. It allows running multiple Druid clusters within same Kubernetes Cluster, See ",(0,i.kt)("inlineCode",{parentName:"p"},"clusterIdentifier")," config below."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To use this extension please make sure to  ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-kubernetes-extensions")," in the extensions load list."),(0,i.kt)("p",null,"This extension works together with HTTP based segment and task management in Druid. Consequently, following configurations must be set on all Druid nodes."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"druid.zk.service.enabled=false"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.serverview.type=http"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.coordinator.loadqueuepeon.type=http"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.type=httpRemote"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.discovery.type=k8s")),(0,i.kt)("p",null,'For Node Discovery, Each Druid process running inside a pod "announces" itself by adding few "labels" and "annotations" in the pod spec. Druid process needs to be aware of pod name and namespace which it reads from environment variables ',(0,i.kt)("inlineCode",{parentName:"p"},"POD_NAME")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"POD_NAMESPACE"),". These variable names can be changed, see configuration below. But in the end, each pod needs to have self pod name and namespace added as environment variables."),(0,i.kt)("p",null,"Additionally, this extension has following configuration."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.discovery.k8s.clusterIdentifier")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string that matches [a-z0-9][a-z0-9-]*[a-z0-9]")),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identifier for this Druid cluster in Kubernetes e.g. us-west-prod-druid."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.discovery.k8s.podNameEnvKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Pod Env Variable")),(0,i.kt)("td",{parentName:"tr",align:null},"Pod Env variable whose value is that pod's name."),(0,i.kt)("td",{parentName:"tr",align:null},"POD_NAME"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.discovery.k8s.podNamespaceEnvKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Pod Env Variable")),(0,i.kt)("td",{parentName:"tr",align:null},"Pod Env variable whose value is that pod's kubernetes namespace."),(0,i.kt)("td",{parentName:"tr",align:null},"POD_NAMESPACE"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.discovery.k8s.leaseDuration")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"Lease duration used by Leader Election algorithm. Candidates wait for this time before taking over previous Leader."),(0,i.kt)("td",{parentName:"tr",align:null},"PT60S"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.discovery.k8s.renewDeadline")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"Lease renewal period used by Leader."),(0,i.kt)("td",{parentName:"tr",align:null},"PT17S"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.discovery.k8s.retryPeriod")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"Retry wait used by Leader Election algorithm on failed operations."),(0,i.kt)("td",{parentName:"tr",align:null},"PT5S"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h3",{id:"gotchas"},"Gotchas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Label/Annotation path in each pod spec MUST EXIST, which is easily satisfied if there is at least one label/annotation in the pod spec already. This limitation may be removed in future."),(0,i.kt)("li",{parentName:"ul"},"All Druid Pods belonging to one Druid cluster must be inside same kubernetes namespace."),(0,i.kt)("li",{parentName:"ul"},'All Druid Pods need permissions to be able to add labels to self-pod, List and Watch other Pods, create and read ConfigMap for leader election. Assuming, "default" service account is used by Druid pods, you might need to add following or something similar Kubernetes Role and Role Binding.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: druid-cluster\nrules:\n- apiGroups:\n  - \"\"\n  resources:\n  - pods\n  - configmaps\n  verbs:\n  - '*'\n---\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: druid-cluster\nsubjects:\n- kind: ServiceAccount\n  name: default\nroleRef:\n  kind: Role\n  name: druid-cluster\n  apiGroup: rbac.authorization.k8s.io\n")))}k.isMDXComponent=!0}}]);