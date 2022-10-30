/* 输入：
4 1 2 3 4
5 1 2 3 4 5
0

输出：
10
15 */

while (line=readline()) {
    line=line.split(" ").map(v=>parseInt(v))
    let num=line[0]
    if (num==0) {
        break
    }
    let arr=line.slice(1)
    console.log(add(...arr));
}

function add(...arr) {
    return arr.reduce((a,b)=>a+b,0)
    // return a+b
}
