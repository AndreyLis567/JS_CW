const array = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

function removeZeros(array) {
   let arr = [...array].filter(v => v !== 0 && v !== '0');
   let arr2 = [...array].filter(v => v === 0 || v === '0')
   return [...arr, ...arr2];
 }

 console.log(removeZeros(array))

 function removeZeros(array) {
   let arr = [...array[`filter`](v => v !== 0 && v !== '0')];
   let arr2 = [...array[`filter`](v => v === 0 || v === '0')]
   return [...arr, ...arr2];
 }