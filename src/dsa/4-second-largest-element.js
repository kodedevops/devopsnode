// second largest element in an array
function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (item > largest) {
            secondLargest = largest;
            largest = item;
        } else if (item > secondLargest && item < largest) {
            secondLargest = item;
        }

    }
    return secondLargest;
}


// Example usage:
let arr = [10, 5, 20, 8, 15];
let result = secondLargest(arr);
console.log("Second largest element:", result); // Output: Second largest element: 15   


// Second largest using sorting 
let secondLargest = arr.sort((a, b) => b - a)[1];
console.log("Second largest element using sorting:", secondLargest); // Output: Second largest element using sorting: 15