const arr: number[] = [1, 2, 3, 4, 5];
const arr1: number[] = arr.reverse();
arr1.unshift(6);
arr1.push(0);

console.log(arr1);

const arr2: number[] = [1, 2, 3, 4, 5];
const arr3: number[] = [6, 7, 8, 9, 10];

const arr4: number[] = arr1.concat(arr3);
console.log(arr4);
