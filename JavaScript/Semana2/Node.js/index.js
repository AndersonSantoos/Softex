function sistema(array) {
    let numerosDoIntervalo = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0 && array[i] < 999) {
            numerosDoIntervalo.push(array[i]);        }
    }
        return numerosDoIntervalo;
}

const elementos = [-255, -230, -115, -100, -99, -22, 0, 5, 15, 80, 255, 500, 662, 1000, 1050, 1200];
let numerosDoIntervalo = sistema(elementos);
console.log(`Os números do intervalo são: ${numerosDoIntervalo}`)