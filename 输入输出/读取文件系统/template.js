// 官网的readFileSync传入的参数是0!!!!!!!
// 平常使用的时候多使用文件的相对路径
const fs = require('fs') 
var lines = fs.readFileSync("./txt文件/index.txt").toString().trim().split(/\r\n|\r|\n/);
let  n= Number(lines[0]);
for (let i = 1; i <  n; i++) {
    // 防止有的行是空格
    if (lines[i]) {
        // 防止有的行前后有数据
        let line=lines[i].trim().split(' ').map(v=>parseInt(v))

        // 填入要输入的函数
        console.log(line);
    }
}
