//map function 
//map function is used to transform an array by applying a function to each of its elements and returning a new array with the transformed values.
const numbers = [1, 2, 3, 4, 5, 6];

function double(number){
    return number * 2;
}

console.log(numbers.map(double))
console.log(numbers.map(function(number){
    return number * 2;
}))
console.log(numbers.map((number) => number * 2))