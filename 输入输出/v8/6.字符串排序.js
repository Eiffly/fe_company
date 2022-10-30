

/* 输入：
5
c d a bb e

输出：
a bb c d e */
let n=readline()
let strArr=readline().split(" ")

function reSort(strArr) {
    return strArr.sort((a,b)=>a[0].charCodeAt()-b[0].charCodeAt()).join(" ")
}


console.log(reSort(strArr));