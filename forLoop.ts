// for (let i: number = 0; i <= 10; i++) {
//   console.log(i);
// }

// // initialize  the variable to keep track ofthe total sum

// let sum: number = 0;

// for (let i: number = 1; i <= 100; i++) {
//   // Add current number to sum
//   sum += i;
// }

function factorial(n: number): number {
  // Initialize the result to 1
  let result: number = 1;

  // Multiply result by each number from 1 to n
  for (let i: number = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number: number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);

function multiplicationTable(n: number): void {
  let result: number = 0;
  for (let i: number = 1; i <= 10; i++) {
    console.log(`${n} * ${i}= ${n * i}`);
  }
}

multiplicationTable(5);

function reverseArray(arr: any[]): any[] {
  // Use a for loop to iterate with two pointers: one from the start and one from the end
  for (
    let left: number = 0, right: number = arr.length - 1;
    left < right;
    left++, right--
  ) {
    // Swap the elements at the left and right pointers
    let temp: any = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }

  // Return the reversed array
  return arr;
}

function evenNumber(n) {
  for (let i = 0; i < 50; i++) {
    n;
  }
}

function oodNumber(limit: number): void {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

let a: number = 0;
let b: number = 1;

for (let i: number = 0; i < 10; i++) {
  let nextNumber: number = a + b;
  console.log(nextNumber);
}

// Sum of Numbers 1 to 100: Use a for loop to calculate
// the sum of numbers from 1 to 100. Print the result.

// const userDetails = {
//     name:"henri",
//     id:2243435,
//     profession:"soldat",
//     sex:"male",
//     unit:"48 engr regt "
// }

// for (const key in userDetails) {

//     console.log(key)
// }

interface UserDetails {
  name: string;
  id: number;
  profession: string;
  sex: string;
  unit: string;
}

const userDetails: UserDetails = {
  name: "miessan",
  id: 215275,
  profession: "sldr",
  sex: "M",
  unit: "48 Engr regt",
};
let count: number = 0;

for (const key in userDetails) {
  if (Object.prototype.hasOwnProperty(key)) {
    console.log(key);
  }
}

interface Person {
  name: string;
  age: number;
  city: string;
}

const person: Person = {
  name: "henri",
  age: 32,
  city: "ACCRA",
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key as keyof Person]);
  }
}

// Check Object Property:
// Create an object and use a for-in loop to check if a
// specific property exists in the object. If it does,
// print its value.

interface User1 {
  name: string;
  id: number;
  rank: string;
  unit: string;
}

const sldr: User1 = {
  name: "miessan",
  id: 215275,
  rank: "spr",
  unit: "48 Engr regt ",
};

// Define the specific property  to check

const specificProperty: string = "rank";

for (const key in sldr) {
  if (Object.prototype.hasOwnProperty.call(sldr, key)) {
    // check if the current key is the specific property

    if (key == specificProperty) {
      console.log(
        `the value of ${specificProperty} is:${sldr[key as keyof User1]}`
      );
    }
  }
}
