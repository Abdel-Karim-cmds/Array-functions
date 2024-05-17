const {sumOfArray, removeIndex, removeElement, removeDuplicates} = require('./index');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrDup = [1,1,2,2,3,4,5,7,6,5,8,9,10]
console.log(sumOfArray(arr)); // 55
console.log(removeIndex(arr, 3)); // [1, 2, 3, 5, 6, 7, 8, 9, 10]
console.log(removeElement(arr, 5)); // [1, 2, 3, 4, 6, 7, 8, 9, 10]
console.log(removeDuplicates(arrDup)); // [1, 2, 3, 4, 5, 7, 6, 8, 9, 10]
