const computePowerIt = (n, p) => {
  let result = 0;
  console.log("n is a ", typeof n);
  console.log("p is a ", typeof p);
  if (n !== undefined && n !== null && (typeof n === 'number') && !isNaN(n)
    && p !== undefined && p !== null && (typeof p === 'number') && !isNaN(p)) {
    let pAbs = p;
    if (p < 0) {
      pAbs = -1 * p;
    }
    if (Number.parseInt(p) != Number.parseFloat(p)) {
      // p is a float
      console.log("p is a float");
      result = Math.exp(pAbs * Math.log(n));
    } else {
      result = 1;
      for (let i = 1; i <= pAbs; i++) {
        result = result * n;
      }
    }
    if (p < 0) {
      result = 1 / result;
    }
  }
  return result;
}

console.log("computePowerIt(2, 3) = ", computePowerIt(2, 3)); // output : 8
console.log("computePowerIt(2.5, 3) = ", computePowerIt(2.5, 3)); // output : 15.625
console.log("computePowerIt(2.8, 3.5) = ", computePowerIt(2.8, 3.5)); // output : 36.732721805
//console.log("computePowerIt(-2.8, -3.5) = ", computePowerIt(-2.8, -3.5)); // output : −0.027223684
console.log("computePowerIt(2, -3) = ", computePowerIt(2, -3)); // output : 0.125
console.log("computePowerIt(-2, -3) = ", computePowerIt(-2, -3)); // output : -0.125
console.log("computePowerIt(2, 0) = ", computePowerIt(2, 0)); // output : 1
console.log("computePowerIt(\"2\", 3) = ", computePowerIt("2", 3)); // output : 0 <=> error
console.log("computePowerIt(null, 3) = ", computePowerIt(null, 3)); // output : 0 <=> error
console.log("computePowerIt({}, 3) = ", computePowerIt({}, 3)); // output : 0 <=> error
console.log("computePowerIt(2, []) = ", computePowerIt(2, [])); // output : 0 <=> error
console.log("computePowerIt(2, NaN) = ", computePowerIt(2, NaN)); // output : 0 <=> error

const computePowerRec = (n, p) => {
  let result = 0;
  if (n !== undefined && n !== null && (typeof n === 'number') && !isNaN(n)
    && p !== undefined && p !== null && (typeof p === 'number') && !isNaN(p)) {
    if (p === 0) {
      return 1;
    } else if (p > 0) {
      result = n * computePowerRec(n, p - 1);
    } else {
      return computePowerRec(n, p + 1) / n;
    }
  }
  return result;
}

console.log("computePowerRec(2, 3) = ", computePowerRec(2, 3)); // output : 8
console.log("computePowerRec(2.5, 3) = ", computePowerRec(2.5, 3)); // output : 15.625
//console.log("computePowerRec(1.1, 0.2) = ", computePowerRec(1.1, 0.2)); // output : 1.019244876
//console.log("computePowerRec(-1.1, -0.2) = ", computePowerRec(-1.1, -0.2)); // output : −0.981118496
console.log("computePowerRec(2, -3) = ", computePowerRec(2, -3)); // output : 0.125
console.log("computePowerRec(-2, -3) = ", computePowerRec(-2, -3)); // output : -0.125
console.log("computePowerRec(2, 0) = ", computePowerRec(2, 0)); // output : 1
console.log("computePowerRec(\"2\", 3) = ", computePowerRec("2", 3)); // output : 0 <=> error
console.log("computePowerRec(null, 3) = ", computePowerRec(null, 3)); // output : 0 <=> error
console.log("computePowerRec({}, 3) = ", computePowerRec({}, 3)); // output : 0 <=> error
console.log("computePowerRec(2, []) = ", computePowerRec(2, [])); // output : 0 <=> error
console.log("computePowerRec(2, NaN) = ", computePowerRec(2, NaN)); // output : 0 <=> error
