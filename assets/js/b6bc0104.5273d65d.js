"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"Overview",sidebar_label:"JS Tooling",sidebar_position:1},o=void 0,l={unversionedId:"labs/tooling/index",id:"labs/tooling/index",title:"Overview",description:"This lab covers:",source:"@site/content/coursework/labs/7.tooling/index.mdx",sourceDirName:"labs/7.tooling",slug:"/labs/tooling/",permalink:"/IT3049C/coursework/labs/tooling/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/7.tooling/index.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1671046437,formattedLastUpdatedAt:"Dec 14, 2022",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"JS Tooling",sidebar_position:1},sidebar:"coursework",previous:{title:"Instructions",permalink:"/IT3049C/coursework/labs/chatting-app-storage/"},next:{title:"JS Tooling",permalink:"/IT3049C/coursework/labs/tooling/"}},s={},p=[{value:"Instructions",id:"instructions",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This lab covers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setting up and Eslint Rules"),(0,i.kt)("li",{parentName:"ul"},"compiling and transpiling the code into one file using Webpack."),(0,i.kt)("li",{parentName:"ul"},"Creating Unit tests for the application using Jest."),(0,i.kt)("li",{parentName:"ul"},"Creating E2E tests using Cypress.")),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"The assignment instructions are split into the following pages to make it easier to follow."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Accept the assignment on Canvas.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone down the Repo. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the dependencies using ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This installs some dependencies that you'll need later on in the assisgnment as well as others that we're not really addressing in this lab."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Follow the instructions for the following 4 parts:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./linting"},"Part 1: Linting your code using ",(0,i.kt)("inlineCode",{parentName:"a"},"ESLint"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./transpile"},"Part 2: Transpile your code using ",(0,i.kt)("inlineCode",{parentName:"a"},"Webpack"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./unit-testing"},"Part 3: Unit Testing your code using ",(0,i.kt)("inlineCode",{parentName:"a"},"Jest"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./e2e-testing"},"Part 4: E2E Testing your code using ",(0,i.kt)("inlineCode",{parentName:"a"},"cypress")))))))}u.isMDXComponent=!0}}]);