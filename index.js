const radius = [2, 4, 6, 8];

//Find Area of Circle
function area(radius){
    return Math.PI * radius * radius;
}

function circumference(radius){
    return 2 * Math.PI * radius;
}

function diameter(radius){
    return 2 * radius;
}

//this points to the array on which the method is called
Array.prototype.calculate = function(logic){
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area))
console.log(radius.calculate(circumference))
console.log(radius.calculate(diameter))