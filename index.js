//reduce function
//reduce function is used to reduce an array to a single value by applying a function 
// to each element of the array. It takes two arguments: a callback function and an initial value. 
// The callback function takes four arguments: accumulator, currentValue, currentIndex, and array. 
// The accumulator is the accumulated value returned from the previous iteration, currentValue is the current element being processed, 
// currentIndex is the index of the current element, and array is the original array being reduced.

const numbers = [1, 2, 3, 4, 5];

function sum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }
    return total;
}

console.log(sum(numbers)); 

//using reduce function
const sumWithReduce = numbers.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0);

console.log(sumWithReduce);