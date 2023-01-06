"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,title:"Part 1: Setting up the Layout",sidebar_label:"Page Layout"},r="Setting up the Layout",s={unversionedId:"labs/chatting-app/layout",id:"labs/chatting-app/layout",title:"Part 1: Setting up the Layout",description:"In this step, we will work on setting up the application layout (Just the look and feel). By the end of this step, we will have a page that looks like this",source:"@site/content/coursework/labs/3.chatting-app/1.layout.md",sourceDirName:"labs/3.chatting-app",slug:"/labs/chatting-app/layout",permalink:"/IT3049C/coursework/labs/chatting-app/layout",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/3.chatting-app/1.layout.md",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1673047227,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Part 1: Setting up the Layout",sidebar_label:"Page Layout"},sidebar:"coursework",previous:{title:"Overview",permalink:"/IT3049C/coursework/labs/chatting-app/"},next:{title:"Bringing it to life",permalink:"/IT3049C/coursework/labs/chatting-app/javascript"}},l={},p=[{value:"Header - User Name Input",id:"header---user-name-input",level:2},{value:"Footer - Application Chat input",id:"footer---application-chat-input",level:2},{value:"Body - Chat messages section",id:"body---chat-messages-section",level:2},{value:"Styling the chat messages \ud83d\udc69\u200d\ud83c\udfa8 \ud83c\udfa8",id:"styling-the-chat-messages--",level:2},{value:"Result",id:"result",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-the-layout"},"Setting up the Layout"),(0,o.kt)("p",null,"In this step, we will work on setting up the application layout (Just the look and feel). By the end of this step, we will have a page that looks like this"),(0,o.kt)("img",{alt:"Styled chat messages",src:n(1234).Z,style:{width:"100%",border:"1px #ddd solid"}}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You see I don't mind providing you with a lot of code snippets here, because the focus of this lab is on the Networking/JavaScript work.")),(0,o.kt)("h2",{id:"header---user-name-input"},"Header - User Name Input"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<header>"),", Add a ",(0,o.kt)("a",{parentName:"p",href:"http://getbootstrap.com/docs/4.5/components/jumbotron/"},"\ud83d\udcdc Bootstrap Jumbotron Header"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="jumbotron">\n  <h1 class="display-4">IT-3049C Chat</h1>\n</div>\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Notice both ",(0,o.kt)("inlineCode",{parentName:"li"},"jumbotron")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"display-4")," are bootstrap classes.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The README file has a question about ",(0,o.kt)("inlineCode",{parentName:"li"},"display-4")," class and what it does."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u2705 ++")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the jumbotron ",(0,o.kt)("inlineCode",{parentName:"p"},"div"),", create a ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/input-group/"},"\ud83d\udcdc bootstrap input group"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The input group will contain an input field for the name."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"input needs to have an id of ",(0,o.kt)("inlineCode",{parentName:"li"},"my-name-input")),(0,o.kt)("li",{parentName:"ul"},"input will have a placeholder of ",(0,o.kt)("inlineCode",{parentName:"li"},"Name")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Input Group will also contain a add-on icon representing a user."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83e\udd89: The ",(0,o.kt)("a",{parentName:"li",href:"//fontawesome.com/icons/user?style=solid"},"FontAwesome Website")," will show you all the different icons you can choose from and the HTML line you need to use for a user icon."),(0,o.kt)("li",{parentName:"ul"},"In the following code snippet, replace the \ud83d\udca3 line with the correct line of code for the user icon")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'...\n<div class="input-group mb-3">\n    <div class="input-group-prepend">\n        <span class="input-group-text">\n            \ud83d\udca3  <i class=".........."></i>\n        </span>\n    </div>\n    <input id="my-name-input" type="text" class="form-control" placeholder="Name">\n</div>\n...\n')),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ud83e\udd89 : As you'll start testing the application, you will find yourself typing your name over and over again (with every page refresh, and with every code update). Let's hard-code your name into the input value, a save you a lot of keystrokes \ud83d\ude09")))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input id="my-name-input" ... value="Wes Reed">\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Now the page  div should look like this")),(0,o.kt)("img",{alt:"a page with a jumbotron and input field",src:n(8817).Z,style:{width:"100%",border:"1px #ddd solid"}}),(0,o.kt)("details",null,(0,o.kt)("summary",{markdown:"span"},(0,o.kt)("strong",null,"\ud83d\udcb0 and the html code should look like...")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<header>\n    <div class="jumbotron">\n        <h1 class="display-4">IT-3049C Chat</h1>\n        <div class="input-group mb-3">\n            <div class="input-group-prepend">\n                <span class="input-group-text">\n                    <i class="fas fa-user"></i>\n                </span>\n            </div>\n            <input id="my-name-input" type="text" class="form-control" placeholder="Name">\n        </div>\n    </div>\n</header>\n'))),(0,o.kt)("h2",{id:"footer---application-chat-input"},"Footer - Application Chat input"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<footer>"),", create a ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/components/input-group/#button-addons"},"Bootstrap\u2019s Input groups")," of a text input and a button."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"give the containing ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>")," an id of ",(0,o.kt)("inlineCode",{parentName:"li"},"chatbar")),(0,o.kt)("li",{parentName:"ul"},"give the input field an id of ",(0,o.kt)("inlineCode",{parentName:"li"},"my-message")),(0,o.kt)("li",{parentName:"ul"},"give the button an id of ",(0,o.kt)("inlineCode",{parentName:"li"},"send-button"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<footer>\n    <div id="chatbar" class="input-group mb-3">\n        <input\n            type="text"\n            id="my-message"\n            class="form-control"\n            placeholder="Type a message ...">\n        <div class="input-group-append">\n            <button\n                class="btn btn-outline-primary"\n                id="send-button"\n                type="button">Send</button>\n        </div>\n    </div>\n</footer>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"copy the following css code to your ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},"body,\nhtml {\n    height: 100vh;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader,\n    footer {\n    background: #e9ecef;\n}\n\n.jumbotron {\n    margin-bottom:0;\n}\n\nfooter {\n    padding: 0.5rem\n}\n\n#chat {\n    flex: 1 0 auto;\n    height: 0;\n    overflow-y: auto;\n    padding: 1rem;\n}\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The page should look like this."),(0,o.kt)("img",{alt:"a page with a jumbotron and a chat box",src:n(2325).Z,style:{width:"100%",border:"1px #ddd solid"}})),(0,o.kt)("h2",{id:"body---chat-messages-section"},"Body - Chat messages section"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Inside of the ",(0,o.kt)("inlineCode",{parentName:"li"},"chat")," div, copy the following ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"(MOCK)"))," messages.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="mine messages">\n    <div class="message">\n        Dude\n    </div>\n</div>\n<div class="yours messages">\n    <div class="message">\n        Hey!\n    </div>\n    <div class="sender-info">\n        Someone 2:59PM\n    </div>\n</div>\n\n<div class="yours messages">\n    <div class="message">\n        You there?\n    </div>\n    <div class="sender-info">\n        Someone else 3:00PM\n    </div>\n</div>\n\n<div class="yours messages">\n    <div class="message">\n        Hello, how\'s it going? \ud83d\ude00\n    </div>\n    <div class="sender-info">\n        Someone else2 3:02PM\n    </div>\n</div>\n\n<div class="mine messages">\n    <div class="message">\n        Great thanks!\n    </div>\n</div>\n\n<div class="mine messages">\n    <div class="message">\n        How about you?\n    </div>\n</div>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You may paste the above multiple times to flood the chat div with messages and notice how you can scroll inside the chat section without the header or the input scrolling."),(0,o.kt)("li",{parentName:"ul"},"Refresh the page, and you should see something like this.",(0,o.kt)("img",{alt:"application with Chat messages",src:n(6352).Z,style:{width:"100%",border:"1px #ddd solid"}}))),(0,o.kt)("h2",{id:"styling-the-chat-messages--"},"Styling the chat messages \ud83d\udc69\u200d\ud83c\udfa8 \ud83c\udfa8"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the following into the ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},'.sender-info {\n    font-size: 10px;\n    margin-top: -5px;\n    color:grey;\n}\n\n.messages {\n    display: flex;\n    flex-direction: column;\n}\n\n.message {\n    border-radius: 20px;\n    padding: 8px 15px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    display: inline-block;\n}\n\n.yours {\n    align-items: flex-start;\n}\n\n.yours .message {\n    margin-right: 25%;\n    background-color: #eee;\n    position: relative;\n}\n\n.yours .message:before {\n    content: "";\n    position: absolute;\n    z-index: 0;\n    bottom: 0;\n    left: -7px;\n    height: 20px;\n    width: 20px;\n    background: #eee;\n    border-bottom-right-radius: 15px;\n}\n\n.yours .message:after {\n    content: "";\n    position: absolute;\n    z-index: 1;\n    bottom: 0;\n    left: -10px;\n    width: 10px;\n    height: 20px;\n    background: white;\n    border-bottom-right-radius: 10px;\n}\n\n.mine {\n    align-items: flex-end;\n}\n\n.mine .message {\n    color: white;\n    margin-left: 25%;\n    background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);\n    background-attachment: fixed;\n    position: relative;\n}\n\n.mine .message:before {\n    content: "";\n    position: absolute;\n    z-index: 0;\n    bottom: 0;\n    right: -8px;\n    height: 20px;\n    width: 20px;\n    background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);\n    background-attachment: fixed;\n    border-bottom-left-radius: 15px;\n}\n\n.mine .message:after {\n    content: "";\n    position: absolute;\n    z-index: 1;\n    bottom: 0;\n    right: -10px;\n    width: 10px;\n    height: 20px;\n    background: white;\n    border-bottom-left-radius: 10px;\n}\n')))),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now refresh the page and ",(0,o.kt)("strong",{parentName:"li"},"LOOK AT THAT")," \ud83c\udf89\ud83c\udf89\ud83c\udf89",(0,o.kt)("img",{alt:"Styled chat messages",src:n(1234).Z,style:{width:"100%",border:"1px #ddd solid"}}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now Enough HTML and CSS .. On to JavaScript")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Next: ",(0,o.kt)("a",{parentName:"strong",href:"javascript"},"Bringing Life to the page"))))}u.isMDXComponent=!0},8817:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-b72b46b2da3a6e6b74d4df45f3ed5a8d.png"},2325:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-86ad716cfee90d54e25f7bf8af81de93.png"},6352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-555724228790fa25f57983008e5db911.png"},1234:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-3760162e5d7189490c7385b681949f89.png"}}]);