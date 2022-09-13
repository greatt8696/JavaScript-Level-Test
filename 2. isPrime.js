function isPrime(n) {
  // let isPrime = true
  for (let num = 1; num <= n; num++) {
    if (!(num === 1 || num === n))
      if (n % num === 0)
        return false
    // isPrime = false;
    // console.log(`${n % num === 0} : ${num}`);
  }
  return true
}
console.log(isPrime(32));
