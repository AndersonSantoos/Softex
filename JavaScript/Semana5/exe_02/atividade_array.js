// Arrays originais
const primeiroArray = [23, 9, 4, 45];
const segundoArray = [7, 12];

// Dividir o primeiro array em dois
const metade1 = primeiroArray.slice(0, primeiroArray.length / 2);
const metade2 = primeiroArray.slice(primeiroArray.length / 2);

// Concatenar cada parte com o segundo array
const resultado1 = metade1.concat(segundoArray);
const resultado2 = metade2.concat(segundoArray);

console.log(resultado1);
console.log(resultado2);
