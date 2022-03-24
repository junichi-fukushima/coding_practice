var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

let array = [];
for (var i = 0; i < lines.length; i++) {
  let tmp = lines[i].split(" ");

  if (tmp.length == 1) {
  } else {
    array.push(tmp[1]);
  }
}
array.unshift(array.length);
console.log(array.join("\n"));

// スタック
// 値を後ろに入れて後ろから取り出す
// キュー
// 値を後ろに入れて前から取り出す