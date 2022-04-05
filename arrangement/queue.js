// キュー・・・先入れ先出し(一番古いものが飛び出してくる)
// スタック・・・後入れ先出し(カップを積み重ねていく。新しいものから取る)

var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

// 人数
let n = Number(lines[0]);
// 文字を格納する場所
let array = [];
for (var i = 1; i <= n; i++) {
    let s = lines[i].split(' ').map((string) => string);
    if(s[0] === "out"){
        if(array.length > 0){
            array.shift();
        }
    } else {
        array.push(s[1]);
    }

}

console.log(array.join("\n"))