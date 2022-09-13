function isPalindromeRecursive(word) {
  const wordArr = word.split("")
  return isPalindromeRecursiveHelper(wordArr)
}


function isPalindromeRecursiveHelper(wordArr) {
  if (wordArr.length === 0) return true
  if (wordArr.length === 1) return false
  const original = [...wordArr]
  const left = original[0]
  const right = original[original.length - 1]
  console.log(`original: ${original}, left: ${left}, right: ${right}`);
  if (left === right) {
    original.splice(0, 1)
    original.reverse()
    original.splice(0, 1)
    original.reverse()
    console.log(`return : ${original}`);
    return isPalindromeRecursiveHelper(original)
  } else return false
}
//!
console.log(isPalindromeRecursive("asd2d2sa"));
