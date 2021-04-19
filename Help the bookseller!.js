function stockList(listOfArt, listOfCat){
   if (!listOfArt.length || !listOfCat.length)
      return '';

   const result = {};
   listOfArt.forEach(el => {
      const [category, amount] = el.split(' ')
      const firstWord = category[0]

      result[firstWord] = (result[firstWord] || 0) + Number(amount)
   })
   return listOfCat.map( el => {
      return `(${el} : ${result[el] || 0})`
   }).join(' - ')
}