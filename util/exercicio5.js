import { lerTeclado } from './util/teclado.js';

async function main() {
    const salarioBruto = parseFloat(
        await lerTeclado('Informe o salário bruto (R$): ')
    );

    const aliquota = parseFloat(
        await lerTeclado('Informe a alíquota de imposto (%): ')
    );

    const imposto = salarioBruto * (aliquota / 100);
    const salarioLiquido = salarioBruto - imposto;

    console.log(`Valor do imposto (R$): ${imposto}`);
    console.log(`Salário líquido (R$): ${salarioLiquido}`);
}

main();