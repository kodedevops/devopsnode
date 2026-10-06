function add(a) {
    return function (b) {
        if (b === undefined) {
            return a;
        }

        return add(a + b);
    };
}

const result = add(1)(2)(3)(4)(5)();
console.log(result); // 15