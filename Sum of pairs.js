function sumPairs(ints, s) {
   if (ints.length < 2) return undefined;

   let intSet = new Set()
   intSet.add(ints[0]);
   for (let i=1; i < ints.length; i++){
     let a = s-ints[i];
     if (intSet.has(a)){
       return [a,ints[i]];
     }
     intSet.add(ints[i]);
   }
   return undefined;
 }

console.log(sumPairs([1,3,5,6,9], 7))