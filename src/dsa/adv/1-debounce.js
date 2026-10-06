// Implment Debounce function
let timer;
function debounce(fn, delay) {
    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay)  
    }
}

let search = debounce(() => {
    console.log("Searching...");
    console.log("Api call logic");
    // ...
}, 500);