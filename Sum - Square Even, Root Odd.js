const sumSquareEvenRootOdd = ns => {
   const result = ns.map ( el => {
      return (el % 2 === 0) ? el ** 2 : Math.sqrt(el)
   })
   return +result.reduce((acc, el) => acc + el).toFixed(2)
};