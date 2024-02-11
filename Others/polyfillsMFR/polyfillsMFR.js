//polyfill of Map

//arr.map((val, i, arr)=>)

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let arr = [1, 2, 3, 4, 5];

let val = arr.myMap((val) => val + 2);
console.log(val);

//polyfill of Filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

let filtered = arr.myFilter((a) => a > 2);
console.log(filtered);

//myMap and myFilter

let mapFilter = arr.myMap((a) => a * 3).myFilter((a) => a > 6);
console.log(mapFilter);

//Polyfill of Reduce

Array.prototype.myReduce = function (cb, initialVal) {
  let accumulator = initialVal;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

let sum = arr.reduce((acc, i) => acc + i, 0);
console.log(arr);
console.log(sum);
let newSum = arr.myReduce((acc, i) => acc + i, 0);
console.log(newSum);

//Difference between forEach and Map
// 1. Map returns a new Array without modifying the original Arr
// For Each does not returns a new Array and can be used to modify the original array
// 2. We can chain other methods with Map
// we can not chain other methods as forEach does not returns an array.

let students = [
  { name: "Shivesh", roliNumber: 33, marks: 80 },
  { name: "Soumya", roilNumber: 37, marks: 91 },
  { name: "Yash", roilNumber: 46, marks: 76 },
  { name: "Dllpreet", roliNumber: 7, marks: 55 },
];

//return only name of students only in capital letter:

let names = students.map((student) => {
  return { name: student.name.toUpperCase() };
});
console.log(names);

//return details of students who scored more than 60:

console.log(students.filter((stu)=> stu.marks > 60))

//sum of marks of all students

console.log(students.reduce((acc, stu)=> acc+stu.marks, 0))