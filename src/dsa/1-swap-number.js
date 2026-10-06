// Swap two numbers without using a temporary variable
let a = 10; 
let b = 20;
console.log(`Before swapping: a = ${a}, b = ${b}`);
[a, b] = [b, a];
console.log(`After swapping: a = ${a}, b = ${b}`);


// Swap two numbers using arithmetic operations
let x = 30; 
let y = 40;
console.log(`Before swapping: x = ${x}, y = ${y}`);
x = x + y;
y = x - y;
x = x - y;
console.log(`After swapping: x = ${x}, y = ${y}`);


// Swap two numbers using bitwise XOR operation
let m = 50; 
let n = 60; 
console.log(`Before swapping: m = ${m}, n = ${n}`);
m = m ^ n;
n = m ^ n;
m = m ^ n;
console.log(`After swapping: m = ${m}, n = ${n}`);