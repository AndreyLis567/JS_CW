const list = [ 1, 4, -50]

var min = function(list){
    
   return Math.min.apply(null, list);
}
console.log(min(list(5, 4)))
var max = function(list){
   
   return Math.max.apply(null, list);
}
console.log(max(list))