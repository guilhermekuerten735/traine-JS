// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value;
}
console.log(isTruthy(0)); // false
console.log(isTruthy(1)); // true

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(5)); // 20

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Guilherme", "Kuerten"));

// Crie uma função que verifica se um número é par
function isPar(numero) {
  return numero % 2 === 0;
}
console.log(isPar(4)); // true
console.log(isPar(5)); // false

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}
console.log(tipoDado(123)); // "number"

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function () {
  console.log(nomeCompleto("Guilherme", "Kuerten"));
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
console.log(precisoVisitar(20));

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(jaVisitei(20));
