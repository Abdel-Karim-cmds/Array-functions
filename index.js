// Sum of an array

const sumOfArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// remove a specific index from an array
const removeIndex = (arr, index) => {
    return arr.filter((_, i) => i !== index);
}


// remove a specific element from an array
const removeElement = (arr, element) => {
    return arr.filter((el) => el !== element);
}

// remove duplicates from an array
const removeDuplicates = (arr) => {
    return arr.filter((el, i) => arr.indexOf(el) === i);
}



module.exports = {
    sumOfArray,
    removeIndex,
    removeElement,
    removeDuplicates
}