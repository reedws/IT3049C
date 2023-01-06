"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5,title:"Word Counter",draft:!1},i=void 0,s={unversionedId:"labs/js-and-dom-exercises/word-counter",id:"labs/js-and-dom-exercises/word-counter",title:"Word Counter",description:"The marked file is the file you'll be using in the part of the assignment.",source:"@site/content/coursework/labs/2.js-and-dom-exercises/4.word-counter.md",sourceDirName:"labs/2.js-and-dom-exercises",slug:"/labs/js-and-dom-exercises/word-counter",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/word-counter",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/2.js-and-dom-exercises/4.word-counter.md",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1673047227,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Word Counter",draft:!1},sidebar:"coursework",previous:{title:"Password Reveal",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/show-password-toggle"},next:{title:"Finalize",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/finalize"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Automated Tests",id:"automated-tests",level:2},{value:"Instructions",id:"instructions",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The marked file is the file you'll be using in the part of the assignment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  .\n  \u251c\u2500\u2500 exercises\n  \u2502   ..\n  \u2502   \u251c\u2500\u2500 word counter\n--\u2502   \u2502   \u251c\u2500\u2500 app.js  \u2b05\ufe0f\n--\u2502   \u2502   \u251c\u2500\u2500 index.html  \u2b05\ufe0f\n  \u2502   \u2502   \u2514\u2500\u2500 style.css\n  \u2502   \u2514\u2500\u2500 ..\n  ..\n")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Word counter html file in your browser: ",(0,o.kt)("inlineCode",{parentName:"li"},"exercises/word-counter/index.html")),(0,o.kt)("li",{parentName:"ol"},"Type something in the ",(0,o.kt)("inlineCode",{parentName:"li"},"textarea"),"; notice how the word counter doesn't update values accordingly.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You'll need to provide the correct implementation for the word counter to function properly. ")))),(0,o.kt)("h2",{id:"automated-tests"},"Automated Tests"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To run this part's automated test, you'll need to run the following command to open up cypress. ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run cypress:open")),(0,o.kt)("li",{parentName:"ol"},"You should be presented with multiple tests and checks, choose the ",(0,o.kt)("inlineCode",{parentName:"li"},"word-counter")," one, and automated test should run (and fail) in the embedded browser. ",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"notice how every time you make a change to the web page or its associated files, the test will re-run.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The goal in this assignment is to select the and manipulate the correct DOM elements to pass this automated test. ")),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"check out ",(0,o.kt)("inlineCode",{parentName:"li"},"exercises/word-counter/index.html")," file, and identify the elements of interest (textarea, and stats section) and their associated selectors."),(0,o.kt)("li",{parentName:"ol"},"in the ",(0,o.kt)("inlineCode",{parentName:"li"},"exercises/word-counter/app.js")," file, create 2 constants with references to the password input and the reveal button from the DOM."),(0,o.kt)("li",{parentName:"ol"},"Create an Event Listener on the password reveal button"),(0,o.kt)("li",{parentName:"ol"},"The event listener should toggle the password field attribute between ",(0,o.kt)("inlineCode",{parentName:"li"},"password")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," to change the visibility of the password field content.")))}u.isMDXComponent=!0}}]);