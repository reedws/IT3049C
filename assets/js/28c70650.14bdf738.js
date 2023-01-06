"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<s;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:4,title:"Password Reveal",draft:!1},a=void 0,i={unversionedId:"labs/js-and-dom-exercises/show-password-toggle",id:"labs/js-and-dom-exercises/show-password-toggle",title:"Password Reveal",description:"The marked file is the file you'll be using in the part of the assignment.",source:"@site/content/coursework/labs/2.js-and-dom-exercises/3.show-password-toggle.md",sourceDirName:"labs/2.js-and-dom-exercises",slug:"/labs/js-and-dom-exercises/show-password-toggle",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/show-password-toggle",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/2.js-and-dom-exercises/3.show-password-toggle.md",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1673047227,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Password Reveal",draft:!1},sidebar:"coursework",previous:{title:"Array Exercises",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/array-exercises"},next:{title:"Word Counter",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/word-counter"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Automated Tests",id:"automated-tests",level:2},{value:"Instructions",id:"instructions",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The marked file is the file you'll be using in the part of the assignment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  .\n  \u251c\u2500\u2500 exercises\n  \u2502   ..\n  \u2502   \u251c\u2500\u2500 password-reveal\n--\u2502   \u2502   \u251c\u2500\u2500 app.js  \u2b05\ufe0f\n--\u2502   \u2502   \u251c\u2500\u2500 index.html  \u2b05\ufe0f\n  \u2502   \u2502   \u2514\u2500\u2500 style.css\n  \u2502   \u2514\u2500\u2500 ..\n  ..\n")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Password Reveal html file in your browser: ",(0,o.kt)("inlineCode",{parentName:"li"},"exercises/password-reveal/index.html")),(0,o.kt)("li",{parentName:"ol"},"You should see a login screen. (This is a mock screen - it's not connected to any service)",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The password field has a toggle button (closed eye icon). When clicking the toggle, you should be able to see the input of the password field.")))),(0,o.kt)("h2",{id:"automated-tests"},"Automated Tests"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To run this part's automated test, you'll need to run the following command to open up cypress. ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run cypress:open")),(0,o.kt)("li",{parentName:"ol"},"You should be presented with multiple tests and checks, choose the ",(0,o.kt)("inlineCode",{parentName:"li"},"password-reveal")," one, and automated test should run (and fail) in the embedded browser. ",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"notice how every time you make a change to the web page or its associated files, the test will re-run.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The goal in this assignment is to select the and manipulate the correct DOM elements to pass this automated test. ")),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"check out ",(0,o.kt)("inlineCode",{parentName:"li"},"exercises/password-reveal/index.html")," file, and identify the elements of interest (password field, and toggle button) and their associated selectors."),(0,o.kt)("li",{parentName:"ol"},"in the ",(0,o.kt)("inlineCode",{parentName:"li"},"exercises/password-reveal/app.js")," file, create 2 constants with references to the password input and the reveal button from the DOM."),(0,o.kt)("li",{parentName:"ol"},"Create an Event Listener on the password reveal button"),(0,o.kt)("li",{parentName:"ol"},"The event listener should toggle the password field attribute between ",(0,o.kt)("inlineCode",{parentName:"li"},"password")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," to change the visibility of the password field content.")))}p.isMDXComponent=!0}}]);