/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
    const minMax = [];
    
    if (numbers.length >= 1) {
      //sort the numbers in asc
    
      numbers.sort((a, b) => a - b);
      minMax.push(numbers[0]);
      minMax.push(numbers[numbers.length - 1]);
    }
    return minMax;
  }
  
  /**
   * Implement an algorithm that uses iteration to find the minimum and maximum
   */
  function minimumAndMaximumIterate(numbers) {
    if (numbers.length === 0) {
      return [];
    }
  
    let min = numbers[0];
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      } else if (numbers[i] < min) {
        min = numbers[i];
      }
    }
  
    return [ min, max ];
  }
  
  
  module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
  