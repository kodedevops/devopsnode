let str = "hello world";

// Reverse the string using split, reverse, and join methods
let reversedStr = str.split("").reverse().join("");
console.log("Reversed string:", reversedStr); // Output: Reversed string: dlrow olleh


// using toReversed() method
let str2 = "hello world";
let reversedStr2 = str2.split("").toReversed().join;
console.log("Original string:", str2);
console.log("Reversed string using toReversed():", reversedStr2); // Output: Reversed string using toReversed(): dlrow olleh


// using for loop
let str3 = "hello world";
let reversedStr3 = "";
for (let i = 0; i < str3.length; i++) {
    reversedStr3 = str3[i] + reversedStr3;
}
console.log("Original string:", str3);
console.log("Reversed string using for loop:", reversedStr3); // Output: Reversed string using for loop: dlrow olleh


// using two ponetr
function reverseStringTwoPointer(str) {
    let left = 0;
    let right = str.length - 1;
    let strArray = str.split("");

    while (left < right) {
        [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
        left++;
        right--;
    }

    return strArray.join("");
}

// Example usage:
let str4 = "hello world";
let reversedStr4 = reverseStringTwoPointer(str4);
console.log("Original string:", str4);
console.log("Reversed string using two pointer method:", reversedStr4); // Output: Reversed string using two pointer method: dlrow olleh