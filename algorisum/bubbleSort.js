// バブルソート
var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let n = Number(lines[0]);
let a = lines[1].split(' ').map((num) => parseInt(num,0));

// 配列の個数分繰り返し処理をする
// 基準値を4にする
// 1個隣の値を確認する(j)
for (var i = 0; i < a.length - 1; i++) {
    for (var j = n-1; j >= 0 ; j--) {
        if(a[j-1] > a[j]){
            // 入れ替える値を格納する
            let smaller = a[j];
            a[j] = a[j-1];
            a[j-1] = smaller;
        }
    }
    console.log(a.join(" "));
}