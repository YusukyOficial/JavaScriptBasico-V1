let readlineSync = require('readline-sync');

console.log("Programa que exibi uma tabuada");
let num = 0;
//ler o numero da tabuada com o usuário
num = readlineSync.question('Informe o numero: ');

//exibir a tabuada
for (let i = 0; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}