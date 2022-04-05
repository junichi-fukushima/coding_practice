var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
// 人数
const h = lines[0].split(' ').map((num) => parseInt(num,0))[0];
const w = lines[0].split(' ').map((num) => parseInt(num,0))[1];
const n = lines[0].split(' ').map((num) => parseInt(num,0))[2];

// 値を多次元配列で格納
let array = [];
// array[横][縦]でアクセス
for (var i = 1; i < h+1; i++) {
    let string = lines[i].split('')
    array.push(string)
}

// 盤面の文字列を出力する
for (var i = h+1; i < h+n+1; i++) {
    let row = lines[i].split(' ').map((num) => parseInt(num,0))[0];
    let col = lines[i].split(' ').map((num) => parseInt(num,0))[1];
    console.log(array[row][col])
}
// 問題
https://paiza.jp/works/mondai/a_rank_level_up_problems/a_rank_snake_map_step1/edit?language_uid=javascript