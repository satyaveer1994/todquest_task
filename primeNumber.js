function isPrime(number) {
    if (number < 2) {
      return false; // 1 is not a prime number, and negative numbers cannot be prime
    }
    
    if (number === 2 || number === 3) {
      return true; // 2 and 3 are prime numbers
    }
    
    if (number % 2 === 0 || number % 3 === 0) {
      return false; // if the number is divisible by 2 or 3, then it's not prime
    }
    
    for (let i = 5; i <= Math.sqrt(number); i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false; // if the number is divisible by i or i+2, then it's not prime
      }
    }
    
    return true; // if none of the previous conditions are met, then the number is prime
  }
  
  const result= isPrime(3)
  console.log(result);