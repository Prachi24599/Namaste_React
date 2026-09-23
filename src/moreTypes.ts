let resonse = "54";

let numericString : number = (resonse as String).length;
console.log(numericString);

type Book = {
    name : string;
}

let bookString = '{"name" : "Think like a Monk"}'
let bookVal = JSON.parse(bookString) as Book;
console.log(bookVal.name)


try {
    throw new Error("this is my test error")
} catch (error) {
    if(error instanceof Error){
        console.log("===", error.message);
    }else {
        console.log("error", error)
    }
}

//never - We never want to return anything from the function
//ex - we want to keep this loop running infinite time
function neverReturn() : never{
    while(true){

    }
}

// neverReturn()
// console.log("Hi") - It will never react to this line

//interface

interface chai {
    suger : number,
    milk : string
}

const makeTee : chai = {suger : 1, milk : "fat ml"};
console.log(makeTee)

class MyTeaSeection implements chai{
    suger =  5;
    milk = "10";
}

type BaseChai = {teaLeaves : number};
type Extra = {masala : number};

type MasalaTeaSpecial = BaseChai & Extra;

const u1 : MasalaTeaSpecial = {teaLeaves : 5, masala : 5}


//optional values

type User = {
    name : string,
    bio ?: string //optional
}
const p1 : User = {name : "Prachi"}
const p2 : User = {name : "Pinku", bio : "Married"}

//readonly value
type Config = {
    readonly theme : string,
    version : number
}

//ones you assign a readonly value then you can not change it
const prachiCfg : Config = {
    theme : "Black",
    version : 1
}