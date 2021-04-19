const text = "This is a test!";
function encrypt(text, n) {
   while (n--) {
      let result = '';
      for (let i = 1; i < text.length; i += 2) {
         result += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
         result += text[i];
      }
      text = result;
   }
   if ( !text || n <= 0) {
      return text
   }
   return text
}
console.log(encrypt(text, 3))

function decrypt(encryptedText, n) {
   if ( !encryptedText || n <= 0) {
      return encryptedText
   }
   let res = new Array(encryptedText)
   while (n--) {
      let j = 0;
      for (let i = 1; i < encryptedText.length; i += 2) {
         res[i] += encryptedText[j++];
      }
      for (let i = 0; i < encryptedText.length; i += 2) {
         res[i] += encryptedText[j++];
      }
      encryptedText = res.join('');
   }
   return encryptedText
}