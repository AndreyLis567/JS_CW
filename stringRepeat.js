function repeatStr (n, s) {
   let letter = "";
   for (let i = 0; i < n; i++) {
      letter += s;
   }
   return letter;
 }

console.log(repeatStr(5, "text"))