function multiply (a, b) {
  return a * b
}

function sum (a, b) {
  return a + b
}

function isPrime (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
module.exports = {multiply, sum, isPrime};