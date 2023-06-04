"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"Overview",sidebar_label:"Rock Paper Scissors",sidebar_position:3,draft:!1},o=void 0,s={unversionedId:"assignments/rock-paper-scissors/index",id:"assignments/rock-paper-scissors/index",title:"Overview",description:"Overview",source:"@site/content/coursework/assignments/3.rock-paper-scissors/index.mdx",sourceDirName:"assignments/3.rock-paper-scissors",slug:"/assignments/rock-paper-scissors/",permalink:"/IT3049C/coursework/assignments/rock-paper-scissors/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments/3.rock-paper-scissors/index.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1685908669,formattedLastUpdatedAt:"Jun 4, 2023",sidebarPosition:3,frontMatter:{title:"Overview",sidebar_label:"Rock Paper Scissors",sidebar_position:3,draft:!1},sidebar:"coursework",previous:{title:"Finalize",permalink:"/IT3049C/coursework/assignments/js-exercises/finalize"},next:{title:"Page Layout",permalink:"/IT3049C/coursework/assignments/rock-paper-scissors/layout"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Background",id:"background",level:2},{value:"Document Object Model (DOM)",id:"document-object-model-dom",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"DOM Manipulation",id:"dom-manipulation",level:3},{value:"Bootstrap",id:"bootstrap",level:3},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Extra Credit Opportunities",id:"extra-credit-opportunities",level:2},{value:"Output",id:"output",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This assignment covers concepts and techniques taught in the class so far. Using Git and GitHub, using JavaScript, and manipulating the DOM using JavaScript. The culmination of that, is the first game we build this semester, Rock-Paper-Scissors, using HTML, CSS, and JavaScript."),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a web game using HTML, CSS, and JavaScript."),(0,i.kt)("li",{parentName:"ol"},"Style the game using Bootstrap and CSS. "),(0,i.kt)("li",{parentName:"ol"},"Demonstrate ability to create and control HTML forms using form and input elements."),(0,i.kt)("li",{parentName:"ol"},"Demonstrate understanding of event-oriented programming."),(0,i.kt)("li",{parentName:"ol"},"Demonstrate understanding of the SOLID principle (Single Responsibility) by separating the game logic from the game controller.")),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("h3",{id:"document-object-model-dom"},"Document Object Model (DOM)"),(0,i.kt)("p",null,"The Document Object Model (DOM) is a set of APIs for controlling HTML and styling information that makes heavy use of the Document object/the web page.\nIt is a tree-structure representation of the HTML elements that makes up the web page.\n",(0,i.kt)("img",{alt:"DOM represenation",src:n(2311).Z,width:"1072",height:"802"})),(0,i.kt)("h3",{id:"javascript"},"JavaScript"),(0,i.kt)("p",null,"JavaScript is what brings web pages built with HTML and CSS life. It is a programming language that adds interactivity to your website. it allows us to manipulate the DOM and create interactive web pages.\n",(0,i.kt)("img",{alt:"HTML vs CSS vs JS",src:n(2701).Z,width:"480",height:"480"})),(0,i.kt)("h3",{id:"dom-manipulation"},"DOM Manipulation"),(0,i.kt)("p",null,"To add interactivity and control over the static web pages, we need to be able to achieve certain actions. DOM Manipulation is about:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selecting elements in the DOM"),(0,i.kt)("li",{parentName:"ul"},"Traversing elements in the DOM"),(0,i.kt)("li",{parentName:"ul"},"Manipulating elements in the DOM",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Changing elements' attributes"),(0,i.kt)("li",{parentName:"ul"},"Changing elements' content"),(0,i.kt)("li",{parentName:"ul"},"Changing elements' styles"))),(0,i.kt)("li",{parentName:"ul"},"Creating elements in the DOM")),(0,i.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,i.kt)("p",null,"Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. It is a collection of CSS and HTML snippets that can be used to quickly create a site."),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This assignment utilized automated-tests to check for the correctness of your code. These tests can be a bit specific about what you name things, where do you place them, what ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML")," tag you use for them, ...etc. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Please Follow the instructions on this assignment for the best outcome."))),(0,i.kt)("li",{parentName:"ul"},"Make a habbit of committing and pusing your code frequently to github."),(0,i.kt)("li",{parentName:"ul"},"Make sure to meanignful commit messages that describe what you did."),(0,i.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks continue to pass after you make changes."),(0,i.kt)("li",{parentName:"ul"},"To be able to run the automated grading checks, make sure you have installed Node.js, per the instructions posted on Canvas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"),", and the feedback form at the end of the instructions.")),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"The assignment instructions are split into the following pages to make it easier to follow."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," to install the appropriate dependencies."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"layout"},"Setting up the Layout")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"styling"},"Styling using CSS and Bootstrap 4")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"logic"},"Implementing Game Logic")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"controller"},"Putting it all together")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"finalize"},"Finalize and Submit"))),(0,i.kt)("h2",{id:"extra-credit-opportunities"},"Extra Credit Opportunities"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reset Game Button (3 points - Required for teams more than 2)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User can Reset the game and Type in a new player name (3 points)")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Use Buttons instead of Dropdown (1 Extra Credit Points)"),(0,i.kt)("li",{parentName:"ol"},"Unit tests (2 points per test)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"building some unit tests for the ",(0,i.kt)("a",{parentName:"li",href:"controller"},"Putting it all together")," portion of the assignment.")),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("img",{alt:"example image",src:n(9109).Z,style:{width:"450px",border:"1px #ddd solid"}}))}c.isMDXComponent=!0},9109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-f340f84b4fc4290ad265b8f65b8a8baa.png"},2701:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web-tech-6df0e986bc8c8e20e33611cdb5ce243f.GIF"},2311:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DOM-48ab1c04c2f0fb2191cbbe6892fc5fec.jpg"}}]);