let list = ["apple", "elderberry", "cherry", "banana", "date" ];

// Sort the list in ascending order
list.sort();
console.log("Sorted list (ascending):", list);

// Sort the list in descending order
list.sort((a, b) => b.localeCompare(a));
console.log("Sorted list (descending):", list);