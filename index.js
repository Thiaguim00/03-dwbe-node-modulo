import { lerTeclado } from './util/teclado.js';

async function main() {
    // Captura o nome do usuário:
    const nome = await lerTeclado('Informe seu nome: ');
    
    // Captura a idade do usuário:
    const idade = parseInt(await lerTeclado('Informe sua idade: '));

    console.log(`\nOlá, ${nome}! Você tem ${idade} anos. No próximo ano, você terá ${idade + 1} anos.`);
}

main();
