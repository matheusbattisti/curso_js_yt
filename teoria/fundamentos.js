// 1 - Configuração do ambiente de desenvolvimento
// VS Code e teste de JS no console

// 2 - Fundamentos de JavaScript

// 2.1 Sintaxe básica
var minhaVariavel = "Olá, mundo!";

console.log(minhaVariavel);

// 2.2 Comentários

// Isto é um comentário de uma linha
/* Isto é um
   comentário de várias linhas */

// 2.3 Variáveis e tipos de dados
var meuNumero = 10; // Number

console.log(typeof meuNumero);

var minhaString = "Texto"; // String

console.log(typeof minhaString);

var meuBooleano = true; // Boolean

console.log(typeof meuBooleano);

var meuObjeto = {}; // Object
var meuArray = []; // Array
var minhaNull = null; // Null
var meuUndefined; // Undefined

// 2.4 let e const
let teste = 1;
const PI = 3.14;

console.log(teste, PI);

// 2.5 Operadores
const x = 10;
const y = 5;

// Operadores aritméticos
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2

// Operadores de comparação
console.log(x == y); // false
console.log(x != y); // true

// Operadores lógicos
console.log(x > y && y < 10); // true
console.log(x > y || y > 10); // true

// 2.6 Conversão de tipos
const meuNumero2 = "123"; // String
const meuNumeroConvertido = Number(meuNumero2); // Number
console.log(typeof meuNumeroConvertido); // "number"

//
// D: Curso Formação Front-end
//

// 2.7 Estruturas de controle de fluxo

// Condição if, else if, else
const idade = 20;

if (idade < 13) {
  console.log("Criança");
} else if (idade < 20) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// Condição switch
const fruta = "Maçã";

switch (fruta) {
  case "Banana":
    console.log("Eu gosto de bananas!");
    break;
  case "Maçã":
    console.log("As maçãs são ok.");
    break;
  default:
    console.log("Nenhuma fruta selecionada");
}

// 2.7 Estruturas de loop
// Loop for
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Loop while
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

// Loop do while
let j = 0;
do {
  console.log(j); // 0, 1, 2, 3, 4
  j++;
} while (j < 5);

// 2.8 Funções

function cumprimentar(nome) {
  console.log(`Olá, ${nome}!`);
}
cumprimentar("Maria"); // Olá, Maria!

// 2.9 Escopo de Variáveis

// Escopo global
let cor = "azul";

function mostrarCor() {
  // Escopo local
  let cor = "verde";
  console.log(cor); // verde
}

mostrarCor();
console.log(cor); // azul

// 2.10 Hoisting
testeHoisting();

function testeHoisting() {
  console.log("Deu certo!");
}

// 2.11 Arrow function
const testandoArrow = () => console.log("Isso também é uma função");

// 2.12 Truthy e Falsy
const minhaVariavel1 = ""; // Falsy
const minhaVariavel2 = "Algum texto"; // Truthy

if (minhaVariavel1) {
  console.log("Variável1 é truthy");
} else {
  console.log("Variável1 é falsy"); // Isso será exibido
}

if (minhaVariavel2) {
  console.log("Variável2 é truthy"); // Isso será exibido
} else {
  console.log("Variável2 é falsy");
}

// 2.13 Arrays

// Array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1

// Adição de elementos
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// Remoção de elementos
numeros.pop();
console.log(numeros); // [1, 2, 3, 4, 5]

// 2.14 Manipulação de Strings

// String
const minhaStringNova = "Olá, Mundo!";

// Concatenação
const minhaString2 = minhaStringNova + " Como você está?";
console.log(minhaString2); // Olá, Mundo! Como você está?

// Interpolação
const minhaString3 = `${minhaStringNova} Como você está?`;
console.log(minhaString3); // Olá, Mundo! Como você está?

// Métodos comuns
console.log(minhaString3.length); // 31
console.log(minhaString3.toUpperCase()); // OLÁ, MUNDO! COMO VOCÊ ESTÁ?

// 2.15 Data e Hora

// Data atual
const agora = new Date();
console.log(agora);

// Data específica
const natal = new Date(2023, 11, 25);
console.log(natal);

// 2.16 Objeto Math

// Número PI
console.log(Math.PI); // 3.141592653589793

// Arredondamento
console.log(Math.round(3.6)); // 4

// Raiz quadrada
console.log(Math.sqrt(16)); // 4

// Potência
console.log(Math.pow(2, 3)); // 8
