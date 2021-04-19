const array = [ 8, 3, 2, 1]

function sortArray(array) {
   let oddNum = array.filter(x => x % 2 ).sort((a,b) => a - b)
   return array.map( x => x % 2 ? oddNum.shift() : x)
 }

 console.log(sortArray(array))