const arr = [ 1, 1, 1, 2, 1, 1 ];

function findUniq(arr) {
   return +arr.filter(value => {
      return arr.indexOf(value) == arr.lastIndexOf(value);
    });
}
console.log(findUniq(arr))
