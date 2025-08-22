//importando a lib 
let prompt  = require('prompt-sync')()

//usar o prompt-sync


let nome = prompt("Qual é o seu nome?")


console.log(" Olá " + nome)

let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNotas')

let exerciciosA1 = parseFloat(prompt("Qual a nota do exercicios A1 :"))
let trabalhoA1 = parseFloat(prompt("Qual a nota do trabalhp A1 :"))
let provaA1 = parseFloat(prompt("Qual a nota da prova A1 :"))
let notaA1  = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

console.log("### Calculo da Nota A1 ###")
console.log("Nota exercicios A1: ", exerciciosA1)
console.log("Nota trabalho A1: ", trabalhoA1)
console.log("Nota prova A1: ", provaA1)
console.log("Nota A1 CALCULADA: ", notaA1)

let exerciciosA2 = parseFloat(prompt("Qual a nota do exercicios A2 :"))
let trabalhoA2 = parseFloat(prompt("Qual a nota do trabalho A2 :"))
let provaA2 = parseFloat(prompt("Qual a nota da prova A2 :"))
let notaA2  = calcularNotaA2(exerciciosA2, trabalhoA2, provaA2)

console.log("### Calculo da Nota A2 ###")
console.log("Nota exercicios A2: ", exerciciosA2)
console.log("Nota trabalho A2: ", trabalhoA2)
console.log("Nota prova A2: ", provaA2)
console.log("Nota A2 CALCULADA: ", notaA2)


let notaFinal =  calcularNotaFinal(notaA1, notaA2)

console.log("### Calculo da Nota Final ###")
console.log("Nota Final: ", notaFinal)

if(notaFinal >= 5){
  console.log("Parabens " + nome + ", você foi Aprovado!!!")
  } else{
  console.log(nome + ", estude mais, infelizmente você foi Reprovado!!!")
  }

