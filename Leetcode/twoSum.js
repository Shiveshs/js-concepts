const twoSum = function(nums, target) {
    let seenNumber = [];
for(let i=0; i< nums.length; i++){

    let complement = target - nums[i];

    if(seenNumber[complement] !== undefined) {
        return [seenNumber[complement], i]
    }
    // console.log(seenNumber)

    seenNumber[nums[i]] = i;
}
    
};

console.log(twoSum([2,7,11,15,3,4,5,7],12))

// ______________________________________________________________

const twoSumOptimised = (arr, target) => {
    let seenNumber = {};

    for(let i=0; i< arr.length; i++){
        let compliment = target - arr[i];

        if(seenNumber.hasOwnProperty(compliment)){
            return [seenNumber[compliment], i]
        }

        seenNumber[arr[i]] = i;
    }
    return []
}

console.log(twoSumOptimised([2,7,11,15,3,4,5,7],12))
