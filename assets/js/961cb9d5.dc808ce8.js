"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,title:"DOM Manipulation"},i=void 0,o={unversionedId:"course-notes/dom-manipulation",id:"course-notes/dom-manipulation",title:"DOM Manipulation",description:"We can split up DOM Manipulation into 3 main categories and 2 supplementary categories:",source:"@site/docs/course-notes/dom-manipulation.md",sourceDirName:"course-notes",slug:"/course-notes/dom-manipulation",permalink:"/IT3049C/docs/course-notes/dom-manipulation",draft:!1,editUrl:"https://github.com/reedws/IT3049C/tree/main/docs/course-notes/dom-manipulation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"DOM Manipulation"},sidebar:"notes",previous:{title:"Git and GitHub",permalink:"/IT3049C/docs/course-notes/git/"}},s={},u=[{value:"Selecting Elements",id:"selecting-elements",level:2},{value:"Traversing Elements",id:"traversing-elements",level:2},{value:"Manipulating elements",id:"manipulating-elements",level:2},{value:"Working with Attributes",id:"working-with-attributes",level:2},{value:"Manipulating Element\u2019s Styles",id:"manipulating-elements-styles",level:2},{value:"Resources:",id:"resources",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We can split up DOM Manipulation into 3 main categories and 2 supplementary categories:"),(0,r.kt)("h2",{id:"selecting-elements"},"Selecting Elements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"getElementById() \u2013 select an element by id."),(0,r.kt)("li",{parentName:"ul"},"getElementsByName() \u2013 select elements by name."),(0,r.kt)("li",{parentName:"ul"},"getElementsByTagName()  \u2013 select elements by a tag name."),(0,r.kt)("li",{parentName:"ul"},"getElementsByClassName() \u2013 select elements by one or more class names."),(0,r.kt)("li",{parentName:"ul"},"querySelector()  \u2013 select elements by CSS selectors.")),(0,r.kt)("h2",{id:"traversing-elements"},"Traversing Elements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the parent element \u2013 get the parent node of an element."),(0,r.kt)("li",{parentName:"ul"},"Get child elements \u2013 get children of an element."),(0,r.kt)("li",{parentName:"ul"},"Get siblings of an element \u2013 get siblings of an element.")),(0,r.kt)("h2",{id:"manipulating-elements"},"Manipulating elements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"createElement() \u2013 create a new element."),(0,r.kt)("li",{parentName:"ul"},"appendChild()  \u2013 append a node to a list of child nodes of a specified parent node."),(0,r.kt)("li",{parentName:"ul"},"textContent \u2013 get and set the text content of a node."),(0,r.kt)("li",{parentName:"ul"},"innerHTML \u2013 get and set the HTML content of an element."),(0,r.kt)("li",{parentName:"ul"},"innerHTML vs. createElement \u2013 explain the differences beetween innerHTML and createElement when it comes to creating new elements."),(0,r.kt)("li",{parentName:"ul"},"DocumentFragment \u2013 learn how to compose DOM nodes and insert them into the active DOM tree."),(0,r.kt)("li",{parentName:"ul"},"insertBefore() \u2013 insert a new node before an existing node as a child node of a specified parent node."),(0,r.kt)("li",{parentName:"ul"},"insertAfter() helper function \u2013 insert a new node after an existing node as a child node of a specified parent node."),(0,r.kt)("li",{parentName:"ul"},"append() \u2013 insert a node after the last child node of a parent node."),(0,r.kt)("li",{parentName:"ul"},"prepend() \u2013 insert a node before the first child node of a parent node."),(0,r.kt)("li",{parentName:"ul"},"insertAdjacentHTML() \u2013 parse a text as HTML and insert the resulting nodes into the document at a specified position."),(0,r.kt)("li",{parentName:"ul"},"replaceChild() \u2013 replace a child element by a new element."),(0,r.kt)("li",{parentName:"ul"},"cloneNode() \u2013 clone an element and all of its descendants."),(0,r.kt)("li",{parentName:"ul"},"removeChild() \u2013 remove child elements of a node.")),(0,r.kt)("h2",{id:"working-with-attributes"},"Working with Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setAttribute() \u2013 set the value of a specified attribute on a element."),(0,r.kt)("li",{parentName:"ul"},"getAttribute() \u2013 get the value of an attribute on an element."),(0,r.kt)("li",{parentName:"ul"},"removeAttribute() \u2013 remove an attribute from a specified element."),(0,r.kt)("li",{parentName:"ul"},"hasAttribute() \u2013 check if an element has a specified attribute or not.")),(0,r.kt)("h2",{id:"manipulating-elements-styles"},"Manipulating Element\u2019s Styles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"style property \u2013 get or set inline styles of an element."),(0,r.kt)("li",{parentName:"ul"},"getComputedStyle() \u2013 return the computed style of an element."),(0,r.kt)("li",{parentName:"ul"},"className property \u2013 return a list of space-separated CSS classes."),(0,r.kt)("li",{parentName:"ul"},"classList property \u2013 manipulate CSS classes of an element."),(0,r.kt)("li",{parentName:"ul"},"Element\u2019s width & height \u2013 get the width and height of an element.")),(0,r.kt)("h2",{id:"resources"},"Resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.javascripttutorial.net/javascript-dom/"},"JavaScript Tutorial - DOM"))))}m.isMDXComponent=!0}}]);