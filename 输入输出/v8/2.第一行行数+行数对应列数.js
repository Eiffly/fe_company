// 输入：
// 2
// 1 5
// 10 20

// 输出：
// 6
// 30

/*我写的*/
// let count=0
// let m=readline()
// let lines=[]
// let line=""
// while(line=readline()){
//     line=line.split(" ").map(v=>parseInt(v))
//     lines.push(line)
//     count++
//     if(count==m) break;
// }

// for(let i=0;i<m;i++){
//     let [a,b]=lines[i]
//     console.log(add(a,b))
// }

// function add(a,b){
//     return a+b
// } 

/**别人写的 */
let t = parseInt(readline()); //确定行数
 
for(let i=0;i<t;i++){
    let arr = readline().split(' ').map(item=>parseInt(item)) //获取每一个数
    let [a,b]=arr;
    print(add(a,b));
}

function add(a,b){
    return a+b
}