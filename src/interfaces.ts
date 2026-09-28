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
