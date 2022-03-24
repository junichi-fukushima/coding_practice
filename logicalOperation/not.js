var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let a = lines[0].split(' ').map((num) => parseInt(num,0))[0];

if(!a){
    console.log(1)
} else {
    console.log(0)
}