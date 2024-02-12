// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b


function rangeOfNumbers (start, end) {
    if(end<start) {
        return []
    }
    else {
        const numbers = rangeOfNumbers(start, end-1);
        numbers.push(end);
        return numbers
    }
}

console.log(rangeOfNumbers(0,10))