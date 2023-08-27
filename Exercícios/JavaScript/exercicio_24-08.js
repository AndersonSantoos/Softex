// PRIMEIRO EXERCÍCIO

// const numeros = [100, 25, 1000, 45, 2000, 22, 75, -100];
// numeros.sort(function(a, b){return a - b});
// console.log(numeros);

// function calculadora() {
//     while(true) {
//         console.log(`Menu de opções!`)
//         console.log(`1. SOMA`);
//         console.log(`2. SUBTRAIR`);
//         console.log(`3. MULTIPLICAR`);
//         console.log(`4. DIVIDIR`);
//         console.log(`0. SAIR`);

//         const operacao = Number(prompt(`Informe através do menu o número de operação`));
//         if(operacao === 0) {
//             console.log(`Saindo da calculadora`);
//             break;
//         }


//         const num1 = Number(prompt(`Informe o primeiro número: `));
//         const num2 = Number(prompt(`Informe o segundo número: `)); 
//         let resultado = 0;

//         switch(operacao) {
        
//         case 1:
//             resultado = num1 + num2;
//             console.log(`Resultado: ${resultado}`)
//                 break;
//         case 2:
//             resultado = num1 - num2;
//             console.log(`Resultado: ${resultado}`)
//             break;
//         case 3:
//             resultado = num1 * num2;
//             console.log(`Resultado: ${resultado}`)
//             break;
//         case 4:
//             if(num2 !== 0) {
//                 resultado = num1 / num2;
//                 console.log(`Resultado: ${resultado}`)
//             } else {
//                 console.log(`Divisão por zero não é permitido!`)
//             }
//         default:
//             console.log(`Operação inválida`);  
//         }
//     }
//         return resultado;
// }

// calculadora();



function conversaoDeTemperatura() {
    while(true) {
    console.log(`MENU DE OPÇÕES! `);
    console.log(`1. de Celsius para Fahrenheit.`);
    console.log(`2. de Celsius para Kelvin.`);
    console.log(`3. de Fahrenheit para Celsius.`);
    console.log(`4. de Fahrenheit para Kelvin.`);
    console.log(`5. de Kelvin para Celsius.`);
    console.log(`6. de Kelvin para Fahrenheit`);
    console.log(`0. SAIR`);

    const opcao = parseInt(prompt(`Digite a opção desejada: `));
    if(opcao === 0) {
        console.log(`Saindo do programa`);
        break;
    }

    switch(opcao) {
        case 1:
            let celsius = Number(prompt(`Digite a temperatura em CELSIUS:`));
            let F = (celsius * 9/5) + 32;
            console.log(`A temperatura é: ${celsius.toFixed(2)}°`);
            break;
        case 2:
            let C = Number(prompt(`Digite a temperatura em Celsius.`));
            let kelvin = C + 273.15;
            console.log(`A temperatura é: ${kelvin.toFixed(2)}°`);
            break;
        case 3:
            let FAH = Number(prompt(`Digite a temperatura em FAHRENHEIT: `));
            let CE = (FAH - 32) * 5 / 9;
            console.log(`A temperatura é: ${CE.toFixed(2)}°`)
            break;
        case 4:
            let FA = Number(prompt(`Digite a temperatura em FAHRENHEIT: `));
            let Kelvin = (FA - 32) * 5 / 9 + 273.15;
            console.log(`A temperatura é: ${Kelvin.toFixed(2)}°`);
            break;
        case 5:
            let K = Number(prompt(`Digite a temperatura em Kelvin: `));
            let Celsius = K + 273.15;
            console.log(`A temperatura é: ${Celsius.toFixed(2)}°`)
            break;
        case 6:
            let ke = Number(prompt(`Digite a temperatura em Kelvin: `));
            let FAHRENHEIT = (ke - 279.15) * 9/5 + 32;
            console.log(`A temperatura é: ${FAHRENHEIT.toFixed(2)}°`);
            break;
    }

   }
}
conversaoDeTemperatura();