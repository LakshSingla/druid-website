"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"limitspec",title:"Sorting and limiting (groupBy)"},s=void 0,c={unversionedId:"querying/limitspec",id:"querying/limitspec",title:"Sorting and limiting (groupBy)",description:"\x3c!--",source:"@site/docs/latest/querying/limitspec.md",sourceDirName:"querying",slug:"/querying/limitspec",permalink:"/docs/latest/querying/limitspec",draft:!1,tags:[],version:"current",frontMatter:{id:"limitspec",title:"Sorting and limiting (groupBy)"},sidebar:"docs",previous:{title:"Having filters (groupBy)",permalink:"/docs/latest/querying/having"},next:{title:"Sorting (topN)",permalink:"/docs/latest/querying/topnmetricspec"}},p={},u=[{value:"DefaultLimitSpec",id:"defaultlimitspec",level:3},{value:"OrderByColumnSpec",id:"orderbycolumnspec",level:4}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes the native\nlanguage. For information about sorting in SQL, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql#order-by"},"SQL documentation"),".")),(0,o.kt)("p",null,"The limitSpec field provides the functionality to sort and limit the set of results from a groupBy query. If you group by a single dimension and are ordering by a single metric, we highly recommend using ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/topnquery"},"TopN Queries")," instead. The performance will be substantially better. Available options are:"),(0,o.kt)("h3",{id:"defaultlimitspec"},"DefaultLimitSpec"),(0,o.kt)("p",null,"The default limit spec takes a limit and the list of columns to do an orderBy operation over. The grammar is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type"    : "default",\n    "limit"   : <optional integer>,\n    "offset"  : <optional integer>,\n    "columns" : [<optional list of OrderByColumnSpec>],\n}\n')),(0,o.kt)("p",null,'The "limit" parameter is the maximum number of rows to return.'),(0,o.kt)("p",null,'The "offset" parameter tells Druid to skip this many rows when returning results. If both "limit" and "offset" are\nprovided, then "offset" will be applied first, followed by "limit". For example, a spec with limit 100 and offset 10\nwill return 100 rows starting from row number 10. Internally, the query is executed by extending the limit by the offset\nand then discarding a number of rows equal to the offset. This means that raising the offset will increase resource\nusage by an amount similar to increasing the limit.'),(0,o.kt)("p",null,'Together, "limit" and "offset" can be used to implement pagination. However, note that if the underlying datasource is\nmodified in between page fetches in ways that affect overall query results, then the different pages will not\nnecessarily align with each other.'),(0,o.kt)("h4",{id:"orderbycolumnspec"},"OrderByColumnSpec"),(0,o.kt)("p",null,"OrderByColumnSpecs indicate how to do order by operations. Each order-by condition can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"jsonString")," or a map of the following form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dimension" : "<Any dimension or metric name>",\n    "direction" : <"ascending"|"descending">,\n    "dimensionOrder" : <"lexicographic"(default)|"alphanumeric"|"strlen"|"numeric">\n}\n')),(0,o.kt)("p",null,"If only the dimension is provided (as a JSON string), the default order-by is ascending with lexicographic sorting."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/sorting-orders"},"Sorting Orders"),' for more information on the sorting orders specified by "dimensionOrder".'))}f.isMDXComponent=!0}}]);