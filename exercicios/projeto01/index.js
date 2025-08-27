const prompt = require('prompt-sync')();
const calc = require('./calculadora');

console.log("Escolha a operação:");
console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
// console.log("4 - Dividir");
// console.log("5 - Ao Quadrado");
// console.log("6 - Raiz Quadrada");

const opcao = prompt("Opção: ");

if (["1", "2", "3", "4"].includes(opcao)) {
  const a = parseFloat(prompt("Número 1: "));
  const b = parseFloat(prompt("Número 2: "));

  const resultado = {
    "1": calc.somar(a, b),
    "2": calc.subtrair(a, b),
    "3": calc.multiplicar(a, b),
    // "4": calc.dividir(a, b),
  }[opcao];

  console.log("Resultado:", resultado);

} else if (opcao === "5") {
  const a = parseFloat(prompt("Número: "));
  console.log("Resultado:", calc.aoQuadrado(a));

} else if (opcao === "6") {
  const a = parseFloat(prompt("Número: "));
  console.log("Resultado:", calc.raizQuadrada(a));

} else {
  console.log("Opção inválida.");
}