var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let n = Number(lines[0]);
let array = lines[1].split(" ").map((num) => parseInt(num, 0));
let count = 0;

let quickSort = (array) => {
  if (array.length <= 1) return array;
  // 先頭の値をpivotとして出力
  let pivot = array[0];
  // pivotより小さいものを格納する
  let smaller = [];
  // pivotより大きいものを格納する
  let bigger = [];
  // 条件分岐をする
  for (var i = 1; i < array.length; i++) {
    if (pivot > array[i]) {
      smaller.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  }
  // smaller + pivot + bigger / 再起関数でさらに回していく
  return quickSort(smaller).concat(pivot).concat(quickSort(bigger));
};

console.log(quickSort(array));
console.log(count);
