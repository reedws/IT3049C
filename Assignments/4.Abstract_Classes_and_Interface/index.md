---
layout: default
title: Assignment 4 - Printable Interface
parent: Labs
nav_order: 5
---
# Assignment 4 - Printable Interface
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Lab Goals:
1. Practise using interfaces.
2. Practise using predicate-based interfaces.
3. Create a callback interface.
4. Create Abstract Classes.

## Final Result:
You will be submitting a git repository with the following naming
convention, `4-printable-interface-<your-github-username>`, (i.e., `4-filter-interface-Ygilany`). The repository contains:
1. one Java Project with the following files:
  - Printable.java (interface file)
  - Shape.java (abstract class)
  - Circle.java (inherits from `Shape`)
  - Square.java (inherits from `Shape`)
  - BankAccount.java (implements `Printable`)
  - ApplicationRunner.java (has a main method)
2. a modified README.md file that includes your self-assessment

----

## Instructions
1. Create an interface as follows.
    ```java
    public interface Printable {
      void printToConsole(Object x);
      void printToFile(Object x);
    }
    ```
3. Create a simple `BankAccount` class that implements the `Printable` interface.
  a. You mush implement the `printToConsole()` method.

  |*Bank Account*|||
  |-------|||
  |*Fields*|||
  ||`double balance;`| |
  ||`String accountNumber;`| |
  |*Methods*|||
  ||Constructor| Sets all properties |
  ||Getters| Yes, No setters. |
  ||`public void deposit(double amount)`| |
  ||`public void withdraw(double amount)`| |

4. Create a simple abstract class `Shape` that implements the `Printable` interface.
5. Create a `Circle` class that extends the `Shape` class.
  * You must implement all the `Shape` methods.
  * You mush implement the `printToConsole()` method.
  * **(For 1 Extra Point)** implement the `printToFile()` method
6. Create a `Rectangle` class that extends the `Shape` class.
  * You must implement all the `Shape` methods.
  * You mush implement the `printToConsole()` method.
  * **(For the same 1 Extra Point)** implement the `printToFile()` method

![](assets/UML.jpeg)

7. In the `ApplicationRunner.java`, create at least 1 instance of each instantiatable class.
8. Add all objects to an `ArrayList<...>`. What type of ArrayList should this be?
9. Loop over all the objects and call the `printToConsole` method.
10. **(For 4 Extra Points)**
  * Copy the `Filter` interface from the lab.
  * Create a `LargeShapesFilter` class that implements the Filter interface. Modify the `accept` implementation so it accepts any shape with an area of 50 units and above.
  * in the ApplicationRunner, make sure you have multiple shapes of different sizes, filter out all the large ones and print them to console.

11. Used `Junit` to test the getters, `deposit` and `withdraw` methods of the `BankAccount` class.

## Grading
1. The program runs with no errors.
2. Created and defined the Interface file.
3. The `BankAccount` class includes all the fields and methods specified above.
4. The `BankAccount` class properly implements the `Printable` interface.
5. Used `Junit` to test the getters, `deposit` and `withdraw` methods of the `BankAccount` class.
6. **(For 1 Extra Point)** implement the `printToFile()` method for (BankAccount, Circle, and Rectangle Classes)
7. Created a proper ArrayList to house all the different printable objects.
8. The `ApplicationRunner.java` properly prints all instances of the classes.
9. `ApplicationRunner` properly utilizes the static helper method to filter the arraylist of shapes.
10. **(For 4 Extra Points)** Proper implementation and usgae of the Filter interface.
11. Proper usage of Git and GitHub (frequent commits, explanatory commit messages)
