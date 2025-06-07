// Blaine Swieder
// LeetCode: JavaScript 30 Days Badge Problem
// Counter Problem
// June 6th, 2025



/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

/** 
 * const counter = createCounter(10)
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 */
