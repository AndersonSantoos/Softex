// Instruções do projeto
// Faça, utilizando o Google Blockly ou JavaScript, como foi informado, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
// 1: Soma
// 2: Subtração
// 3: Multiplicação
// 4: Divisão
// 0: Sair

// Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

// Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

// É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 


// MEU EXERCÍCIO

function calculadora() {
    while (true) {
      console.log("1: Soma");
      console.log("2: Subtração");
      console.log("3: Multiplicação");
      console.log("4: Divisão");
      console.log("0: Sair");
  
      const operacao = Number(prompt("Digite o número para a operação correspondente:"));
  
      if (operacao === 0) {
        console.log("Saindo da calculadora.");
        break;
      }
  
      let primeiroValor = Number(prompt("Digite o primeiro valor:"));
      let segundoValor = Number(prompt("Digite o segundo valor:"));
      let resultado;
  
  
  
      switch (operacao) {
        case 1:
          resultado = primeiroValor + segundoValor;
          console.log(`Resultado: ${resultado}`);
          break;
        case 2:
          resultado = primeiroValor - segundoValor;
          console.log(`Resultado: ${resultado}`);
          break;
        case 3:
          resultado = primeiroValor * segundoValor;
          console.log(`Resultado: ${resultado}`);
          break;
        case 4:
          if(segundoValor == 0) {
            console.log(`Divisão por zero não é permitido`)
          } else { 
          resultado = primeiroValor / segundoValor;
          console.log(`Resultado: ${resultado}`);
          } 
        break;
        default:
          console.log("Essa opção não existe.");
          break;
      }
    }
  }
  
  calculadora();