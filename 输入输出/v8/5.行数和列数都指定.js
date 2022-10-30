/* 
输入：
2
4 1 2 3 4
5 1 2 3 4 5
输出：
10
15
 */

let m=readline()

for (let i = 0; i < m; i++) {
   line=readline().split(" ").map(v=>parseInt(v))
   n=line[0]
   let arr=[]
   for (let j =1 ; j <=n; j++){
    arr.push(line[i])
   }
    //上面的方法也可以浅拷贝    
    // arr.slice(1)
   console.log(add(...arr));
}



function add(...arr) {
    return arr.reduce((a,b)=>a+b,0)
    // return a+b
}

