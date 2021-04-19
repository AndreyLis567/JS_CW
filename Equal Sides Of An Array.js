function findEvenIndex(arr)
{
   let sum = 0;
   let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (leftSum === sum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

console.log(findEvenIndex([20,10,-80,10,10,15,35]))