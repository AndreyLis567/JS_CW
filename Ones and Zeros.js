const arr = [1, 1, 0, 1]

const binaryArrayToNumber = arr => {
   return parseInt(arr.join(''), 2)
};

console.log(binaryArrayToNumber(arr))