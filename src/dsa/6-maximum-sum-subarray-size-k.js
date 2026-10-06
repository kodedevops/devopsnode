function maxSumSubarraySizeK(arr, k) {
    let left = 0;
    let maxSum = -Infinity;
    let windowSum = 0;

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        if (right - left + 1 === k) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[left];
            left++;
        }
    }
    return maxSum;
}

// Example usage:
let arr = [2, 1, 5, 1, 3, 2];
let k = 3;
let result = maxSumSubarraySizeK(arr, k);
console.log(`Maximum sum of a subarray of size ${k}:`, result); // Output: Maximum sum of a subarray of size 3: 9