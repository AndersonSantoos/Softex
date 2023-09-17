// Solicita ao usuário que insira dois números
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

try {
  // Tenta fazer a divisão
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Por favor, insira números válidos.");
  }

  if (numero2 === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }

  let resultado = numero1 / numero2;
  console.log(`Resultado da divisão: ${resultado}`);
} catch (excecao) {
  // Captura e trata a exceção
  console.error(`Ocorreu um erro: ${excecao.message}`);
} finally {
  // O bloco finally será executado independentemente de haver ou não uma exceção
  console.log("Operação concluída.");
}
