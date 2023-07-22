function calcularReajusteSalario(salarioAtual) {
    let percentualAumento, aumento, novoSalario;

    if (salarioAtual <= 280) {
        percentualAumento = 20;
    } else if (salarioAtual <= 700) {
        percentualAumento = 15;
    } else if (salarioAtual <= 1500) {
        percentualAumento = 10;
    } else {
        percentualAumento = 5;
    }

    aumento = salarioAtual * (percentualAumento / 100);
    novoSalario = salarioAtual + aumento;

    return [percentualAumento, aumento, novoSalario];
}

// Entrada do salário do colaborador (você pode substituir o valor 1000 pelo salário desejado)
let nome = prompt("Colaborador, informe seu nome: ");
const salarioColaborador = Number(prompt(`${nome}, informe seu salário: `));

// Chamada da função para calcular os reajustes
const [percentualAumento, aumento, novoSalario] = calcularReajusteSalario(salarioColaborador);

// Exibindo os resultados
console.log("Percentual de aumento aplicado: " + percentualAumento + "%");
console.log("Valor do aumento: R$ " + aumento.toFixed(2));
console.log("Novo salário após o aumento: R$ " + novoSalario.toFixed(2));
