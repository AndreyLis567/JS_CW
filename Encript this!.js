const text = "Hello";

var encryptThis = function(text) {
   if ( text === "") {
      return ""
   } else {
      let str = text.split(' ')
      let result = str.map(el => {
         let x = el.split('')
         x[0] = el.charCodeAt(0);
         [x[1],x[x.length - 1]] = [x[x.length - 1], x[1]];
         return x.join('')
      });
      return result.join(' ')
   }
}
console.log(encryptThis(text))