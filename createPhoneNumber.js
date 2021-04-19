const numbers = [1,2,3,4,5,6,7,8,9]

function createPhoneNumber(numbers){
   let firstpart = '';
   let secondpart = '';
   let thirdpart = '';
   for ( let i = 0; i < numbers.length; i++) {
      if ( i < 3) {
         firstpart += numbers[i].toString()
      } else if ( i < 6) {
         secondpart += numbers[i].toString()
      } else {
         thirdpart += numbers[i].toString()
      }
   }
   return `(${firstpart}) ${secondpart}-${thirdpart}`
}

console.log(createPhoneNumber(numbers))