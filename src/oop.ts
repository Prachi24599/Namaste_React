// class Chai{
//     flavour : string;
//     price : number;

//     constructor(flavour : string, price : number){
//         this.flavour = flavour;
//         this.price = price;
//     }
// }
// const myTea = new Chai("masala", 20);
// // myTea.flavour = "aaam"
// console.log(myTea)

//access modifiers
class Chai {
    public flavour : string = "masala";
    private secreat : string = "cardamom";

    accessPrivate() {
        return this.secreat;
    }
}

const c = new Chai();
console.log(c)
console.log(c.accessPrivate()) //we can access private variable but using a method

class Monkey {
    protected feature : string = "Jump"
}

//Protected - Child class can access the protected properties on parent class
class Human extends Monkey{
    getFeature(){
        return this.feature
    }
}
const h = new Human();
console.log(h.getFeature()) 

//readonly
class Cup {
    readonly capacity : number = 10;
    constructor(capacity : number){
        this.capacity =     capacity;
    }
}
const myCup = new Cup(50);
console.log(myCup)