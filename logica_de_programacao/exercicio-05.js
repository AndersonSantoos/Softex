let nomeUsuario = prompt("Informe seu nome: ");
let idadeUsuario = Number(prompt("Informe sua idade:"));
let nomeMae = prompt("Informe o nome da sua mãe: ")
let idadeMae = Number(prompt("Informe a idade de sua mãe: "));
let nomePai = prompt("Informe o nome do seu pai: ");
let idadePai = Number(prompt("Informe a idade do seu pai: "));
let idadeNasciMae = (idadeMae - idadeUsuario);
let idadeNasciPai = (idadePai - idadeUsuario);


console.log(`${nomeUsuario}, sua mãe tinha ${idadeNasciMae} anos e seu pai tinha ${idadeNasciPai} anos quando você nasceu. `);
