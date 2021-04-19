function sumMix(x){
   let sum = 0;
   x.map(function(element) {
      sum += parseInt(element);
   })
   return sum;

}

console.log(sumMix([5, '5']))