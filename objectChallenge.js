// function reverseList(list: number[]): number[] {
//   return list.reverse();
// }
// console.log(reverseList([2, 3, 5, 6]));
// interface Library {
//   title: string;
//   author: string;
//   status: {
//     own: boolean;
//     read: boolean;
//     reading: boolean;
//   };
// }
// const library: Library[] = [
//   {
//     title: "la belle fleur",
//     author: "Caspard",
//     status: {
//       own: false,
//       read: false,
//       reading: false,
//     },
//   },
//   {
//     title: "la belle danser ",
//     author: "Louis",
//     status: {
//       own: true,
//       read: false,
//       reading: false,
//     },
//   },
//   {
//     title: "la belle voiture",
//     author: "Eric",
//     status: {
//       own: true,
//       read: false,
//       reading: false,
//     },
//   },
// ];
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;
// const { title: firstBook } = library[0];
// const db = JSON.stringify(library);
// const words: string[] = ["hello", "world", "this", "is", "a", "test"];
// // const sentence: string = words.join(" ").trim();
// // console.log(sentence);
// function putWordTogether(words: string[]): string {
//   return words.join(" ").trim();
// }
// const sentence = putWordTogether(words);
// console.log(sentence);
// function switchUp(number: number): string {
//   switch (number) {
//     case 1:
//       return "one";
//     case 2:
//       return "two";
//     case 3:
//       return "three";
//     case 4:
//       return "four";
//     case 5:
//       return "five";
//     case 6:
//       return "six";
//     case 7:
//       return "seven";
//     case 8:
//       return "eight";
//     case 9:
//       return "nine";
//     default:
//       return "invalid";
//   }
// }
// const numberInLetter = switchUp(1);
// console.log(numberInLetter);
// function sayHello(name: string): string {
//   return `hello , ${name}`;
// }
// const personalizedGreeting = sayHello("mr henri");
// console.log(personalizedGreeting);
// function noSpace(x: string): string {
//   return x.split(" ").join("");
// }
// console.log(noSpace("8 j 8"));
// // function getCelsius(num: number): number {
// //   return ((num - 32) * 5) / 9;
// // }
// // console.log(getCelsius(40));
// const getCelsius = (num: number): number => {
//   return ((num - 32) * 5) / 9;
// };
// console.log(`the temperature is ${getCelsius(32)} \u00B0C`);
// const minmax = (nums: number[]): { min: number; max: number } => {
//   const min: number = Math.min(...nums);
//   const max: number = Math.max(...nums);
//   return { min, max };
// };
// // function sum(...numbers: number[]): number[] {
// //   let sum = 0;
// //   //
// //   for (let index = 0; index < numbers.length; index++) {
// //     return;
// //     sum += numbers[index];
// //   }
// // }
// function sum1(...nums: number[]): number {
//   let sum = 0;
//   for (let index = 0; index < nums.length; index++) {
//     sum += nums[index];
//   }
//   return sum;
// }
// console.log(sum1(2, 4, 6));
var fun = function (strLists) {
    var value = strLists.map(function (str, index) {
        return "".concat(index + 1, " : ").concat(str);
    });
    return value;
};
console.log(fun([]));
function averageScore(score1, score2, score3) {
    var scoreAverage = (score1 + score2 + score3) / 3;
    if (scoreAverage >= 90 && scoreAverage <= 100) {
        return "A";
    }
    else if (scoreAverage >= 80 && scoreAverage < 90) {
        return "B";
    }
    else if (scoreAverage >= 70 && scoreAverage < 80) {
        return "C";
    }
    else if (scoreAverage >= 60 && scoreAverage < 70) {
        return "D";
    }
    else {
        return "F";
    }
}
function add3DCoordinate(c1, c2) {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
// console.log(add3DCoordinate([0, 0, 0], [10, 20, 30]));
console.log(add3DCoordinate([10, 8, 6], [10, 20, 30]));
function simpleStringState(initial) {
    var str = initial;
    return [
        function () { return str; }, // Getter function to return the current string
        function (v) {
            str = v; // Setter function to update the string
        },
    ];
}
var _a = simpleStringState("hello"), str1getter = _a[0], str1setter = _a[1];
console.log(str1getter()); // Outputs: "hello"
str1setter("goodbye"); // Use the setter to update the value
console.log(str1getter()); // Outputs: "goodbye"
function getCount(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// function calculator(mum1, mum2, num3) {
//   let result;
//   switch (operator) {
//     case 1:
//       "+";
//       break;
//     case 2:
//       "-";
//       break;
//     case 3:
//       "*";
//       break;
//     case 4:
//       "/";
//       break;
//     default:
//       "not valid";
//       break;
//   }
//   return
//   result;
// }
function calculator(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    }
    else if (operator == "-") {
        return num1 - num2;
    }
    else if (operator == "*") {
        return num1 * num2;
    }
    else if (operator == "/") {
        return num1 / num2;
    }
    else {
        return "not valid";
    }
}
console.log(calculator(2, "+", 5));
