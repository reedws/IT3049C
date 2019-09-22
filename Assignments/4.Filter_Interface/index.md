---
layout: default
title: Assignment 4 - Filter Interface
parent: Assignments
nav_order: 4
---
# Assignment 4 - Filter Interface
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
convention, `4-filter-interface-<your-github-username>`, (i.e., `4-filter-interface-Ygilany`). The repository contains:
1. one Java Project with the following files:
  - Filter.java (interface file)
  - HelperUtils.java (A Collection of Helper methods)
  - ShortWordFilter.java
  - ShortWordLister.java (has a main method)
  - BankAccount.java
  - BigBankAccountFilter.java
  - BigAccountsLister.java (has a main method)
2. a modified README.md file that includes your self-assessment

----

## Instructions
1. Create an interface as follows.
    ```java
    public interface Filter {
      boolean accept(Object x);
    }
    ```
2. In the `HelperUtils` class. implement the `collectAll` method.
  ```java
    public class HelperUtils {
      public static ArrayList<Object> collectAll(ArrayList<Object> objects, Filter f) {
        // Implement the method here.
      }
    }
    ```
  The method should return all items in the `objects` array that are accepted by the given filter. You will use this for the program that follow.
      ```java
        // From the main method
        HelperUtils.collectAll(...);
      ```

### Program 1: Short Words
1. Create a class `ShortWordFilter` that implements the `Filter` interface.
2. The `accept` method for this class should accept all string of length < 5.
3. Create a Java Main class, `ShorWordtLister.java`. This program:
  a. Lets user pick a text file using the `JFileChooser`.
    - a text file of some random words is included in the project.
    - Remember to set the working directory for the `JFileChooser`
  b. Uses the `ShortWordFilter` to display the short words from the file. It can be called as such
    ```java
    HelperUtils.collectAll(myArrayListOfwords, myShortWordFilterInstance);
    ```
c. Loop over the filtered array and print the word to the console.


### Program 2: Big Bank Accounts
1. Create a simple `BankAccount` class.

  |**Bank Account**|||
  |-------|||
  |*Fields*|||
  ||`double balance;`| |
  ||`String accountNumber;`| |
  |*Methods*|||
  ||Constructor| Sets all properties |
  ||Getters| Yes, No setters. |
  ||`public void deposit(double amount)`| |
  ||`public void withdraw(double amount)`| |

2. Create a class `BigBankAccountFilter` that implements the `Filter` interface.
3. The `accept` method for this class should accept all `BankAccount` Objects that have a balance < 10000.
4. Create a Java Main class, `BankAccountLister.java`. In this program:
  a. Create an ArrayList of Bank Accounts, making sure that you have several that are of balance > 10000.
  b. Loop over the filtered array and print the account number and balances of the big accounts..


## Grading
1. The program runs with no errors.
2. Created and defined the Interface file.
3. Helper class implemented properly.
4. ShortWordLister properly utilizes the helper method to print out the short words.
5. BankAccountLister properly utilizes the helper method to print out the Account Number and balances for big accounts.
6. The Bank Account class includes all the fields and methods specified above.
7. Used JavaDoc to document Bank Account classes.
8. Used Junit to test the getters, deposit and withdraw methods of the BankAccount class.
9. Proper usage of Git and GitHub (frequent commits, explanatory commit messages)