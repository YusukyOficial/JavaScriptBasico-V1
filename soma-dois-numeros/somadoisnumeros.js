let readlineSync = require('readline-sync');

console.log("Programa que soma dois numeros");

// Pede os numeros
let numero1 = Number(readlineSync.question('Digite o primeiro numero: '));
let numero2 = Number(readlineSync.question('Digite o segundo numero: '));

// Faz a soma e mostra o resultado
let resultado = numero1 + numero2;
console.log(`Resultado: ${numero1} + ${numero2} = ${resultado}`);