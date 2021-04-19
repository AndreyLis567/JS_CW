function findNb(m) {
  let count = 0;
  let i = 1;
  while ( m > 0) {
    m -= Math.pow(i, 3)
    i++;
    count ++
  }
    return (m === 0) ? count : (-1);
}
console.log(findNb(5))