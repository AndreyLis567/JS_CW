const array = [1,2,3]

function oddOrEven(array) {
   let sum = 0;
   sum = array.reduce(function(a, b) {
      return a + b}, 0);
   return sum % 2 ? "odd" : "even"
}

console.log(oddOrEven(array))