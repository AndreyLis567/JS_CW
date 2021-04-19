const a = [3,4]
const b = [3]


// function arrayDiff(a, b) {
//   const array = [];
//   for (let i = 0; i < a.length; i++) {
//      for ( let j = 0; j < b.length; j++) {
//         if ( a[i] != b[j] ) {
//            array.push(a[i])
//         } else if (b[j] === null) {
//            array.push(a[i])
//         }
//      }
//   }
//   return array !== [] ? array : []
// }


function arrayDiff(a, b) {
   return a.filter(e => !b.includes(e));
 }

 console.log(arrayDiff(a,b))