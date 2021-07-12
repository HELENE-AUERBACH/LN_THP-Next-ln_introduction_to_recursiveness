const sqrtIter = (n, guess) => {
  let next_guess = improve(n, guess); 
  if (Math.abs(next_guess - guess) < 0.001) {
    return next_guess;
  } else {
    return sqrtIter(n, next_guess);
  }
}

const improve = (n, guess) => {
  return (guess + n / guess) / 2; //sqrt(n) = the number y such that y = n / y
}

const computeSquareRoot = (n) => {
  let result = 0;
  if (n !== undefined && n !== null && (typeof n === 'number') && !isNaN(n) && n > 0) {
    result = sqrtIter(n, 1.0);
  }
  return result;
}

console.log("computeSquareRoot(2) = ", computeSquareRoot(2)); // output : 1.4142135623746899
console.log("computeSquareRoot(4) = ", computeSquareRoot(4)); // output : 2
console.log("computeSquareRoot(0.001) = ", computeSquareRoot(0.001)); // output : 0.0316
console.log("computeSquareRoot(1e-6) = ", computeSquareRoot(1e-6)); // output : 0.001
console.log("computeSquareRoot(0) = ", computeSquareRoot(0)); // output : 0 <=> error
console.log("computeSquareRoot(-4) = ", computeSquareRoot(-4)); // output : 0 <=> error
console.log("computeSquareRoot(\"1\") = ", computeSquareRoot("1")); // output : 0 <=> error
