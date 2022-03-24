// パターン１
var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
// 人数
let n = Number(lines[0]);
// 傾斜
let m = lines[1].split(' ').map((num) => parseInt(num,0));
// 計算処理後の配列の中身
let newArray = [];

// 人数分繰り返し処理を実行する
for (var i = 2; i < n + 2; i++) {
      let array = lines[i].split(' ').map((num) => parseInt(num,0));
      // 傾斜配分を適用した配列を返す
      const getScoresArray = m.map((keisya, i) => {
         return keisya * array[i]
      });
      // 合計値を返す
      const totalScore = getScoresArray.reduce(function(a,b){
          return a + b;
      })
      newArray.push(totalScore);
}
// 最大値を出力
console.log(Math.max(...newArray))

// パターン２
var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
// 人数
let n = Number(lines[0]);
// 傾斜
let m = lines[1].split(' ').map((num) => parseInt(num,0));
// 計算処理後の配列の中身
let maxNum = 0;

// 人数分繰り返し処理を実行する
for (var i = 2; i < n + 2; i++) {
      let array = lines[i].split(' ').map((num) => parseInt(num,0));
      // 傾斜配分を適用した配列を返す
      const getScoresArray = m.map((keisya, i) => {
         return keisya * array[i]
      });
      // 合計値を返す
      const totalScore = getScoresArray.reduce(function(a,b){
          return a + b;
      })
      if(totalScore > maxNum){
        maxNum = totalScore;
      }
}
// 最大値を出力
console.log(maxNum)
