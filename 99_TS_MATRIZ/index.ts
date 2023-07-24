const threeArray = [
    [[1, 2], [3, 4]],
    [[4, 5, 6], [7, 8]],
    [[9], [10]]
];  
console.log(threeArray[1][0][2]); 

let arr: number[] = [1, 2, 3, 4, 5];
let arr1: number[] = [1, 2, 3];

//JavaScript Array Methods and Properties

// At
let ats = arr.at(1); //Retorna o valor do index;
console.log(ats);

// Concat
let conc = arr.concat(arr1); // Retorn um novo array com os dois array's unidos 
console.log(conc);

// Constructor
arr.constructor
console.log(arr.constructor); // Retorna a função que criou o protótipo do objeto Array

// CopyWithin
let newArray = [...arr];
newArray.copyWithin(0, 3, 5); // Permite copiar uma sequência de elementos dentro do próprio array
console.log(newArray);

// Entries
let newEntr = [...arr];
let ent = newEntr.entries(); // Retorna um objeto iterador que contém pares de chave/valor para cada elemento do array.
for (const entry of ent){
    console.log(entry);
}

// Every
const every =  [2, 4, 6, 8];
const allEven = every.every(num => num % 2 === 0); // Verifica se todos os elementos do array satisfazem uma determinada condição especificada por uma função de callback.
console.log(allEven);