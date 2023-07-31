const threeArray = [
    [[1, 2], [3, 4]],
    [[4, 5, 6], [7, 8]],
    [[9], [10]]
];  
console.log(threeArray[1][0][2]); 

let arr: number[] = [1, 2, 3, 4, 5];
let arr1: number[] = [1, 2, 3];

//JavaScript Array Methods and Properties

//******** */ At **************//
let ats = arr.at(1); //Retorna o valor do index;
console.log('At' ,ats);

//*********** */ Concat **************//
let conc = arr.concat(arr1); // Retorn um novo array com os dois array's unidos 
console.log('Conca', conc);

//********* */ Constructor  **************//
arr.constructor
console.log('Constructor', arr.constructor); // Retorna a função que criou o protótipo do objeto Array

// CopyWithin
let newArray = [...arr];
newArray.copyWithin(0, 3, 5); // Permite copiar uma sequência de elementos dentro do próprio array
console.log('copyWithin', newArray);

//********** */ Entries ***************//
let newEntr = [...arr];
let ent = newEntr.entries(); // Retorna um objeto iterador que contém pares de chave/valor para cada elemento do array.
for (const entry of ent){
    console.log('entries', entry);
}

//************  */ Every ***************//
const every =  [2, 4, 6, 8];
const allEven = every.every(num => num % 2 === 0); // Verifica se todos os elementos do array satisfazem uma determinada condição especificada por uma função de callback.
console.log('every', allEven);

//********** */ Fill ***************//
let fill = [...arr];
fill.fill(10, 3, 4); // Preenche todos os valores do array a partir do índice inicial até o índice final com um valor estático.
console.log('fill', fill);

//************ */ Filter ***************//
let filter = [...arr];
let fil = filter.filter(num => num === 3); // Cria um novo array com todos os elementos que passaram no teste da função fornecida.
console.log('filter', fil);

//********** */ Find ***************//
let find = [...arr];
let fin = find.find(num => num > 3); // Retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.
console.log('fund', fin);

//********** */ FindIndex ***************//
let findIndex = [...arr];
let finInd = findIndex.findIndex(num => num > 3); // Retorna o índice do primeiro elemento de um array que passar no teste da função de callback provida.
console.log('findIndex', finInd);

//********** */ Flat ***************//
const myArr = [1, 2, [3, [4, [5], 6], 7], 8];
const newArr = myArr.flat(2); // Retorna um novo array com todos os elementos de sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth).
console.log('flat', newArr);

//********** */ FlatMap ***************//
const flatMap = [1, 2, 3, 4];
const newFlatMap = flatMap.flatMap(num => [num * 2]); // Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth).
console.log('flatMap', newFlatMap);    

//********** */ ForEach ***************//
let forEach = [...arr];
forEach.forEach(num => console.log('forEach', num)); // Executa uma dada função em cada elemento de um array.

//********* */ from **************//
let from = Array.from('foo'); // Cria uma nova instância de um Array a partir de um parâmetro array-like ou iterable object.
console.log('from', from);

//********* */ includes **************//
let includes = [...arr];    
let inc = includes.includes(2); // Verifica se um array contém um determinado elemento, retornando true ou false apropriadamente.
console.log('includes', inc);

//********* */ indexOf **************//
let indexOf = [...arr];
let ind = indexOf.indexOf(2); // Retorna o primeiro índice em que um elemento pode ser encontrado no array.
console.log('indexOf', ind);

//********* */ isArray **************//
let isArray = Array.isArray(arr); // Retorna true se uma variável é um array e false se não é.
console.log('isArray', isArray);

//********* */ join **************//
let join = [...arr];
let jo = join.join(); // Junta todos os elementos de um array em uma string.
console.log('join', jo);

//********* */ keys **************//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(fruits); // Retorna um novo Array Iterator que contém as chaves para cada índice do array.
console.log('keys', keys);

//********* */ lastIndexOf **************//
let lastIndexOf = [...arr];
let lastInd = lastIndexOf.lastIndexOf(2); // Retorna o último índice em que um elemento pode ser encontrado no array.
console.log('lastIndexOf', lastInd);

//********* */ length **************//
let na = [...arr];
let len = na.length; // Retorna o tamanho de um array.
console.log('length', len);

//********* */ map **************//
let map = [...arr];
let ma = map.map(num => num != 2); // Retorna um novo array, de mesmo tamanho, iterando cada elemento de um array.
console.log('map', ma);

//********* */ pop **************//
let pop = [...arr];
let po = pop.pop(); // Remove o último elemento de um array e retorna aquele elemento.
console.log('pop', po);

//********* */ push **************//
let push = [...arr];
let pu = push.push(6); // Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
console.log('push', pu);

//********* */ reduce **************//
let reduce = [...arr];
console.log('reduce', reduce);
let red = reduce.reduce((total, num) => total * num); // Aplica uma função contra um acumulador e cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.
console.log('reduce', red);

//********* */ reduceRight **************//
let reduceRight = [...arr];
let redR = reduceRight.reduceRight((total, num) => total * num); // Aplica uma função contra um acumulador e cada valor do array (da direita para a esquerda) para reduzi-lo a um único valor.
console.log('reduceRight', redR);

//********* */ reverse **************//
let reverse = [...arr];
let rev = reverse.reverse(); // Inverte a ordem dos elementos de um array.
console.log('reverse', rev);

//********* */ shift **************//
let shift = [...arr];
let shi = shift.shift(); // Remove o primeiro elemento de um array e retorna esse elemento.
console.log('shift', shi);

//********* */ slice **************//
let slice = [...arr];
let sli = slice.slice(0, 2); // Extrai uma seção de um array e retorna um novo array.
console.log('slice', sli);

//********* */ some **************//
let some = [...arr];
let som = some.some(num => num === 2); // Verifica se ao menos um dos elementos em um array satisfazem a condição implementada pela função atribuída e retorna true ou false.
console.log('some', som);

//********* */ sort **************//
let sort = [...arr];
let sor = sort.sort((a, b) => { return b-a}); // Ordena os elementos de um array de acordo com a função de comparação fornecida.
console.log('sort', sor);

//********* */ splice **************//
let splice = [...arr];
console.log('splice', splice);
let spl = splice.splice(0, 0, 10); // Adiciona e/ou remove elementos de um array.
console.log('splice', spl);
console.log('splice', splice);

//********* */ toString **************//
const fruitsd = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString(); // Converte um array em uma string e retorna a string resultante.
console.log(' toString', text);

//********* */ unshift **************//
let unshift = [...arr];
console.log('unshift', unshift);
let unsh = unshift.unshift(10, 9, 8); // Adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
console.log('unshift', unsh);
console.log('unshift', unshift);

//********* */ values **************//
const fruitsdf =  ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
console.log('values', myArray);

