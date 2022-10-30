//['ate','eat',"aet","nct","cnt","dog"]
// 整理成下面的样式 [['ate','eat',"aet"],["nct","cnt"],["dog"]]

function yiweici(strs) {
  let map = {};
  for (const str of strs) {
    newstr = str.split("").sort().join();
    if (!map[newstr]) {
      map[newstr] = [];
    }
    map[newstr].push(str);
  }
  return Object.values(map);
}
console.log(yiweici(["ate", "eat", "aet", "nct", "cnt", "dog"]));
