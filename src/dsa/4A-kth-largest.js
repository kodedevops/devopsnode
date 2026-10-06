// kth largest element in an array
function kthLargest(arr, k) {
    if (k <= 0 || k > arr.length) {
        return null; // Invalid k value
    }

    arr.sort((a, b) => b - a);          // Sort the array in descending order
    return arr[k - 1];                  // Return the kth largest element
}


// Example usage:
let arr = [10, 5, 20, 8, 15];
let k = 3;
let result = kthLargest(arr, k);
console.log(`${k}th largest element:`, result); // Output: 3th largest element: 10


// kth smalest element in an array
function kthSmallest(arr, k) {
    if (k <= 0 || k > arr.length) {
        return null; // Invalid k value
    }

    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[k - 1]; // Return the kth smallest element
}
