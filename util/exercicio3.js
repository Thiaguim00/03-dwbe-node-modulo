import { lerTeclado } from './util/teclado.js';

async function main() {
    let nota1 = parseFloat(await lerTeclado('Informe a primeira nota: '));
    let nota2 = parseFloat(await lerTeclado('Informe a segunda nota: '));
    let nota3 = parseFloat(await lerTeclado('Informe a terceira nota: '));

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        console.log('Erro: as notas devem estar entre 0 e 10.');
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    console.log(`Média: ${media}`);
    
    if (media >= 6) {
        console.log('Situação: Aprovado');
    } else {
        console.log('Situação: Reprovado');
    }
}

main();