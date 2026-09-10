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

function calculate(radius, logic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


