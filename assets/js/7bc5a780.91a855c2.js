"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,title:"Part 2: Styling using CSS and Bootstrap",sidebar_label:"Styling the page",draft:!1},s="Styling using CSS and Bootstrap 4",i={unversionedId:"assignments/rock-paper-scissors/styling",id:"assignments/rock-paper-scissors/styling",title:"Part 2: Styling using CSS and Bootstrap",description:"1. Include the Bootstrap CSS styles in the HTML head. Instructions can be found here",source:"@site/content/coursework/assignments/3.rock-paper-scissors/2.styling.md",sourceDirName:"assignments/3.rock-paper-scissors",slug:"/assignments/rock-paper-scissors/styling",permalink:"/IT3049C/coursework/assignments/rock-paper-scissors/styling",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments/3.rock-paper-scissors/2.styling.md",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1673047227,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Part 2: Styling using CSS and Bootstrap",sidebar_label:"Styling the page",draft:!1},sidebar:"coursework",previous:{title:"Page Layout",permalink:"/IT3049C/coursework/assignments/rock-paper-scissors/layout"},next:{title:"Game Logic",permalink:"/IT3049C/coursework/assignments/rock-paper-scissors/logic"}},l={},p=[],c={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"styling-using-css-and-bootstrap-4"},"Styling using CSS and Bootstrap 4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Include the Bootstrap CSS styles in the HTML head. ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/getting-started/introduction/#css"},"Instructions can be found here")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We don't necessarily need to include the JS Scripts for this assignment - Only include the Bootstrap CSS styles."),(0,a.kt)("li",{parentName:"ul"},"You will notice the fonts, and some layout aspects of the pages changed a bit. It now look something like this.",(0,a.kt)("img",{alt:"With bootstrap",src:n(1971).Z,style:{width:"100%",border:"1px #ddd solid"}}))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"a little better, already"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Put a border around the 2 divs;"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Make sure to include the stylesheet file ",(0,a.kt)("em",{parentName:"li"},"below")," the bootstrap stylesheet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Tip:")," try typing the Emmet abbreviation: ",(0,a.kt)("inlineCode",{parentName:"li"},"link:css")," then hit enter. VSCode should make the element and you'll only need to change the path.",(0,a.kt)("img",{alt:"With bootstrap",src:n(6086).Z,style:{width:"100%",border:"1px #ddd solid"}})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the styles.css file:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"set a ",(0,a.kt)("inlineCode",{parentName:"li"},"1px solid black;")," border for ",(0,a.kt)("inlineCode",{parentName:"li"},"#welcome-screen")),(0,a.kt)("li",{parentName:"ol"},"set a ",(0,a.kt)("inlineCode",{parentName:"li"},"1px solid red;")," border for ",(0,a.kt)("inlineCode",{parentName:"li"},"#game-screen")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Apply Bootstrap classes to the buttons. ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/components/buttons/"},"Examples on Button Classes can be found here")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set the class attribute of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Start Game!")," button to use the blue ",(0,a.kt)("inlineCode",{parentName:"li"},"btn btn-primary")," style."),(0,a.kt)("li",{parentName:"ul"},"Set the class attribute of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Go!")," button to use the green ",(0,a.kt)("inlineCode",{parentName:"li"},"btn btn-success")," style."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Apply Bootstrap class ",(0,a.kt)("inlineCode",{parentName:"p"},"custom-select")," to select dropdown. ",(0,a.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/components/forms/#select-menu"},"More Info about Bootstrap Select/Dropdown here"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"for the ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," immediately below the 2 ",(0,a.kt)("inlineCode",{parentName:"p"},"form"),", give it a class name of ",(0,a.kt)("inlineCode",{parentName:"p"},"form-group"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"for the ",(0,a.kt)("inlineCode",{parentName:"p"},'<input id="username" ...>'),", add a class of ",(0,a.kt)("inlineCode",{parentName:"p"},"form-control")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It should now look like this.")),(0,a.kt)("img",{alt:"after styling",src:n(48).Z,style:{width:"100%",border:"1px #ddd solid"}}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Not the best look, but it'll do for now"),"\nLet's start building the game logic"))}m.isMDXComponent=!0},1971:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2-38df855ca08c680ea63de91a0e6bfd61.png"},48:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3-ee6a0d4ff4cd397290c13aff1652f163.png"},6086:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/emmet-linkcss-c586fea43ec2873ffd9b0baf31c529f0.png"}}]);