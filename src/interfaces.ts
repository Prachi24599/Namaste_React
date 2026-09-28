interface Chai{
    flavour : string;
    price : number;
    milk?: boolean
}

const masala : Chai = {
    flavour : "masala",
    price : 20
}

interface Shop {
    readonly id : number;
    name : string
}

const s : Shop = {id : 1, name : "chai cafe"}
// s.id = 5; //We wont be able to assign new value to is as It is readonly
s.name = "apple"
console.log(s);

//functions in interfaces
interface DiscountCalculater{
    //input parameter to the function is price number type and return is also a number
    (price : number) : number;
}
const applyDis : DiscountCalculater = (p) => p * 0.5;
console.log(applyDis(5));

interface TeaMachine{
    start() : void;
    stop() : void;
}

const machine : TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}
console.log(machine);

//Index Signature
interface ChaiRatings {
    [flavor : string] : number
}

const ratings : ChaiRatings = {
    masala: 4,
    ginger: 4.5
}

//Interface from outside library
interface User {
    name : string
}

//Interface we have defined
interface User {
    age : number
}

//If we use that interface then we need to define properties of both the interfaces
//Merging
const u : User = {
    age : 67,
    name : "pp"
}


//Interface extends
interface A {a : string}
interface B {b : string}
interface C extends A,B{}