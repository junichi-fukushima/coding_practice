var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let n = Number(lines[0]);
let array = lines[1].split(' ').map((num) => parseInt(num,0));
let count = 0;


function mergeSort (array) {
  if (array.length <= 1) return array;
  let length = array.length;

  let mid = Math.floor(length / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}


function merge (left, right) {
   let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex))
}


console.log(mergeSort(array))
console.log(count);
