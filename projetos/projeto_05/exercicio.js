// Fila (FIFO - First-In-First-Out)
// Sequência dos números removidos: [3, 7, 9, 1, 0]
// Aqui, o primeiro elemento inserido é o primeiro a ser removido.

// Passo 1: Remover o elemento 3 (primeiro elemento da fila) da Fila: [7, 9, 1, 0]
// Passo 2: Remover o elemento 7 (primeiro elemento da fila) da Fila: [9, 1, 0]
// Passo 3: Remover o elemento 9 (primeiro elemento da fila) da Fila: [1, 0]
// Passo 4: Remover o elemento 1 (primeiro elemento da fila) da Fila: [0]
// Passo 5: Remover o elemento 0 (primeiro elemento da fila) da Fila: []

//Exemplo em JavaScript

function esvaziarFila(array) {
    const numerosRemovidos = [];
  
    while (array.length > 0) {
      numerosRemovidos.push(array.shift());
    }
  
    return numerosRemovidos;
  }
  
  const numeros1 = [3, 7, 9, 1, 0];
  const filaNumerosRemovidos = esvaziarFila(numeros1);
  console.log("Fila - Números removidos:", filaNumerosRemovidos, "\n");


// =====================================================================



// // Lista (array)
// Sequência dos números removidos: [3, 7, 9, 1, 0]
// Podemos remover os elementos de acordo com a ordem em que foram inseridos, uma vez que podemos acessar os elementos em qualquer posição do array.

// Passo 1: Remover o elemento 3 da Lista: [7, 9, 1, 0]
// Passo 2: Remover o elemento 7 da Lista: [9, 1, 0]
// Passo 3: Remover o elemento 0 da Lista: [9, 1]
// Passo 4: Remover o elemento 9 da Lista: [1]
// Passo 5: Remover o elemento 1 da Lista: []

//Exemplo em JavaScript


function esvaziarLista(array) {
    const numerosRemovidos = []

    while(array.length > 0) {
        numerosRemovidos.push(array.shift());
    }

    return numerosRemovidos;
}

const numeros2 = [3, 7, 9, 1, 0];
const listaNumerosRemovidos = esvaziarLista(numeros2);
console.log(`Lista - Números removidos: ${listaNumerosRemovidos}\n` )


// ===========================================================================

// Pilha (LIFO - Last-In-First-Out)
// Sequência dos números removidos: [0, 1, 9, 7, 3]
// Nesse caso o último elemento inserido é o primeiro a ser removido.

// Passo 1: Remover o elemento 0 (último elemento) da Pilha: [3, 7, 9, 1]
// Passo 2: Remover o elemento 1 (último elemento) da Pilha: [3, 7, 9]
// Passo 3: Remover o elemento 9 (último elemento) da Pilha: [3, 7]
// Passo 4: Remover o elemento 7 (último elemento) da Pilha: [3]
// Passo 5: Remover o elemento 3 (último elemento) da Pilha: []

//Exemplo em JavaScript

function esvaziarPilha(array) {
    const numerosRemovidos = [];

    while(array.length > 0) {
        numerosRemovidos.push(array.pop());
    }

    return numerosRemovidos;
}

const numeros3 = [3, 7, 9, 1, 0];
const pilhaRemovida = esvaziarPilha(numeros3);
console.log(`Pilha - Números removidos: ${pilhaRemovida}\n`)
