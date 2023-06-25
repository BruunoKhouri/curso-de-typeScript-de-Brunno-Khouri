//** Arrays */
let numbers: Array<number> = [1, 2, 3, 4];

numbers.push(5);

console.log(numbers);

let names: Array<string> = ['Brunno', 'Joyce'];

names.push('Agnes');

console.log(names);

let all: Array<any> = ['Brunno', 25, true];

console.log(all);

//** Objetos */

interface coord {
    x: number,
    y: number
}

function passCoordinates(coord: coord) {
    console.log(coord.x);
    console.log(coord.y);
}
const ObjCoord: coord = {
    x: 320,
    y: 100
}


passCoordinates(ObjCoord);

//**Union TYPE */

function showBalance(balance: string | number): string {
    let union = `Teste de union, retorno da function é : ${balance}`
    return union
}
console.log(showBalance(200));
console.log(showBalance('TESTE'));

function showRoleUser(role: boolean | string): string {
    if (typeof role == 'boolean') return 'Usuario não aprovado';
    else return `Função do usuario é ${role}`;
}

console.log(showRoleUser(false));
console.log(showRoleUser('adm'));

//** Type alias */
// Type alias é um recurso que permite criar um tipo e determinar o que ele verifica;

type ID = string | number;

function showType(typeS: ID): string {
    let type = typeof typeS;
    return type;
}

console.log(showType('eu'));
console.log(showType(2));

//** Literal types */
// Literal types é um recurso que permite colocar valores como tipos;
let test: 'Teste';

function showDirection(diretion: "left" | "right" | "center"): string {
    return `A direção é: ${diretion}`;
}

console.log(showDirection('left'));
console.log(showDirection('right'));

//**NoN Null Assertion Operator */
const p = document.getElementById("some-p");

console.log(p!.innerHTML);


//**Bigint */
// es 2020

let n: bigint;
n = 1000n;
console.log(typeof n);

//**SYMBOL */

let symbolA: symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA === symbolB);
console.log(symbolA != symbolB);
console.log(symbolA, symbolB);



