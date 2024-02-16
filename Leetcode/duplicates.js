/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    //0001123556
    let first = 0;
    for(let i=1; i< nums.length; i++){
        if(nums[i] !== nums[first]){
            nums[first+1] = nums[i];
            first++;
        }
    }
    return first+1
};

console.log(removeDuplicates([1,1,2,2,2,3,4,5,6,6,6,6]))