// Blaine Swieder
// LeetCode (JS): Maximum Difference between Increasing Elements
// June 16th, 2025

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumDifference = function(nums) {
    let minSoFar = nums[0]; // Smallest value seen to the left of current index.
    let maxDiff = -1; // Result; Stays -1 if no valid (i, j) pair exists.

    for (let i = 1; i < nums.length; i++){
        if (nums[i] > minSoFar){
            
            // nums[i] can serve as nums[j] with some earlier nums[i] as nums[i]
            
            maxDiff = Math.max(maxDiff, nums[i] - minSoFar)
        } else {
            // Found a new, smaller prefix value
            minSoFar = nums[i]
        }
    }

    return maxDiff;
};


// Example 1 

console.log(maximumDifference([7,1,5,4])) // Output desired: 4

// Example 2

console.log(maximumDifference([9,4,3,2])) // Output desired: -1

// Example 3

console.log(maximumDifference([1,5,2,10])) // Output desired: 9