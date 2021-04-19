const data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];

function dataReverse(data) {
   let array = []
   if ( data.length === 0 ) {
      return []
   }
   const bytes = data.length / 8;
   for ( let i = 0; i < data.length; i++) {
      array.push(data.splice(0,8))
   }
   return array.reverse().join('').split('')
}
console.log(dataReverse(data))