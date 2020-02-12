'use strict';

function max(numbers) {
  // your code here
  let i = 0;
  let maxNum = numbers[0];
  while(i < numbers.length) {
    if(numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
    i++;
  }
  return maxNum;
}
  
function min(numbers) {
  // your code here
  let i = 0;
  let minNum = numbers[0];
  while (i < numbers.length) {
    if(numbers[i] < minNum) {
      minNum = numbers[i];
    }
    i++;
  }
  return minNum;
}

function average(numbers) {
  // your code goes here
  let sum = 0;
  numbers.forEach( num => sum += num );
  return sum / numbers.length;
}
  