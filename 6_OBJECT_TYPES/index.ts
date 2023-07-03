// de tipo para interface

interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProduct(product: Product) {
    if (product.isAvailable) {
        console.log(`Produto ${product.name}, valor: R$${product.price}, está disponivel`);
    } else if (!product.isAvailable) {
        console.log(`Produto ${product.name}, valor: R$${product.price}, está indisponivel`);

    }
}
const newP: Product = {
    name: 'teste',
    price: 2.50,
    isAvailable: false
}

showProduct(newP);

// readonly
interface Car {
    brand: string,
    readonly wheels: number
}
const fusca: Car = {
    brand: 'VW',
    wheels: 4
}
//fusca.wheels = 5;
//Não é possível atribuir a 'wheels' porque é uma propriedade de somente leitura.


// index signature
// ultilizamos quando não sabemos o nome da chaves.
// isso restringe os tipos que não devem ser utilizados.

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

console.log(coords);

// extending types
// utilizamos extending types como uma herança para criar tipos mais complexos por meio de uma interface;
// ou seja, uma interface pode herdar as propriedades e tipos já definidos de outra.

interface SuperCar extends Car {
    superCar: boolean
}

const superCar: SuperCar = {
    brand: 'VW',
    wheels: 4,
    superCar: true
}

console.log(superCar);

// Intersection Types

// Intersection Types são utilizados para criar tipos mais complexos a partir de duas interfaces;
// podemos concatenar os tipos com &

interface Char {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}
type HumanWithGun = Char & Gun;

const h: HumanWithGun = {
    name: 'Arnolde',
    type: 'Pistol',
    caliber: 12
}

console.log(h);

// readOnlyArray

let myArray = [1, 2, 3];

myArray.push(4);
myArray[1] = 5;

console.log(myArray);

let myNewArry: ReadonlyArray<any> = [1, 2, 3, 4];

console.log(myNewArry);

// myNewArry.push(5); erro

myNewArry.forEach((item) => {
    console.log("Number: ", + item);
});

myNewArry = myNewArry.map((item) => {
    return `Number: ${item}`
});

console.log(myNewArry);


// Tuplas

type twoNumbers = [number, number];

const tuplaTwoNumbers: twoNumbers = [1, 2]; //Ok
// const tuplaTwoNumbers: twoNumbers = [1, '2']; // Error

console.log(tuplaTwoNumbers);

// tuplas com readOnly

function numbers(numbers: readonly [number, string]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}

numbers([1, 'teste']);