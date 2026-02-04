// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
console.log(precisoVisitar(20));

function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(jaVisitei(20));

function isTruthy(value) {
  return !!value;
}
console.log(isTruthy(0)); // false
console.log(isTruthy(1)); // true

function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(5)); // 20

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Guilherme", "Kuerten"));

function isPar(numero) {
  return numero % 2 === 0;
}
console.log(isPar(4)); // true
console.log(isPar(5)); // false

function tipoDado(dado) {
  return typeof dado;
}
console.log(tipoDado(123)); // "number"

addEventListener("click", function () {
  console.log(nomeCompleto("Guilherme", "Kuerten"));
});
