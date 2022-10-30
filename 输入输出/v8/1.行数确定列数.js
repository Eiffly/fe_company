/*
 输入：
1 2
4 6

输出:
3 
10 */

while (line=readline()) {
    line=line.split(" ").map(v=>parseInt(v))
    let [a,b]=line
    console.log(add(a,b));
}

function add(a,b) {
    return a+b
}