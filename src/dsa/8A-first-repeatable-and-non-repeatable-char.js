// first repeatable and non-repeatable character in a string
function firstRepeatableChar(str) {
    let map = new Map();

    // frequency count
    for (let i=0; i<str.length; i++) {
        let item = str[i];
        let count = map.get(item) || 0;
        map.set(item, count + 1);
    }


    // find first repeatable character
    for (let i=0; i<str.length; i++) {
        let item = str[i];
        if (map.get(item) > 1) {
            return item;
        }
    }
    return null;
}

// Example usage:
let str = "swiss";
let repeatableChar = firstRepeatableChar(str);
console.log("First repeatable character:", repeatableChar); // Output: First repeatable character: s



function firstNonRepeatableChar(str) {
    let map = new Map();

    // frequency count
    for (let i=0; i<str.length; i++) {
        let item = str[i];
        let count = map.get(item) || 0;
        map.set(item, count + 1);
    }

    // find first non-repeatable character
    for (let i=0; i<str.length; i++) {
        let item = str[i];
        if (map.get(item) === 1) {
            return item;
        }
    }
    return null;
}

// Example usage:
let nonRepeatableChar = firstNonRepeatableChar(str);
console.log("First non-repeatable character:", nonRepeatableChar); // Output: First non-repeatable character: w
