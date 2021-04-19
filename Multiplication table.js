multiplicationTable = function(size) {
   let result = [];
   for ( let i = 1; i <= size; i++) {
      let tempArr = []
      for(let j = 1; j <= size; j++) {
         tempArr.push(i*j)
      }
      result.push(tempArr)
   }
   return result
 }