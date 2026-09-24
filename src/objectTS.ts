type Chai = {
    name : string,
    price : number,
    isHot : boolean
}

//If we want to have partial values from the type
//PARTIAL
const newChai = (updates : Partial<Chai>) => {
    console.log(updates)
}
//Partial<Chai> makes all the data types optional
newChai({name : "masala tea"});
newChai({price : 10})

type User = {
    name?: string;
    age?: number
}

//REQUIRED
//Required<User> - It makes all the values required in User type 
//even it is defined optional
const getUserDetails = (user : Required<User>) =>{
    console.log(user)
}
getUserDetails({name : "Prachi", age : 25})


//Pick
type coffee = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients : string[]
}

type makeCoffee = Pick<coffee, "name" | "price">;

const coffeeInfo : makeCoffee = {
    name : "Prachi",
    price : 500,
    // isHot : false //We can not add makeCoffee because we have not picked that
}
console.log(coffeeInfo);

//omit
type newChai = {
    name : string;
    price : number;
    isHot : boolean;
    secreatingredients : string[]
}
//Now In this new type, we have ommited the secreatingredients
//so whatever the datatypes we will create using newChaiReceipt should not have secreatingredients
type newChaiReceip = Omit<newChai,  "secreatingredients">

const newChaiInfo : newChaiReceip = {
    name : "prachi",
    price : 6,
    isHot : false,
    // secreatingredients : ["hey"] //'secreatingredients' does not exist in type 'newChaiReceip'.ts(2353)
}