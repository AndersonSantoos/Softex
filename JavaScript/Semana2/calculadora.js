// CALCULADORA


function calculadora(valor1, valor2, operacao) {
    let resultado
     switch(operacao) {
        case "+":
            resultado = valor1 + valor2;
                break;
        case "-":
            resultado = valor1 - valor2;
                break;
        case "*":
            resultado = valor1 * valor2;
                break;
        case "/":
            if(valor2 !== 0) {
               resultado = (valor1 / valor2); // Resultado da divisão inteira
               resto = valor1 % valor2; // Sobrando da divisão
               return `Resultado: ${resultado}, Resto: ${resto}`;
            } else {
                return `Divisão por zero não é permitida.`
            }
            
        default:
            return "Operador inválido";                       
  }
            return `Resultado: ${resultado}`;
}

const valor1 = parseFloat(prompt(`Digite o primeiro valor: `));
const valor2 = parseFloat(prompt(`Digite o segundo valor: `));
const operador = prompt(`Digite o operador (+, -, * /)`)

const resultado = calculadora(valor1, valor2, operador);
console.log(`O resultado da operação é: ${resultado}`);
