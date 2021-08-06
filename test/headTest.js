// TESTING CODE FOR HEAD 

const head = require("../head");

assertEqual(head([1,2,3]), 1); // should pass 
assertEqual(head(["Caroline", "Denis", "Matthew"]), "Pizza"); // should fail
assertEqual(head([]), "Pizza"); // actual should return undefined
assertEqual(head([6]), 6); //should still return 6 which is located at index 0
assertEqual(head(["Pizza, Soup"]), "Pizza"); //should pass 
