var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let a = lines[0].split(' ').map((num) => parseInt(num,0))[0];
let b = lines[0].split(' ').map((num) => parseInt(num,0))[1];

console.log(a || b)
// aがtrueの時、aを返す
// aがfalseの時、bを返す
// aとbがtrueの時はtrue / どっちもfalseならfalseを返す
// 結論 trueだったらその時点で確定だよ