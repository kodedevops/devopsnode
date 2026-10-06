// Destructuring Objects
const user = {
    name: "Santosh",
    age: 40,
    city: "Mumbai"
};

const { name, age } = user;
console.log(name); // Santosh
console.log(age);  // 40


// Renaming variables during destructuring
const { name: userName, age: userAge } = user;
console.log(userName); // Santosh
console.log(userAge);  // 40


// Default values during destructuring
const { name: userName1, salary = 1000, country = "India" } = user;
console.log(userName1, salary, country); // Santosh 1000 India

// Rest operator during destructuring
const { name: userName2, ...details } = user;
console.log(userName2);    // Santosh
console.log(details); // { age: 40, city: "Mumbai" }


