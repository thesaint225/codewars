// const x: number = Math.floor(Math.random() * 100 + 1);
// console.log(x);

// const y: number = Math.floor(Math.random() * 50 + 1);
// console.log(y);

// const sumOutput: number = x + y;
// console.log(sumOutput);

// let x: string = "testing";
// let arr: string[] = x.split("");
// let y: number = Math.floor(arr.length / 2);
// if (arr.length % 2 !== 0) {
//   // If the length of the array is odd, log the middle character
//   console.log(arr[y]);
// } else {
//   // If the length is even, indicate it is not applicable
//   console.log("Not applicable for even-length words.");
// }

function getMiddleCharacter(word: string): string {
  const length = word.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even length: return the middle two characters
    return word[middleIndex - 1] + word[middleIndex];
  } else {
    // Odd length: return the middle character
    return word[middleIndex];
  }
}

// console.log(y);

// const y = "cat"[1];
// console.log(y);
