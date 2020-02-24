---
layout: default
title: 3. Hangman
parent: Assignments
nav_order: 3
---
# Assignment 3 - Hangman
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Lab Goals
1. Create a Hangman game.
2. Demonstrate ability to make network HTTP Requests using (XMLHttpRequest, jQuery, or Fetch API)
3. Demonstrate ability to create forms to allow user input.
4. Demonstrate ability to create graphics using Canvas.

## Instructions
For this assignment you will be building Hangman. Your goal is to build this game using HTML, CSS, JavaScript, and the concepts/techniques we have covered these past two weeks to build the game completely. The process of the game should be:
1. Allow the user to specify the difficulty (Easy is words length 3-5, Medium is length 6-9,Hard is 10-15)
2. On page load make an AJAX request to https://hangman-micro-service-bpblrjerwh.now.sh/to get your word for the game (Don’t forget to include the difficulty in the querystring)
  a. For example:
    i. https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=easy
    ii. https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=medium
    iii. https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=hard
  b. Don’t hardcode all three URLs. Instead, use string templating to populate the querystring.
3. Show the word using underscores in place of letters which have not yet been guessed, a display containing all previously guessed letters, and the “Hangman” (use canvas for the hangman drawing)
4. Allow user to input a letter to guess. Alert the user if they enter a letter they have already guessed
5. If the guessed letter is correct, show it in the proper place for the word display
6. If the guessed letter is incorrect, draw the next body part on the hangman (whatever orderand number of lines/body parts you wish)
7. When the game is over, alert the user if they won or lost and give an option to reset the game

## Tips and Guidelines
* Do not push everything in one commit.
* Use useful commit messages

## Grading
1. The application runs with no errors.
2. The user is presented with 3 difficulties to select from.
3. The application can send HTTP requests passing a difficulty level in the query string and able to parse the response.
4. The application obscures the word with underscores of same length as the original word.
5. The application alerts the user if an already guessed letter was guessed again.
6. The applicatoin draws the hangman (stick man) on wrong guesses.