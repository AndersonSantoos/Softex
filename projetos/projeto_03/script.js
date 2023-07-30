// Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

// Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.


function obterAnoNascimento() {
    while(true) {

        const anoInt = parseInt(prompt("Digite o ano que você nasceu: "));

        if(isNaN(anoInt) || anoInt < 1922 || anoInt > 2021) {
            alert(`Ano de nascimento inválido. Insira um número válido!`);
        } else {
            return anoInt;
        }
    }
} 

    function calcularIdade(anoNascimento) {
        const anoAtual = new Date().getFullYear(); // Funcionalidade para capturar o ano atual.
        return (anoAtual - anoNascimento);

    }

    function imprimirIdade() {
        const nome = prompt(`Informe seu nome: `);
        const anoNascimento = obterAnoNascimento();
        const idade = calcularIdade(anoNascimento);

        alert(`Oi, ${nome}, sua idade no ano atual é: ${idade} anos!!!`)

    }

    imprimirIdade();