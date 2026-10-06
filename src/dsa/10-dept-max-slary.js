// dept wise max slary
let employees = [
    { name: "Alice", department: "HR", salary: 50000 },
    { name: "Bob", department: "Engineering", salary: 70000 },
    { name: "Charlie", department: "HR", salary: 60000 },
    { name: "David", department: "Engineering", salary: 80000 },    
    { name: "Eve", department: "Sales", salary: 55000 },
    { name: "Frank", department: "Sales", salary: 60000 },
    { name: "Grace", department: "Engineering", salary: 75000 }
];

// Max salary
const result = employees.reduce((acc, emp) => {
    let currentMaxSalary = acc[emp.department] || -Infinity;
    if (emp.salary > currentMaxSalary) {
        acc[emp.department] = emp.salary;
    }
    return acc;
}, {});

console.log(result); // Output: { HR: 60000, Engineering: 80000, Sales: 60000 }


// min slary usig reduce
const minSalaryResult = employees.reduce((acc, emp) => {
    let currentMinSalary = acc[emp.department] || Infinity;
    if (emp.salary < currentMinSalary) {
        acc[emp.department] = emp.salary;
    }

    return acc;
}, {});
console.log(minSalaryResult); // Output: { HR: 50000, Engineering: 70000, Sales: 55000 }


// Sum of salary using reduce
const sumSalaryResult = employees.reduce((acc, emp) => {
    let currentSum = acc[emp.department] || 0;
    acc[emp.department] = currentSum + emp.salary;
    return acc;
}, {});

console.log(sumSalaryResult); // Output: { HR: 110000, Engineering: 225000, Sales: 115000 }


// Avg salary using reduce
const avgSalaryResult = employees.reduce((acc, emp) => {
    let currentSum = acc[emp.department]?.sum || 0;
    let currentCount = acc[emp.department]?.count || 0;
    acc[emp.department] = {
        sum: currentSum + emp.salary,
        count: currentCount + 1,    
    };
    return acc;
}, {});

const avgSalary = Object.fromEntries(
    Object.entries(avgSalaryResult).map(([department, { sum, count }]) => [
        department,
        sum / count,
    ])
);    



// using frequnecy map
let deptMap = new Map();
for (let emp of employees) {
    if (deptMap.has(emp.department)) {
        let currentMaxSalary = deptMap.get(emp.department);
        if (emp.salary > currentMaxSalary) {
            deptMap.set(emp.department, emp.salary);
        }
    } else {
        deptMap.set(emp.department, emp.salary);
    }
}
console.log("Department wise maximum salary:", deptMap); // Output: Department wise maximum salary: Map(3) { 'HR' => 60000, 'Engineering' => 80000, 'Sales' => 60000 }




// Now i can use this 