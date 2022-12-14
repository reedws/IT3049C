"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),g=s,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:5,title:"Part 5: E2E Testing your code using Cypress",sidebar_label:"E2E Testing (Cypress)"},o=void 0,a={unversionedId:"labs/tooling/e2e-testing",id:"labs/tooling/e2e-testing",title:"Part 5: E2E Testing your code using Cypress",description:"Installing Cyoress",source:"@site/content/coursework/labs/7.tooling/4.e2e-testing.mdx",sourceDirName:"labs/7.tooling",slug:"/labs/tooling/e2e-testing",permalink:"/coursework/labs/tooling/e2e-testing",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/7.tooling/4.e2e-testing.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1671045369,formattedLastUpdatedAt:"Dec 14, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Part 5: E2E Testing your code using Cypress",sidebar_label:"E2E Testing (Cypress)"},sidebar:"coursework",previous:{title:"Unit Testing (Jest)",permalink:"/coursework/labs/tooling/unit-testing"},next:{title:"\ud83d\udcaf Assignments",permalink:"/coursework/assignments"}},l={},p=[{value:"Installing Cyoress",id:"installing-cyoress",level:2},{value:"Configuring Cypress",id:"configuring-cypress",level:2},{value:"Starting Cypress",id:"starting-cypress",level:2},{value:"Write New Tests",id:"write-new-tests",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"installing-cyoress"},"Installing Cyoress"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install Jest from npm ",(0,s.kt)("inlineCode",{parentName:"li"},"npm install --save-dev cypress"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This step is already done for you as you install dependencies defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json")," by running ",(0,s.kt)("inlineCode",{parentName:"li"},"npm install ")," in the beginning of the lab.")),(0,s.kt)("h2",{id:"configuring-cypress"},"Configuring Cypress"),(0,s.kt)("p",null,"We will keep the default configuration. However to ease the process of starting and running cypress tests, we will add some additional scripts to the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file.\n2. Add the following scripts to the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  ...\n  "scripts": {\n    "cy:open": "cypress open",\n    "cy:run": "cypress run"\n    ...\n  }\n  ...\n}\n')),(0,s.kt)("h2",{id:"starting-cypress"},"Starting Cypress"),(0,s.kt)("p",null,"to start cypress tests, run one of the following command in the terminal:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"npx cypress open")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"./node_modules/.bin/cypress open")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"npm run cy:open"))),(0,s.kt)("h3",{id:"write-new-tests"},"Write New Tests"),(0,s.kt)("p",null,"When running Cypress for the first time, it create the ",(0,s.kt)("inlineCode",{parentName:"p"},"cypress")," folder with the following folders:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"`cypress.json`` - all Cypress settings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"`cypress/integration`` - test files (specs)")),(0,s.kt)("li",{parentName:"ul"},"`cypress/fixtures`` - mock data"),(0,s.kt)("li",{parentName:"ul"},"`cypress/plugins`` - extending Cypress"),(0,s.kt)("li",{parentName:"ul"},"`cypress/support`` - shared commands, utilities")),(0,s.kt)("p",null,"We're only really interested in the ",(0,s.kt)("inlineCode",{parentName:"p"},"cypress/integration")," folder; that's where all tests would be. Let's create a new test file in that folder."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"There should already be some sample test files in the folder, you may opt to leave those in as a reference.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Make sure you're running the application through some server.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"build a test that types your name, selects a choice from the dropdown and then confirms that the history log generated contains the right number of tries and contains the right name.")))}u.isMDXComponent=!0}}]);