// Challenge 3
// Write a method or function that accepts a number from 1-24 that represents the current time rounded to the closest hour in 24-hour military time. 
// (i.e. 11 = 11:00 AM, 16 = 4:00 PM). The function should return a different greeting based on the time of day.

//4 AM - 11 AM: Good morning!
//12 PM - 4 PM: Good afternoon!
//5 PM - 8PM: Good evening!
//9 PM - 3 AM: Good night!

// 1. Restate the goal.
    // Write a function/method that accepts a number argument from 1-24. 
    // The number agrument needs to be rounded to closest hour in 24-hour military time.
    // Based on the military time, the function/method needs to return a specific greeting.
    
// 2. Consider the data.
    // The function/method will declare one parameter.
    // The agrument is a number. 
    // The return value is a specific greeting.

// 3. Ask clarifying questions.
    // None

// 4. Break it down.
    // Write function/method.
    // There is one parameter. 
    // The agrument is a number.

// 5. Research
    //  1 PM = 13:00
    //  2 PM = 14:00
    //  3 PM = 15:00
    //  4 PM = 16:00
    //  5 PM = 17:00
    //  6 PM = 18:00
    //  7 PM = 19:00
    //  8 PM = 20:00
    //  9 PM = 21:00
    // 10 PM = 22:00
    // 11 PM = 23:00
    // 12 PM = 24:00

// 6. Start coding

function timeOfDayGreeting(currentHourIn24HourFormat) {
    if (currentHourIn24HourFormat >= 4 && currentHourIn24HourFormat <= 11) {
        return `Good morning!`
    } else if (currentHourIn24HourFormat >= 12 && currentHourIn24HourFormat <= 16) {
        return `Good afternoon!`;
    } else if (currentHourIn24HourFormat >= 17 && currentHourIn24HourFormat <= 20) {
        return `Good evening!`
    } else if (currentHourIn24HourFormat >= 1 && currentHourIn24HourFormat <= 3) {
        return `Good night!`
    } else if (currentHourIn24HourFormat >= 21 && currentHourIn24HourFormat <= 24)
        return `Good night!`
    }

// 4 AM - 11 AM: Good morning!
console.log(timeOfDayGreeting(4))
console.log(timeOfDayGreeting(5))
console.log(timeOfDayGreeting(6))
console.log(timeOfDayGreeting(7))
console.log(timeOfDayGreeting(8))
console.log(timeOfDayGreeting(9))
console.log(timeOfDayGreeting(10))
console.log(timeOfDayGreeting(11))

// 12 PM - 4 PM: Good afternoon!
console.log(timeOfDayGreeting(12))
console.log(timeOfDayGreeting(13))
console.log(timeOfDayGreeting(14))
console.log(timeOfDayGreeting(15))
console.log(timeOfDayGreeting(16))

// 5 PM - 8 PM: Good evening!
console.log(timeOfDayGreeting(17))
console.log(timeOfDayGreeting(18))
console.log(timeOfDayGreeting(19))
console.log(timeOfDayGreeting(20))

// 9 PM - 3 AM: Good night!
console.log(timeOfDayGreeting(21))
console.log(timeOfDayGreeting(22))
console.log(timeOfDayGreeting(23))
console.log(timeOfDayGreeting(24))
console.log(timeOfDayGreeting(1))
console.log(timeOfDayGreeting(2))
console.log(timeOfDayGreeting(3))

// 7. Stuck?
    // I got on this exercise because I misread the challenge. I thought I need to convert the number argument to military time. I was feeling burned out and just wanted to finish the last exercise.
    // As soon as I took a break and came back to the problem, I realized whta the challenge was asking. I was able to solve it immediately. 
    
// 8. Refactor.
    // I believe this is the simpliest way to solve the question/problem. 