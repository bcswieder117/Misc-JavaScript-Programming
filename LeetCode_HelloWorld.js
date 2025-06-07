/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};

const f = createHelloWorld();
console.log(f()); // This prints "Hello World"

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


