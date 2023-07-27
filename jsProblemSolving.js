// Task 1 : 

// Create a function that takes a string as input 
// and returns the reversed version of the string 
// without using the built-in reverse() method.

function reverseString(inputString) {
    let stringReversed = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        stringReversed += inputString[i];
    }
    return stringReversed;
}

const givenString = "Hello JavaScript";
console.log(reverseString(givenString)); // output is : tpircSavaj olleH

// ------------------------------------------

// Task 2 : 

// Create a function that takes an array of numbers as input 
// and returns the sum of all positive numbers in the array.

function sumOfPositiveNumbers(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (Math.sign(inputArray[i]) === 1) {
            sum += inputArray[i];
        }
    }
    return sum;
}

const givenArray = [2, 4, -3];
console.log(sumOfPositiveNumbers(givenArray)); // output is : 6

// --------------------------------------------

// Task 3:

// Write a JavaScript program to find 
// the most frequent element in an array and return it. 

function findMostFrequentElement(inputArray) {
    let countElement = {};
    for (let element of inputArray) {

        // try to understand this if else block from else statement
        // the else block is taking the array element as a key of the count element object 
        // and sets it's value to 1
        // then comes the if block
        // the if block checks if the element exist in countElement object as a key
        // if exist then it enter in the block and increment the value with increment operator 

        if (countElement[element]) {
            countElement[element]++;
        } else {
            countElement[element] = 1;
        }
    }

    let mostFrequentElement;
    let maximumCount = 0;

    for (let element in countElement) {

        if (countElement[element] > maximumCount) {
            mostFrequentElement = element;
            maximumCount = countElement[element];
        }
    }
    return mostFrequentElement;
}

const task3Array = [2, 4, 6, 4];
console.log(findMostFrequentElement(task3Array));  // output is : 4


// ----------------------------------------------------

// Task 4:

// Create a function that takes a sorted array of numbers 
// and a target value as input. 
// The function should find two numbers in the array 
// that add up to the target value. 
// Return an array containing the indices of the two numbers.

function twoSum(sortedArray, target) {
    for (let i = 0; i < sortedArray.length; i++) {

        for (let j = 0; j < sortedArray.length; j++) {
            if (i !== j) {
                let sum = sortedArray[i] + sortedArray[j];
                if (sum === target) {
                    return [i, j];
                }
            }
        }
    }
}

console.log(twoSum([3, 6, 9, 12], 21)); // output is : [2, 3]



// ------------------------------------------------

// Task 5: 

// Implement a simple JavaScript calculator. 
// The calculator should take two numbers 
// and an operator (+, -, *, /) as input 
// and return the result of the operation.

function jsCalculator(numOne, numTwo, operator) {
    switch (operator) {
        case "+":
            return numOne + numTwo;
        case "-":
            return numOne - numTwo;
        case "*":
            return numOne * numTwo;
        case "/":
            if (numTwo !== 0){
                return numOne / numTwo;
            } else {
                throw new Error("Division by zero is undefined");
            }
        default:
            throw new Error("Invalid number or operator. Please use +, -, * or / as an operator")
    }
}

console.log(jsCalculator(9, 3, "/")); // output is : 3



// -----------------------------------------------------------

// Task 6: 
// Create a program 
// that generates a random password of a specified length. 
// The password should include a mix of 
// uppercase letters, lowercase letters, numbers, and special characters.


function randomPasswordGenerator (passwordLength){
    let password = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+<>?/{}[].,;";

    const allChars = upperCaseChars + lowerCaseChars + numericChars + specialChars;
    
    for (let i = 0; i < passwordLength; i++){
        const generateRandomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[generateRandomIndex];
    } 

    return password;
}

console.log(randomPasswordGenerator(8)); // output sample : 9li$4d5@


// ----------------------------------------------------------


// Task 7: 
// Implement a function that converts a Roman numeral to an integer. 
// The function should take a Roman numeral string (e.g., "IX" or "XXI") 
// as input and return the corresponding integer value.

