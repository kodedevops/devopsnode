// Array Destructuring
const [a, b, c] = [10, 20, 30];
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// Skipping elements during destructuring
const [a1, ,c1] = [10, 20, 30];
console.log(a1); // 10
console.log(c1); // 30


// Default values during destructuring
const [a2, b2, c2 = 30] = [10, 20];
console.log(a2, c2);


// Rest operator during destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]