let nome = prompt("Informe seu nome: ");
let kmInicial = Number(prompt("Informe a km inicial do seu veículo: "));
let kmFinal = Number(prompt("Informe a km final do seu veículo: "));
let litrosConsu = Number(prompt("Informe quantos litros de combustível você consumiu: "));
let precoCombustivel = Number(prompt("Informe o valor do combustível que você abasteceu: "))

let distancia = (kmFinal - kmInicial);
let valorGasto = (litrosConsu * precoCombustivel);
let consumo = (distancia / litrosConsu);

console.log(`${nome}, a distância percorrida foi de: ${distancia.toFixed(2)} km.`);
console.log(`O consumo do veículo ficou na faixa de: ${consumo.toFixed(2)} por litro!`);
