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