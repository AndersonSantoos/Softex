// Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

// Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

// Codifique a solução mais eficiente para buscar o número 20 no array.


const listaNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

function buscarNumero(elementoBuscado, array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === elementoBuscado) {
            return `O número ${elementoBuscado} está no índice ${i}`
        }
    }
            return `O número não foi localizado`
}

    console.log(`${buscarNumero(20, listaNumeros)}`)




