// 4 - DOM

// 4.1 Selecionando elementos no DOM

// Selecionando um elemento pelo id
const elementoPorId = document.querySelector("#meuId");

console.log(elementoPorId);

// Selecionando todos os elementos com a classe 'minhaClasse'
const elementosPorClasse = document.querySelectorAll(".minhaClasse");

console.log(elementosPorClasse);

// 4.2 Manipulando conteúdo de texto
const elemento = document.querySelector("#meuId");

// Obtendo o conteúdo de texto
console.log(elemento.textContent);

// Alterando o conteúdo de texto
elemento.textContent = "Novo Conteúdo";

// 4.3 Trabalhando com atributos
const link = document.querySelector("a");

// Obtendo um atributo
console.log(link.getAttribute("href"));

// Definindo um atributo
link.setAttribute("href", "https://www.novosite.com");

// Verificando se um atributo existe
console.log(link.hasAttribute("target"));

// Removendo um atributo
link.removeAttribute("target");

//
// D: Curso de JavaScript
//

// 4.4 Manipulando classes CSS
const elemento2 = document.querySelector("#meuId");

// Adicionando uma classe
elemento2.classList.add("novaClasse");

// Removendo uma classe
elemento2.classList.remove("minhaClasse");

// Alternando uma classe
elemento2.classList.toggle("outraClasse");

// 4.5 Trabalhando com estilos CSS
const elemento3 = document.querySelector("#meuId");

// Alterando um estilo
elemento3.style.color = "red";

// 4.6 Navegação entre nós

const elemento4 = document.querySelector("#meuInput");

// Obtendo o elemento pai
const pai = elemento4.parentNode;

console.log(pai);

// Obtendo o primeiro filho
const primeiroFilho = pai.firstChild;

console.log(primeiroFilho);

// Obtendo o último filho
const ultimoFilho = pai.lastChild;

console.log(ultimoFilho);

// 4.7 Manipulando a estrutura do DOM

// Criando um novo elemento
const novoElemento = document.createElement("div");

// Adicionando o novo elemento ao final do body
document.body.appendChild(novoElemento);

novoElemento.textContent = "Testando";

// Inserindo o novo elemento antes do primeiro filho do body
document.body.insertBefore(novoElemento, document.body.firstChild);

// Removendo um elemento
document.body.removeChild(novoElemento);

// 5 - Introdução aos Eventos

// 5.1 Evento de click
const botao = document.querySelector("button");

// Adicionando um ouvinte de eventos
botao.addEventListener("click", function () {
  alert("Botão clicado!");
});

// 5.2 Eventos de mouse
const elemento5 = document.querySelector("#meuId");

// Ouvindo o evento de passar o mouse
elemento5.addEventListener("mouseover", function () {
  console.log("Mouse passou sobre o elemento!");
});

// 5.3 Eventos de teclado
const campoInput = document.querySelector("input");

// Ouvindo o evento de pressionar tecla
campoInput.addEventListener("keydown", function () {
  console.log("Tecla pressionada!");
});

// 5.4 Eventos de formulário

const formulario = document.querySelector("form");

// Ouvindo o evento de submissão do formulário
formulario.addEventListener("submit", function (evento) {
  // Previne a submissão do formulário
  evento.preventDefault();

  console.log("Formulário submetido!");
});

// 5.5 Propagação de Eventos

// Adicionando um ouvinte de eventos para a fase de captura
document.querySelector("#elementoPai").addEventListener(
  "click",
  function () {
    console.log("Clique capturado no pai!");
  },
  true
);

// Adicionando um ouvinte de eventos para a fase de propagação
document.querySelector("#elementoFilho").addEventListener(
  "click",
  function () {
    console.log("Clique propagado no filho!");
  },
  false
);

// 5.6 PreventDefault e StopPropagation
document.querySelector("#meuLink").addEventListener("click", function (evento) {
  // Previne a ação padrão do link
  evento.preventDefault();

  // Parar a propagação do evento
  evento.stopPropagation();
});

// 5.7 Eventos de Delegação

// Adicionando um ouvinte de eventos no pai para delegar o evento
document
  .querySelector("#elementoPai")
  .addEventListener("click", function (evento) {
    if (evento.target.matches(".classeDosFilhos")) {
      console.log("Evento delegado para o filho!");
    }
  });
