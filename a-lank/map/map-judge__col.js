var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
// マス目数
let h,w;
[h,w] = lines[0].split(' ').map((num) => parseInt(num,0));

// 値を多次元配列で格納
let array = [];
// array[行][列]でアクセス
for (var i = 1; i < h+1; i++) {
    let string = lines[i].split('')
    array.push(string)
}
// まずは行にアクセス
for (var i = 0; i < array.length; i++) {
    // まずは列にアクセス
    for (var j = 0; j < array[i].length; j++) {
        if(i == 0 || array[i-1][j] == "#"){
            if(i == array.length - 1 ||  array[i+1][j] == "#"){
                console.log(i,j)
            }
        }
    }
}