// Challenge 1
// Write a method or function that accepts a string. The method or function should return a boolean that describes whether or not the string has an even number of characters.

// 1. Restate the goal.
    // Write a function/method that counts the length of a string.
    // Determines if the length of the string is even or odd. 
    // Return boolean. 
    
// 2. Consider the data.
    // The function/method will declare one parameter.
    // The agrument (data provided in the function call) is a string. 
    // The return value is a boolean.

// 3. Ask clarifying questions.
    // Are there any existing methods that can count the length of a string?
    // Are there any existing methods that can determine if a resulting value is even or odd?

// 4. Break it down.
    // Write a function/method.
    // There is one parameter. The parameter will be named word. 
    // The argument is a string. 
    // Call method to find length of string argument.
    // Test if length of string argument is even or odd using %2 === 0. 

// 5. Research
    // the .length method counts the number of characters within a string
    // the % 2 === operator may help determine if the string length is even or odd.

// 6. Start coding

function evenOrOdd (word) {
    if (word.length % 2 === 0) {
        return `true`
    } else if (word.length % 2 !== 0) {
        return `false`
    }
    } 

console.log(evenOrOdd("kim"));
console.log(evenOrOdd("greg"));
console.log(evenOrOdd("kimmy"));

// 7. Stuck
    // I did not get stuck on this challenge and I attribute that to the problem solving I completed prior to coding!

// 8. Refactor.
    // I believe this is the simpliest way to solve the question/problem. 