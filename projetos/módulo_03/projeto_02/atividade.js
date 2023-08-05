// MATRIZ BIDIMENSIONAL

const animais = [
  ["Cachorro", "Canis", 4],
  ["Leão", "Felino", 10],
  ["Papagaio", "Avés", 4],
  ["Elefante", "Herbívoro", 25]
];

function imprimirAnimais(animais) {
  console.log(`Nome       | Espécie     |  Idade`);
  console.log("=================================");
  for (let i = 0; i < animais.length; i++) {
    const [nome, especie, idade] = animais[i];
    console.log(`${nome.padEnd(11)}| ${especie.padEnd(12)}| ${idade}`);
  }
}

console.log(`Informações dos animais abaixo: `);
imprimirAnimais(animais);
