// generic function

function firstElement<T>(arr: Array<T>): T {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['1', '2', '3']));
// console.log(firstElement('teste'));

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({ name: 'saco' }, { age: 30, job: 'babaca' });

console.log(newObject);

// Constraints nas generic functions.
// Basicamente limitamos os tipos que podem ser ultilizados.

// Isso faz com nosso escopo seja menos abrangente.

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T;
    if (+a > +b) {
        biggest = a;
    } else {
        biggest = b;
    }
    return biggest
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber('5', '3'));

// Definindo tipo de parâmetros
// Em generic functions temos que utilizar parametros de tipos
// semelhantes, se não recebemos um erro;

// Porem ha a possibilidade de determinar o tipo tambem dos parametros
// aceitos, com uma sintaxe especial;

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [2, 3]));
console.log(mergeArrays<number | string>([1, 2, 3], ['2', '3']));

// Parametros opcionais 
// Nem sempre utilizamos todos os parametros de uma função;
// Mas se ele for opcional, precisamos declara isso para o TS;

function modernGreeting(name: string, greet?: string): string {
    if (greet) return `Ola ${greet} ${name}, tudo bem ?`;
    else return `Ola ${name}`
}

console.log(modernGreeting("Brunno", "Dr"));
console.log(modernGreeting("Brunno"));

// parametro default

function somaDefault(n: number, m = 10): number {
    return n + m;
}

console.log(somaDefault(10, 15));
console.log(somaDefault(10));

// tipo unknown
// o tipo unknown é utilizado de forma semelhante ao any, ele aceita qualquer tipo de dado;
// porem a diferença é que ele não deixa algo ser executado se não houver validação de tipo;
// adiciona uma trava de segurança;

function doSomething(x: unknown) {
    console.log(Array.isArray(x));
    if (Array.isArray(x)) {
        console.log(x[0]);
    } else if (!Array.isArray(x)) {
        console.log(x);
    }

}

doSomething([0, 1, 2]);
doSomething(3);

// never
// never é um tipo de retorno semelhante ao void;
// Porém é utilizado quando a função não retorna nada;

function showErrorMessage(msg: string): never {
    throw new Error(msg);
}

// showErrorMessage("Algum erro!");

// rest operator

function sumAll(...n: number[]): number {
    console.log(n);
    return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 3, 4, 5));

// O destructuring, outro recurso de ES6, também pode ser aplicado com TS;
// Precisamos apenas determinar o tipo de cada dado que sera desestruturado;
// Desta maneira o TS valida o Destructuring;

function showProductDetails({ name, price }: { name: string, price: number }): string {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const product = { name: 'sabonete', price: 2.30 };
console.log(showProductDetails(product));