let nome = prompt("Informe seu nome: ");
let salario = Number(prompt("Informe seu salario: "));
let reaj = Number(prompt("Informe o seu reajuste: "));
let salarioReaj = salario * reaj;
let salarioFinal = salarioReaj + salario;

console.log(`O salário antes do reajuste equivale a: ${salario}`)
console.log(`${nome} seu salário final resulturá: R\$ ${salarioFinal.toFixed(2)}`);
