// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.
// Input: [12, 3S 1, 10, 34, 1] » Output: 34
// Input: [10, 5, 10] » Output: S

// [12, 35, 1, 10, 34, 1,35] => [1,1,10,12,34,35,35]


//Solution 1

//O(nlogn)
function secondLargestNumber(arr) {
    let setArray = Array.from(new Set (arr)); //O(n)
    setArray.sort((a,b)=>b-a); //descending order O(nlogn)
    if(setArray.length >= 2) {
        return setArray[1]
    }
    return -1
}

console.log(secondLargestNumber([1,2,3,4,2,3,33,44,33,44,55,55,77])) //55
console.log(secondLargestNumber([12, 35, 1, 10, 34, 1])) //55


//solution 2  O(n)

function secondLargestNumberOptimized(arr) {

    if(arr.length < 2){
        return -1
    }

    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i<arr.length; i++) {
        let temp;
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i]
        } 
    }
    return secondLargest;
}

console.log(secondLargestNumberOptimized([1,2,3,4,2,3,33,44,33,44,55,55,77]))


// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.
// Input: nums = [12,3,4,S,6,7], k = 3 » Output: [5,67,1,2,3,4]
// Input: nums = [-1,-1,3,99], k = 2 » Output: [3,99,-1,-10e]


// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nuns sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number o-f unique elements in nums.
// Input: [1,1,2] » Output: 2, [1,2,_J
// Input: [ø,ø,1,1,1,2,2,3,3,4] » Output: S, [ø,l,2,3,4,_,_,_,_,_]

