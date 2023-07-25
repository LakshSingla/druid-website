"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1274],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(t),c=i,g=p["".concat(l,".").concat(c)]||p[c]||m[c]||o;return t?a.createElement(g,r(r({ref:n},u),{},{components:t})):a.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:i,r[1]=d;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},28658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],d={id:"modules",title:"Creating extensions"},l=void 0,s={unversionedId:"development/modules",id:"development/modules",title:"Creating extensions",description:"\x3c!--",source:"@site/docs/latest/development/modules.md",sourceDirName:"development",slug:"/development/modules",permalink:"/docs/latest/development/modules",draft:!1,tags:[],version:"current",frontMatter:{id:"modules",title:"Creating extensions"},sidebar:"docs",previous:{title:"Developing on Druid",permalink:"/docs/latest/development/overview"},next:{title:"JavaScript functionality",permalink:"/docs/latest/development/javascript"}},u={},p=[{value:"Writing your own extensions",id:"writing-your-own-extensions",level:2},{value:"Creating a Druid Module",id:"creating-a-druid-module",level:3},{value:"Registering your Druid Module",id:"registering-your-druid-module",level:3},{value:"Adding a new deep storage implementation",id:"adding-a-new-deep-storage-implementation",level:3},{value:"Validating your deep storage implementation",id:"validating-your-deep-storage-implementation",level:3},{value:"Adding support for a new input source",id:"adding-support-for-a-new-input-source",level:3},{value:"Adding support for a new data format",id:"adding-support-for-a-new-data-format",level:3},{value:"Adding Aggregators",id:"adding-aggregators",level:3},{value:"Adding Complex Metrics",id:"adding-complex-metrics",level:3},{value:"Adding new Query types",id:"adding-new-query-types",level:3},{value:"Adding new Jersey resources",id:"adding-new-jersey-resources",level:3},{value:"Adding a new Password Provider implementation",id:"adding-a-new-password-provider-implementation",level:3},{value:"Adding a new DynamicConfigProvider implementation",id:"adding-a-new-dynamicconfigprovider-implementation",level:3},{value:"Adding a Transform Extension",id:"adding-a-transform-extension",level:3},{value:"Adding your own custom pluggable Coordinator Duty",id:"adding-your-own-custom-pluggable-coordinator-duty",level:3},{value:"Routing data through a HTTP proxy for your extension",id:"routing-data-through-a-http-proxy-for-your-extension",level:3},{value:"Bundle your extension with all the other Druid extensions",id:"bundle-your-extension-with-all-the-other-druid-extensions",level:3},{value:"Managing dependencies",id:"managing-dependencies",level:3}],m={toc:p},c="wrapper";function g(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Druid uses a module system that allows for the addition of extensions at runtime."),(0,o.kt)("h2",{id:"writing-your-own-extensions"},"Writing your own extensions"),(0,o.kt)("p",null,"Druid's extensions leverage Guice in order to add things at runtime.  Basically, Guice is a framework for Dependency Injection, but we use it to hold the expected object graph of the Druid process.  Extensions can make any changes they want/need to the object graph via adding Guice bindings.  While the extensions actually give you the capability to change almost anything however you want, in general, we expect people to want to extend one of the things listed below.  This means that we honor our ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/development/versioning"},"versioning strategy"),' for changes that affect the interfaces called out on this page, but other interfaces are deemed "internal" and can be changed in an incompatible manner even between patch releases.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a new deep storage implementation by extending the ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.segment.loading.DataSegment*")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.tasklogs.TaskLog*")," classes."),(0,o.kt)("li",{parentName:"ol"},"Add a new input source by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.data.input.InputSource"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a new input entity by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.data.input.InputEntity"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a new input source reader if necessary by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.data.input.InputSourceReader"),". You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.data.input.impl.InputEntityIteratingReader")," in most cases."),(0,o.kt)("li",{parentName:"ol"},"Add a new input format by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.data.input.InputFormat"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a new input entity reader by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.data.input.TextReader")," for text formats or ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.data.input.IntermediateRowParsingReader")," for binary formats."),(0,o.kt)("li",{parentName:"ol"},"Add Aggregators by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.aggregation.AggregatorFactory"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.aggregation.Aggregator"),",\nand ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.aggregation.BufferAggregator"),"."),(0,o.kt)("li",{parentName:"ol"},"Add PostAggregators by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.aggregation.PostAggregator"),"."),(0,o.kt)("li",{parentName:"ol"},"Add ExtractionFns by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.extraction.ExtractionFn"),"."),(0,o.kt)("li",{parentName:"ol"},"Add Complex metrics by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.segment.serde.ComplexMetricSerde"),"."),(0,o.kt)("li",{parentName:"ol"},"Add new Query types by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.QueryRunnerFactory"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.QueryToolChest"),", and\n",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.Query"),"."),(0,o.kt)("li",{parentName:"ol"},"Add new Jersey resources by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"Jerseys.addResource(binder, clazz)"),"."),(0,o.kt)("li",{parentName:"ol"},"Add new Jetty filters by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.server.initialization.jetty.ServletFilterHolder"),"."),(0,o.kt)("li",{parentName:"ol"},"Add new secret providers by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.metadata.PasswordProvider"),"."),(0,o.kt)("li",{parentName:"ol"},"Add new dynamic configuration providers by extending ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.metadata.DynamicConfigProvider"),"."),(0,o.kt)("li",{parentName:"ol"},"Add new ingest transform by implementing the ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.segment.transform.Transform")," interface from the ",(0,o.kt)("inlineCode",{parentName:"li"},"druid-processing")," package."),(0,o.kt)("li",{parentName:"ol"},"Bundle your extension with all the other Druid extensions")),(0,o.kt)("p",null,"Extensions are added to the system via an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.initialization.DruidModule"),"."),(0,o.kt)("h3",{id:"creating-a-druid-module"},"Creating a Druid Module"),(0,o.kt)("p",null,"The DruidModule class is has two methods"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"configure(Binder)")," method"),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"getJacksonModules()")," method")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"configure(Binder)")," method is the same method that a normal Guice module would have."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getJacksonModules()")," method provides a list of Jackson modules that are used to help initialize the Jackson ObjectMapper instances used by Druid.  This is how you add extensions that are instantiated via Jackson (like AggregatorFactory and InputSource objects) to Druid."),(0,o.kt)("h3",{id:"registering-your-druid-module"},"Registering your Druid Module"),(0,o.kt)("p",null,"Once you have your DruidModule created, you will need to package an extra file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"META-INF/services")," directory of your jar.  This is easiest to accomplish with a maven project by creating files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory.  There are examples of this in the Druid code under the ",(0,o.kt)("inlineCode",{parentName:"p"},"cassandra-storage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"hdfs-storage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"s3-extensions")," modules, for examples."),(0,o.kt)("p",null,"The file that should exist in your jar is"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"META-INF/services/org.apache.druid.initialization.DruidModule")),(0,o.kt)("p",null,"It should be a text file with a new-line delimited list of package-qualified classes that implement DruidModule like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"org.apache.druid.storage.cassandra.CassandraDruidModule\n")),(0,o.kt)("p",null,"If your jar has this file, then when it is added to the classpath or as an extension, Druid will notice the file and will instantiate instances of the Module.  Your Module should have a default constructor, but if you need access to runtime configuration properties, it can have a method with @Inject on it to get a Properties object injected into it from Guice."),(0,o.kt)("h3",{id:"adding-a-new-deep-storage-implementation"},"Adding a new deep storage implementation"),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"azure-storage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"google-storage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cassandra-storage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"hdfs-storage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"s3-extensions")," modules for examples of how to do this."),(0,o.kt)("p",null,"The basic idea behind the extension is that you need to add bindings for your DataSegmentPusher and DataSegmentPuller objects.  The way to add them is something like (taken from HdfsStorageDruidModule)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Binders.dataSegmentPullerBinder(binder)\n       .addBinding("hdfs")\n       .to(HdfsDataSegmentPuller.class).in(LazySingleton.class);\n\nBinders.dataSegmentPusherBinder(binder)\n       .addBinding("hdfs")\n       .to(HdfsDataSegmentPusher.class).in(LazySingleton.class);\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Binders.dataSegment*Binder()")," is a call provided by the druid-core jar which sets up a Guice multibind \"MapBinder\".  If that doesn't make sense, don't worry about it, just think of it as a magical incantation."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'addBinding("hdfs")'),' for the Puller binder creates a new handler for loadSpec objects of type "hdfs".  For the Pusher binder it creates a new type value that you can specify for the ',(0,o.kt)("inlineCode",{parentName:"p"},"druid.storage.type")," parameter."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"to(...).in(...);")," is normal Guice stuff."),(0,o.kt)("p",null,"In addition to DataSegmentPusher and DataSegmentPuller, you can also bind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataSegmentKiller: Removes segments, used as part of the Kill Task to delete unused segments, i.e. perform garbage collection of segments that are either superseded by newer versions or that have been dropped from the cluster."),(0,o.kt)("li",{parentName:"ul"},"DataSegmentMover: Allow migrating segments from one place to another, currently this is only used as part of the MoveTask to move unused segments to a different S3 bucket or prefix, typically to reduce storage costs of unused data (e.g. move to glacier or cheaper storage)"),(0,o.kt)("li",{parentName:"ul"},"DataSegmentArchiver: Just a wrapper around Mover, but comes with a pre-configured target bucket/path, so it doesn't have to be specified at runtime as part of the ArchiveTask.")),(0,o.kt)("h3",{id:"validating-your-deep-storage-implementation"},"Validating your deep storage implementation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING!")," This is not a formal procedure, but a collection of hints to validate if your new deep storage implementation is able do push, pull and kill segments."),(0,o.kt)("p",null,"It's recommended to use batch ingestion tasks to validate your implementation.\nThe segment will be automatically rolled up to Historical note after ~20 seconds.\nIn this way, you can validate both push (at realtime process) and pull (at Historical process) segments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataSegmentPusher")),(0,o.kt)("p",null,"Wherever your data storage (cloud storage service, distributed file system, etc.) is, you should be able to see one new file: ",(0,o.kt)("inlineCode",{parentName:"p"},"index.zip")," (",(0,o.kt)("inlineCode",{parentName:"p"},"partitionNum_index.zip")," for HDFS data storage) after your ingestion task ends."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataSegmentPuller")),(0,o.kt)("p",null,"After ~20 secs your ingestion task ends, you should be able to see your Historical process trying to load the new segment."),(0,o.kt)("p",null,"The following example was retrieved from a Historical process configured to use Azure for deep storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2015-04-14T02:42:33,450 INFO [ZkCoordinator-0] org.apache.druid.server.coordination.ZkCoordinator - New request[LOAD: dde_2015-01-02T00:00:00.000Z_2015-01-03T00:00:00\n.000Z_2015-04-14T02:41:09.484Z] with zNode[/druid/dev/loadQueue/192.168.33.104:8081/dde_2015-01-02T00:00:00.000Z_2015-01-03T00:00:00.000Z_2015-04-14T02:41:09.\n484Z].\n2015-04-14T02:42:33,451 INFO [ZkCoordinator-0] org.apache.druid.server.coordination.ZkCoordinator - Loading segment dde_2015-01-02T00:00:00.000Z_2015-01-03T00:00:00.0\n00Z_2015-04-14T02:41:09.484Z\n2015-04-14T02:42:33,463 INFO [ZkCoordinator-0] org.apache.druid.guice.JsonConfigurator - Loaded class[class org.apache.druid.storage.azure.AzureAccountConfig] from props[drui\nd.azure.] as [org.apache.druid.storage.azure.AzureAccountConfig@759c9ad9]\n2015-04-14T02:49:08,275 INFO [ZkCoordinator-0] org.apache.druid.utils.CompressionUtils - Unzipping file[/opt/druid/tmp/compressionUtilZipCache1263964429587449785.z\nip] to [/opt/druid/zk_druid/dde/2015-01-02T00:00:00.000Z_2015-01-03T00:00:00.000Z/2015-04-14T02:41:09.484Z/0]\n2015-04-14T02:49:08,276 INFO [ZkCoordinator-0] org.apache.druid.storage.azure.AzureDataSegmentPuller - Loaded 1196 bytes from [dde/2015-01-02T00:00:00.000Z_2015-01-03\nT00:00:00.000Z/2015-04-14T02:41:09.484Z/0/index.zip] to [/opt/druid/zk_druid/dde/2015-01-02T00:00:00.000Z_2015-01-03T00:00:00.000Z/2015-04-14T02:41:09.484Z/0]\n2015-04-14T02:49:08,277 WARN [ZkCoordinator-0] org.apache.druid.segment.loading.SegmentLocalCacheManager - Segment [dde_2015-01-02T00:00:00.000Z_2015-01-03T00:00:00.000Z_2015-04-14T02:41:09.484Z] is different than expected size. Expected [0] found [1196]\n2015-04-14T02:49:08,282 INFO [ZkCoordinator-0] org.apache.druid.server.coordination.BatchDataSegmentAnnouncer - Announcing segment[dde_2015-01-02T00:00:00.000Z_2015-01-03T00:00:00.000Z_2015-04-14T02:41:09.484Z] at path[/druid/dev/segments/192.168.33.104:8081/192.168.33.104:8081_historical__default_tier_2015-04-14T02:49:08.282Z_7bb87230ebf940188511dd4a53ffd7351]\n2015-04-14T02:49:08,292 INFO [ZkCoordinator-0] org.apache.druid.server.coordination.ZkCoordinator - Completed request [LOAD: dde_2015-01-02T00:00:00.000Z_2015-01-03T00:00:00.000Z_2015-04-14T02:41:09.484Z]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DataSegmentKiller")),(0,o.kt)("p",null,"The easiest way of testing the segment killing is marking a segment as not used and then starting a killing task in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/web-console"},"web console"),"."),(0,o.kt)("p",null,"To mark a segment as not used, you need to connect to your metadata storage and update the ",(0,o.kt)("inlineCode",{parentName:"p"},"used")," column to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," on the segment table rows."),(0,o.kt)("p",null,"To start a segment killing task, you need to access the web console then select ",(0,o.kt)("inlineCode",{parentName:"p"},"issue kill task")," for the appropriate datasource."),(0,o.kt)("p",null,"After the killing task ends, ",(0,o.kt)("inlineCode",{parentName:"p"},"index.zip")," (",(0,o.kt)("inlineCode",{parentName:"p"},"partitionNum_index.zip")," for HDFS data storage) file should be deleted from the data storage."),(0,o.kt)("h3",{id:"adding-support-for-a-new-input-source"},"Adding support for a new input source"),(0,o.kt)("p",null,"Adding support for a new input source requires to implement three interfaces, i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"InputSource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"InputEntity"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"InputSourceReader"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"InputSource")," is to define where the input data is stored. ",(0,o.kt)("inlineCode",{parentName:"p"},"InputEntity")," is to define how data can be read in parallel\nin ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/native-batch"},"native parallel indexing"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"InputSourceReader")," defines how to read your new input source and you can simply use the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"InputEntityIteratingReader")," in most cases."),(0,o.kt)("p",null,"There is an example of this in the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-s3-extensions")," module with the ",(0,o.kt)("inlineCode",{parentName:"p"},"S3InputSource")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"S3Entity"),"."),(0,o.kt)("p",null,"Adding an InputSource is done almost entirely through the Jackson Modules instead of Guice. Specifically, note the implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic List<? extends Module> getJacksonModules()\n{\n  return ImmutableList.of(\n          new SimpleModule().registerSubtypes(new NamedType(S3InputSource.class, "s3"))\n  );\n}\n')),(0,o.kt)("p",null,"This is registering the InputSource with Jackson's polymorphic serialization/deserialization layer.  More concretely, having this will mean that if you specify a ",(0,o.kt)("inlineCode",{parentName:"p"},'"inputSource": { "type": "s3", ... }')," in your IO config, then the system will load this InputSource for your ",(0,o.kt)("inlineCode",{parentName:"p"},"InputSource")," implementation."),(0,o.kt)("p",null,"Note that inside of Druid, we have made the ",(0,o.kt)("inlineCode",{parentName:"p"},"@JacksonInject")," annotation for Jackson deserialized objects actually use the base Guice injector to resolve the object to be injected.  So, if your InputSource needs access to some object, you can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"@JacksonInject")," annotation on a setter and it will get set on instantiation."),(0,o.kt)("h3",{id:"adding-support-for-a-new-data-format"},"Adding support for a new data format"),(0,o.kt)("p",null,"Adding support for a new data format requires implementing two interfaces, i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"InputFormat")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"InputEntityReader"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"InputFormat")," is to define how your data is formatted. ",(0,o.kt)("inlineCode",{parentName:"p"},"InputEntityReader")," is to define how to parse your data and convert into Druid ",(0,o.kt)("inlineCode",{parentName:"p"},"InputRow"),"."),(0,o.kt)("p",null,"There is an example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-orc-extensions")," module with the ",(0,o.kt)("inlineCode",{parentName:"p"},"OrcInputFormat")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OrcReader"),"."),(0,o.kt)("p",null,"Adding an InputFormat is very similar to adding an InputSource. They operate purely through Jackson and thus should just be additions to the Jackson modules returned by your DruidModule."),(0,o.kt)("h3",{id:"adding-aggregators"},"Adding Aggregators"),(0,o.kt)("p",null,"Adding AggregatorFactory objects is very similar to InputSource objects.  They operate purely through Jackson and thus should just be additions to the Jackson modules returned by your DruidModule."),(0,o.kt)("h3",{id:"adding-complex-metrics"},"Adding Complex Metrics"),(0,o.kt)("p",null,"Adding ComplexMetrics is a little ugly in the current version.  The method of getting at complex metrics is through registration with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ComplexMetrics.registerSerde()")," method.  There is no special Guice stuff to get this working, just in your ",(0,o.kt)("inlineCode",{parentName:"p"},"configure(Binder)")," method register the serialization/deserialization."),(0,o.kt)("h3",{id:"adding-new-query-types"},"Adding new Query types"),(0,o.kt)("p",null,"Adding a new Query type requires the implementation of three interfaces."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.Query")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.QueryToolChest")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.druid.query.QueryRunnerFactory"))),(0,o.kt)("p",null,"Registering these uses the same general strategy as a deep storage mechanism does.  You do something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"DruidBinders.queryToolChestBinder(binder)\n            .addBinding(SegmentMetadataQuery.class)\n            .to(SegmentMetadataQueryQueryToolChest.class);\n\nDruidBinders.queryRunnerFactoryBinder(binder)\n            .addBinding(SegmentMetadataQuery.class)\n            .to(SegmentMetadataQueryRunnerFactory.class);\n")),(0,o.kt)("p",null,"The first one binds the SegmentMetadataQueryQueryToolChest for usage when a SegmentMetadataQuery is used.  The second one does the same thing but for the QueryRunnerFactory instead."),(0,o.kt)("h3",{id:"adding-new-jersey-resources"},"Adding new Jersey resources"),(0,o.kt)("p",null,"Adding new Jersey resources to a module requires calling the following code to bind the resource in the module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Jerseys.addResource(binder, NewResource.class);\n")),(0,o.kt)("h3",{id:"adding-a-new-password-provider-implementation"},"Adding a new Password Provider implementation"),(0,o.kt)("p",null,"You will need to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.metadata.PasswordProvider")," interface. For every place where Druid uses PasswordProvider, a new instance of the implementation will be created,\nthus make sure all the necessary information required for fetching each password is supplied during object instantiation.\nIn your implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.initialization.DruidModule"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getJacksonModules")," should look something like this -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    return ImmutableList.of(\n        new SimpleModule("SomePasswordProviderModule")\n            .registerSubtypes(\n                new NamedType(SomePasswordProvider.class, "some")\n            )\n    );\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"SomePasswordProvider")," is the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"PasswordProvider")," interface, you can have a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.metadata.EnvironmentVariablePasswordProvider")," for example."),(0,o.kt)("h3",{id:"adding-a-new-dynamicconfigprovider-implementation"},"Adding a new DynamicConfigProvider implementation"),(0,o.kt)("p",null,"You will need to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.metadata.DynamicConfigProvider")," interface. For every place where Druid uses DynamicConfigProvider, a new instance of the implementation will be created,\nthus make sure all the necessary information required for fetching all information is supplied during object instantiation.\nIn your implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.initialization.DruidModule"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getJacksonModules")," should look something like this -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    return ImmutableList.of(\n        new SimpleModule("SomeDynamicConfigProviderModule")\n            .registerSubtypes(\n                new NamedType(SomeDynamicConfigProvider.class, "some")\n            )\n    );\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"SomeDynamicConfigProvider")," is the implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"DynamicConfigProvider")," interface, you can have a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.metadata.MapStringDynamicConfigProvider")," for example."),(0,o.kt)("h3",{id:"adding-a-transform-extension"},"Adding a Transform Extension"),(0,o.kt)("p",null,"To create a transform extension implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.segment.transform.Transform")," interface. You'll need to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid-processing")," package to import ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.segment.transform"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.fasterxml.jackson.annotation.JsonCreator;\nimport com.fasterxml.jackson.annotation.JsonProperty;\nimport org.apache.druid.segment.transform.RowFunction;\nimport org.apache.druid.segment.transform.Transform;\n\npublic class MyTransform implements Transform {\n    private final String name;\n\n    @JsonCreator\n    public MyTransform(\n        @JsonProperty("name") final String name\n    ) {\n        this.name = name;\n    }\n\n    @JsonProperty\n    @Override\n    public String getName() {\n        return name;\n    }\n\n    @Override\n    public RowFunction getRowFunction() {\n        return new MyRowFunction();\n    }\n\n    static class MyRowFunction implements RowFunction {\n        @Override\n        public Object eval(Row row) {\n            return "transformed-value";\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Then register your transform as a Jackson module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.fasterxml.jackson.databind.Module;\nimport com.fasterxml.jackson.databind.jsontype.NamedModule;\nimport com.fasterxml.jackson.databind.module.SimpleModule;\nimport com.google.inject.Binder;\nimport com.google.common.collect.ImmutableList;\nimport org.apache.druid.initialization.DruidModule;\n\npublic class MyTransformModule implements DruidModule {\n    @Override\n    public List<? extends Module> getJacksonModules() {\n        return return ImmutableList.of(\n            new SimpleModule("MyTransformModule").registerSubtypes(\n                new NamedType(MyTransform.class, "my-transform")\n            )\n        ):\n    }\n\n    @Override\n    public void configure(Binder binder) {\n    }\n}\n')),(0,o.kt)("h3",{id:"adding-your-own-custom-pluggable-coordinator-duty"},"Adding your own custom pluggable Coordinator Duty"),(0,o.kt)("p",null,"The coordinator periodically runs jobs, so-called ",(0,o.kt)("inlineCode",{parentName:"p"},"CoordinatorDuty")," which include loading new segments, segment balancing, etc.\nDruid users can add custom pluggable coordinator duties, which are not part of Core Druid, without modifying any Core Druid classes.\nUsers can do this by writing their own custom coordinator duty implementing the interface ",(0,o.kt)("inlineCode",{parentName:"p"},"CoordinatorCustomDuty")," and setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonTypeName"),".\nNext, users will need to register their custom coordinator as subtypes in their Module's ",(0,o.kt)("inlineCode",{parentName:"p"},"DruidModule#getJacksonModules()"),".\nOnce these steps are done, user will be able to load their custom coordinator duty using the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.coordinator.dutyGroups=[<GROUP_NAME_1>, <GROUP_NAME_2>, ...]\ndruid.coordinator.<GROUP_NAME_1>.duties=[<DUTY_NAME_MATCHING_JSON_TYPE_NAME_1>, <DUTY_NAME_MATCHING_JSON_TYPE_NAME_2>, ...]\ndruid.coordinator.<GROUP_NAME_1>.period=<GROUP_NAME_1_RUN_PERIOD>\n\ndruid.coordinator.<GROUP_NAME_1>.duty.<DUTY_NAME_MATCHING_JSON_TYPE_NAME_1>.<SOME_CONFIG_1_KEY>=<SOME_CONFIG_1_VALUE>\ndruid.coordinator.<GROUP_NAME_1>.duty.<DUTY_NAME_MATCHING_JSON_TYPE_NAME_1>.<SOME_CONFIG_2_KEY>=<SOME_CONFIG_2_VALUE>\n")),(0,o.kt)("p",null,"In the new system for pluggable Coordinator duties, similar to what coordinator already does today, the duties can be grouped together.\nThe duties will be grouped into multiple groups as per the elements in list ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.coordinator.dutyGroups"),".\nAll duties in the same group will have the same run period configured by ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.coordinator.<GROUP_NAME>.period"),".\nCurrently, there is a single thread running the duties sequentially for each group. "),(0,o.kt)("p",null,"For example, see ",(0,o.kt)("inlineCode",{parentName:"p"},"KillSupervisorsCustomDuty")," for a custom coordinator duty implementation and the ",(0,o.kt)("inlineCode",{parentName:"p"},"custom-coordinator-duties"),"\nintegration test group which loads ",(0,o.kt)("inlineCode",{parentName:"p"},"KillSupervisorsCustomDuty")," using the configs set in ",(0,o.kt)("inlineCode",{parentName:"p"},"integration-tests/docker/environment-configs/test-groups/custom-coordinator-duties"),".\nThis config file adds the configs below to enable a custom coordinator duty."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'druid.coordinator.dutyGroups=["cleanupMetadata"]\ndruid.coordinator.cleanupMetadata.duties=["killSupervisors"]\ndruid.coordinator.cleanupMetadata.duty.killSupervisors.retainDuration=PT0M\ndruid.coordinator.cleanupMetadata.period=PT10S\n')),(0,o.kt)("p",null,"These configurations create a custom coordinator duty group called ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanupMetadata")," which runs a custom coordinator duty called ",(0,o.kt)("inlineCode",{parentName:"p"},"killSupervisors")," every 10 seconds.\nThe custom coordinator duty ",(0,o.kt)("inlineCode",{parentName:"p"},"killSupervisors")," also has a config called ",(0,o.kt)("inlineCode",{parentName:"p"},"retainDuration")," which is set to 0 minute."),(0,o.kt)("h3",{id:"routing-data-through-a-http-proxy-for-your-extension"},"Routing data through a HTTP proxy for your extension"),(0,o.kt)("p",null,"You can add the ability for the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpClient")," of your extension to connect through an HTTP proxy. "),(0,o.kt)("p",null,"To support proxy connection for your extension's HTTP client:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpClientProxyConfig")," as a ",(0,o.kt)("inlineCode",{parentName:"li"},"@JsonProperty")," to the HTTP config class of your extension. "),(0,o.kt)("li",{parentName:"ol"},"In the extension's module class, add ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpProxyConfig")," config to ",(0,o.kt)("inlineCode",{parentName:"li"},"HttpClientConfig"),".\nFor example, where ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," variable is the extension's HTTP config from step 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"final HttpClientConfig.Builder builder = HttpClientConfig\n    .builder()\n    .withNumConnections(1)\n    .withReadTimeout(config.getReadTimeout().toStandardDuration())\n    .withHttpProxyConfig(config.getProxyConfig());\n")),(0,o.kt)("h3",{id:"bundle-your-extension-with-all-the-other-druid-extensions"},"Bundle your extension with all the other Druid extensions"),(0,o.kt)("p",null,"When you do ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn install"),", Druid extensions will be packaged within the Druid tarball and ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," directory, which are both underneath ",(0,o.kt)("inlineCode",{parentName:"p"},"distribution/target/"),"."),(0,o.kt)("p",null,"If you want your extension to be included, you can add your extension's maven coordinate as an argument at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/blob/master/distribution/pom.xml#L95"},"distribution/pom.xml")),(0,o.kt)("p",null,"During ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn install"),", maven will install your extension to the local maven repository, and then call ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/pull-deps"},"pull-deps")," to pull your extension from\nthere. In the end, you should see your extension underneath ",(0,o.kt)("inlineCode",{parentName:"p"},"distribution/target/extensions")," and within Druid tarball."),(0,o.kt)("h3",{id:"managing-dependencies"},"Managing dependencies"),(0,o.kt)("p",null,"Managing library collisions can be daunting for extensions which draw in commonly used libraries. Here is a list of group IDs for libraries that are suggested to be specified with a ",(0,o.kt)("inlineCode",{parentName:"p"},"provided")," scope to prevent collision with versions used in druid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"org.apache.druid",\n"com.metamx.druid",\n"asm",\n"org.ow2.asm",\n"org.jboss.netty",\n"com.google.guava",\n"com.google.code.findbugs",\n"com.google.protobuf",\n"com.esotericsoftware.minlog",\n"log4j",\n"org.slf4j",\n"commons-logging",\n"org.eclipse.jetty",\n"org.mortbay.jetty",\n"com.sun.jersey",\n"com.sun.jersey.contribs",\n"common-beanutils",\n"commons-codec",\n"commons-lang",\n"commons-cli",\n"commons-io",\n"javax.activation",\n"org.apache.httpcomponents",\n"org.apache.zookeeper",\n"org.codehaus.jackson",\n"com.fasterxml.jackson",\n"com.fasterxml.jackson.core",\n"com.fasterxml.jackson.dataformat",\n"com.fasterxml.jackson.datatype",\n"org.roaringbitmap",\n"net.java.dev.jets3t"\n')),(0,o.kt)("p",null,"See the documentation in ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.druid.cli.PullDependencies")," for more information."))}g.isMDXComponent=!0}}]);