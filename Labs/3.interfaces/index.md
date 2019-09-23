---
layout: default
title: 3. Short Words Filter
parent: Labs
has_children: false
nav_order: 3
---

# Short Words Filter
1. Create an interface as follows.
    ```java
    public interface Filter {
      boolean accept(Object x);
      ...
    }
    ```
2. Implement a static method in the Filter Interface `applyFilter`.
  The method would take an ArrayList of type object `objects` and a Filter Instance, and would return all items in the `objects` array that are accepted by the supplied filter.
  NOTE how the method parameter and return types are `Object` so it can accept any type.
  ```java
    static ArrayList<Object> applyFilter(ArrayList<Object> objects, Filter f) {
      // loop over the array list of objects
        // if the passed filter's accept method returns true, then add the element to the arraylist to be returned.
      // return the filtered array list
    }
  ```
3. Create a class `ShortWordFilter` that implements the `Filter` interface.
4. The `accept` method for this class should accept all string of length < 5.
5. Modify the main method of the `ApplicationRunner` to do the following:
  * Lets user pick a text file using the `JFileChooser`.
    - a text file of some random words is included in the project.
    - Remember to set the working directory for the `JFileChooser`
  * Uses the `ShortWordFilter` to display the short words from the file. It can be called as such
    ```java
    Filter.applyFilter(myArrayListOfwords, myShortWordFilterInstance);
    ```
  * Loop over the filtered array and print the word to the console.