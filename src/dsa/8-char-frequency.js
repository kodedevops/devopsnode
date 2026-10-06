// Character Frequency in a String using Map
let str = "hello world";
let map = new Map();

for (let i=0; i<str.length; i++) {
    let item = str[i];

    let count = map.get(item) || 0;
    map.set(item, count + 1);
}

console.log("Character frequency in the string:", map); // Output: Character frequency in the string: Map(8) { 'h' => 1, 'e' => 1, 'l' => 3, 'o' => 2, ' ' => 1, 'w' => 1, 'r' => 1, 'd' => 1 }



// max item frequency
let maxFrequency = 0;
let maxFrequencyItem = null;    
for (let [item, frequency] of map.entries()) {
    if (frequency > maxFrequency) {
        maxFrequency = frequency;
        maxFrequencyItem = item;
    }
}
console.log("Item with maximum frequency:", maxFrequencyItem, "with frequency:", maxFrequency); // Output: Item with maximum frequency: l with frequency: 3