/*
Given some points (cartesian coordinates), 
return true if all of them lie on a line. 
Treat both an empty set and a single point as a line.

onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
onLine([[1,2], [-3, -14], [22, 9]]);              // returns false
*/


// Solution

function onLine(points) {
  if (points.length < 3) return true;
  let x = points.shift();
  let a = undefined;
  return points.
    filter (function(y) { return !(x[0] == y[0] && x[1] == y[1]) }).
    map    (function(y) { return a = (x[0] - y[0])/(x[1] - y[1]) }).
    every  (function(y) { return y == a });
}

// or

const onLine = ([[x1, y1] = [], ...p]) => {
  const [[x2, y2] = [], ...pR] = p.filter(([pX, pY]) => pX !== x1 || pY !== y1);
  
  // y = kx + b;
  const k = (y2 - y1) / (x2 - x1);
  const b = y2 - k * x2;
  
  return pR.every(([x, y]) => Number.isFinite(k) ? y === k * x + b : x === x1);
}