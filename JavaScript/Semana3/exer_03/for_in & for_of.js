// Criando o array de objetos pessoa
const pessoas = [
  { nome: "Anderson Santos", idade: 25, profissao: "Desenvolvedor", cidade: "Recife" },
  { nome: "Lucas", idade: 28, profissao: "Tec.Refrigeração", cidade: "Recife" },
  { nome: "Larissa", idade: 23, profissao: "Professora", cidade: "Recife" },
  { nome: "Ana", idade: 50, profissao: "Médica", cidade: "Porto Alegre" }
];

// Usando o loop for...in para imprimir as propriedades de cada objeto
for (let index in pessoas) {
  console.log(`Informações da pessoa ${parseInt(index) + 1}:`);
  for (let propriedade in pessoas[index]) {
    console.log(`${propriedade}: ${pessoas[index][propriedade]}`);
  }
  console.log('\n');
}

// Usando o loop for...of para imprimir as informações completas de cada pessoa
for (let pessoa of pessoas) {
  console.log("Informações completas da pessoa:");
  for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
  }
  console.log('\n');
}
