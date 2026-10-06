let nums =  [5, 2, 9, 1, 5, 6];

// Sort the array in ascending order
nums.sort((a, b) => a - b);
console.log("Sorted array (ascending):", nums);

// Sort the array in descending order
nums.sort((a, b) => b - a);
console.log("Sorted array (descending):", nums);


// using toSorted() method
let nums2 = [5, 2, 9, 1, 5, 6];
let nums3 = nums2.toSorted((a, b) => a - b);
console.log("Original array:", nums2);
console.log("Sorted array using toSorted() (ascending):", nums3);