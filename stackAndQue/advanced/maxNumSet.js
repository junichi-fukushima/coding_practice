// わからないここ聞く
var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let n = lines[0].split(" ").map((num) => parseInt(num, 0))[0];
let x = lines[0].split(" ").map((num) => parseInt(num, 0))[1];
let a = lines[1].split(" ").map((num) => parseInt(num, 0));
let queue = [];

let sum = 0; // 区間の和
let max_sum = 0; // 最大の区間の和
let left_sum = 0;

// 配列の個数分実行する
for (var i = 0; i < n; i++) {
  // 最初の値を出す
  sum += a[i];
  queue.push(a[i]);
  if (queue.length === x) {
    if (sum > max_sum) {
      left_sum = queue.slice(0,1);
      max_sum = sum;
    }
    sum -= queue.shift();

  }
}
console.log(max_sum, left_sum.join(' '));
