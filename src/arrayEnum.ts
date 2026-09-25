//array of string
const chaiFlavours : string[] = ["masala", "adrak"];
//array of numbers
const chaiPrice : number[] = [2.1, 6, 8];
//define array using Array keyword
const name : Array<string> = ["prachi", "om", "krishna"]
//array of objects
type Chai = {
    name : string,
    price : number
}
const menu : Chai[] = [
    {name : "masala", price : 12},
    {name : "ginger", price : 445}
]
menu.push({name : "black coffee", price : 45})
console.log(menu)
//Readonly
const cities :  readonly string[] = ["Pune", "Mumbai"]
// cities.push("Jaipir") 
console.log(cities);
//two-diamensional arrays
const table : number[][] = [
    [1, 3, 5],
    [2, 4, 6]
]

//Tuples
// A tuple is an array where TypeScript knows:
// how many elements there are
// the type of each position
let chaiTuple : [string, number];
chaiTuple = ["masala", 20];
// chaiTuple = [20, "masala"] we can not change the order of defined tuples

//tuple with an optinal parameter
let userInfo : [string, number, boolean?];
userInfo = ["hitesh", 100];
userInfo = ["prachi", 26, true]

//readonly tuple
let location : readonly [number, number] = [28.66, 32.22]
// location = [6, 7]
console.log(location);  

//ENUM - Defined by capital letters
enum ChaiType {
    "MASALA" = "masala",
    "GINGER" = "ginger"
}

function makechai1 (type : ChaiType){
    console.log(`Making ${type}`)
}
makechai1(ChaiType.GINGER)