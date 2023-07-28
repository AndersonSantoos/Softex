/* Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0. */


// SEGUNDO EXERCÍCIO DA TERCEIRA SEMANA

function calculadora(num1, num2, operacao) {
    switch (operacao) {
      case 1:
        return num1 + num2;
  
      case 2:
        return num1 - num2;
  
      case 3:
        return num1 * num2;
  
      case 4:
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Divisão por zero não é permitida.";
        }
      default:
        return 0; // Operação inválida
    }
  
  }
  
  console.log('Soma -----------', calculadora(2, 4, 1));
  console.log('Subtração ------', calculadora(5, 2, 2));
  console.log('Multiplicação --', calculadora(2, 5, 3));
  console.log('Divisão --------', calculadora(2, 2, 4));