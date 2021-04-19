let values = [1,2,3,4,5];

function beggars(values, n){
   let arr = []
   for ( let i = 1; i <= n; i++) {
      arr[i-1] = 0
      for ( let j = i - 1; j < values.length;) {
         arr[i - 1] += values[j]
         j = j+n
      }
   }
   return arr
}

console.log(beggars(values,0))

function beggars(values, n) {

   let take = Array(n).fill(0);
   
   for (let i = 0; i < values.length; i++)
     take[i % n] += values[i];
     
   return take;
   
 }