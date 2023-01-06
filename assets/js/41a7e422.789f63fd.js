"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Instructions",sidebar_position:5,draft:!1},i=void 0,l={unversionedId:"labs/chatting-app-storage/index",id:"labs/chatting-app-storage/index",title:"Instructions",description:"Overview",source:"@site/content/coursework/labs/4.chatting-app-storage/index.mdx",sourceDirName:"labs/4.chatting-app-storage",slug:"/labs/chatting-app-storage/",permalink:"/IT3049C/coursework/labs/chatting-app-storage/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/4.chatting-app-storage/index.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1673047227,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:5,frontMatter:{title:"Instructions",sidebar_position:5,draft:!1},sidebar:"coursework",previous:{title:"Finalize",permalink:"/IT3049C/coursework/labs/chatting-app/finalize"},next:{title:"Instructions",permalink:"/IT3049C/coursework/labs/chatting-app-storage/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Background",id:"background",level:2},{value:"Web Storage",id:"web-storage",level:3},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This assignment covers concepts and techniques taught in the class so far:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using Git and GitHub"),(0,r.kt)("li",{parentName:"ul"},"using JavaScript, and manipulating the DOM using JavaScript,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AND using ",(0,r.kt)("inlineCode",{parentName:"strong"},"localStorage")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"sessionStorage")),".")),(0,r.kt)("p",null,"The culmination of that is an interactive messageing application."),(0,r.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a web application using HTML, CSS, and JavaScript."),(0,r.kt)("li",{parentName:"ol"},"Style the application using Bootstrap and CSS. "),(0,r.kt)("li",{parentName:"ol"},"Demonstrate ability to create and control HTML forms using form and input elements."),(0,r.kt)("li",{parentName:"ol"},"Demonstrate understanding of event-oriented programming."),(0,r.kt)("li",{parentName:"ol"},"Demonstrate the ability to send and receive HTTP requests from a server."),(0,r.kt)("li",{parentName:"ol"},"Demonstrate the ability to send ")),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("h3",{id:"web-storage"},"Web Storage"),(0,r.kt)("p",null,"For a client side application, you can store data as key-value pairs in a browser's local and/or session storage depending on the use case."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"Session Storage - Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"Local Storage - Docs"))),(0,r.kt)("h2",{id:"guidelines"},"Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make a habit of committing and pusing your code frequently to github."),(0,r.kt)("li",{parentName:"ul"},"Make sure to meanignful commit messages that describe what you did."),(0,r.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks continue to pass after you make changes."),(0,r.kt)("li",{parentName:"ul"},"To be able to run the automated grading checks, make sure you have installed Node.js, per the instructions posted on Canvas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"),", and the feedback form at the end of the instructions.")),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"The assignment instructions are split into the following pages to make it easier to follow."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"clone down your existing repository from last week's lab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For this lab, you need to create a functionality that:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Disable the message input until a name is provided and saved to the ",(0,r.kt)("inlineCode",{parentName:"li"},"localStorage"),"."),(0,r.kt)("li",{parentName:"ol"},"Have a button where users can choose to save their username."),(0,r.kt)("li",{parentName:"ol"},"Allow users to modify their saved name."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For 5 Extra Credit point, create a dark mode for the application."))))}c.isMDXComponent=!0}}]);