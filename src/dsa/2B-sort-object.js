// sort objects by person age
let list = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

list.sort((a, b) => a.age - b.age);
console.log("Sorted by age:", list);


// using person name
list.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", list);



// using toSorted() method
let list2 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
let list3 = list2.toSorted((a, b) => a.age - b.age);
console.log("Original list:", list2);
console.log("Sorted by age using toSorted():", list3);