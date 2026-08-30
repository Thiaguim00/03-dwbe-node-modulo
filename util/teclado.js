import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Lê uma string informada pelo usuário no teclado.
export async function lerTeclado(texto) {
    const rl = readline.createInterface({ input, output });
    try {
        const resposta = await rl.question(texto);
        return resposta;
    } finally {
        rl.close();
    }
}
