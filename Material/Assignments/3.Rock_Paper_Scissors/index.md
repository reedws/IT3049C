---
layout: default
title: 3. Rock Paper Scissors
parent: Assignments and Labs
published: false
has_children: true
nav_order: 3
---
# 3. Rock Paper Scissors 🪨 📄 ✂️
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Overview
This assignment covers concepts and techniques taught in the class so far. Using Git and GitHub, using JavaScript, and manipulating the DOM using JavaScript. The culmination of that, is the first game we build this semester, Rock-Paper-Scissors, using HTML, CSS, and JavaScript.

## Lab Goals
1. Build a web game using HTML, CSS, and JavaScript.
2. Demonstrate ability to use Bootstrap to setup the page layout.
3. Demonstrate ability to create forms with the form/input elements.
4. Demonstrate understanding of event-oriented programming.
5. Demonstrate understanding of the SOLID principle (Single Responsibility) by separating the game logic from the game controller.

### Guidelines
* commit your code frequently.
* PULL down your teammates code frequently.
* Use useful commit messages.
* Make sure tests pass.
* at the end of each of the following steps, run the tests to make sure you finished the step correctly.
* **Don't forget to fill out the self assessment on the README file**.

## Game Flow
The game flow should be:
1. Web page loads with a form to input user’s name (input is required, they cannot submit it without a value).
    * **concepts**: Building forms, Event-handling, user input validation.
2. User submits name and a new form appears with an input for Rock, Paper, or Scissors.
    * You can use:
      * select/dropdown
      * OR buttons
      * clickable text (but why would you do that!)
3. User submits the form with their selection (input is required, they cannot submit it without a selection)
4. Computer Generates a response.
5. Determine the winner.
6. Display the winner.
7. Keep history of selections and winner of each round and display it.
8. Reset the form after each round
9. User should be able to start a new game.

## Instructions
The assignment instructions are split into the following pages to make it easier to follow.
1. run `npm install`
2. [Setting up the Layout](1.layout)
3. [Styling using CSS and Bootstrap 4](2.styling)
4. [Implementing Game Logic](3.logic)
5. [Putting it all together](4.controller)
5. [Finalize and Submit](5.finalize)


## Extra Credit Opportunities

1. Reset Game Button (3 points - Required for teams more than 2)
- User can Reset the game and Type in a new player name (3 points)
2. Use Buttons instead of Dropdown (1 Extra Credit Points)
3. Unit tests (2 points per test)
- building some unit tests for the [Putting it all together](4.controller) portion of the assignment.

## Output
<img alt="example image" src="assets/example.png" style="height:250px; border:1px #ddd solid;"/>
