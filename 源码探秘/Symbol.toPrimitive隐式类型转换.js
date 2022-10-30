/**
 *
 * 1.如果运行环境非常明确的需要将一个复杂对象转换为数字则传入number如 Number(value) 和 +value 则传入number
 * 2.如果运行环境非常明确的需要将一个复杂对象转换为字符串则传入string如String(value) 和 alert(value) 则传入string
 * 3.如果是用+号连接两个操作数，操作数在确定其中只要有一个为字符串的时候另外一个操作数会转为字符串，ToPrimitive()会传入string，但是如果两个操作数都不能确定是字符串的时候则默认传入number(Date对象是一个例外，它会默认传入string)进行数据类型转换。

 */
// 1. +[]先去执行后面的[] ToPrimitive认为参数是number
// 2.number 先调用的方法是valueOf()，Array的valueOF根据查表可以知道返回的是数组本身（返回的不是原始值，继续调用对象的toString()方法）
// 3.Array的toString方法返回的结果是【以逗号分割每个数组大的形成的字符串】
// 4.操作数在确定其中只要有一个为字符串的时候另外一个操作数会转为字符串，所以最后是""
console.log([] + []);

// 1. +{}先去执行后面的{} ToPrimitive认为参数是number
// 2.number 先调用的方法是valueOf()，Object的valueOF根据查表可以知道返回的是对象本身（返回的不是原始值，继续调用对象的toString()方法）
// 3.Object的toString方法返回的结果是 "[object Object]"
// 4.操作数在确定其中只要有一个为字符串的时候另外一个操作数会转为字符串，另一个数组形成的是"",所以最后是"[object Object]"
console.log([] + {}); //"[object Object]"

// 不想多说了
console.log({} + []); //"[object Object]"
