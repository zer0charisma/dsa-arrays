/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
   
    for (let i = 1; i <= numbers.length + 1; i++) {
      let found = false;
      for (let j =0; j < numbers.length && !found; j++) {
        if (numbers[j] === i){
          found = true;
        }
      }
      if(!found) {
        return i;
      }
    }
  }
  
  
  /**
   * Use an iterative  strategy for finding the missing number in an array
   */
  function missingNumberSum(numbers) {
    const n = numbers.length + 1;
    let total = (n * (n + 1)) / 2;
   
    numbers.forEach((number) => {
      total -= number;
    });
    return total;
    
  }
  
  module.exports = { missingNumberBruteForce, missingNumberSum };