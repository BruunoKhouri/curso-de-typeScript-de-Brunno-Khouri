"use strict";
//** Arrays */
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
let names = ['Brunno', 'Joyce'];
names.push('Agnes');
console.log(names);
let all = ['Brunno', 25, true];
console.log(all);
function passCoordinates(coord) {
    console.log(coord.x);
    console.log(coord.y);
}
const ObjCoord = {
    x: 320,
    y: 100
};
passCoordinates(ObjCoord);
//**Union TYPE */
function showBalance(balance) {
    let union = `Teste de union, retorno da function é : ${balance}`;
    return union;
}
console.log(showBalance(200));
console.log(showBalance('TESTE'));
function showRoleUser(role) {
    if (typeof role == 'boolean')
        return 'Usuario não aprovado';
    else
        return `Função do usuario é ${role}`;
}
console.log(showRoleUser(false));
console.log(showRoleUser('adm'));
function showType(typeS) {
    let type = typeof typeS;
    return type;
}
console.log(showType('eu'));
console.log(showType(2));
//** Literal types */
// Literal types é um recurso que permite colocar valores como tipos;
let test;
function showDirection(diretion) {
    return `A direção é: ${diretion}`;
}
console.log(showDirection('left'));
console.log(showDirection('right'));
//**NoN Null Assertion Operator */
const p = document.getElementById("some-p");
console.log(p.innerHTML);
//**Bigint */
// es 2020
let n;
n = 1000n;
console.log(typeof n);
//**SYMBOL */
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
console.log(symbolA != symbolB);
console.log(symbolA, symbolB);
