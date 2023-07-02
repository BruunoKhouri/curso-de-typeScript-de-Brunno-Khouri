"use strict";
// generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['1', '2', '3']));
// console.log(firstElement('teste'));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: 'saco' }, { age: 30, job: 'babaca' });
console.log(newObject);
// Constraints nas generic functions.
// Basicamente limitamos os tipos que podem ser ultilizados.
// Isso faz com nosso escopo seja menos abrangente.
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('5', '3'));
// Definindo tipo de parâmetros
// Em generic functions temos que utilizar parametros de tipos
// semelhantes, se não recebemos um erro;
// Porem ha a possibilidade de determinar o tipo tambem dos parametros
// aceitos, com uma sintaxe especial;
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [2, 3]));
console.log(mergeArrays([1, 2, 3], ['2', '3']));
// Parametros opcionais 
// Nem sempre utilizamos todos os parametros de uma função;
// Mas se ele for opcional, precisamos declara isso para o TS;
function modernGreeting(name, greet) {
    if (greet)
        return `Ola ${greet} ${name}, tudo bem ?`;
    else
        return `Ola ${name}`;
}
console.log(modernGreeting("Dr", "Brunno"));
console.log(modernGreeting("Brunno"));
// parametro default
function somaDefault(n, m) {
    return n + m;
}
