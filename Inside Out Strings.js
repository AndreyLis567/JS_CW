const x = 'man i need a taxi up to ubud'

function insideOut(x){
   return x.split` `.map( el => {
      if ( el.length < 4) {
         return el
      }
      let left = el.slice(0, el.length / 2).split``.reverse().join('');
      let rigth = el.slice(el.length / 2).split``.reverse().join('');
      let center = '';
      if (el.length % 2 !== 0) {
         rigth = el.slice(el.length / 2 + 1).split``.reverse().join('');
         center = el.slice(el.length / 2, el.length / 2 + 1)
      }
      return left + center + rigth
   })
}

console.log(insideOut(x))