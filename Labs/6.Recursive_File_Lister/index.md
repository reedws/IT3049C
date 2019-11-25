---
layout: default
title: 6. Recursive File Lister
parent: Labs
nav_order: 6
---
# Lab 6 - Recursive File Lister
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Directions
The worked example from Chapter 13 shows how to use recursion to search for files with a specified extension. Read through the example carefully.

Create a Java Swing GUI program that uses the JFileChooser to allow the user to select a directory on the system. Then use the recursive approach from the worked example to list all the files within the chosen directory and any of its sub-directories. (Use a JTextArea ScrollPane to display the files.
Minimum GUI Elements :
* Start Button that displays the JFileChooser (Set it to only allow the user to pick directories)
* Quit Button
* JTextArea with JScrollPane for displaying the files.
* A title JLabel for you GUI.

**NOTE:** you might NOT want to try to list the entire drive.

## Grading
1. The program runs with no errors.
2. Propert implementation of the Recursion algorithm.
3. Proper usage of Git and GitHub (frequent commits, explanatory commit messages)

## Final Result:
You will be submitting a git repository with the following naming
convention, `6-recursive-file-lister-lab-<your-github-username>`, (i.e., `6-recursive-file-lister-lab-Ygilany`). The repository contains:
1. one Java Project with the following files:
    - FileListerFrame.java (JFrame extended class)
    - FileListerRunner.java (has a main method)
2. a modified README.md file that includes your self-assessment