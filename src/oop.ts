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