var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

let array = [];
let q = lines.shift();
for (var i = 0; i < q ; i++) {
  let tmp = lines[i].split(" ");
  if (tmp.length == 1) {
      array.pop();
  } else {
      array.push(tmp[1]);
  }
  console.log(array.join(" "));
}
