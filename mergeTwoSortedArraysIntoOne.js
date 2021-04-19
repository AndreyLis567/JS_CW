const arr1 = [1, 2, 3, 4, 5, -3 ];
const arr2 = [-1, 6, -3, 7, 8, 9, 10];

function mergeArrays(arr1, arr2) { 
   let result = [];
   while ( arr1.length && arr2.length) {
      const next = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
      result.push(next)
   }

   if ( arr1.length) {
      result = result.concat(arr1) 
   } else if (arr2.length) {
      result = result.concat(arr2)
   }
   for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length; j++) {
          if (result[j + 1] < result[j]) {
              let tmp = result[j]
              result[j] = result[j+1]
              result[j+1] = tmp
          }
      }
  }
  return result.filter((item, index) => result.indexOf(item) === index)
}

console.log(mergeArrays(arr1, arr2))