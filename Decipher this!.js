const str = "72ello";
function decipherThis(str) {
   return str.replace(/\d+/g, el => String.fromCharCode(el * 1)).map( el => {
      el.length > 2
      ? el.slice(0,1) + slice(-1) + slice(2, -1) + slice(1,2)
      : el
   }).join(``)
}

console.log(decipherThis(str))