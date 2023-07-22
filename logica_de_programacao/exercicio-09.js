let num1 = Number(prompt("Informe um número: "));
let num2 = Number(prompt("Informe outro número: "));

if(num1 >= num2) {
    console.log("O primeiro número é maior que o segundo");
} else {
    if(num2 >= num1) {
        console.log("O segundo número é maior que o primeiro");
    }
}
