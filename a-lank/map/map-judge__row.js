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

let num = 0;
array.forEach(element => {
    for (var i = 0; i < element.length; i++) {
        let length = element.length
        // 左端の場合、これいより左は見ないので許容する(trueを返す)
        if(i == 0 || element[i-1] == "#"){
            if(i == length - 1 || element[i+1] == "#"){
                console.log(num,i)
            }
        }
    }
    num++;
})