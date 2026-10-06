// reverse using two pointer
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Swap arr[left] and arr[right]
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// Example usage:
let nums = [5, 2, 9, 1, 5, 6];
console.log("Original array:", nums);
let reversedNums = reverseArray(nums);
console.log("Reversed array using two-pointer method:", reversedNums);


// example usage for strings
let strings = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Original strings array:", strings);
let reversedStrings = reverseArray(strings);
console.log("Reversed strings array using two-pointer method:", reversedStrings);