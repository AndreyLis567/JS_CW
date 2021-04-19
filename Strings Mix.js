const s1 = "A aaaa bb c";
const s2 = "& aaa bbb c d";

function mix(s1, s2) {
   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
   return alphabet.map(el => {
      const count1 = s1.split("").filter( x => x === el).length;
      const count2 = s2.split("").filter( x => x === el).length;
      const maxCount = Math.max(count1, count2);

      return {
      el: el,
      count: maxCount,
      src: maxCount > count1 ? "2" : maxCount > count2 ? "1" : "="
      };
   })
   .filter(element => element.count > 1)
   .sort((obj1, obj2) =>
      obj2.count - obj1.count || (obj1.src + obj1.el > obj2.src + obj2.el  ? 1 : -1 )
   )
   .map( element => `${element.src}:${element.el.repeat(element.count)}`)
   .join("/")
}
console.log(mix(s1,s2))