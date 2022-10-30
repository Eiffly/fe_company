//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt


// 宝藏数量
let n=read_line()
let pArr=read_line().split(" ").map(v=>parseInt(v))
let wArr=read_line().split(" ").map(v=>parseInt(v))

console.log(pArr)
console.log(wArr)

let max = 0;
pwkey = {}
for(var i = 0 ; i < pArr.length;i++){
    pwkey[pArr[i]] = wArr[i]; 
    if(pArr[i] > max){
        max = pArr[i]
    }
}
console.log(pwkey)
console.log(n)

function func(max,pArr,wArr) {
    let temp={}
    temp[max] = pwkey[max];
    console.log(temp)

    for (let i = max; i>=1; i--) {
            let price = 0;
            // 如果有宝藏
            if (pwkey[i]) {
                    price = pwkey[i];
            }
 

            let x1=0,x2=0;
            if (2*i<=max) {
                x1=temp[2*i]
            }
            if ((2*i+1)<=max) {
                x2=temp[2*i+1]
            }
            price=price+Math.max(x1,x2);
            temp[i] = price;

    }
    return temp[1]
     
}


console.log(func(max,pArr,wArr));