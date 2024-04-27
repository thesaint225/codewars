/*Write a function that checks if a given string
 (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or 
other sequence of symbols that reads the same 
backwards as forwards, such as madam or racecar.*/

const isPalinddrome = (x) => {
    // 1st split the string into array  
    // Reverse the  into array 
    // join("") to joint the element of the array into string
    return x.split("").reverse().join("").toLowerCase()= x.toLowerCase()
}

console.log(isPalinddrome("madam"))

