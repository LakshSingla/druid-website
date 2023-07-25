"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,o(o({ref:t},s),{},{components:n})):a.createElement(c,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"k8s-jobs",title:"MM-less Druid in K8s"},d=void 0,p={unversionedId:"development/extensions-contrib/k8s-jobs",id:"development/extensions-contrib/k8s-jobs",title:"MM-less Druid in K8s",description:"\x3c!--",source:"@site/docs/26.0.0/development/extensions-contrib/k8s-jobs.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/k8s-jobs",permalink:"/docs/26.0.0/development/extensions-contrib/k8s-jobs",draft:!1,tags:[],version:"current",frontMatter:{id:"k8s-jobs",title:"MM-less Druid in K8s"}},s={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Pod Adapters",id:"pod-adapters",level:2},{value:"Overlord Single Container Pod Adapter",id:"overlord-single-container-pod-adapter",level:3},{value:"Overlord Multi Container Pod Adapter",id:"overlord-multi-container-pod-adapter",level:3},{value:"Custom Template Pod Adapter",id:"custom-template-pod-adapter",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Gotchas",id:"gotchas",level:3}],m={toc:u},k="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid Extension to enable using Kubernetes for launching and managing tasks instead of the Middle Managers.  This extension allows you to launch tasks as kubernetes jobs removing the need for your middle manager.  "),(0,i.kt)("p",null,"Consider this an ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/experimental"},"EXPERIMENTAL")," feature mostly because it has not been tested yet on a wide variety of long-running Druid clusters."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"The K8s extension builds a pod spec using the specified pod adapter, the default implementation takes the podSpec of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Overlord")," pod and creates a kubernetes job from this podSpec.  Thus if you have sidecars such as Splunk or Istio it can optionally launch a task as a K8s job.  All jobs are natively restorable, they are decoupled from the druid deployment, thus restarting pods or doing upgrades has no affect on tasks in flight.  They will continue to run and when the overlord comes back up it will start tracking them again.  "),(0,i.kt)("h2",{id:"pod-adapters"},"Pod Adapters"),(0,i.kt)("p",null,"The logic defining how the pod template is built for your kubernetes job depends on which pod adapter you have specified."),(0,i.kt)("h3",{id:"overlord-single-container-pod-adapter"},"Overlord Single Container Pod Adapter"),(0,i.kt)("p",null,"The overlord single container pod adapter takes the podSpec of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Overlord")," pod and creates a kubernetes job from this podSpec.  This is the default pod adapter implementation, to explicitly enable it you can specify the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.adapter.type: overlordSingleContainer")),(0,i.kt)("h3",{id:"overlord-multi-container-pod-adapter"},"Overlord Multi Container Pod Adapter"),(0,i.kt)("p",null,"The overlord multi container pod adapter takes the podSpec of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Overlord")," pod and creates a kubernetes job from this podSpec.  It uses kubexit to manage dependency ordering between the main container that runs your druid peon and other sidecars defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Overlord")," pod spec.  To enable this pod adapter you can specify the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.adapter.type: overlordMultiContainer")," "),(0,i.kt)("h3",{id:"custom-template-pod-adapter"},"Custom Template Pod Adapter"),(0,i.kt)("p",null,"The custom template pod adapter allows you to specify a pod template file per task type.  This adapter requires you to specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," pod spec which will be used in the case that a task specific pod spec has not been defined.  To enable this pod adapter you can specify the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.adapter.type: customTemplateAdapter")),(0,i.kt)("p",null,"The base pod template must be specified as the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.podTemplate.base: /path/to/basePodSpec.yaml"),"\nTask specific pod templates must be specified as the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.podTemplate.{taskType}: /path/to/taskSpecificPodSpec.yaml")," where {taskType} is the name of the task type i.e ",(0,i.kt)("inlineCode",{parentName:"p"},"index_parallel")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To use this extension please make sure to  ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions#loading-extensions"},"include"),(0,i.kt)("inlineCode",{parentName:"p"},"druid-kubernetes-overlord-extensions")," in the extensions load list for your overlord process."),(0,i.kt)("p",null,"The extension uses the task queue to limit how many concurrent tasks (K8s jobs) are in flight so it is required you have a reasonable value for ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.queue.maxSize"),".  Additionally set the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.namespace")," to the namespace in which you are running druid."),(0,i.kt)("p",null,"Other configurations required are:\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.type: k8s")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.task.encapsulatedTask: true")),(0,i.kt)("p",null,"You can add optional labels to your K8s jobs / pods if you need them by using the following configuration:\n",(0,i.kt)("inlineCode",{parentName:"p"},'druid.indexer.runner.labels: \'{"key":"value"}\''),"\nAnnotations are the same with:\n",(0,i.kt)("inlineCode",{parentName:"p"},'druid.indexer.runner.annotations: \'{"key":"value"}\'')),(0,i.kt)("p",null,"All other configurations you had for the middle manager tasks must be moved under the overlord with one caveat, you must specify javaOpts as an array:\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.javaOptsArray"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.javaOpts")," is no longer supported."),(0,i.kt)("p",null,"If you are running without a middle manager you need to also use ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.processing.intermediaryData.storage.type=deepstore")),(0,i.kt)("p",null,"Additional Configuration"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.debugJobs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Clean up K8s jobs after tasks complete."),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.sidecarSupport")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Deprecated, specify adapter type as runtime property ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.k8s.adapter.type: overlordMultiContainer")," instead. If your overlord pod has sidecars, this will attempt to start the task with the same sidecars as the overlord pod."),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.primaryContainerName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"If running with sidecars, the ",(0,i.kt)("inlineCode",{parentName:"td"},"primaryContainerName")," should be that of your druid container like ",(0,i.kt)("inlineCode",{parentName:"td"},"druid-overlord"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"First container in ",(0,i.kt)("inlineCode",{parentName:"td"},"podSpec")," list"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.kubexitImage")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Used kubexit project to help shutdown sidecars when the main pod completes.  Otherwise jobs with sidecars never terminate."),(0,i.kt)("td",{parentName:"tr",align:null},"karlkfi/kubexit:latest"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.disableClientProxy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Use this if you have a global http(s) proxy and you wish to bypass it."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.maxTaskDuration")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"Max time a task is allowed to run for before getting killed"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PT4H")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.taskCleanupDelay")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"How long do jobs stay around before getting reaped from K8s"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"P2D")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.taskCleanupInterval")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"How often to check for jobs to be reaped"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PT10M")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.K8sjobLaunchTimeout")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"How long to wait to launch a K8s task before marking it as failed, on a resource constrained cluster it may take some time."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PT1H")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.javaOptsArray")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonArray")),(0,i.kt)("td",{parentName:"tr",align:null},"java opts for the task."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-Xmx1g")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.labels")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonObject")),(0,i.kt)("td",{parentName:"tr",align:null},"Additional labels you want to add to peon pod"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.annotations")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonObject")),(0,i.kt)("td",{parentName:"tr",align:null},"Additional annotations you want to add to peon pod"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.peonMonitors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonArray")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.monitoring.monitors"),". Use this property if you don't want to inherit monitors from the Overlord."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.graceTerminationPeriodSeconds")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Long")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of seconds you want to wait after a sigterm for container lifecycle hooks to complete.  Keep at a smaller value if you want tasks to hold locks for shorter periods."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PT30S")," (K8s default)"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h3",{id:"gotchas"},"Gotchas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You must have in your role the ability to launch jobs.  "),(0,i.kt)("li",{parentName:"ul"},"All Druid Pods belonging to one Druid cluster must be inside same kubernetes namespace."),(0,i.kt)("li",{parentName:"ul"},"For the sidecar support to work, your entry point / command in docker must be explicitly defined your spec.  ")),(0,i.kt)("p",null,"You can't have something like this:\nDockerfile:\n",(0,i.kt)("inlineCode",{parentName:"p"},'ENTRYPOINT: ["foo.sh"]')),(0,i.kt)("p",null,"and in your sidecar specs: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-container:"},"        name: foo\n        args: \n           - arg1\n           - arg2 \n")),(0,i.kt)("p",null,"That will not work, because we cannot decipher what your command is, the extension needs to know it explicitly.\n*",(0,i.kt)("em",{parentName:"p"},"Even for sidecars like Istio which are dynamically created by the service mesh, this needs to happen.")," "),(0,i.kt)("p",null,"Instead do the following:\nYou can keep your Dockerfile the same but you must have a sidecar spec like so: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-container:"},"        name: foo\n        command: foo.sh\n        args: \n           - arg1\n           - arg2 \n")),(0,i.kt)("p",null,"The following roles must also be accessible. An example spec could be: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: druid-cluster\nrules:\n- apiGroups:\n  - \"\"\n  resources:\n  - pods\n  - configmaps\n  - jobs\n  verbs:\n  - '*'\n---\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: druid-cluster\nsubjects:\n- kind: ServiceAccount\n  name: default\nroleRef:\n  kind: Role\n  name: druid-cluster\n  apiGroup: rbac.authorization.k8s.io\n")))}c.isMDXComponent=!0}}]);