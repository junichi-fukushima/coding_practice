// シェルソート
var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let n = Number(lines[0]);
let a = lines[1].split(' ').map((num) => parseInt(num,0));
let k = Number(lines[2]);
let h = lines[3].split(' ').map((num) => parseInt(num,0))

const insertSort = (n,a,h) => {
    let num_of_move = 0;
    for (var i = h; i < n; i++) {
       let x = a[i];
       let j = i-h;
       while(j >= 0 && a[j] > x){
           a[j+h] = a[j]
           j-=h;
           num_of_move++;
       }
      a[j+h] = x;

    }
    console.log(num_of_move)
}


const shellSort = (n,a,h,k) => {
    for (var i = 0; i < k; i++) {
        insertSort(n,a,h[i])
    }
}

shellSort(n,a,h,k);