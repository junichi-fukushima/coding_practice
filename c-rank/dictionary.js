var lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let p = lines[0].split(' ').map((num) => parseInt(num,0))[0];
let q = lines[0].split(' ').map((num) => parseInt(num,0))[1];
let r = lines[0].split(' ').map((num) => parseInt(num,0))[2];

// 2行目~ p+1は<A,B>のセット
let abDict = new Map();
let array = [];
let abNum = Number(p+1) - 1;

for (var i = 1; i <= abNum; i++) {
    let a = Number(lines[i].split(" ")[0]);
    let b = Number(lines[i].split(" ")[1]);
    array.push(a);
    abDict.set(a,b)
}

array.sort((a, b) => {
  return a - b;
});


// p+1行目~ p+q+2は<B,C>のセット
let bcDict = new Map();
for (var i = p+1; i <= p+q; i++) {
    let b = Number(lines[i].split(" ")[0]);
    let c = Number(lines[i].split(" ")[1]);
    bcDict.set(b,c)
}

array.forEach(element => {
  console.log(`${element} ${bcDict.get(abDict.get(element))}`)
});
