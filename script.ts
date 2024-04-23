// array
let newArray: number[] = [1, 2, 3, 4, 5];
let fruitArray: string[] = ['apple', 'banana', 'orange'];
let differentArray: (string|number|boolean)[] = ['apple', 1, true];
console.log(newArray);
console.log(fruitArray);
console.log(differentArray);
// tuple
let myTuple: [string, string, number] = ['Andrei', 'Sirname', 25];
console.log(myTuple);
let favoriteColors: [string, string, string] = ['red', 'green', 'blue'];
console.log(favoriteColors);
// never
function infiniteLoop(): never {
    while (true) {
    }
}
function error(message: string): never {
    throw new Error(message);
}
let a: never;
// object
let myBook: object = {
    title: 'War and Peace',
    author: 'Tolstoy',
    year: 1869,
};
console.log(myBook);
let myInfo: object = {
    name: 'Andrei',
    sirname: 'Markov',
    age: 25,
}
console.log(myInfo);
function returnNothing(object: object): never {
    throw new Error('Ничего не вернулось');
    
}
// any
let myColor: any = 'blue';
let myArray: any[] = [1, true, 'hello', {name: 'Andrei', age: 25}];
function returnAny(a: any): never {
    throw new Error('Ничего не вернулось');
}
console.log(myColor);
console.log(myArray);
// type
type Person = {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Andrei',
    age: 25,
}
console.log(typeof person);
console.log(person);
type Product = {
    name: string;
    price: number;
    inStock: boolean;
}
let milk: Product = {
    name: 'Milk',
    price: 10,
    inStock: true,
}
console.log(milk);
type User = {
    id: number;
    username: string;
    email: string;
}
let user: User = {
    id: 2,
    username: 'Andrei',
    email: 'some@mail.mail'
}
console.log(user);
type Account = {
    id: number;
    balance: number;
}
let acc: Account = {
    id: 3,
    balance: 1000,
}
console.log(acc);














