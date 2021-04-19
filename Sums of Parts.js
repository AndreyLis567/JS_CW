function partsSums(ls) {
   const result = []
   const sum =  ls.reduce((a,b) => a + b, 0)
   for ( let i = 0; i <= ls.length; i++) {
      result.push(sum);
      sum -= ls[i]
   }
   return result
}