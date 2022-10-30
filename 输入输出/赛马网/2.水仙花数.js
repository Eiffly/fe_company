//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt


let line;
function shuixianhua(start,end) {
    let resArr=[]
   for (let i = start; i <=end; i++) {
     let bai=parseInt(i/100);
     let shi=parseInt((i-bai*100)/10);
    let ge=i-bai*100-shi*10;
    let res=ge*ge*ge+shi*shi*shi+bai*bai*bai
    if (res===i) {
        resArr.push(res) 
    }
   }
  //  console.log(resArr);
   return resArr.length===0?"no":resArr.join(" ")
}
while((line=read_line())!=""){
  line=line.split(" ").map(v=>parseInt(v))
    //lines.push(line)
    let [start,end]=line;
  console.log(shuixianhua(start,end));
}