let nome = prompt("Usuário, informe seu nome: ");
let idade = Number(prompt(`${nome}, informe sua idade: `));

if(idade >= 18) {
    console.log(`${nome}, você pode votar! `);
} else {
    if(idade < 18) {
        console.log(`${nome}, você não pode votar! `);
    }
}
