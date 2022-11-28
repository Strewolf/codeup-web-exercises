

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//function analyzeColor(color){
 //      if (color === "red"){
 //       return "red just like my solo cup!"
 //   } else if (color === "green"){
 //       return "green is my favorite color!"
  //  } else if (color === "blue"){
  //         return "blue, the color of the sky"
 //      } else if (color === "orange"){
 //          return "this color reminds me of my favorite fruit"
 //      } else if (color === "yellow"){
 //          return "eh yellow is okay"
  //     } else if (color === "indigo"){
  //         return "indigo, also on e of my favorites"
  //     } else if (color === "violet"){
   //        return "violet, also the name to my favorite song"
   //    }else {
  //      return "I do not know this color"
  //  }

//}

//console.log(analyzeColor("red"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
//console.log(analyzeColor( randomColor ))
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
/**let color = prompt ("Hello, what's your favorite color?")
function analyzeColor(color){
    switch (color){
        case "red":
        alert ("red just like my solo cup!")
        break;
          case "green":
        alert ("green is my favorite color!")
         break;
          case "blue":
        alert ("blue), the color of the sky")
         break;
          case"orange":
        alert ("this color reminds me of my favorite fruit")
         break;
          case "yellow":
        alert ("eh yellow is okay")
         break;
          case "indigo":
        alert ("indigo, also on e of my favorites")
        break;
          case "violet":
        alert ("violet, also the name to my favorite song")
        break;
        default:
        alert ("I do not know this color")
    }

}
console.log(analyzeColor(color))
*/
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/**et totalAmount = prompt ("Please input total bill amount?")
var luckyNumber = Math.floor(Math.random() * 6);
function calculateTotal(luckyNumber,totalAmount){
    switch (luckyNumber) {
        case  0:
            alert ("your lucky number was 0, sorry you don't get a discount ;(");
            alert ("your total bill before discount comes up to " + totalAmount);
            alert ("Your total bill after the discount comes up to" + (totalAmount - (totalAmount * 1)));
            break;
        case  1:
            alert("Congratulations!! your lucky number was 1, you will receive a 10% discount!");
            alert("your total bill before discount comes up to " + totalAmount);
            alert ("Your total bill amount after discount will be " + (totalAmount - (totalAmount * .1)));
            break;
        case  2:
            alert("Congratulations!! your lucky number is 2, you will receive a 25% discount!");
            alert ("Your total bill before discount comes up to " + totalAmount);
            alert ("Your total bill mount after discount will be " + (totalAmount - (totalAmount * .25)));
            break;
        case  3:
            alert ("Congratulations!! your lucky number was 3, you will receive a 35% discount!");
            alert ("Your total bill before discount comes up to "+ totalAmount);
            alert ("Your total bill amount after discount will be " + (totalAmount - (totalAmount * .35)));
            break;
        case  4:
            alert ("Congratulations!! your lucky number was 4, you will receive a 50% discount!");
            alert ("Your total bill before discount comes up to " + totalAmount);
            alert ("Your total bill amount after discount will be " + (totalAmount - (totalAmount * .50)));
            break;
        case  5:
            alert ("Congratulations!! your lucky number was 5, you will receive your items for free!!!!");
            alert ("Your total bill before discount comes up to " + totalAmount);
            alert ("Your total bill amount after discount will be " + (totalAmount - (totalAmount * 0)));
    }
}

console.log(calculateTotal(luckyNumber,totalAmount))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
/**let a = 100
confirm ("Would you like to enter a number");
let userInput = prompt ("Please input your number value");
if (userInput % 2 == 0){
    alert ("The number is even")
} else {
    alert ("the number is odd");
}
if (userInput){
    alert ("Your number plus 100 equals" + z);
}
 */

"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/**function analyzeColor(color) {
    if (color === "red") {
        alert("ew, red");
    } else if (color === "blue") {
        alert("cool, blue!");
    } else {
        alert("that colors okay");
    }
    return(alert(color));
}
*/
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor2(randomColor) {
//     switch (randomColor){
//         case "red":
//             alert("Yuck, I hate " + randomColor);
//             break;
//         case "orange":
//             alert("Yuck, I hate " + randomColor);
//             break;
//         case "yellow":
//             alert("Yuck, I hate " + randomColor);
//             break;
//         case "green":
//             alert("Yuck, I hate " + randomColor);
//             break;
//         case "blue":
//             alert("Yuck, I hate " + randomColor);
//             break;
//         case "indigo":
//             alert("Yuck, I hate " + randomColor);
//             break;
//         case "violet":
//             alert("Yuck, I hate " + randomColor);
//             break;
//     }
// }
// analyzeColor2(randomColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//analyzeColor(prompt('what color do you like most?'));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/*var discount;
console.log(discount);*/


/**
 * TODO:
 default:
 alert("something went wrong.")
 }
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
/**var luckyNumber = Math.floor(Math.random() * 6);
var totalAmount = prompt("what was your total bill?");
function calculateTotal(luckyNumber,totalAmount) {
    var discount;
    switch(luckyNumber) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = 0.1;
            break;
        case 2:
            discount = 0.25;
            break;
        case 3:
            discount = 0.35;
            break;
        case 4:
            discount = 0.5;
            break;
        case 5:
            discount = 1;
    }
    var priceOff = (totalAmount * discount)
    var newTotal = (totalAmount - priceOff)
    alert("Your new bill is $" + newTotal + " , your lucky number is " + luckyNumber + ". You saved $" + priceOff);
}
calculateTotal(luckyNumber,totalAmount);
*/

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/**function analyzeColor(color) {
    if (color === "red") {
        alert("ew, red");
    } else if (color === "blue") {
        alert("cool, blue!");
    } else {
        alert("that colors okay");
    }
    return(alert(color));
}
*/
// Don't change the next two lines!
// These lines create two variables for you:
 //`colors`: a list of the colors of the rainbow
 //`randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
 var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
 /**function analyzeColor2(randomColor) {
     switch (randomColor){
         case "red":
             alert("Yuck, I hate " + randomColor);
             break;
         case "orange":
             alert("Yuck, I hate " + randomColor);
             break;
         case "yellow":
             alert("Yuck, I hate " + randomColor);
             break;
         case "green":
             alert("Yuck, I hate " + randomColor);
             break;
         case "blue":
             alert("Yuck, I hate " + randomColor);
             break;
         case "indigo":
             alert("Yuck, I hate " + randomColor);
             break;
         case "violet":
             alert("Yuck, I hate " + randomColor);
             break;
     }
 }
  analyzeColor2(randomColor)
*/
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//analyzeColor(prompt('what color do you like most?'));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/*var discount;
console.log(discount);*/


/**
 * TODO:
 default:
 alert("something went wrong.")
 }
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
/var luckyNumber = Math.floor(Math.random() * 6);
var totalAmount = prompt("what was your total bill?");
function calculateTotal(luckyNumber,totalAmount) {
    var discount;
    switch(luckyNumber) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = 0.1;
            break;
        case 2:
            discount = 0.25;
            break;
        case 3:
            discount = 0.35;
            break;
        case 4:
            discount = 0.5;
            break;
        case 5:
            discount = 1;
    }
    var priceOff = (totalAmount * discount)
    var newTotal = (totalAmount - priceOff)
    alert("Your new bill is $" + newTotal + " , your lucky number is " + luckyNumber + ". You saved $" + priceOff);
}
calculateTotal(luckyNumber,totalAmount);
*/


 /** TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
if (confirm("Would you like to enter a number?")) {
    var theNumber = prompt("Please enter a number");
        if (theNumber % 2 == 0) {
            alert("the number is even");
        } else {
            alert("the number is odd");
        }
        alert("the number plus 100 is " + ( parseInt(theNumber) + 100));
        if (theNumber < 0) {
            alert("the number is negative");
        } else {
            alert("the number is positive");
        }
    }



