// const arrayString = ["cat", "bat", "bowl", "and", "short", "yell"];


// const obj = {
//     a:1,
//     b:2,
//     __proto__: {
//         b: 3,
//         c:5,
//         __proto__: {
//             d:6
//         }
//     }
// };

// console.log(obj.d)


// const arr = [1,2,4,6,7,23,45];

// const binarysearch = (arr, target) => {

//     let left = 0;
//     let right = arr.length-1;

//     while (left <= right){
//     let mid = Math.floor((left + right) /2);
//     if(arr[mid] === target) {
//         return mid;
//     }
//     else if(arr[mid] < target){
//         left = mid+1;
//     }
//     else {
//         right = mid-1;
//     }
   
// }
// return -1;
// }

// console.log(binarysearch(arr,7))


// const array1 = [1,2,3,4,5,6];

//____________________________________________________________

// const array1 = ['a', 'b', 'c', 'd'];
// const iterator1 = array1[Symbol.iterator]();

// console.log(iterator1);

// for(const value of iterator1) {
//     console.log(value)
// }

//____________________________________________________


// const array1 = [1,2,3,4,5,6];
// const valueAtTwo = array1.at(2);
// console.log(valueAtTwo)

//____________________________________________________

// const array1 = [1,2,3,4,5];
// const array2 = [8,7,6,5];

// const array3 = array1.concat(array2);

// console.log(array3);

//____________________________________________________

const array1 = [1,2,3,4,5,6,7,8,9,0];

const array2 = array1.copyWithin(0,3,5);

console.log(array2)