"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9067],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=s,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const i={sidebar_position:2,title:"String Exercises",draft:!1},o=void 0,a={unversionedId:"labs/js-and-dom-exercises/string-exercises",id:"labs/js-and-dom-exercises/string-exercises",title:"String Exercises",description:"The marked file is the file you'll be using in the part of the assignment.",source:"@site/content/coursework/labs/2.js-and-dom-exercises/1.string-exercises.md",sourceDirName:"labs/2.js-and-dom-exercises",slug:"/labs/js-and-dom-exercises/string-exercises",permalink:"/coursework/labs/js-and-dom-exercises/string-exercises",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/2.js-and-dom-exercises/1.string-exercises.md",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1671045369,formattedLastUpdatedAt:"Dec 14, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"String Exercises",draft:!1},sidebar:"coursework",previous:{title:"Overview",permalink:"/coursework/labs/js-and-dom-exercises/"},next:{title:"Array Exercises",permalink:"/coursework/labs/js-and-dom-exercises/array-exercises"}},l={},c=[{value:"Instructions",id:"instructions",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The marked file is the file you'll be using in the part of the assignment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"  .\n  \u251c\u2500\u2500 exercises\n  \u2502   ..\n  \u2502   \u251c\u2500\u2500 string-exercises\n  \u2502   \u2502   \u251c\u2500\u2500 css\n  \u2502   \u2502   \u2502   \u2514\u2500\u2500 style.css\n  \u2502   \u2502   \u251c\u2500\u2500 js\n  \u2502   \u2502   \u2502   \u251c\u2500\u2500 __tests__\n  \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 stringsExercises.js\n  \u2502   \u2502   \u2502   \u251c\u2500\u2500 app.js\n--\u2502   \u2502   \u2502   \u2514\u2500\u2500 strings.js \u2b05\ufe0f\n  \u2502   \u2502   \u2514\u2500\u2500 index.html\n  \u2502   \u2514\u2500\u2500 ..\n  ..\n")),(0,s.kt)("p",null,"when opening the project in your browser, you will need to navigate to the string exercises assignment page to see the result of your work on the web page."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"These exercises will also help you when working on the JS Exercises Assignment.")),(0,s.kt)("h2",{id:"instructions"},"Instructions"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open the string exercises html file in your browser: ",(0,s.kt)("inlineCode",{parentName:"li"},"exercises/string-exercises/index.html")),(0,s.kt)("li",{parentName:"ol"},"Type something in the ",(0,s.kt)("inlineCode",{parentName:"li"},"textarea"),"; notice how the text is presented back ",(0,s.kt)("strong",{parentName:"li"},"as is ")," in the paragraphs underneath.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Your tasks here would be provide the correct implementation for the various methods in the ",(0,s.kt)("inlineCode",{parentName:"li"},"exercises/string-exercises/js/strings.js")," file."))),(0,s.kt)("li",{parentName:"ol"},"To run the automated checks for this assignment, run the following command: ",(0,s.kt)("inlineCode",{parentName:"li"},"npm run test:unit:string"),".")),(0,s.kt)("p",null,"Though the web page, only requires you to implement 3 of those methods, the remainder are required to demonstrate your understanding of the JS functions.\nAND you'll need it for the JS Exercises assignment any way."))}p.isMDXComponent=!0}}]);