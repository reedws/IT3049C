"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"JS Exercises",sidebar_label:"Overview",sidebar_position:3,draft:!1},s=void 0,o={unversionedId:"assignments/js-exercises/index",id:"assignments/js-exercises/index",title:"JS Exercises",description:"Learning outcomes",source:"@site/content/coursework/assignments/2.js-exercises/index.mdx",sourceDirName:"assignments/2.js-exercises",slug:"/assignments/js-exercises/",permalink:"/IT3049C/coursework/assignments/js-exercises/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments/2.js-exercises/index.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1671048542,formattedLastUpdatedAt:"Dec 14, 2022",sidebarPosition:3,frontMatter:{title:"JS Exercises",sidebar_label:"Overview",sidebar_position:3,draft:!1},sidebar:"coursework",previous:{title:"Finalize",permalink:"/IT3049C/coursework/assignments/online-portfolio/finalize"},next:{title:"Examples",permalink:"/IT3049C/coursework/assignments/js-exercises/demo"}},l={},c=[{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Goals",id:"goals",level:2},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Resources",id:"resources",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Practice the use of Git and GitHub."),(0,r.kt)("li",{parentName:"ol"},"Practice the use of JavaScript to select, traverse, manipulate, and create DOM elements."),(0,r.kt)("li",{parentName:"ol"},"Practise the use of JavaScript to code solutions to techincal problems.")),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"This is a collection of JavaScript exercises and coding challenges. The focus in this assignment is to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Practice problem solving."),(0,r.kt)("li",{parentName:"ul"},"Practice JavaScript fundamentals."),(0,r.kt)("li",{parentName:"ul"},"Practice using the official documentation. (We'll be using many documentations for many libraries so it's good to start here)")),(0,r.kt)("h2",{id:"guidelines"},"Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This assignment utilized automated-tests to check for the correctness of your code. These tests can be a bit specific about what you name things, where do you place them, what ",(0,r.kt)("inlineCode",{parentName:"li"},"HTML")," tag you use for them, ...etc.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please Follow the instructions on this assignment for the best outcome."))),(0,r.kt)("li",{parentName:"ul"},"Make a habbit of committing and pusing your code frequently to github."),(0,r.kt)("li",{parentName:"ul"},"Make sure to meanignful commit messages that describe what you did."),(0,r.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks continue to pass after you make changes."),(0,r.kt)("li",{parentName:"ul"},"To be able to run the automated grading checks, make sure you have installed Node.js, per the instructions posted on Canvas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"),", and the feedback form at the end of the instructions.")),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Accept the Assignment on Canvas.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This will create a repository for you with a few starting files.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  .\n  \u251c\u2500\u2500 .vscode\n  \u2502   \u2514\u2500\u2500 settings.json\n  \u251c\u2500\u2500 src\n  \u2502   \u251c\u2500\u2500 __tests__\n  \u2502   \u2502   \u251c\u2500\u2500 1.numbers.js\n  \u2502   \u2502   \u251c\u2500\u2500 2.strings.js\n  \u2502   \u2502   \u251c\u2500\u2500 3.arrays.js\n  \u2502   \u2502   \u251c\u2500\u2500 4.logicalOperators.js\n  \u2502   \u2502   \u251c\u2500\u2500 5.flowControl.js\n  \u2502   \u2502   \u2514\u2500\u2500 6.equality.js\n  \u2502   \u251c\u2500\u2500 1.numbers.js          \u2b05\ufe0f\n  \u2502   \u251c\u2500\u2500 2.strings.js          \u2b05\ufe0f\n  \u2502   \u251c\u2500\u2500 3.arrays.js           \u2b05\ufe0f\n  \u2502   \u251c\u2500\u2500 4.logicalOperators.js \u2b05\ufe0f\n  \u2502   \u251c\u2500\u2500 5.flowControl.js      \u2b05\ufe0f\n  \u2502   \u2514\u2500\u2500 6.equality.js         \u2b05\ufe0f\n  \u251c\u2500\u2500 .eslintrc.json\n  \u251c\u2500\u2500 .gitignore\n  \u251c\u2500\u2500 package-lock.json\n  \u251c\u2500\u2500 package.json\n  \u2514\u2500\u2500 README.md                 \ud83d\udd3c: update this once done\n"))),(0,r.kt)("li",{parentName:"ul"},"you will only be working on the files marked with the arrows")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Clone down the repository to your local computer."),(0,r.kt)("li",{parentName:"ol"},"Install the project dependencies using the ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," command.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"make sure you're in the project directory in the terminal before you run this command.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the project tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test"),"\nYou should see all the tests failing like so:\n",(0,r.kt)("img",{alt:"failing tests image",src:n(7706).Z,width:"1609",height:"1220"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Our task would be to implement the functions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," files (marked with \u2b05\ufe0f arrow above) until all the tests pass.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"at the end of each test, commit your code ",(0,r.kt)("img",{alt:"commit logo",style:{height:"20px",marginBottom:"-4px"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"})," ",(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "finished test xyz"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DON'T FORGET")," to Update the README.md file with your self assessment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your grade"),(0,r.kt)("li",{parentName:"ul"},"Self Reflection"),(0,r.kt)("li",{parentName:"ul"},"How long it took you to complete the assignment"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"push your code."))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"Standard JavaScript Built-in Objects > Number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"},"Standard JavaScript Built-in Objects > String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"Standard JavaScript Built-in Objects > Array"))))}p.isMDXComponent=!0},7706:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/failing_tests-6518bc6cddac19d2a8093dc0b365dbd2.png"}}]);