function twiceAsOld(dadYearsOld, sonYearsOld) {
let sum = dadYearsOld - 2 * sonYearsOld;
return sum < 0 ? sum * (-1) : sum;
}

console.log(twiceAsOld(70, 20))