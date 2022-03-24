var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let a = lines[0].split(' ').map((num) => parseInt(num,0))[0];
let b = lines[0].split(' ').map((num) => parseInt(num,0))[1];

console.log(a && b)
// aがfalseの時、aを返す
// aがtrueの時、bを返す
// aとbがtrueの時はtrue / どっちもfalseならfalseを返す
// 結論 trueだったら次の値を確認するよ