import { lerTeclado } from './util/teclado.js';

async function main() {
    const peso = parseFloat(await lerTeclado('Informe seu peso (kg): '));
    const altura = parseFloat(await lerTeclado('Informe sua altura (m): '));

    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log('Classificação: abaixo do peso');
    } else if (imc < 25) {
        console.log('Classificação: peso normal');
    } else if (imc < 30) {
        console.log('Classificação: sobrepeso');
    } else {
        console.log('Classificação: obesidade');
    }
}

main();