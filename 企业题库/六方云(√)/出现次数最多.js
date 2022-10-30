function maxcount(arr) {
  let map = {};
  for (const item of arr) {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  }

  map = Object.entries(map);
  map.sort((a, b) => b[1] - a[1]);
  return map[0][0];
}

console.log(maxcount([2, 2, 1, 1, 1, 2, 2]));
