// const x: number = Math.floor(Math.random() * 100 + 1);
// console.log(x);
// const y: number = Math.floor(Math.random() * 50 + 1);
// console.log(y);
// const sumOutput: number = x + y;
// console.log(sumOutput);
var x = "testing";
var arr = x.split("");
var y = Math.floor(arr.length / 2);
if (arr.length % 2 !== 0) {
    // If the length of the array is odd, log the middle character
    console.log(arr[y]);
}
else {
    // If the length is even, indicate it is not applicable
    console.log("Not applicable for even-length words.");
}
// console.log(y);
// const y = "cat"[1];
// console.log(y);
