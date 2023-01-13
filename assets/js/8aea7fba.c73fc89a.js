"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4969],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),d=s,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var n=a(7462),s=(a(7294),a(3905)),r=a(5488),l=a(5162);const i={sidebar_position:3,title:"Part 2: Bringing it to life",sidebar_label:"Bringing it to life"},o="Bringing it to life",m={unversionedId:"labs/chatting-app/javascript",id:"labs/chatting-app/javascript",title:"Part 2: Bringing it to life",description:"Before we start Building the application code, we need to fully imagine and visualize the process/workflow.",source:"@site/content/coursework/labs/3.chatting-app/2.javascript.mdx",sourceDirName:"labs/3.chatting-app",slug:"/labs/chatting-app/javascript",permalink:"/IT3049C/coursework/labs/chatting-app/javascript",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/3.chatting-app/2.javascript.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1673621486,formattedLastUpdatedAt:"Jan 13, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Part 2: Bringing it to life",sidebar_label:"Bringing it to life"},sidebar:"coursework",previous:{title:"Page Layout",permalink:"/IT3049C/coursework/labs/chatting-app/layout"},next:{title:"Finalize",permalink:"/IT3049C/coursework/labs/chatting-app/finalize"}},p={},u=[{value:"Getting Messages:",id:"getting-messages",level:2},{value:"Sending Messages",id:"sending-messages",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"bringing-it-to-life"},"Bringing it to life"),(0,s.kt)("p",null,"Before we start Building the application code, we need to fully imagine and visualize the process/workflow. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Getting messages:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Get/Query/Fetch all the messages from the server."),(0,s.kt)("li",{parentName:"ul"},"Parse and format the messages to present them on the screen."),(0,s.kt)("li",{parentName:"ul"},"Continuously Fetch the messages from the server to keep the messages up-to-date."))),(0,s.kt)("li",{parentName:"ul"},"Sending messages:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Get the user's name from the input field in the header."),(0,s.kt)("li",{parentName:"ul"},"Send the message in the format that the API is expecting.")))),(0,s.kt)("h2",{id:"getting-messages"},"Getting Messages:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create references to the HTML elements that we\u2019ll need.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"nameInput"),(0,s.kt)("li",{parentName:"ul"},"messageInput"),(0,s.kt)("li",{parentName:"ul"},"sendButton"),(0,s.kt)("li",{parentName:"ul"},"chatBox")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const nameInput = document.getElementById("my-name-input");\nconst myMessage = document.getElementById("my-message");\nconst sendButton = document.getElementById("send-button");\nconst chatBox = document.getElementById("chat");\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create an ",(0,s.kt)("inlineCode",{parentName:"p"},"updateMessagesInChatBox()")," function. This function will:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"fetch messages from server - ",(0,s.kt)("inlineCode",{parentName:"li"},"fetchMessages()")),(0,s.kt)("li",{parentName:"ul"},"loop over the recieved messages to convert them to ",(0,s.kt)("inlineCode",{parentName:"li"},"html")," elements - ",(0,s.kt)("inlineCode",{parentName:"li"},"formatMessages()"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"the function will mark the messages as (incoming/outgoing) or (yours/anyone else's) based on the sender name in the textbox."))),(0,s.kt)("li",{parentName:"ul"},"Add the formatted messages to the chatbox. - ",(0,s.kt)("inlineCode",{parentName:"li"},"updateChatBox()"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"OR more accuretly, clear and the chatbox and insert the newly formatted messages.")))),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function updateMessages() {\n    // Fetch Messages\n    // Loop over the messages. Inside the loop we will\n        // get each message\n        // format it\n        // add it to the chatbox\n}\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a function that uses the FetchAPI to requests messages from the server."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"URL to the Server is ",(0,s.kt)("a",{parentName:"li",href:"https://it3049c-chat-application.herokuapp.com"},"https://it3049c-chat-application.herokuapp.com")),(0,s.kt)("li",{parentName:"ul"},"URL to the link to get the messages is ",(0,s.kt)("a",{parentName:"li",href:"https://it3049c-chat-application.herokuapp.com/messages"},"https://it3049c-chat-application.herokuapp.com/messages")),(0,s.kt)("li",{parentName:"ul"},"sometime, the server might be idle and would take a few minutes to wake up again.")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const serverURL = `https://it3049c-chat-application.herokuapp.com/messages`;\n\nfunction fetchMessages() {\n    return fetch(serverURL)\n        .then( response => response.json())\n}\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Call ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchMessages()")," from ",(0,s.kt)("inlineCode",{parentName:"p"},"updateMessages()")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Notice, because ",(0,s.kt)("inlineCode",{parentName:"li"},"fetchMessages()")," is an asyncronous function that returns a promise rather then the actual result, I had to make ",(0,s.kt)("inlineCode",{parentName:"li"},"updateMessages()")," an ",(0,s.kt)("inlineCode",{parentName:"li"},"async")," function as well and instruct it to await the results from ",(0,s.kt)("inlineCode",{parentName:"li"},"fetchMessages()"),".")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"async function updateMessages() {\n    // Fetch Messages\n    const messages = await fetchMessages();\n\n    // Loop over the messages. Inside the loop we will\n        // get each message\n        // format it\n        // add it to the chatbox\n}\n")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"try to log the ",(0,s.kt)("inlineCode",{parentName:"li"},"messages")," variable to the console to confirm the structure of each message looks like this")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "text": "This is my message",\n    "timestamp": 1537410673072\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Create a formatter function that will take the ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," object and the username ",(0,s.kt)("inlineCode",{parentName:"p"},"my-name-input")," (from the text field) as parameters and return ",(0,s.kt)("inlineCode",{parentName:"p"},"HTML"),"."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"the function will need to parse the timestamp to a readable format.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Obviously, ",(0,s.kt)("inlineCode",{parentName:"li"},"1537410673072")," is not a readable format"))),(0,s.kt)("li",{parentName:"ul"},"compare the value of the ",(0,s.kt)("inlineCode",{parentName:"li"},"messages.sender")," and the text input field, ",(0,s.kt)("inlineCode",{parentName:"li"},"my-name-input"),":",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"if it's the same, then use the class ",(0,s.kt)("inlineCode",{parentName:"li"},"mine")," around the message div."),(0,s.kt)("li",{parentName:"ul"},"if it's not the same, use the class ",(0,s.kt)("inlineCode",{parentName:"li"},"yours")," around the message div.")))),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'function formatMessage(message, myNameInput) {\n    const time = new Date(message.timestamp);\n    const formattedTime = `${time.getHours()}:${time.getMinutes()}`;\n\n    if (myNameInput === message.sender) {\n        return `\n        <div class="mine messages">\n            <div class="message">\n                ${message.text}\n            </div>\n            <div class="sender-info">\n                ${formattedTime}\n            </div>\n        </div>\n        `\n    } else {\n        return `\n            <div class="yours messages">\n                <div class="message">\n                    ${message.text}\n                </div>\n                <div class="sender-info">\n                    ${message.sender} ${formattedTime}\n                </div>\n            </div>\n        `\n    }\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Now we loop over the array of the messages, format them and add them to the chatbox."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'async function updateMessages() {\n    // Fetch Messages\n    const messages = await fetchMessages();\n    // Loop over the messages. Inside the loop we will:\n        // get each message\n        // format it\n        // add it to the chatbox\n    let formattedMessages = "";\n    messages.forEach(message => {\n        formattedMessages += formatMessage(message, nameInput.value);\n    });\n    chatBox.innerHTML = formattedMessages;\n}\n')),(0,s.kt)("ol",{start:8},(0,s.kt)("li",{parentName:"ol"},"We need to make sure the function is called.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"otherwise, we won't see any difference.")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"updateMessages()\n")),(0,s.kt)("ol",{start:9},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"setInterval()")," to call this function once every 10 seconds to keep the new messages coming."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"setInterval(updateMessages, 10000);\n")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"the number ",(0,s.kt)("inlineCode",{parentName:"li"},"10000")," in this scenario is what we refer to as a magic number. it's a value of some significance but someone looking at this may not easily understand what this value is",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"we like to set this value to a variable to make this a bit more readable.")))),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const MILLISECONDS_IN_TEN_SECONDS = 10000;\nsetInterval(updateMessages, MILLISECONDS_IN_TEN_SECONDS);\n")))),(0,s.kt)("h2",{id:"sending-messages"},"Sending Messages"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a send function that would:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"take the username, and message text as parameter"),(0,s.kt)("li",{parentName:"ul"},"construct a json object with the following properties ",(0,s.kt)("inlineCode",{parentName:"li"},"sender"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"text"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"timestamp")),(0,s.kt)("li",{parentName:"ul"},"send messages to the server here")))),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"fetch",label:"using Fetch API",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function sendMessages(username, text) {\n    const newMessage = {\n        sender: username,\n        text: text,\n        timestamp: new Date()\n    }\n\n    fetch (serverURL, {\n        method: `POST`, \n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(newMessage)\n    });\n}\n"))),(0,s.kt)(l.Z,{value:"jquery",label:"Using JQuery",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function sendMessages(username, text) {\n    const newMessage = {\n        sender: username,\n        text: text,\n        timestamp: new Date()\n    }\n\n    $.post(serverURL, newMessage);\n}\n")))),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"create an Event Listener to listen to the ",(0,s.kt)("inlineCode",{parentName:"li"},"click")," event on the send button. This event handler will:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"send the message to the server and clear the text field to prepare for a new message to be sent"),(0,s.kt)("li",{parentName:"ul"},"clear the message text field")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'sendButton.addEventListener("click", function(sendButtonClickEvent) {\n    sendButtonClickEvent.preventDefault();\n    const sender = nameInput.value;\n    const message = myMessage.value;\n\n    sendMessages(sender,message);\n    myMessage.value = "";\n});\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Next: ",(0,s.kt)("a",{parentName:"strong",href:"finalize"},"Hosting and Submission"))))}d.isMDXComponent=!0},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),s=a(7294),r=a(6010),l=a(2389),i=a(7392),o=a(7094),m=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,a;const{lazy:l,block:c,defaultValue:d,values:g,groupId:h,className:k}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=g?g:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[C,x]=(0,s.useState)(b),M=[],{blockElementScrollPositionUntilNextRender:I}=(0,m.o5)();if(null!=h){const e=y[h];null!=e&&e!==C&&N.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,a=M.indexOf(t),n=N[a].value;n!==C&&(I(t),x(n),null!=h&&w(h,String(n)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=M.indexOf(e.currentTarget)+1;a=null!=(n=M[t])?n:M[0];break}case"ArrowLeft":{var s;const t=M.indexOf(e.currentTarget)-1;a=null!=(s=M[t])?s:M[M.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},k)},N.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>M.push(e),onKeyDown:j,onFocus:T,onClick:T},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,s.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,l.Z)();return s.createElement(c,(0,n.Z)({key:String(t)},e))}}}]);