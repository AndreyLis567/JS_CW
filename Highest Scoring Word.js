const x = 'what time are we climbing up the volcano';

function high(x){
   let arr = x.split(' ').map(x => [...x].reduce((a,b) => a + b.charCodeAt(0)-96, 0))
   return x.split(' ')[arr.indexOf(Math.max(...arr))]
}
console.log(high(x))