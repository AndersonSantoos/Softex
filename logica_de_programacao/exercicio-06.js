let nome = prompt("Aluno, informe seu nome: ");
let num1 = Number(prompt(`${nome}, informe sua primeira nota: `));
let num2 = Number(prompt(`${nome}, informe sua segunda nota: `));
let num3 = Number(prompt(`${nome}, informe sua terceira nota: `));

mediaFinal = (num1 + num2 + num3) / 3;

if(mediaFinal >= 7) {
    console.log(`${nome}, você foi aprovado por média!`)
} else {

    if(mediaFinal >= 3 && mediaFinal < 7) {
        console.log(`${nome}, você terá que fazer prova final!`);
    } else {
        if(mediaFinal < 3) {
            console.log(`${nome}, você foi reprovado direto!`)
        }
    }
}
