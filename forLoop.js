// for (let i: number = 0; i <= 10; i++) {
//   console.log(i);
// }
// // initialize  the variable to keep track ofthe total sum
// let sum: number = 0;
// for (let i: number = 1; i <= 100; i++) {
//   // Add current number to sum
//   sum += i;
// }
function factorial(n) {
    // Initialize the result to 1
    var result = 1;
    // Multiply result by each number from 1 to n
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
var number = 5;
console.log("Factorial of ".concat(number, " is ").concat(factorial(number)));
function multiplicationTable(n) {
    var result = 0;
    for (var i = 1; i <= 10; i++) {
        console.log("".concat(n, " * ").concat(i, "= ").concat(n * i));
    }
}
multiplicationTable(5);
function reverseArray(arr) {
    // Use a for loop to iterate with two pointers: one from the start and one from the end
    for (var left = 0, right = arr.length - 1; left < right; left++, right--) {
        // Swap the elements at the left and right pointers
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    // Return the reversed array
    return arr;
}
function evenNumber(n) {
    for (var i = 0; i < 50; i++) {
        n;
    }
}
function oodNumber(limit) {
    for (var i = 0; i <= limit; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
var a = 0;
var b = 1;
for (var i = 0; i < 10; i++) {
    var nextNumber = a + b;
    console.log(nextNumber);
}
var userDetails = {
    name: "miessan",
    id: 215275,
    profession: "sldr",
    sex: "M",
    unit: "48 Engr regt",
};
var count = 0;
for (var key in userDetails) {
    if (Object.prototype.hasOwnProperty(key)) {
        console.log(key);
    }
}
var person = {
    name: "henri",
    age: 32,
    city: "ACCRA",
};
for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key]);
    }
}
var sldr = {
    name: "miessan",
    id: 215275,
    rank: "spr",
    unit: "48 Engr regt ",
};
// Define the specific property  to check
var specificProperty = "rank";
for (var key in sldr) {
    if (Object.prototype.hasOwnProperty.call(sldr, key)) {
        // check if the current key is the specific property
        if (key == specificProperty) {
            console.log("the value of ".concat(specificProperty, " is:").concat(sldr[key]));
        }
    }
}
