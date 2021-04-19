function Xbonacci(signature,n){
   let arr = [...signature];
   let sum = signature.length
   for (let i = 0; i < n; i++) {
      arr.push(arr.slice(i, i + sum).reduce((acc, next) => acc + next, 0));
    }
    return arr.slice(0,-sum)
}

console.log(Xbonacci([1,0,0,0,0,0,1],10))