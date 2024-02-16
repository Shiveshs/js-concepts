/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    if(k>nums.length) {
        k = k % nums.length
    }

reverse(nums, 0, nums.length-1);
reverse(nums, 0, k-1);
reverse(nums, k, nums.length-1)
};

const reverse = (arr, start, end) => {
    let temp;
    while(start<end) {
        temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
    return arr
}

// ____________________________________________________________________________________

