const numbers = [1,2,3]

function twoSum(numbers, target) {
   for ( let i = 0; i < numbers.length; i++) {
      for ( let j = i + 1; j < numbers.length; j++) {
         if ( numbers[i] + numbers[j] === target) {
            return [i, j]
         }
      }
   }
 }

 console.log(twoSum(numbers, 4))