// Função tradicional sem parâmetro
function exibirMenu() {
  console.log("Escolha uma operação:");
  console.log("1. Soma");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");
  console.log("5. Sair");
}

// Função tradicional com parâmetros e retorno
function calcular(opcao, num1, num2) {
  switch (opcao) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      if(num2 !== 0) {
       return num1 / num2;
      } else {
        return "Divisão por zero não é permitido."
      }
    default:
      return "Opção inválida";
  }
}

// Arrow function com parâmetros e retorno
const calcularMedia = (notas) => {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;
  return media;
};

// Programa principal
function principal() {
  exibirMenu();

  const opcao = parseInt(prompt("Digite a opção desejada:"));

  if (opcao === 5) {
    console.log("Encerrando o programa.");
    return;
  }

  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));

  const resultado = calcular(opcao, num1, num2);

  console.log("Resultado:", resultado);

  principal(); // Chamada recursiva para continuar o programa
}

principal();

  
  
  
  