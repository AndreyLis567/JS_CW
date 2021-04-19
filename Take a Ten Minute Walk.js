function isValidWalk(walk) {
   let n = [];
   let s = [];
   let e = [];
   let w = [];
  walk.map(el => {
    if (el === "n") n.push(1);
    if (el === "s") s.push(1);
    if (el === "e") e.push(1);
    if (el === "w") w.push(1);
  });
  return walk.length === 10 && n.length === s.length && w.length === e.length
 }