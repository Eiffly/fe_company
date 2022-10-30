function Animalto_(str) {
  return str.replace(/[A-Z]/g, function (v, i, strs) {
    return "_" + v.toLowerCase();
  });
}

function _toAnimal(str) {
  let strArr = str.split("_");
  if (strArr.length > 1) {
    for (let index = 1; index < strArr.length; index++) {
      strArr[index] = strArr[index].replace(/[a-z]/, function (v) {
        return v[0].toUpperCase() + "";
      });
    }
  }
  return strArr.join("");
}
// console.log(Animalto_("numStrHello"));
console.log(_toAnimal("num_str_hello"));
