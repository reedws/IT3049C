---
layout: default
title: 3. Rock Paper Scissors
parent: Assignments and Labs
published: false
has_children: true
nav_order: 3
---
# 3. Rock Paper Scissors
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Lab Goals
1. Build our first game using HTML, CSS, and JavaScript.
2. Demonstrate ability to use Bootstrap to setup the page layout.
3. Demonstrate ability to create forms with the form/input elements.
4. Demonstrate understanding of event-oriented programming.

### Guidelines
* commit your code frequently.
* Use useful commit messages.
* Make sure tests pass.
* at the end of each of the following steps, run the tests to make sure you finished the step correctly.
* **Don't forget to fill out the self assessment on the README file**.

## Game Flow
This assignment, we will be building the Rock, Paper, Scissors(RPS) game. We will be utilizing the concepts and techniques covered in the past few weeks to allow a user to play against the Computer. The game flow should be:
1. Web page loads with a form to input user’s name (input is required, they cannot submit it without a value).
    * **concepts**: Building forms, Event-handeling, user input validation.
2. User submits name and a new form appears with an input for Rock, Paper, or Scissors.
    * You can use:
      * select/dropdown
      * OR buttons
      * text buttons (but why would you do that!)
3. User submits the form with their selection (input is required, they cannot submit it without a selection)
4. Computer Generates a response.
5. Determine the winner.
6. Display the winner.
7. Keep history of selections and winner of each round and display it.
8. Reset the form after each round
9. User should be able to start a new game.

## Instructions
1. [Setting up the Layout](1.layout)
2. [Styling using CSS and Bootstrap 4](2.styling)
3. [Implementing Game Logic](3.logic)
4. [Handeling user input](4.event)
5. Publish the project to GitHub pages


## Extra Credit Opportunity

    ### Game Logic (5 Extra Credit Points)
    - a drop down that selects the type of game logic (Cheat vs Normal)
    - change h1 to you RPS - You may never win

    ### Use Buttons instead of Dropdown (5 Extra Credit Points)


## Output
<img alt="example image" src="assets/example.png" style="height:250px; border:1px #ddd solid;"/>


### Grading
1. The application runs with no errors.
2. The computer player is able to select a random option on every play.
3. The game logic is sound.
  a. Win
  b. Lost
  c. And Tie
4. The playing history is maintained and presented to the user. (see the screenshot above where it has Round 1, 2,…)
5. For 4 points of Extra Credit: User can Reset the game and Type in a new player name.
6. For 2 points of Extra Credit: Make the game aesthetically pleasing (just adding Rock Paper Scissor images doesn’t count ☺)