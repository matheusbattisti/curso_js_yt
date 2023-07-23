//
// D: Curso de Projetos
//

// Seleção dos elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");

// Variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
const atualizaDisplay = () => {
  display.value = operacaoAtual;
};

const insereNumero = (evento) => {
  if (calculando) {
    operacaoAtual = evento.target.textContent;
    calculando = false;
  } else {
    operacaoAtual += evento.target.textContent;
  }
  atualizaDisplay();
};

const insereOperador = (evento) => {
  if (operacaoAtual !== "") {
    if (!calculando) {
      if (operador !== null) calcula();
      valorAnterior = operacaoAtual;
      operacaoAtual = "";
    }
    operador = evento.target.textContent;
  }
};

const calcula = () => {
  let resultado = null;
  const operandoAnterior = parseFloat(valorAnterior);
  const operandoAtual = parseFloat(operacaoAtual);

  switch (operador) {
    case "+":
      resultado = operandoAnterior + operandoAtual;
      break;
    case "-":
      resultado = operandoAnterior - operandoAtual;
      break;
    case "*":
      resultado = operandoAnterior * operandoAtual;
      break;
    case "/":
      if (operandoAtual !== 0) {
        resultado = operandoAnterior / operandoAtual;
      } else {
        alert("Erro: Divisão por zero não é permitida!");
        return;
      }
      break;
  }
  operacaoAtual = String(resultado);
  valorAnterior = operacaoAtual;
  calculando = true;
  atualizaDisplay();
};

const inserePonto = () => {
  if (operacaoAtual.indexOf(".") === -1) {
    operacaoAtual += ".";
    atualizaDisplay();
  }
};

// EventListeners
botaoIgual.addEventListener("click", () => {
  if (operador !== null && operacaoAtual !== "" && !calculando) {
    calcula();
    operador = null;
  }
});
botaoPonto.addEventListener("click", inserePonto);
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
botoesOperadores.forEach((botao) =>
  botao.addEventListener("click", insereOperador)
);

//
// D: Formação Front-end
//
