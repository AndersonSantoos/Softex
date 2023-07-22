let tempFahrenheit = Number(prompt("Informe a temperatura: "));
let tempCelsius = (tempFahrenheit - 32) * 5 /9;

console.log(`A temperatura final é: ${tempCelsius.toFixed(2)} graus celsius`);
