// 要リファクタリング
var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
// 人数
let h,w,n;
[h,w,n] = lines[0].split(' ').map((num) => parseInt(num,0));

// // 値を多次元配列で格納
let array = [];
// // array[横][縦]でアクセス
for (var i = 1; i < h+1; i++) {
    let string = lines[i].split('')
    array.push(string)
}

// 変更する盤面のindexを格納
let changePlaceSet = [];
for (var i = h+1; i < h+n+1; i++) {
    changePlaceSet.push(lines[i].split(' ').map((num) => parseInt(num,0)))
}

// 置き換える
for (var i = 0; i < changePlaceSet.length; i++) {
    let row = changePlaceSet[i][0];
    let col = changePlaceSet[i][1];
    array[row][col] = "#"
}

// 出力
for (var i = 0; i < array.length; i++) {
    console.log(array[i].join(""))
}
