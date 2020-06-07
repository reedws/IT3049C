"use strict";

const nameInput = document.getElementById("myName");
const myMessage = document.getElementById("myMessage");
const sendButton = document.getElementById("sendButton");
const chatBox = document.getElementById("chat");

const serverURL = `https://it3049c-chat-application.herokuapp.com/messages`;

function fetchMessages() {
    return fetch(serverURL)
        .then( response => response.json())
}

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

setInterval(updateMessages, 2000);


function sendMessages () {
    const newMessage = {
        sender: nameInput.value,
        text: myMessage.value,
        timestamp: new Date()
    }

    $.post(serverURL, newMessage);
}

sendButton.addEventListener("click", function(sendButtonClickEvent) {
    sendButtonClickEvent.preventDefault();

    sendMessages();
    myMessage.value = "";
});