// Challenge 2
// Update your previous method or function so it accepts an array. The method or function should return a boolean that describes whether or not the array's length is an even number.

// 1. Restate the goal.
    // Write a function/method that counts the length of an array.
    // Determines if the length of the array is even or odd. 
    // Return boolean. 
    
// 2. Consider the data.
    // The function/method will declare an array of parameters. 
    // The agruments (data provided in the function call) are an array of strings. 
    // The return value is a boolean.

// 3. Ask clarifying questions.
    // Are there any existing methods that can count the length of an array?
    // Are there any existing methods that can determine if a resulting value is even or odd?

// 4. Break it down.
    // Write a function/method.
    // The three parameters are an array. The parameters will be named word1, word2, and word3. 
    // The agruments are strings. 
    // Call method to find length of string arguments.  
    // Test if length of string array is even or odd using %2 === 0.

// 5. Research. 
    // Try using .length method on an array. The .length method counts the number of elements in an array. So, need to count number of characters in each arguement provided. 

// 6. Start coding.

function evenOrOdd (word1, word2, word3) {
    var wordLengths = word1.length + word2.length + word3.length
    if (wordLengths % 2 === 0) {
        return `true`
    } else {
        return `false`
    }
    }
  console.log(evenOrOdd("one", "two", "four"))
  console.log(evenOrOdd ("one", "two", "fou"))

// 7. Stuck?
    // I got stuck on this exercise when I realized that the .length method counted the number of elements in an array. 
    // I realized that I needed to write code that would first determine the total length of the three string arguements. 

// 8. Refactor.
    // I believe this is the simpliest way to solve the question/problem. 

// Reflect
// Before continuing, take some time to reflect on the following questions.
// 1. What do you like about this process?
    // I love this process! 
    // This breaks down the challenge into manageable steps that I can tackle. 
    // It makes me feel less intimidated and more empowered to solve a problem.
    // This process ensures that I understand the goal before proceeding.

// 2. What might make this process challenging?
    // Being under a tight deadline, trying to execute the process during an interview, or if original problem involved new concepts you were not familiar with.
    
// 3. Are there any steps you would add or modify?
    // I would add a step where you log some of the mistakes or errors you encountered so you don't repeat them in the future.

