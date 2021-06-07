---
layout: default
title: 4. Chatting Application
parent: Assignments and Labs
has_children: false
published: true
nav_order: 4
---
---
# 4. Chatting Application (Lab)
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
This an individual lab, you will be following the instructions and to build a chatting application that we can use as a class.
For most of the parts, I have provided snippets of code for you to use.
> Make sure your understand those snippets for your own sake, as well as for future assignments.

## Lab Goals
1. Build a simple chatting application using HTML, CSS, and JavaScript.
2. Demonstrate ability to use Bootstrap to setup the page layout.
3. Demonstrate ability to create forms with the form/input elements.
4. Demonstrate understanding of event-oriented programming.
5. Demonstrate understanding of JSON objects, Web Request, and the Fetch API.

### Tips and Guidelines
* commit your code frequently.
    * the <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> icon usually indicates a good checkpoint for a commit.
    * Make useful commit messages.
      * Good: `Created a function to send message to server`
      * Bad: `stuff`, `updates`, `it works`
* Make sure tests pass.
    * I noticed some of you were confused about how not every step of the assignment, reflected another passing test. The new symbol here `✅ ++` usually indicates that another test should pass at this point.
* **Don't forget to fill out the self assessment on the README file**.

> Unlike previous assignments, I didn't get a change to finalize and make sure that there are enough unit tests. I left many of them commented out in the code, though. Don't worry too much about them.
### Emoji Legend
To aid navigating the instructions, I'll utilize the following emojis.

- 🐨 Kody the Koala Bear - "Do this"
- 💰 Marty the Money Bag - "Here's a hint"
- 💯 Hannah the Hundred - "Extra Credit"
- 🦉 Olivia the Owl - "Pro-tip"
- 📜 Dominic the Document - "Docs links"
- 💣 Berry the Bomb - "Remove this code"
- 🚨 Alfred the Alert - "Extra helpful in test errors"

> This is an idea I'm borrowing from [Kent C. Dodds](https://kentcdodds.com), a great developer and instructor that I learn a lot from him and encourage you to follow his work.

## Instructions
1. Accept the assignment on canvas.
  This will create a repository for you with a few starting files.
    ```
    .
    ├── resources
    │   ├── images
    │   │   └── .gitkeep
    │   ├── scripts
    │   │   └── index.js
    │   └── styles
    │       └── styles.css
    ├── index.html
    └── README.md
    ```
   1. the `index.html` file includes
       * a title of `IT3049C-Chat`
       * a link to the styles sheet in `resources/css/styles.css` - For out custom styles.
       * a link to the script file in `resources/js/index.js` - For our custom scripts.
       * a link to Bootstrap styles and scripts. - For a responsive design with better ascetics
       * a link to FontAwesome styles. - for icons

       <details>
       <summary markdown="span">
           <strong>The starting html page should look like this (This is expandable - click me)</strong>
       </summary>
       ```html
       <!DOCTYPE html>
       <html lang="en">
           <head>
               <meta charset="UTF-8" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               <title>IT3049 Chat</title>
               <!-- Bootstrap + JQuery + FontAwesome -->
               <link rel="stylesheet" href="resources/vendor/bootstrap.min.css" />
               <script src="resources/vendor/jquery-3.5.1.slim.min.js"></script>
               <script src="resources/vendor/popper.min.js"></script>
               <script src="resources/vendor/bootstrap.min.js"></script>
               <link rel="stylesheet" href="resources/vendor/fontawesome-free/css/all.min.css" />
               <link rel="stylesheet" href="resources/css/styles.css" />
           </head>

           <body>
               <header>

               </header>

               <div id="chat">

               </div>

               <footer>

               </footer>
               <!-- Our own Scripts -->
               <script src="resources/js/index.js"></script>
           </body>
       </html>
       ```
       </details>
2. run `npm install`
3. [Setting up the Layout](1.layout)
4. [Bringing it to Life](2.javascript)
5. [Finalize and Submit](3.finalize)
## 💯 Extra Credit
* Create a refresh button to refresh the messages sooner than the 10 seconds auto-update.
* use the colorAPI to change the color scheme of the application.
* Investigate and implement a mechanism to save data in the browser (even after you close the browser and open it again, try to do that.)
    * 💰 : Look into `LocalStorage`