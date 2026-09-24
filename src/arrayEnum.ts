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