/*Write a function that checks if a given string
 (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or 
other sequence of symbols that reads the same 
backwards as forwards, such as madam or racecar.*/

// const isPalinddrome = (x) => {
//     // 1st split the string into array
//     // Reverse the  into array
//     // join("") to joint the element of the array into string
//     return x.split("").reverse().join("").toLowerCase()= x.toLowerCase()
// }

// console.log(isPalinddrome("madam"))

/*Take an array and remove every second element 
from the array. Always keep the first element 
and start removing with the next element. */

// explanation

/*
We define a function removeEverySecondElement which takes 
an array arr as input.
We start a loop from index 1 (the second element) 
and increment by 2 in each iteration to skip every second element.
Inside the loop, we use splice() to remove the element at the current
 index (i) from the array.
We return the modified array after all the removals.
 */

// function removeEverySecondElement(arr) {
//     // Start the loop from the second element (index 1) and remove every second element
//     for (let i = 1; i < arr.length; i += 2) {
//         arr.splice(i, 1); // Remove the element at index i
//     }
//     return arr; // Return the modified array
// }

// Example usage:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const modifiedArray = removeEverySecondElement(array);
// console.log(modifiedArray); // Output: [1, 3, 5, 7, 9]

let myString = "developer";
let newString = myString.charAt(0);
console.log(newString);
let nouveauString = newString.toLocaleUpperCase();
console.log(nouveauString);
myString = "eveloper";
console.log(myString);
const newString1 = nouveauString + myString;
console.log(newString1);

// Declare a String
// let str = "GeeksforGeeks";

// Use String split() method to
// Convert String to an Array
// let arr = str.split("");

// console.log(arr);
