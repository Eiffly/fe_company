/* 
输入：
1 5
10 20
0 0
输出：
6
10 */

while (line=readline()) {
    line=line.split(" ").map(v=>parseInt(v))
    let [a,b]=line;
    if (a===0&& b===0) break;    
    console.log(add(a,b));
}

function add(a,b) {
    return a+b
}