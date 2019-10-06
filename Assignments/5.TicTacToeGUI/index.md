---
layout: default
title: Assignment 5 - Tic Tac Toe GUI
parent: Assignments
nav_order: 4
---
# Assignment 5 - Tic Tac Toe GUI
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Lab Goals:
1. Get practice with using the Java GUI methods.
2. Adding a GUI to an exisitng console application program.

## Discussion:
It is not uncommon to develop the logic of a program as a console application (NO GUI) and then craft a GUI on to it later. There are also many reasons for separating the GUI of the program from the rest of the code logic. (This is part of a common design pattern called Model-View-Controller (MVC) where the GUI represents the View aspect.) For instance, you might have a Web-based or mobile device GUI in addition to a Desktop Application one…
So for this lab, I want you to recode the 2-player Tic Tac Toe game. You can use the same internal data representation (board) and much of the code from the previous version.
The starter files, should already include a copy of the Tic Tac Toe console program code from Bb. The computer does not play the game but facilitates two human players enforcing the rules for the game and determining ties and wins. It should prompt the user to play again when a game ends.

## Final Result:
You will be submitting a git repository with the following naming
convention, `5-tic-tac-toe-gui-<your-github-username>`, (i.e., `5-tic-tac-toe-gui--Ygilany`). The repository contains:
1. one Java Project with the following files:
    - TicTacToeFrame.java (JFrame extended class)
    - TicTacToeRunner.java (has a main method)
2. a modified README.md file that includes your self-assessment

----

## Instructions
1. Create a Java Swing GUI applicaton called TicTacToeGUI.
  - Your project will have a TicTacToeFrame.java class (which inherits from JFrame) and a java main class: TicTacToeRunner.java.
2. The game is the same in every respect to the previous lab from CP I (where we refactored Tic Tac Toe console code from the text) except that there is now a GUI to handle the display of the game state and the input from the user. Starting with X each player alternates making a move by clicking on a square. The game blocks until a legal move is entered and then switches to receive input from the other player. The game should check for wins after each move starting with the 5th and should check for a tie (7th move).
3. Use JOptionPane to msg the user as needed for illegal moves and when the game is won or tied, or the user quits. Do not use any console (System.out.print…) output as this is a GUI program.
4. Use grid layout to create a 3 X 3 matrix of JButton objects for the Tic Tac Toe board. Provide a quit button as well. Hint: use an Array of JButton objects for the squares. IF you do this in a clever way as a 2D array, it will interface nicely with your previous code for the game. I suggest that you sub-class the JButton to create a TicTacToeButton class that holds the state of the button.
5. You also want to create a single listener instance for all the Buttons on the board. It should determine the row col position of the Button and interface with the code for the game logic.
6. Provide many screen shots that establish that your game works correctly:
  - Win dialog
  - Tie dialogs (Full board tie and the not full board tie)
  - Looping until user enters a valid move
7. Test your program thoroughly

## Grading
1. The program runs with no errors.
2. Created a GUI application.
3. Logic is sound.
4. Proper usage of Git and GitHub (frequent commits, explanatory commit messages)