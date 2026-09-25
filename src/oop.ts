class Chai{
    flavour : string;
    price : number;

    constructor(flavour : string, price : number){
        this.flavour = flavour;
        this.price = price;
    }
}

const myTea = new Chai("masala", 20);
// myTea.flavour = "aaam"
console.log(myTea)