function transform(text) {
  return text.replace(/[0-9]+(\u5143)/g, function (a) {
    let money = toMoney(a.substring(0, a.length - 1));
    return money + "圆整";
  });
}

function toMoney(money) {
  let res = "";
  const zero2nine = [
    "零",
    "壹",
    "贰",
    "叁",
    "肆",
    "伍",
    "陆",
    "柒",
    "捌",
    "玖",
  ];
  const shi2qian = ["", "拾", "佰", "仟"];
  const wan2zhao = ["", "万", "亿", "兆"];
  if (parseInt(money, 10) === 0) {
    res = "零";
    return res;
  }
  if (parseInt(money, 10) > 0) {
    console.log(parseInt(money, 10));
    let zerocount = 0;
    let len = money.length;
    for (let i = 0; i < len; i++) {
      let n = money.substr(i, 1);
      let p = len - i - 1;
      let q = p / 4;
      let m = p % 4;
      if (n == "0") {
        zerocount++;
      } else {
        if (zerocount > 0) {
          res += zero2nine[0];
        }
        zerocount = 0;
        res += zero2nine[parseInt(n)] + shi2qian[m];
      }
      if (m == 0 && zerocount < 4) {
        res += wan2zhao[q];
      }
    }
  }
  return res;
}

console.log(
  transform(
    '"本次采购的商品有110件",采购的价格为0元的10件属于赠送的,采购的价格为9999元的100件,总价为999900元'
  )
);

// console.log(encodeURI("元"));
