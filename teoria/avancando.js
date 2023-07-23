// 3 - Avançando em JavaScript

// 3.1 Manipulação de arrays

const frutas = ["Maçã", "Banana"];
frutas.unshift("Laranja"); // Adiciona "Laranja" ao começo do array
console.log(frutas);

frutas.shift(); // Remove o primeiro elemento do array
console.log(frutas);

const numeros = [1, 2, 3, 4, 5, 6];
const numeroPar = numeros.find((num) => num % 2 === 0); // Encontra o primeiro número par
console.log(numeroPar); // 2

const numerosPares = numeros.filter((num) => num % 2 === 0); // Filtra todos os números pares
console.log(numerosPares); // [2, 4, 6]

// 3.2 Manipulação de strings avançada
const frase = "  Olá, mundo!  ";
const palavras = frase.trim().split(" "); // Remove espaços extra e divide a string em palavras
console.log(palavras); // ["Olá,", "mundo!"]

const stringSemEspacos = frase.trim(); // Remove espaços no início e no final da string
console.log(stringSemEspacos); // "Olá, mundo!"

const frase2 = "JavaScript é incrível!";

console.log(frase2.startsWith("Java")); // true
console.log(frase2.endsWith("!")); // true

// 3.3 Exceções e tratamento de erros
/*

const idade = 15;
if (idade < 18) {
  throw new Error("Você deve ter pelo menos 18 anos.");
}

try {
  const idade = 15;
  if (idade < 18) {
    throw new Error("Você deve ter pelo menos 18 anos.");
  }
} catch (erro) {
  console.log(erro.message); // "Você deve ter pelo menos 18 anos."
}
*/

// 3.4 Callbacks
function cumprimentar(nome, callback) {
  console.log("Olá, " + nome);
  callback();
}

function mostrarSaudacao() {
  console.log("Como você está?");
}

cumprimentar("Maria", mostrarSaudacao); // "Olá, Maria" "Como você está?"

function mostrarMensagem() {
  console.log("Esta é uma mensagem após 3 segundos");
}

setTimeout(mostrarMensagem, 3000); // Mostra a mensagem após 3 segundos

// 3.5 Promises
const promessa = new Promise((resolve, reject) => {
  const condicao = true;
  if (condicao) {
    resolve("A condição é verdadeira!");
  } else {
    reject("A condição é falsa!");
  }
});

promessa
  .then((mensagem) => console.log(mensagem)) // "A condição é verdadeira!"
  .catch((erro) => console.log(erro));

const promessa1 = Promise.resolve(3);
const promessa2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "foo")
);

Promise.all([promessa1, promessa2]).then((valores) => console.log(valores)); // [3, "foo"]

// 3.6 Async/Await
async function obterValor() {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor obtido!"), 2000);
  });

  const valor = await promessa;
  console.log(valor); // "Valor obtido!"
}

obterValor();

/*

async function obterValorComErro() {
  try {
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => reject("Erro ao obter valor!"), 2000);
    });

    const valor = await promessa;
    console.log(valor);
  } catch (erro) {
    console.error(erro); // "Erro ao obter valor!"
  }
}

obterValorComErro();

*/

// 3.7 JSON
const objeto = { nome: "João", idade: 30 };
const jsonString = JSON.stringify(objeto);
console.log(jsonString); // "{"nome":"João","idade":30}"

const jsonString2 = '{"nome":"João","idade":30}';
const objeto2 = JSON.parse(jsonString);
console.log(objeto); // { nome: "João", idade: 30 }
