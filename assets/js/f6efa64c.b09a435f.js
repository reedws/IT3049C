"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5309],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"Overview",sidebar_position:1},o=void 0,l={unversionedId:"labs/chatting-app/index",id:"labs/chatting-app/index",title:"Overview",description:"Overview",source:"@site/content/coursework/labs/3.chatting-app/index.mdx",sourceDirName:"labs/3.chatting-app",slug:"/labs/chatting-app/",permalink:"/IT3049C/coursework/labs/chatting-app/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/3.chatting-app/index.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1671046437,formattedLastUpdatedAt:"Dec 14, 2022",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"coursework",previous:{title:"Finalize",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/finalize"},next:{title:"Overview",permalink:"/IT3049C/coursework/labs/chatting-app/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Helpful Emoji \ud83d\udc28 \ud83d\udcb0 \ud83d\udcaf \ud83e\udd89 \ud83d\udcdc \ud83d\udca3 \ud83d\udea8",id:"helpful-emoji-------",level:2},{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Background",id:"background",level:2},{value:"HTTP Requests",id:"http-requests",level:3},{value:"Bootstrap",id:"bootstrap",level:3},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Output",id:"output",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This assignment covers concepts and techniques taught in the class so far:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using Git and GitHub"),(0,i.kt)("li",{parentName:"ul"},"using JavaScript, and manipulating the DOM using JavaScript,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AND sending and recieving HTTP requests"),".")),(0,i.kt)("p",null,"The culmination of that is an interactive messageing application."),(0,i.kt)("h2",{id:"helpful-emoji-------"},"Helpful Emoji \ud83d\udc28 \ud83d\udcb0 \ud83d\udcaf \ud83e\udd89 \ud83d\udcdc \ud83d\udca3 \ud83d\udea8"),(0,i.kt)("p",null,"Throughout the exercise, you may run into some of these emojis. They're here to help you."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Kody the Koala Bear \ud83d\udc28")," will tell you when there's something specific you should do")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Marty the Money Bag \ud83d\udcb0")," will give you specific tips (and sometimes code) along the way")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dominic the Document \ud83d\udcdc")," will give you links to useful documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Olivia the Owl \ud83e\udd89")," will give you useful tidbits/best practice notes and a link for elaboration and feedback.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Berry the Bomb \ud83d\udca3")," will be hanging around anywhere you need to blow stuff up (delete code)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Alfred the Alert \ud83d\udea8 or ",(0,i.kt)("inlineCode",{parentName:"strong"},"\u2705 ++"))," this indicates a change to the automated tests. It could indicate another automated test passing, or indicates why a certain test failed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Hannah the Hundred \ud83d\udcaf")," will give you extra challenges you can do if you finish the exercises early."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is inspired by Kent C. Dodds' ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/react-workshop-app/tree/main/example/react-fundamentals#helpful-emoji-------"},"workshops")," ")),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a web application using HTML, CSS, and JavaScript."),(0,i.kt)("li",{parentName:"ol"},"Style the application using Bootstrap and CSS. "),(0,i.kt)("li",{parentName:"ol"},"Demonstrate ability to create and control HTML forms using form and input elements."),(0,i.kt)("li",{parentName:"ol"},"Demonstrate understanding of event-oriented programming."),(0,i.kt)("li",{parentName:"ol"},"Demonstrate the ability to send and receive HTTP requests from a server.")),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("h3",{id:"http-requests"},"HTTP Requests"),(0,i.kt)("p",null,"Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a stateless protocol, meaning that the server does not keep any data (state) between two requests."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"An HTTP request is made by a client, to a named host, which is located on a server. The aim of the request is to access a resource on the server.")),(0,i.kt)("p",null,"HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. ",(0,i.kt)("em",{parentName:"p"},"(GET, POST, PUT, DELETE)")),(0,i.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,i.kt)("p",null,"Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. It is a collection of CSS and HTML snippets that can be used to quickly create a site."),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This assignment utilized automated-tests to check for the correctness of your code. These tests can be a bit specific about what you name things, where do you place them, what ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML")," tag you use for them, ...etc. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Please Follow the instructions on this assignment for the best outcome."))),(0,i.kt)("li",{parentName:"ul"},"Make a habbit of committing and pusing your code frequently to github."),(0,i.kt)("li",{parentName:"ul"},"Make sure to meanignful commit messages that describe what you did."),(0,i.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks continue to pass after you make changes."),(0,i.kt)("li",{parentName:"ul"},"To be able to run the automated grading checks, make sure you have installed Node.js, per the instructions posted on Canvas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"),", and the feedback form at the end of the instructions.")),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"The assignment instructions are split into the following pages to make it easier to follow."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," to install the appropriate dependencies."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"layout"},"Setting up the Layout")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"javascript"},"Bringing it to life")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"finalize"},"Finalize and Submit"))),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("img",{alt:"example image",src:a(1234).Z,style:{width:"450px",border:"1px #ddd solid"}}))}c.isMDXComponent=!0},1234:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-3760162e5d7189490c7385b681949f89.png"}}]);