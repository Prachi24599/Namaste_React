const radius = [2, 4, 6, 8];

//Find Area of Circle

function calculateArea(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));

function calculateCircumference(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

console.log(calculateCircumference(radius));

function calculateDiameter(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(radius[i] * 2);
    }
    return output;
}

console.log(calculateDiameter(radius));