let key = "1";
let unique = Symbol("unique");
let obj = {
  [key]: "value",
  [unique]: "unique value",
};

console.log(obj); // Output: { '1': 'value' }

for (const item in obj) {
  console.log(item, obj[item]);
}
