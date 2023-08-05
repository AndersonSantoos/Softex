// LISTA COM OS DEZ NOMES!!

let nomes = [
    "Anderson",
    "Tiago",
    "Mateus",
    "Livia",
    "Larissa",
    "Camilly",
    "Lucas",
    "Diogo",
    "Maria",
    "Marcos"
];


// LISTA COM A IDADE DAS DEZ PESSOAS

let idades = [25, 20, 34, 22, 23, 16, 28, 34, 45, 55];


// LISTA COM AS CORES FAVORITAS DE CADA PESSOA

let coresFavoritas = [
    "Azul",
    "Verde",
    "Vermelho",
    "Roxo",
    "Rosa",
    "Cinza",
    "Amarelo",
    "Preto",
    "Laranja",
    "Vermelho"
];

console.log(`Lista dos nomes: ${nomes}`);
console.log(`Lista das idades: ${idades}`);
console.log(`Lista das cores favoritas: ${coresFavoritas}`);


coresFavoritas[0] = "Preto"; // Modificando a cor favorita da primeira pessoa!
idades[2] = 25;     // Modificando a idade da terceira pessoa!


// Listas após as alterações!

console.log(`Lista dos nomes após as modificações: ${nomes}`);
console.log(`Lista das idades após as modificações: ${idades}`);
console.log(`Lista das cores após as modificações: ${coresFavoritas}`);