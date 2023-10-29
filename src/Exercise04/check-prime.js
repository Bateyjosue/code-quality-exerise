const isPrime =(number) => {
  if(number <= 2) return false
  return Array.from({length: number}, (_, index) => index + 1) 
  .filter(element => number % element === 0).length === 2
}

console.log(isPrime(19))