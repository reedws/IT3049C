---
layout: default
title: 2. Classes and Objects
parent: Labs
has_children: false
nav_order: 2
---

# Classes and Objects
1. Accept the Lab2-OOP [GitHub Classroom Assignment](https://classroom.github.com/a/S6E00Ze2)
2. Clone the repository
3. Open the project in IntelliJ
4. Modify the empty `Person` class in accordance to the class description below.
5. create an `ageValidation` Method that throws an `ExceptionInInitializerError` exception when the YOB is less than 1900.
  - Use this method in both the constructor and the `setYOB` methods.

- You are done with this lab if you pass all the tests in `PersonTest`
  - we will be learning about unit tests later in the class 😉 🌟



#### Person Class

|**Person**|||
|-------|||
|*Fields*|||
||`String firstName;`| |
||`String lastName;`| |
||`int YOB;`| - Year of Birth <br/> - Range should be 1940-2010 <br/> - make sure validations happen in the constructor as well as the setter method. |
|*Methods*|||
||Constructor| - 2 constructors; one that takes first and last name, and the other takes the same plus the YOB |
||Getters and Setters| |
||`public String fullName()`| returns a concatenation of the first and last names |
||`public static int calculateAge(int year)`| - A static method that takes a year and returns an age. <br/> - Use the Calendar Object to get current Year (may requires a bit of web search)|
||`public int getAge()`| - gets the age of the person object. <br/> - Use the `calculateAge()` method for this|
