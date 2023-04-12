"use strict";(self.webpackChunkswift_serve_docs=self.webpackChunkswift_serve_docs||[]).push([[754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},i="Automate the creation of a REST API",l={unversionedId:"tutorial-web-services/automatic-rest",id:"tutorial-web-services/automatic-rest",title:"Automate the creation of a REST API",description:"With SwiftServe the creation of REST API can be done automatically. All what you need is only the creation of models. In addition, SwiftServe adds the validation of received that if you want to add it to your manually created REST is a bunch of headache. SwiftServe support inheritance and complex design, well written error message and more...",source:"@site/docs/tutorial-web-services/automatic-rest.md",sourceDirName:"tutorial-web-services",slug:"/tutorial-web-services/automatic-rest",permalink:"/docs/tutorial-web-services/automatic-rest",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-web-services/automatic-rest.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creation of a REST API manually",permalink:"/docs/tutorial-web-services/manuelly-rest"},next:{title:"Complex design",permalink:"/docs/tutorial-web-services/complex-design"}},s={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"automate-the-creation-of-a-rest-api"},"Automate the creation of a REST API"),(0,r.kt)("p",null,"With SwiftServe the creation of REST API can be done automatically. All what you need is only the creation of models. In addition, SwiftServe adds the validation of received that if you want to add it to your manually created REST is a bunch of headache. SwiftServe support inheritance and complex design, well written error message and more..."),(0,r.kt)("p",null,"Here an example where you can use SwiftServe to automate the creation of REST API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TodoPersistence.java"',title:'"TodoPersistence.java"'},'@DataSource("todoDtSrc")\npublic class TodoPersistence implements Persistence<Todo> {\n  @Override\n  public List<Todo> getAll() {\n    // ...\n    return todos;\n  }\n  // other methods ...\n}\n')),(0,r.kt)("p",null,"Here we have the model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Todo.java"',title:'"Todo.java"'},'@Rest\n@FromDataSource("todoDtSrc")\npublic class Todo {\n  private Integer id;\n  private String content;\n  private Boolean completed;\n}\n')),(0,r.kt)("p",null,"and now let's to generate the REST API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MyApplication.java"',title:'"MyApplication.java"'},'@WebServlet("/*")\npublic class MyApplication extends Application {\n  @Override\n  protected void execute() throws Exception {\n    generateRest();\n  }\n}\n')),(0,r.kt)("p",null,"Congratulation \ud83c\udf8a now you have generated your REST API with the next endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /todos"),": get all todos"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /todos?limit=n"),": get todos limited to n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /todos/:id"),": get a todo by id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POST /todos"),": add a new todo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUT /todos/:id"),": update all the field of an existed todo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PATCH /todos/:id"),": update one field from an existed todo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DELETE /todos/:id"),": delete an existed todo.")),(0,r.kt)("p",null,"The automatation of create REST APIs include the feature of auto-plural the name of models in the given models."),(0,r.kt)("p",null,"SwiftServe offers also a way to generate your REST APIs without writting the persistence tier, in this way you can test your application without needs of persistence tier. This is done by creating a local file database, which is called in the context of this framework ",(0,r.kt)("inlineCode",{parentName:"p"},"Default datasource"),"."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Rest\n@FromDataSource\npublic class Todo {\n  private Integer id;\n  private String content;\n  private Boolean completed;\n}\n")),(0,r.kt)("p",null,"This will give you the same result as the last example, with difference of the where the data is stored (persistence tier)."))}p.isMDXComponent=!0}}]);