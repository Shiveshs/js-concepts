const reverseArray = (array, start, end) => {
console.log(array);
    if(start<=end){
        let temp = array[start];
        array[start] = array[end];
        array[end]= temp;
        reverseArray(array, start+1, end-1)
    }
   
}

const array1 = [1,2,3,4,5,6,7,8,9,10];
reverseArray(array1,0,array1.length-1);


//direct method
const array2 = [3,6,7,0]
console.log(array2.reverse())

// remove 2 elements from index 2 and add 5 new elements
const newArray = array1.splice(2, 2, 55,44,666,999,90) //returns deleted elemets
console.log(array1) 

// Flatten an array

const array4=[1,2,3,[3,4,5,[34,54,65,[677,877]]]]
const newArray2 = array4.flat(3)  //returns new array
console.log(newArray2)