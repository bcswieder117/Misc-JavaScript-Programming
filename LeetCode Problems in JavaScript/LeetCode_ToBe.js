// Blaine Swieder
// LeetCode: 30 Days JavaScript Challenge
// To Be or Not To Be Question


/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val !== otherVal) throw new Error("Not Equal");
            return true;
        },
        notToBe: function(otherVal) {
            if (val === otherVal) throw new Error("Equal");
            return true;
        }
    };
};

// Test safely using try/catch
try {
    console.log(expect(5).toBe(5)); // true
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log(expect(5).toBe(null)); // throws "Not Equal"
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log(expect(5).notToBe(null)); // true
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log(expect(5).notToBe(5)); // throws "Equal"
} catch (e) {
    console.log({ error: e.message });
}


