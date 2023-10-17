// CODING ROUND QUESTIONS

// 1. Find duplicate numbers in an array

const array1 = [1, 2, 3, 2, 4, 5, 6, 3];
const duplicates = array1.filter((el, i, arr) => arr.indexOf(el) !== i);
console.log(duplicates);

// 2. Find duplicates without using filter function

