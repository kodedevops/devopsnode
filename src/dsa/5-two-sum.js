function twoSum(nums, target) {
    let map = new Map();

    for (let i=0 ; i<nums.length; i++) {
        let item = nums[i];

        let diff = target - item;
        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(item, i);
    }
}


// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log("Indices of the two numbers that add up to the target:", result); // Output: Indices of the two numbers that add up to the target: [0, 1]