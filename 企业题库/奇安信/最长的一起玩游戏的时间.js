/**
 *
 * @param {*} batteries
 * @returns total
 */
//#region
function maxTime(batteries) {
  if (batteries.length < 5) {
    return 0;
  }
  // write code here
  let total = 0;
  while (batteries.length >= 5) {
    batteries.sort((a, b) => a - b);
    temp = [];
    for (let i = 0; i < 5; i++) {
      //   const element = array[i];
      temp.push(batteries.pop());
    }
    let min = temp[4];
    total += min;
    for (let i = 0; i < 5; i++) {
      if (temp[i] - min > 0) {
        batteries.push(temp[i] - min);
      }
    }
  }
  return total;
}
//#endregion

function maxTime(batteries) {
  // write code here

  return total;
}

console.log(maxTime([100, 100, 100, 50, 100, 5, 10]));
