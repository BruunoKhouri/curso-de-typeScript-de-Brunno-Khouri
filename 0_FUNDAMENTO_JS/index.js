// Tudo que vem após barras normais duplas é um comentário em linguagem natural.
// Lembre de ler atentamente comentarios, pois mostram ou explicam algo do codigo a seguir.

// Variavel é um nome simbolico para um valor.

//Variaveis são declaradas com a palavra-chave var:
var x; //declara uma variavel chamada x.

// O sinal = , atribui um valor as variaveis.

x = 0;

console.log(x); //retorno 0.

//JS aceita vários tipos de valores;

x = 1; // numeros
x = 0.01; // Apenas um tipo Number para inteiros e reais.
x = "Hello World"; // Strings de texto entre aspas.
x = 'JavaScript'; // Apóstrofos também delimitam strings.
x = true; // Valores booleanos.
x = false; // Valores booleanos.
x = null; // Null é um valor especial que significa "nenhum valor".
x = undefined; // Undefined é como null. "INDEFINIDO".

// Outro tipo de dado do JS é o objeto.
var book = {
    topic: "JS",
    thema: "Educação",
    online: true
}

console.log(book); // {online: true thema:"Educação" topic: "JS"}

// Objetos são colocados entre chaves.
// E atribuimos valor a esse objeto, criando chave e valor, segue exemplo: { chave0: valor, chave1: "valor" }

// Acessando os valores do objeto.
console.log(book.online); // true
console.log(book["thema"]); // Educação