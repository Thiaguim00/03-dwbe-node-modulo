import { lerTeclado } from './util/teclado.js';

async function main() {
    const celsius = parseFloat(await lerTeclado('Informe a temperatura em Celsius: '));

    const fahrenheit = (celsius * 9 / 5) + 32;

    console.log(`${celsius}°C corresponde a ${fahrenheit}°F`);
}

main();