---
layout: default
title: 4. JSON and Networking (Lab)
parent: Assignments and Labs
has_children: false
published: false
nav_order: 4
---

# JSON and Networking (Lab)
This lab, you will be following the instructions and to build a chatting application that we can use as a class.
For most of the parts, I have provided snippets of code for you to use.
> Make sure your understand those snippets for your own sake, as well as for future assignments.

* Create the boilerplate for your application
	* HTML
	* include a css file
	* include a js file
	* include Bootstrap for a responsive design with better ascetics

```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>IT3049 Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- JQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

        <!-- Our CSS Style -->
        <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    </head>

    <body>

        <!-- Our JavaScript Code-->
        <script src="main.js"></script>
    </body>
    </html>
```

* Add a header using [Bootstrap’s Jumbotron](http://getbootstrap.com/docs/4.0/components/jumbotron/)

```html
    <div class="jumbotron">
        <h1 class="display-4">IT-3049C Chat</h1>
    </div>
```

Notice both `jumbotron` and `display-4` are bootstrap classes.
* Create an input field for the name in the jumbotron.

```html
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">
                <i class="fas fa-user"></i>
            </span>
        </div>
        <input id="myName" type="text" class="form-control" placeholder="Name">
    </div>
```

Now the Jumbotron div should look like this

```html
<div class="jumbotron">
    <h1 class="display-4">IT-3049C Chat</h1>

    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">
                <i class="fas fa-user"></i>
            </span>
        </div>
        <input id="myName" type="text" class="form-control" placeholder="Name">
    </div>
</div>
```
* Refresh the page to see the result
* You may want to hard-code your name into the input value, so you don’t have to type it in every time you refresh the page 😉

```html
        <input id="myName" type="text" class="form-control" placeholder="Name" value="Yahya Gilany">
```
* Create an input group of a text input and a button using [Bootstrap’s Input groups](https://getbootstrap.com/docs/4.1/components/input-group/#button-addons)
	* give the group an id of `chatbar`
	* give the input field an id of `myMessage`
	* give the button an id of `sendButton`

```html
<div id="chatbar" class="input-group mb-3">
    <input
        type="text"
        id="myMessage"
        class="form-control"
        placeholder="Type a message ...">
    <div class="input-group-append">
        <button
            class="btn btn-outline-primary"
            id="sendButton"
            type="button">Send</button>
    </div>
</div>
```

* Refresh the page to see the results
* Wrap the jumbotron in a div and stick it to the top of the page using  [Bootstrap's Positioning classes](https://v4-alpha.getbootstrap.com/utilities/position/) `fixed-top`
* stick the chatbar group to the bottom using bootstrap positioning class `fixed-bottom` OR the following css code.

```css
#chatbar {
    bottom:0;
    position: fixed;
}
```

* Refresh the page to see the results
* Create a div with the id of `chat` inside the `fixed-top` div and right under the jumbotron.
* copy the following css code to your `main.css` file

```css
.jumbotron {
    margin-bottom:0;
}
#chat {
    border: solid 1px #EEE;
    padding: 10px;
    overflow-y: scroll;
    height: 320px;
 }
```

* inside the chat div copy the following (MOCK) messages.

```html
<div class="mine messages">
    <div class="message">
        Dude
    </div>
</div>
<div class="yours messages">
    <div class="message">
        Hey!
    </div>
    <div class="sender-info">
        Someone 2:59PM
    </div>
</div>

<div class="yours messages">
    <div class="message">
        You there?
    </div>
    <div class="sender-info">
        Someone else 3:00PM
    </div>
</div>

<div class="yours messages">
    <div class="message">
        Hello, how's it going? 😀
    </div>
    <div class="sender-info">
        Someone else2 3:02PM
    </div>
</div>

<div class="mine messages">
    <div class="message">
        Great thanks!
    </div>
</div>

<div class="mine messages">
    <div class="message">
        How about you?
    </div>
</div>
```

* Refresh the page to see the result .. You may paste the above multiple times to flood the chat div with messages and notice how you can scroll inside the chat section without the header or the input scrolling.
* Copy the following into the `main.css` file

```css
.sender-info {
    font-size: 10px;
    margin-top: -5px;
    color:grey;
}

.messages {
    display: flex;
    flex-direction: column;
}

.message {
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
}

.yours {
    align-items: flex-start;
}

.yours .message {
    margin-right: 25%;
    background-color: #eee;
    position: relative;
}

.yours .message:before {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: -7px;
    height: 20px;
    width: 20px;
    background: #eee;
    border-bottom-right-radius: 15px;
}

.yours .message:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -10px;
    width: 10px;
    height: 20px;
    background: white;
    border-bottom-right-radius: 10px;
}

.mine {
    align-items: flex-end;
}

.mine .message {
    color: white;
    margin-left: 25%;
    background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);
    background-attachment: fixed;
    position: relative;
}

.mine .message:before {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: -8px;
    height: 20px;
    width: 20px;
    background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
}

.mine .message:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: -10px;
    width: 10px;
    height: 20px;
    background: white;
    border-bottom-left-radius: 10px;
}
```

* Now refresh the page and LOOK AT THAT 🎉🎉🎉

**Now Enough HTML and CSS .. On to JavaScript**

* Create References to the HTML elements that we’ll need.

```js
"use strict";

const nameInput = document.getElementById("myName");
const myMessage = document.getElementById("myMessage");
const sendButton = document.getElementById("sendButton");
const chatBox = document.getElementById("chat");
```

Now Before we go any further let’s imagine the entire workflow
1. Create a function with the name of  `updateMessages()` that will do the following:
	1. Get all messages from the server
	2. Loop over the array of messages and format it similar to the MOCK messages above.
		* The function will no if the message is yours or someone else’s based on the sender name and name in the name text box.
	3. Add the formatted messages to the chatBox
2. Call the previous function continuously to keep the chat box up to date. Hint (setInterval)
3. Create a function to send a message to the server.

* create the `updateMessages()` function

```js
function updateMessages() {
    // Fetch Messages
    // Loop over the messages. Inside the loop we will
        // get each message
        // format it
        // add it to the chatbox
}
```

* Create a function that uses the FetchAPI to requests messages from the server. (Make sure this function is defined above the `updateMessages()` function

```js
const serverURL = `history `;

function fetchMessages() {
    return fetch(serverURL)
        .then( response => response.json())
}
```

* Call `fetchMessages()` from `updateMessages()`

```js
async function updateMessages() {
    // Fetch Messages
    const messages = await fetchMessages();

    // Loop over the messages. Inside the loop we will
        // get each message
        // format it
        // add it to the chatbox
}
```

	* Note: Since `fetchMessages()` returns a promise, we needed to make `updateMessages()` an asynchronous function and code it to `await` the response.
	* try to log the `messages` variable to the console to confirm the structure of each message looks like this

```json
{
	"id": 1,
	"text": "This is my message",
	"timestamp": 1537410673072
}
```

* Create a formatter function that will take the `message` object  and the name text field as parameters and return HTML.

```js
function formatMessage(message, myName) {
    const time = new Date(message.timestamp);
    const formattedTime = `${time.getHours()}:${time.getMinutes()}`;

    if (myName === message.sender) {
        return `
        <div class="mine messages">
            <div class="message">
                ${message.text}
            </div>
            <div class="sender-info">
                ${formattedTime}
            </div>
        </div>
        `
    } else {
        return `
            <div class="yours messages">
                <div class="message">
                    ${message.text}
                </div>
                <div class="sender-info">
                    ${message.sender} ${formattedTime}
                </div>
            </div>
        `
    }
}
```

* Now we loop over the array of the responses, format them and add them to the chatbox.

```js
async function updateMessages() {
    // Fetch Messages
    const messages = await fetchMessages();
    // Loop over the messages. Inside the loop we will:
        // get each message
        // format it
        // add it to the chatbox
    let formattedMessages = "";
    messages.forEach(message => {
        formattedMessages += formatMessage(message, nameInput.value);
    });
    chatBox.innerHTML = formattedMessages;
}
```

Make Sure you understand what’s going on.
* Call the function and look at your browser

```js
updateMessages()
```

* Let’s call this function every 2 seconds to keep the messages updated.

```js
setInterval(updateMessages, 2000);
```

* Now let’s make a function to send messages to the server (I’m using JQuery) here

```js
function sendMessages () {
    const newMessage = {
        sender: nameInput.value,
        text: myMessage.value,
        timestamp: new Date()
    }

    $.post(serverURL, newMessage);
}
```

* Last thing we need to do is to listen to the click event of the send button.
	* That event handler will send the message to the server and clear the text field to prepare for a new message to be sent

```js
sendButton.addEventListener("click", function(sendButtonClickEvent) {
    sendButtonClickEvent.preventDefault();

    sendMessages();
    myMessage.value = "";
});
```
