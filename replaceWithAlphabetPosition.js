function alphabetPosition(text) {
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
   let code = [];
   text = text.toLowerCase();
   for (let i = 0; i < text.length; i++) {
      let word = alphabet.indexOf(text[i]);
      if ( word === -1) {
         continue;
      } else {
         code.push(word + 1);
      } 
   }


   return code.join(" ");
}

console.log(alphabetPosition('dsdsdsadsad'))