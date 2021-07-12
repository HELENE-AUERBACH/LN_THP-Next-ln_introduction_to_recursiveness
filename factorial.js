const computeFactorialIt = (n) => {
  let result = 0;
  if (n !== undefined && n !== null && (typeof n === 'number') && !isNaN(n) && Number.parseInt(n) == Number.parseFloat(n) && n >= 0) {
    result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
  }
  return result;
}

console.log("computeFactorialIt(5) = ", computeFactorialIt(5)); // output : 120
console.log("computeFactorialIt(1) = ", computeFactorialIt(1)); // output : 1
console.log("computeFactorialIt(0) = ", computeFactorialIt(0)); // output : 1
console.log("computeFactorialIt(-5) =", computeFactorialIt(-5)); // output : 0 <=> error
console.log("computeFactorialIt(undefined) = ", computeFactorialIt(undefined)); // output : 0 <=> error
console.log("computeFactorialIt(null) = ", computeFactorialIt(null)); // output : 0 <=> error
console.log("computeFactorialIt(\"5\") = ", computeFactorialIt("5")); // output : 0 <=> error
console.log("computeFactorialIt(NaN) = ", computeFactorialIt(NaN)); // output : 0 <=> error
console.log("computeFactorialIt({}) = ", computeFactorialIt({})); // output : 0 <=> error
console.log("computeFactorialIt(5.4) = ", computeFactorialIt(5.4)); // output : 0 <=> error

const computeFactorialRec = (n) => {
  // This is the error case.
  if (n === undefined || n === null || (typeof n !== 'number') || isNaN(n) || Number.parseInt(n) != Number.parseFloat(n) || n < 0) return 0;
  // This is the base case.
  if (n === 0) return 1;
  // This is the recursive one.
  else return n * computeFactorialRec(n - 1);
}

console.log("computeFactorialRec(5) = ", computeFactorialRec(5)); // output : 120
console.log("computeFactorialRec(1) = ", computeFactorialRec(1)); // output : 1
console.log("computeFactorialRec(0) = ", computeFactorialRec(0)); // output : 1
console.log("computeFactorialRec(-5) = ", computeFactorialRec(-5)); // output : 0 <=> error
console.log("computeFactorialRec(undefined) = ", computeFactorialRec(undefined)); // output : 0 <=> error
console.log("computeFactorialRec(null) = ", computeFactorialRec(null)); // output : 0 <=> error
console.log("computeFactorialRec(\"5\") = ", computeFactorialRec("5")); // output : 0 <=> error
console.log("computeFactorialRec(NaN) = ", computeFactorialRec(NaN)); // output : 0 <=> error
console.log("computeFactorialRec({}) = ", computeFactorialRec({})); // output : 0 <=> error
console.log("computeFactorialRec(5.4) = ", computeFactorialRec(5.4)); // output : 0 <=> error
