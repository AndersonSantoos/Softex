// PRIMEIRA PARTE DO EXERCÍCIO

let nota1 = parseFloat(prompt(`Digite a primeira nota: `));
let nota2 = parseFloat(prompt(`Digite a segunda nota: `));
let nota3 = parseFloat(prompt(`Digite a terceira nota: `));
let media = (nota1 + nota2 + nota3) / 3;

let resultado = media >= 7 ? "Aprovado" : "Reprovado";
console.log(`A média final é ${media.toFixed(2)}\n Status: ${resultado}`)


//SEGUNDA PARTE DO EXERCÍCIO

let n1 = parseFloat(prompt(`Digite a primeira nota: `));
let n2 = parseFloat(prompt(`Digite a segunda nota: `));
let mediaAtual = (n1 + n2) / 2;
let notaMinima = (7 * 3) - (n1 + n2);
    if(notaMinima <= 0) {
    console.log(`Parabéns! Você já passou na disciplina.`)
    } else {
    console.log(`Você precisa tirar pelo menos ${notaMinima.toFixed(2)} na próxima prova para passar com média 7`);
}



