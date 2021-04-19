const array = [1,2,3,4,5,6]

// var findInArray = function(array, iterator) {
//    for (let i = 0; i < array.length; i++) {
//       if ( array[i] == iterator)
//             return i
//          }
//    return -1
// };



var findInArray = function(array, iterator) {
   return array.map((v,i)=> iterator(v,i)).indexOf(true)
 };
 console.log(findInArray(array, 0))