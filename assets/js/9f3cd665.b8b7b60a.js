"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"JS and DOM Exercises",sidebar_label:"Overview",sidebar_position:1,draft:!1},i=void 0,s={unversionedId:"labs/js-and-dom-exercises/index",id:"labs/js-and-dom-exercises/index",title:"JS and DOM Exercises",description:"This lab covers topics from Module2DOM and Forms.",source:"@site/content/coursework/labs/2.js-and-dom-exercises/index.mdx",sourceDirName:"labs/2.js-and-dom-exercises",slug:"/labs/js-and-dom-exercises/",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/2.js-and-dom-exercises/index.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1671046437,formattedLastUpdatedAt:"Dec 14, 2022",sidebarPosition:1,frontMatter:{title:"JS and DOM Exercises",sidebar_label:"Overview",sidebar_position:1,draft:!1},sidebar:"coursework",previous:{title:"Git - Hello World",permalink:"/IT3049C/coursework/labs/hello-world/"},next:{title:"Overview",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/"}},l={},c=[{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This lab covers topics from ",(0,a.kt)("em",{parentName:"p"},"Module2: JavaScript Fundamentals")," and ",(0,a.kt)("em",{parentName:"p"},"Module 3:DOM and Forms"),".")),(0,a.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Practice the use of Git and GitHub."),(0,a.kt)("li",{parentName:"ol"},"Practice the use of JavaScript to select, traverse, manipulate, and create DOM elements. "),(0,a.kt)("li",{parentName:"ol"},"Practise the use of JavaScript to code solutions to techincal problems.")),(0,a.kt)("h2",{id:"guidelines"},"Guidelines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This assignment utilized automated-tests to check for the correctness of your code. These tests can be a bit specific about what you name things, where do you place them, what ",(0,a.kt)("inlineCode",{parentName:"li"},"HTML")," tag you use for them, ...etc. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Please Follow the instructions on this assignment for the best outcome."))),(0,a.kt)("li",{parentName:"ul"},"Make a habbit of committing and pusing your code frequently to github."),(0,a.kt)("li",{parentName:"ul"},"Make sure to meanignful commit messages that describe what you did."),(0,a.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks continue to pass after you make changes."),(0,a.kt)("li",{parentName:"ul"},"To be able to run the automated grading checks, make sure you have installed Node.js, per the instructions posted on Canvas."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"),", and the feedback form at the end of the instructions.")),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("p",null,"The assignment instructions are split into the following pages to make it easier to follow."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," to install the appropriate dependencies."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"string-exercises"},"String Exercises")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"array-exercises"},"Array Exercises")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"show-password-toggle"},"Password Reveal")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"word-counter"},"Word Counter"))))}d.isMDXComponent=!0}}]);