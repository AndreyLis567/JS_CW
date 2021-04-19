function incrementString (strng) {
   const regExp = /[0-8]?9*$/
   return strng.replace(regExp, (match) => Number(match) + 1)
 }