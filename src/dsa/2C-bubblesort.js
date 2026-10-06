// bubble sort  
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
let sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);


// bubble sort with optimization (early exit if no swaps)
function bubbleSortOptimized(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// Example usage:
let arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr2);
let sortedArr2 = bubbleSortOptimized(arr2);
console.log("Sorted array (optimized):", sortedArr2);