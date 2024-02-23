/* function sum (a,b) {
return a+b
}

sum(1,2);

sum(1)(2)

function sumCurried(a) {
  return function(b) {
   return a+b
  }
}
sumCurried(2)(3);
let twoSum = sumCurried(2);
twoSum(3)


let arr = [1,3,4,5,7,8,9];

function binarySearch(arr, k){ 
  let start = arr[0];
  let end = arr.length-1;
  let middle = Math.floor((start+end)/2);
  
  while(start<end) {
    if(middle === k) return middle;
    if(middle > k){
      end=middle-1
    }
    if(middle < k){
     start = middle +1
    }
    middle = Math.floor((start+end)/2);
  }
  return -1;
} */


/* or(let i=0; i<arr.length; i++){
  if(arr[i]=== k) return i
  return -1
} */

/* O(n) - linearsearch */
/* O(log n) - bs */


let arr2 = [1,1,2,2,3,3,4,5,7]; // [1,]
// [4,5,7]

function uniqueValue(arr){

	 let freqCounter = {};
	  
	  for(let i=0; i<arr.length; i++){
	    freqCounter[arr[i]] = (freqCounter[arr[i]] || 0)+1; //O(n)
	  }
    arr.length = 0;
	  for(ele in freqCounter){    //O(n)
	    if(freqCounter[ele] === 1){
	      arr.push(Number(ele))
	    }
	  }
	  return arr; 
    
    /* let first = arr[0];
    
    for(let second = 1; second< arr.length; second++){
    
    } */
}

console.log(uniqueValue([1,1,2,2,3,3,4,5,7]))







































