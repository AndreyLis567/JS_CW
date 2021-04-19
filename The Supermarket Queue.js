const customers = [1,2,3]

function queueTime(customers, n) {
  let time = new Array(n).fill(0);
  for ( let el of customers) {
    let idx = time.indexOf(Math.min(...time))
    time[idx] += el
  }
  return Math.max(...time)
}

console.log(queueTime(customers, 1))