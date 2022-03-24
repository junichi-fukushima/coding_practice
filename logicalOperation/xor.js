var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let a = lines[0].split(' ').map((num) => parseInt(num,0))[0];
let b = lines[0].split(' ').map((num) => parseInt(num,0))[1];

console.log((a & !b) | (!a & b))
console.log(a ^ b)