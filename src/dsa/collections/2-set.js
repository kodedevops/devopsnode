let list = ["apple", "banana", "cherry", "date", "elderberry", "apple", "banana"];

let set = new Set(list);
console.log("Set created from the list:", set); // Output: Set created from the list: Set(5) { 'apple', 'banana', 'cherry', 'date', 'elderberry' }  



// Remove duplicates from the list using Set
let uniqueList = [...new Set(list)];
console.log("Unique list after removing duplicates:", uniqueList); // Output: Unique list after removing duplicates: [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]


// Find duplicates in the list using Set
let duplicates = list.filter((item, index) => list.indexOf(item) !== index);
console.log("Duplicates in the list:", duplicates); // Output: Duplicates in the list: [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]


// find duplcite  using set
let set2 = new Set();
let result = list.filter(item => {
    if (set2.has(item)) {
        return true;
    } else {
        set2.add(item);
        return false;
    }
});
console.log("Duplicates in the list using Set:", result); // Output: Duplicates in the list using Set: [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]