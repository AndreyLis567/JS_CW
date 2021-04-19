let numbers = [2,2,1,2,1]

function sumTwoSmallestNumbers(numbers) {  
   let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]
}
console.log(sumTwoSmallestNumbers(numbers))