// Blaine Swieder
// JS Programming: Array Prototype Last 
// June 15th, 2025

/**
 * Adds a 'last()' method to all arrays, returning the last element or -1 if empty.
 * @return {null|boolean|number|string|Array|Object}
 */


Array.prototype.last = function(){
    if (this.length == 0) return -1;
    return this[this.length - 1];
};

// Examples

const nums1 = [null, {}, 3];
console.log("Test 1 Output:", nums1.last()); // Expected: 3

const nums2 = [];
console.log("Test 2 Output:", nums2.last()); // Expected: -1

const nums3 = [1, 2, 3, 4, 5];
console.log("Test 3 Output:", nums3.last()); // Expected: 5

const nums4 = ["apple", "banana", "cherry"];
console.log("Test 4 Output:", nums4.last()); // Expected: "cherry"
