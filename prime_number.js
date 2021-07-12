/* gcd takes two non-negative integers n and m,
  and returns the greatest common divisor of n and m, following Euclid's algorithm */
const gcd = (n, m) => {
  if (m === 0) {
    return n;
  } else {
    return gcd(m, n % m);
  }
}

/* multiple_upto takes two non-negative integers n and r,
  and tells whether n admits at least one divisor d >= 2 and <= r,
  such that the remainder of the division of n by d is zero. */
const multiple_upto = (n, r) => {
  const d = gcd(n, r);
  if ((d <= 1) && (r <= 2)) {
    return false;
  } else if (d >= 2) {
    return true;
  } else {
    return multiple_upto(n, r - 1);
  }
}

/* is_prime takes a non-negative integer n and checks whether it is a prime number. */
const isPrimeNumber = (n) => {
  let result = false;
  if (n !== undefined && n !== null && (typeof n === 'number') && !isNaN(n) && Number.parseInt(n) == Number.parseFloat(n) && n > 0) {
    if ((n === 1) || multiple_upto(n, n - 1)) {
      result = false;
    } else {
      return true;
    }
  }
  return result;
}

console.log("isPrimeNumber(0) = ", isPrimeNumber(0)); // output : false
console.log("isPrimeNumber(1) = ", isPrimeNumber(1)); // output : false
console.log("isPrimeNumber(2) = ", isPrimeNumber(2)); // output : true
console.log("isPrimeNumber(3) = ", isPrimeNumber(3)); // output : true
console.log("isPrimeNumber(6) = ", isPrimeNumber(6)); // output : false
console.log("isPrimeNumber(7) = ", isPrimeNumber(7)); // output : true
console.log("isPrimeNumber(41) = ", isPrimeNumber(41)); // output : true
console.log("isPrimeNumber(\"3\") = ", isPrimeNumber("3")); // output : false <=> error
console.log("isPrimeNumber({}) = ", isPrimeNumber({})); // output : false <=> error
console.log("isPrimeNumber(-3) = ", isPrimeNumber(-3)); // output : false <=> error

/* findSupPrime returns the littlest prime number >= n. */
const findSupPrime = (n) => {
  let result = 0;
  if (n !== undefined && n !== null && (typeof n === 'number') && !isNaN(n) && Number.parseInt(n) == Number.parseFloat(n)) {
    if (isPrimeNumber(n)) {
      result = n;
    } else {
      result = findSupPrime(n + 1);
    }
  }
  return result;
}

console.log("findSupPrime(0) = ", findSupPrime(0)); // output : 2
console.log("findSupPrime(1) = ", findSupPrime(1)); // output : 2
console.log("findSupPrime(2) = ", findSupPrime(2)); // output : 2
console.log("findSupPrime(3) = ", findSupPrime(3)); // output : 3
console.log("findSupPrime(6) = ", findSupPrime(6)); // output : 7
console.log("findSupPrime(7) = ", findSupPrime(7)); // output : 7
console.log("findSupPrime(\"3\") = ", findSupPrime("3")); // output : 0 <=> error
console.log("findSupPrime({}) = ", findSupPrime({})); // output : 0 <=> error
console.log("findSupPrime(-3) = ", findSupPrime(-3)); // output : 2
