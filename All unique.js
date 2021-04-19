const str = 'erty';

function hasUniqueChars(str){
   for ( let i = 0; i < str.length; i++) {
      if ( str[i] === str.lastIndexOf(str[i])) {
         return str[i]
      }
   }
  }
  console.log(hasUniqueChars(str))