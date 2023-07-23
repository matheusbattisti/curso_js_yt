// Exercício 1: Olá, Mundo!
// Crie um script JavaScript que imprima "Olá, Mundo!" no console.

console.log("Olá, Mundo!");

// Exercício 2: Conversão de Tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.

const valorString = "1234";
const valorNumber = Number(valorString);
console.log(typeof valorNumber); // "number"

//
// D: Curso Desafios de JavaScript
//

// Exercício 3: Manipulação de Strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.

const minhaString = "JavaScript é incrível";
const numeroDeCaracteres = minhaString.length;
const numeroDePalavras = minhaString.split(" ").length;

console.log(`Número de caracteres: ${numeroDeCaracteres}`); // Número de caracteres: 23
console.log(`Número de palavras: ${numeroDePalavras}`); // Número de palavras: 3

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const nomes = ["Ana", "João", "Carlos", "Maria", "Beatriz"];
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function converterHorario(horario24) {
  const [hora, minuto] = horario24.split(":");
  let hora12 = hora % 12 || 12;
  const periodo = hora < 12 ? "AM" : "PM";
  return `${hora12}:${minuto} ${periodo}`;
}

console.log(converterHorario("14:30")); // "2:30 PM"
console.log(converterHorario("00:00")); // "12:00 AM"
console.log(converterHorario("12:00")); // "12:00 PM"
