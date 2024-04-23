// array
var newArray = [1, 2, 3, 4, 5];
var fruitArray = ['apple', 'banana', 'orange'];
var differentArray = ['apple', 1, true];
console.log(newArray);
console.log(fruitArray);
console.log(differentArray);
// tuple
var myTuple = ['Andrei', 'Sirname', 25];
console.log(myTuple);
var favoriteColors = ['red', 'green', 'blue'];
console.log(favoriteColors);
// never
function infiniteLoop() {
    while (true) {
    }
}
function error(message) {
    throw new Error(message);
}
var a;
// object
var myBook = {
    title: 'War and Peace',
    author: 'Tolstoy',
    year: 1869,
};
console.log(myBook);
var myInfo = {
    name: 'Andrei',
    sirname: 'Markov',
    age: 25,
};
console.log(myInfo);
function returnNothing(object) {
    throw new Error('Ничего не вернулось');
}
// any
var myColor = 'blue';
var myArray = [1, true, 'hello', { name: 'Andrei', age: 25 }];
function returnAny(a) {
    throw new Error('Ничего не вернулось');
}
console.log(myColor);
console.log(myArray);
var person = {
    name: 'Andrei',
    age: 25,
};
console.log(typeof person);
console.log(person);
var milk = {
    name: 'Milk',
    price: 10,
    inStock: true,
};
console.log(milk);
var user = {
    id: 2,
    username: 'Andrei',
    email: 'some@mail.mail'
};
console.log(user);
var acc = {
    id: 3,
    balance: 1000,
};
console.log(acc);
