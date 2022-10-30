function main(miles) {
  // Scanner scanner = new Scanner(System.in);
  // int miles = scanner.nextInt();
  //100  60min 80%
  //200  120min 60%
  //300  180min 40%
  //400  240min 20%   240min + 充电
  //500  300min 0%

  let res = 0;
  let remainPower = 500;
  while (miles != 0) {
    let res = (miles * 60) / 100;
    if ((miles * 60) % 100 != 0) {
      res++;
    }
    let charge = miles - 500;
    if (charge > 0) {
      let times = charge / 200;
      res += times * (5 + 10);
      charge = charge % 200;
      res += charge / 10;

      if (charge > 150) {
        res += 5;
      }
    }
    return res;
  }
}
console.log(main(600));
