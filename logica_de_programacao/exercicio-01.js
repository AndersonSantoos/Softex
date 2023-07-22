let nome = prompt("Digite seu nome: ");
let nota1 = Number(prompt("Informe a primeira nota: "));
let nota2 = Number(prompt("Informe a segunda nota: "));
let nota3 = Number(prompt("Informe a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

console.log(nome + ", sua média é: " + media.toFixed(2));
