const array = ["Telescopes", "Glasses", "Eyes", "Monocles"]

function sortByLength (array) {
   let arr = array.sort((a,b) => a.length - b.length)
   return arr
 };