//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

let n=read_line()
let lines=[]

 
for (let i = 0; i < n; i++) {
    let arr=read_line();
    arr=arr.split(" ").map(v=>parseInt(v))
    let [n,x,y,k]=arr
    console.log(func(n,x,y,k));
}

function func(n,x,y,k) {
    let x_step=Math.abs(k-1)+1
    let y_step=Math.abs(n-k)+1
    let x_time=x_step/x
    let y_time=y_step/y

    
    if (x_time===y_time) {
        return "Tie"
    }else if(x_time<y_time){
        return "Win"
    }else{
        return "Lose"
    }
}