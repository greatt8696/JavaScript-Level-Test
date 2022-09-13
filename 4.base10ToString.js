function base10ToString(n) {
  let arr = [0]

  base10ToStringHelper(arr, n)
  return arr.reverse().join("")
}


function base10ToStringHelper(arr, n) {
  const original = [...arr]
  console.log(arr, n);
  if (n < 0) return true

  if (original[original.length - 1] === 0) {
    original[original.length - 1] += 1
  } else {
    let push = true
    original.forEach((num, idx) => {
      original[idx-1]
      if (num) {
        push = false
      }
    })
    if (push) original.push(0)
  }

  const afterArr = [...original]

  const after = n - 2
  return base10ToStringHelper(afterArr, after)
}

console.log(base10ToString(100))