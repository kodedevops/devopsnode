// https://jsonplaceholder.typicode.com/posts/1
let postid = 1;
const url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
const response = await fetch(url);
const result = await response.json();

console.log("Response Status", response.status, result);
console.log(result.title);
