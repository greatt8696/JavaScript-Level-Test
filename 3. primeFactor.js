function primeFactor(n) {
  let lastNum = n;
  let length = -1
  const primeArray = []
  while (length !== primeArray.length) {
    for (let num = 1; num <= lastNum; num++) {
      if (!(num === 1 || num === n || n % num !== 0))
        if (primeArray.indexOf(num) < 0) primeArray.push(num)
    }
    const unPrimeMax = Math.max(...primeArray.filter((num) => !isPrime(num)))
    lastNum = unPrimeMax
    primeArray.pop(unPrimeMax)
    length = primeArray.length
  }
  return primeArray.filter((num) => isPrime(num))
  // return primeArray
}

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

console.log(primeFactor(16320));