const a = [ [1, 2, 3],
[3, 2, 1],
[1, 1, 1] ];
const b = [[2, 2, 1],
[3, 2, 3],
[1, 1, 3] ];

function matrixAddition(a, b){
   let g = a;
   for ( let i = 0; i < a.length; i++) {
      for ( let j = 0; j < a.length; j++) {
         g[i][j]= a[i][j] + b[i][j]
      }
   }
   return g
}
console.log(matrixAddition(a,b))