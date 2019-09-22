---
layout: default
title: 3. Big Rectangles
parent: Labs
has_children: false
nav_order: 3
---

# Big Rectangles
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

3. Create a class `BigRectangleFilter` that implements the `Filter` interface.
4. The `accept` method for this class should accept all Java Rectangle Objects that have a perimeter > 10.
5. Create a Java Main class, `BigRectLister.java`. In this program:
  a. Create an ArrayList of Java Rectangles, making sure that you have several that are over a perimeter of 10.
    ```java
    HelperUtils.collectAll(myArrayListOfRectangles, myBigRectangleFilterInstance);
    ```
  b. Loop over the filtered array and print the dimensions of the Rectangles.