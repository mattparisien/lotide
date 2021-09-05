# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mattparisien/lotide`

**Require it:**

`const _ = require('@mattparisien/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the head of a given array (the value at index 0).
* `tail(array)`: Returns the tail of a given array (all of it's values except the one located at index 0).
* `middle(array)`: Returns the middle values of an array.
* `flatten(array)`: Flattens a two dimensional array a single level deep.
* `findKey(object, callback)`: Finds an object's key, it takes in an object and a callback function as its two arguments. The callback specifies the key you wish to find.
* `findKeyByValue(object, value)`: Finds an object's key by its value. findKeyByValue takes in the object you wish to traverse, and the value you wish to find.
* `eqArrays(arrOne, arrTwo)`: Accepts the two arrays you wish to compare as its arguments. eqArrays will return a boolean which specifies the strict equality of the two arrays.
* `eqObjects(object1, object2)`: Compares two objects and returns true or false based on their equality. Accepts the two objects you wish to compare as its arguments. 
* `assertEqual(actual, expected)`: This function compares the actual results from a given function and the expected results. assertEqual will return a string specifying the assertion's passing or failing outcome, it is thus best used for unit testing. Its arguments include two string you want to test. 
* `assertArraysEqual(arr1, arr2)`: This function takes in two arrays as its arguments, and will return a string specifying whether the two arrays are equal or unequal.
* `assertObjectsEqual(object1, object2)`: this function takes in two objects as its arguments, and will return a string specifying whether the two arrays are equal or unequal.
* `countLetters(string)`: returns the count of each character in a given string through the form of an object. It accepts the string you wish to analyze as its sole argument. 
* `countOnly(allItems, itemsToCount)`: counts the amount of specified items in a given array. countOnly's first argument takes an array, and its second argument takes in an object, which should specify as its key the array's value to count, and as its value a boolean. For example, if you wish to count the amount of items who have a value of "Salima" in your array, your second argument might look like this: {"Salima": true}. 
* `letterPositions(string)`: returns the indexes of each character in a given string through the form of an object. The object's key's will be the characters themselves, and the values will be populated by the corresponding index positions. It accepts the string you wish to analyze as its sole argument.
* `without(source, itemsToRemove)`: Returns a clone of the original array without the unwanted items specified. This function takes in a source array, and an array of items to remove from the source. This function will not modify the original array.
* `takeUntil(array, callback)`: This function returns a new array, with all item included in the orignal array until a specified condition is met. Its arguments include the source array, and a callback function which will return all elements that meet the condition specified. takeUntil does not modify the original array.
* `map(array, callback)`: this function returns a clone of the original array (does not modify the source array), with the values modified according to the specific condition in the callback fn.