"use strict";
// de tipo para interface
function showProduct(product) {
    if (product.isAvailable) {
        console.log(`Produto ${product.name}, valor: R$${product.price}, está disponivel`);
    }
    else if (!product.isAvailable) {
        console.log(`Produto ${product.name}, valor: R$${product.price}, está indisponivel`);
    }
}
const newP = {
    name: 'teste',
    price: 2.50,
    isAvailable: false
};
showProduct(newP);
const fusca = {
    brand: 'VW',
    wheels: 4
};
let coords = {
    x: 10
};
console.log(coords);
const superCar = {
    brand: 'VW',
    wheels: 4,
    superCar: true
};
console.log(superCar);
const h = {
    name: 'Arnolde',
    type: 'Pistol',
    caliber: 12
};
console.log(h);
// readOnlyArray
let myArray = [1, 2, 3];
myArray.push(4);
myArray[1] = 5;
console.log(myArray);
let myNewArry = [1, 2, 3, 4];
console.log(myNewArry);
// myNewArry.push(5); erro
myNewArry.forEach((item) => {
    console.log("Number: ", +item);
});
myNewArry = myNewArry.map((item) => {
    return `Number: ${item}`;
});
console.log(myNewArry);
const tuplaTwoNumbers = [1, 2]; //Ok
// const tuplaTwoNumbers: twoNumbers = [1, '2']; // Error
console.log(tuplaTwoNumbers);
// tuplas com readOnly
function numbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
numbers([1, 'teste']);
