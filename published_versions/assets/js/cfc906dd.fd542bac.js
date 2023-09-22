"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"geo",title:"Spatial filters"},p=void 0,s={unversionedId:"development/geo",id:"development/geo",title:"Spatial filters",description:"\x3c!--",source:"@site/docs/latest/development/geo.md",sourceDirName:"development",slug:"/development/geo",permalink:"/docs/latest/development/geo",draft:!1,tags:[],version:"current",frontMatter:{id:"geo",title:"Spatial filters"}},d={},u=[{value:"Spatial indexing",id:"spatial-indexing",level:2},{value:"Spatial filters",id:"spatial-filters",level:2},{value:"Bound types",id:"bound-types",level:3},{value:"Rectangular",id:"rectangular",level:4},{value:"Radius",id:"radius",level:4},{value:"Polygon",id:"polygon",level:4}],m={toc:u},c="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes a feature that is only available in the native language.")),(0,i.kt)("p",null,"Apache Druid supports filtering spatially indexed columns based on an origin and a bound."),(0,i.kt)("p",null,"This topic explains how to ingest and query spatial filters.\nFor information on other filters supported by Druid, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/filters"},"Query filters"),"."),(0,i.kt)("h2",{id:"spatial-indexing"},"Spatial indexing"),(0,i.kt)("p",null,"Spatial indexing refers to ingesting data of a spatial data type, such as geometry or geography, into Druid."),(0,i.kt)("p",null,"Spatial dimensions are string columns that contain coordinates separated by a comma.\nIn the ingestion spec, you configure spatial dimensions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," object of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSchema")," component."),(0,i.kt)("p",null,"You can provide spatial dimensions in any of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/data-formats"},"data formats")," supported by Druid.\nThe following example shows an ingestion spec with a spatial dimension named ",(0,i.kt)("inlineCode",{parentName:"p"},"coordinates"),", which is constructed from the input fields ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "hadoop",\n  "dataSchema": {\n    "dataSource": "DatasourceName",\n    "parser": {\n      "type": "string",\n      "parseSpec": {\n        "format": "json",\n        "timestampSpec": {\n          "column": "timestamp",\n          "format": "auto"\n        },\n        "dimensionsSpec": {\n          "dimensions": [\n            {\n              "type": "double",\n              "name": "x"\n            },\n            {\n              "type": "double",\n              "name": "y"\n            }\n          ],\n          "spatialDimensions": [\n            {\n              "dimName": "coordinates",\n              "dims": [\n                "x",\n                "y"\n              ]\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Each spatial dimension object in the ",(0,i.kt)("inlineCode",{parentName:"p"},"spatialDimensions")," array is defined by the following fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dimName")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of a spatial dimension. You can construct a spatial dimension from other dimensions or it may already exist as part of an event. If a spatial dimension already exists, it must be an array of coordinate values."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dims")),(0,i.kt)("td",{parentName:"tr",align:null},"The list of dimension names that comprise the spatial dimension."),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"For information on how to use the ingestion spec to configure ingestion, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec"},"Ingestion spec reference"),".\nFor general information on loading data in Druid, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/"},"Ingestion"),"."),(0,i.kt)("h2",{id:"spatial-filters"},"Spatial filters"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/filters"},"filter")," is a JSON object indicating which rows of data should be included in the computation for a query.\nYou can filter on spatial structures, such as rectangles and polygons, using the spatial filter."),(0,i.kt)("p",null,"Spatial filters have the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter": {\n  "type": "spatial",\n  "dimension": <name_of_spatial_dimension>,\n  "bound": <bound_type>\n}\n')),(0,i.kt)("p",null,"The following example shows a spatial filter with a rectangular bound type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"filter" : {\n    "type": "spatial",\n    "dimension": "spatialDim",\n    "bound": {\n        "type": "rectangular",\n        "minCoords": [10.0, 20.0],\n        "maxCoords": [30.0, 40.0]\n    }\n')),(0,i.kt)("p",null,"The order of the dimension coordinates in the spatial filter must be equal to the order of the dimension coordinates in the ",(0,i.kt)("inlineCode",{parentName:"p"},"spatialDimensions")," array."),(0,i.kt)("h3",{id:"bound-types"},"Bound types"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bound")," property of the spatial filter object lets you filter on ranges of dimension values.\nYou can define rectangular, radius, and polygon filter bounds."),(0,i.kt)("h4",{id:"rectangular"},"Rectangular"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rectangular")," bound has the following elements:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"minCoords")),(0,i.kt)("td",{parentName:"tr",align:null},"The list of minimum dimension coordinates in the form ","[x, y]"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxCoords")),(0,i.kt)("td",{parentName:"tr",align:null},"The list of maximum dimension coordinates in the form ","[x, y]"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))),(0,i.kt)("h4",{id:"radius"},"Radius"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"radius")," bound has the following elements:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"coords")),(0,i.kt)("td",{parentName:"tr",align:null},"Origin coordinates in the form ","[x, y]"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"radius")),(0,i.kt)("td",{parentName:"tr",align:null},"The float radius value"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))),(0,i.kt)("h4",{id:"polygon"},"Polygon"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"polygon")," bound has the following elements:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"abscissa")),(0,i.kt)("td",{parentName:"tr",align:null},"Horizontal coordinates for the corners of the polygon"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ordinate")),(0,i.kt)("td",{parentName:"tr",align:null},"Vertical coordinates for the corners of the polygon"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))))}g.isMDXComponent=!0}}]);