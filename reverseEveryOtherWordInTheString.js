function reverse(str){
   return str.trim().split(" ").map((element, index) => {
   return index % 2
    ? element = element.split('').reverse().join('') 
    : element
   }).join(' ')
}

console.log(reverse('the world most people'))