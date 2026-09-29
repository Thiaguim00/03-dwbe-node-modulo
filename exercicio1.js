import { lerTeclado } from './util/teclado.js';

async function main() {
    const largura = parseFloat(await lerTeclado('Informe a largura (m): '));
    const altura = parseFloat(await lerTeclado('Informe a altura (m): '));

    const area = largura * altura;

    console.log(`A área do retângulo é: ${area} m²`);
}

main();