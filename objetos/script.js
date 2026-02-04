var pessoa = {
  nome: "Guilherme",
  idade: 28,
  profissao: "Desenvolvedor",
  possuiFaculdade: true,
};

pessoa.nome; // 'Guilherme'
pessoa.possuiFaculdade; // true

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

/* Abreviação de area: function() {} para area() {}, no ES6+ */
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20
console.log(quadrado.lados); // 4
console.log(Math.random()); // Math é um objeto nativo do JavaScript
console.log(Math.PI); // 3.141592653589793
console.log(Math.max(5, 10, 2, 25, 3)); // 25
console.log(Math.min(5, 10, 2, 25, 3)); // 2
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.random()); // número aleatório entre 0 e 1
console.log(Math.random() * 100); // número aleatório entre 0 e 100
console.log(Math.floor(Math.random() * 100)); // número aleatório entre 0 e 99
console.log(Math.floor(Math.random() * 100) + 1); // número aleatório entre 1 e 100

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
  nome: "Guilherme",
  sobrenome: "Kuerten",
  idade: 28,
  profissao: "Desenvolvedor",
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};
console.log(dadosPessoais.nomeCompleto()); // "Guilherme Kuerten"

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro.preco); // 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    }
    return "Ficar quieto";
  },
};
console.log(cachorro.latir("homem")); // "Latir"
