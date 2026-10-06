const list = ["delhi", "calcutta", "chennai"];

for (const item of list) {
    console.log("Item:", item);
}

for (const [index, item] of list.entries()) {
    console.log(`Index: ${index}, Item: ${item}`);
}


// Iternate over object properties using for...in and for...of loops
const ref = {
    name: "John Doe",
    age: 30,
};

for (const key in ref) {
    console.log(`Key: ${key}, Value: ${ref[key]}`);
}

for (const value of Object.values(ref)) {
    console.log("Value:", value);
}
