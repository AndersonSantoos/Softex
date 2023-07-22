let nome = prompt("Informe seu nome: ");
let idade = Number(prompt(`${nome}, informe sua idade: `));


if(idade >= 18 && idade < 67) {
console.log(`${nome}, você pode doar sangue! `);
} else {
    console.log(`${nome}, você não pode doar sangue! `);
}
