const secondLargest = (arr) => {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    if(arr.length < 2){
        return -1
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargest([1,5,7,3,8,34,56])); // 34
console.log(secondLargest([56])); // -1