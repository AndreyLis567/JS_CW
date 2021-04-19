const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];

function highestRank(arr){
   let obj = {};
   arr.map(v => (obj[v] = obj[v] ? obj[v] + 1: 1))
   let a = 0;
   let b = 0;

   for ( let num in obj) {
      num = num * 1 
      if ( obj[num] >= a) {
         a = obj[num];
         b = num
      }
   }
   return b
}

function highestRank(arr){
   return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
 }