var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

let firstArray = [];
let secondArray = [];
let q = lines.shift();

for (var i = 0; i < q; i++) {
   let tmp = lines[i].split(" ");
   // tmpが１の時(push)
   if(Number(tmp[0]) === 1){
       if(Number(tmp[1]) === 1){
           firstArray.push(tmp[2])
       } else {
           secondArray.push(tmp[2])
       }
　 // tmpが2の時(pop)
   } else if(Number(tmp[0]) === 2){
       if(Number(tmp[1]) === 1){
           let removed = firstArray.shift();
           console.log(removed);
       } else {
           let removed = secondArray.shift();
           console.log(removed);
       }
   // tmpが3の時(sizeを出す)
   } else if(Number(tmp[0]) === 3){
       console.log(firstArray.length,secondArray.length)
   }
}