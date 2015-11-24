# Funding Circle - Coding Challenge 2015

## Overview

The problem is to generate N first primes and generate their multiplication table. To determine is a number is prime, the algorithm will first check if it is an even number. If true, then the number is not a prime. If false, then calculate the square root of the number and check every odd number lower than the root starting at the number 3.

**Note: I am not an expert in Clojure/ClojureScript or functional programming at all. I only know the basics and what I have learned in the past 2 days. If you find any improvement to be done, please let me know by creating an issue or contacting me. I'm all ears :)**

## Complexity

How fast does it run? Does it scale?

- This problems run in O(n^2) time. O(n) by getting the first N primes and the second O(n) is by checking all the remaining possible factors of the current number. Therefore, the time complexity in Big O Notation is O(n^2).

- The implementation scales up to a 16bit prime integer (65,536). After that number, it is recommended to use a probabilitic thereom to determine the next N primes.

## Installing

1. Clone this repo
2. Have the latest Node installed or greater than 0.12.x (Clojure book that I read says it, I have Node 4.2.2 installed and it works)
3. Build the project by using the following command in your terminal inside the project.
  ```
  java -cp cljs.jar:src clojure.main node.clj
  ```
4. Run the project:
  ```
  node main.js
  ```

## Runinng tests

1. Build the tests by using the following command in your terminal inside the project.
  ```
  java -cp cljs.jar:src clojure.main watch.clj
  ```
2. Run the tests:
  ```
  node tests.js
  ```