var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let n = lines[0].split(' ').map((num) => parseInt(num,0))[0];
let k = lines[0].split(' ').map((num) => parseInt(num,0))[1];
let m = lines[0].split(' ').map((num) => parseInt(num,0))[2];
let array = [];
for (var i = 1; i <= n; i++) {
    if(lines[i] >= k){
        array.push(lines[i]);
    }
}

let count = array.length - m;
if(count < 0){
    count = 0;
}
console.log(count);