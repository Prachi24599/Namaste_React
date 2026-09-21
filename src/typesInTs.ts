//Type Inference
let chai = "masala chai";
//When we declare the variable, ts assume it datatype based on value assigned
//chat = 1;
//If we try to assign any other data type to it then it throws an error
const res = Math.random() > 0.5 ? 10 : 5 //It assumed the result to be number

//Type Annotation - We specify the type (in small letter)
let world : string = "Hello World";
let name : string;

name = "Prachi"

const calculate : number = 56;
// calculate = true; throw an error