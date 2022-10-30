//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

//
while ((line=read_line())!="") {
    let arr=line.split(" ").map(v=>parseInt(v));
    let [num,n]=arr
    console.log(add(num,n));
}
function add(num,n) {
    let res=0
    while (n--) {
      res+=num
        num=Math.sqrt(num)
    }81 
    return res.toFixed(2);
}
