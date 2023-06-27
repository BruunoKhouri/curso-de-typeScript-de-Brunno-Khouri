"use strict";
// TYPE GUARD
function some(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
}
some("2", "2");
some(8, 8);
// Verificando se valor existe com type undefined
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log('soma', sum);
        } // outras operações 
    }
    else {
        console.log('Defina uma operação');
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
// Instanceof
// Verifica se um dado pertence a determinada classe.
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('jhon');
const paul = new SuperUser('Paul');
function userChecking(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá super ${user.name}`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userChecking(jhon);
userChecking(paul);
// Operador In
// Verifica se existe uma propriedade no objeto
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed)
            this.breed = breed;
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`A raça do seu dog é ${dog.breed}`);
    }
    else {
        console.log('Seu dog não tem raça.');
    }
}
showDogDetails(turca);
showDogDetails(bob);
function filmReview(review) {
    if (review) {
        console.log(`Nota ${review}, salva com sucesso !`);
    }
    if (review === false) {
        console.log(`Você não quer deixar nota`);
    }
    else if (review === undefined) {
        console.log('você deixou em branco a nota');
    }
}
filmReview();
filmReview(1);
filmReview(2);
filmReview(3);
filmReview(4);
filmReview(5);
filmReview(false);
