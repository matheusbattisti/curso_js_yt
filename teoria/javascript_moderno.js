// 4.0 JavaScript moderno

// 4.1 let e const
let numero = 10; // Declaração com 'let', pode ser reatribuída
numero = 20;
console.log(numero); // 20

const nome = "João"; // Declaração com 'const', não pode ser reatribuída
console.log(nome); // João

function testeVar() {
  var x = 1;
  if (true) {
    var x = 2; // mesma variável
    console.log(x); // 2
  }
  console.log(x); // 2
}

function testeLet() {
  let x = 1;
  if (true) {
    let x = 2; // variável diferente
    console.log(x); // 2
  }
  console.log(x); // 1
}

testeVar();
testeLet();

// 4.2 Arrow Functions

const soma = (a, b) => a + b;
console.log(soma(3, 5)); // 8

const quadrado = (numero) => numero * numero;
console.log(quadrado(4)); // 16

const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome}!`;
  return mensagem;
};
console.log(cumprimento("João")); // Olá, João!

// 4.3 Template Literals:

const nome2 = "Maria";
const idade = 22;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);

const produto = "carro";
const preco = 50000;
console.log(`O ${produto} custa R$ ${preco}.`);

// 4.4 Destructuring

const pessoa = { nome: "Carlos", idade: 30 };
const { nome3, idade2 } = pessoa;
console.log(nome); // Carlos
console.log(idade); // 30

const numeros = [1, 2, 3, 4];
const [primeiro, segundo] = numeros;
console.log(primeiro); // 1
console.log(segundo); // 2

// 4.5 Spread e Rest Operators

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2); // [1, 2, 3, 4, 5, 6]

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);
console.log(soma(1, 2, 3, 4)); // 10

// 4.6 Default Parameters:

const saudacao = (nome = "visitante") => `Olá, ${nome}!`;
console.log(saudacao()); // Olá, visitante!
console.log(saudacao("Lucas")); // Olá, Lucas!

// 4.7 Object Literal Enhancements

const nomeNovo = "Felipe";
const idadeNova = 27;
const pessoaNova = { nome, idade };
console.log(pessoa); // {nome: 'Felipe', idade: 27}

const metodoPessoa = {
  dizerOi() {
    console.log("Oi!");
  },
};
metodoPessoa.dizerOi(); // Oi!

// 4.8 Array Methods (map, filter, reduce)

const numerosNovos = [1, 2, 3, 4, 5];
const dobrados = numerosNovos.map((numero) => numero * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

const pares = numerosNovos.filter((numero) => numero % 2 === 0);
console.log(pares); // [2, 4]

const somaReduce = numerosNovos.reduce((total, numero) => total + numero, 0);
console.log(soma); // 15

// 4.9 Classes e Herança:

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log(`Oi, meu nome é ${this.nome}.`);
  }
}
const pessoa1 = new Pessoa("Carlos", 25);
pessoa1.falar(); // Oi, meu nome é Carlos.

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }
  falar() {
    super.falar();
    console.log(`Eu ganho R$${this.salario}.`);
  }
}
const funcionario1 = new Funcionario("Ana", 30, 5000);
funcionario1.falar(); // Oi, meu nome é Ana. Eu ganho R$5000.
