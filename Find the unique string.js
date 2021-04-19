const arr = [ 'silvia', 'vasili', 'victor'];

function findUniq(arr) {
   let array = arr.map(x => {
      return [...new Set(x.toLowerCase())].sort().join('')
   }); 
   for ( let i = 0; i < array.length; i++) {
      if ( array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
         return arr[i]
      }
   }
}
console.log(findUniq(arr))
 