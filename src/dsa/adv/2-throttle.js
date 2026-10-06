// Implment throttle function
let lastCall = 0;

function throttle(fn, delay) {
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    }
}