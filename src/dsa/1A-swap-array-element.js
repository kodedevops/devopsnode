// Swap array elements without using a temporary variable
let arr = [1, 2, 3, 4, 5];
console.log(`Before swapping: arr = [${arr}]`);
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(`After swapping: arr = [${arr}]`);

// Swap array elements using arithmetic operations
let arr2 = [10, 20, 30, 40, 50];
console.log(`Before swapping: arr2 = [${arr2}]`);   
arr2[0] = arr2[0] + arr2[1];
arr2[1] = arr2[0] - arr2[1];
arr2[0] = arr2[0] - arr2[1];
console.log(`After swapping: arr2 = [${arr2}]`);