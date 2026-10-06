let map = new Map();

map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

for (let item of map) {
    console.log(item, item[0], item[1]); // Output: [ 'name', 'John' ] name John
}

console.log("using entries() method");
for (let item of map.entries()) {
    console.log(item, item[0], item[1]); // Output: [ 'name', 'John' ] name John
}

console.log("using keys() method");
for (let [key, value] of map.entries()) {
    console.log(key, value); // Output: name John
}