let readlineSync = require('readline-sync');

function lerNota(mensagem) {
    while(true) {
        let nota = Number(readlineSync.question(mensagem));
        if(nota >= 0 && nota <= 10) return nota;
        console.log("Nota invalida! Digite um valor entre 0 e 10.");
    }
}

let nota1 = lerNota('Digite a nota da primeira prova (0-10): ');
let nota2 = lerNota('Digite a nota da segunda prova (0-10): ');

let media = (nota1 + nota2) / 2;
console.log(`Sua media: ${media.toFixed(1)}`);
console.log(media >= 5 ? "Aprovado!" : "Reprovado!");