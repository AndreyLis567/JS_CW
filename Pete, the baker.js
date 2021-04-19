function cakes(recipe, available) {
   const totalCakes = [];
   for ( const key in recipe) {
      if ( !available.hasOwnProperty(key)) {
         return 0
      }
      totalCakes.push(Math.floor(available[key] / recipe[key]))
   }
   return Math.min(...totalCakes)
}