// Implment currying function
function curry(fn) {
    return function curried(a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            };
        };
    };
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6