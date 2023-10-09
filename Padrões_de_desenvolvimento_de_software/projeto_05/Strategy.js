// Passo 1: Defina a interface Strategy com o método abstrato execute()
class Strategy {
    execute(num1, num2) {
      throw new Error("O método execute deve ser implementado nas classes concretas.");
    }
  }
  
  // Passo 2: Implemente as classes concretas para realizar as operações
  class SomaStrategy extends Strategy {
    execute(num1, num2) {
      return num1 + num2;
    }
  }
  
  class SubtracaoStrategy extends Strategy {
    execute(num1, num2) {
      return num1 - num2;
    }
  }
  
  class MultiplicacaoStrategy extends Strategy {
    execute(num1, num2) {
      return num1 * num2;
    }
  }
  
  // Passo 3: Crie uma classe Calculator que utiliza a estratégia selecionada
  class Calculator {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    calcular(num1, num2) {
      return this.strategy.execute(num1, num2);
    }
  }
  
  // Passo 4: Obtenha os valores do usuário e a operação a ser realizada
  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));
  const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");
  
  let strategy;
  
  switch (operacao) {
    case "+":
      strategy = new SomaStrategy();
      break;
    case "-":
      strategy = new SubtracaoStrategy();
      break;
    case "*":
      strategy = new MultiplicacaoStrategy();
      break;
    default:
      console.log("Operação inválida.");
      break;
  }
  
  if (strategy) {
    const calculadora = new Calculator(strategy);
    const resultado = calculadora.calcular(num1, num2);
    alert(`O resultado da operação é: ${resultado}`);
  }
  