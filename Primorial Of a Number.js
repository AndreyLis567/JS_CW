function numPrimorial(n){
   
}

function isPrime(n) {
   let rt = Math.sqrt(n);
   for (let i = 2; i <= rt; i++) {
     if (n % i === 0) return false;
   }
   return n !== 1;
 }
 console.log(isPrime(3))