function itemFrequency(arr) {
    // Count the frequency of each item in the array
    let frequencyMap = new Map();   
    for (let item of arr) {
        let count = frequencyMap.get(item) || 0;
        frequencyMap.set(item, count + 1);
    }

    console.log("Item frequency in the array:", frequencyMap); // Output: Item frequency in the array: Map(5) { 1 => 3, 2 => 2, 3 => 1, 4 => 1, 5 => 1 }


    // find max frequency item
    let maxFrequency = 0;
    let maxFrequencyItem = null;
    for (let [item, frequency] of frequencyMap.entries()) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            maxFrequencyItem = item;
        }
    }
    console.log("Item with maximum frequency:", maxFrequencyItem, "with frequency:", maxFrequency);
}
// example usage:
itemFrequency([1, 2, 3, 4, 5, 1, 2, 1]);
itemFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]);

