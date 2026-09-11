//filter function
//filter function is used to filter the values of the array based on the condition provided in the callback function. 
//It returns a new array with all the elements that pass the test implemented by the provided function.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(num){
    return num % 2 === 0;
}

function isOdd(num){
    return num % 2;
}

console.log(arr.filter(isEven))
console.log(arr.filter(isOdd))

console.log(arr.filter((num) => num > 5))
