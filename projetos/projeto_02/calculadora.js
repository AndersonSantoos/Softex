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