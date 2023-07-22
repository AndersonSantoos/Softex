let nome = prompt("Digite qual é o seu nome: ");
let nota1 = Number(prompt("Informe a primeira nota: "));
let nota2 = Number(prompt("Informe a segunda nota:"));
let nota3 = Number(prompt("Informe a terceira nota: "));
let mediaFinal = (nota1 + nota2 + nota3) / 3;



console.log(nome + ", sua primeira nota foi: " + nota1);
console.log(nome + ", a sua segunda nota foi: " + nota2);
console.log(nome + ", a sua terceira nota foi: " + nota3);
console.log(`${nome}, a sua média final foi: ${mediaFinal.toFixed(2)}`);
