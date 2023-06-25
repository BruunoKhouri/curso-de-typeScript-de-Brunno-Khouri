// Inference e annotation
let ann: string = "annotation";
let inf = "inferencia";

// inf = 1; erro;
// ann = 1; erro;

console.log('teste 1');
console.log('teste 2');

let isNotaNumber = 1;

function toConvertNumberToString(a: any) {
    console.log(a, typeof a);
    let isString = a.toString();
    console.log(isString, typeof isString);
    console.log(`A variavel convertida para string é ${isString}`);
}


toConvertNumberToString(isNotaNumber);