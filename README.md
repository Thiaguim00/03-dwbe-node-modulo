# 03-dwbe-node-modulo

---

# Atividade

## Passo 1: 

Iniciar um projeto Node.js com as configurações padrões:

```bash
npm init -y
```

## Passo 2: 

Abrir o arquivo `package.json` gerado e habilitar o suporte a módulos, adicionando a seguinte linha:

```javascript
"type": "module",
```

**OBS**: caso o arquivo `package.json` tenha a linha abaixo, ela deve ser substituída pela linha `"type": "module",`:
```javascript
  "type": "commonjs",
```

## Passo 3: 

Criar uma pasta chamada `util`. Dentro desta pasta, criar o arquivo chamado `teclado.js` com o conteúdo abaixo:

```javascript
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
```

## Passo 4: 

Criar o arquivo chamado `index.js` com o conteúdo abaixo:
```javascript
import { lerTeclado } from './util/teclado.js';

async function main() {
    // Captura o nome do usuário:
    const nome = await lerTeclado('Informe seu nome: ');
    
    // Captura a idade do usuário:
    const idade = parseInt(await lerTeclado('Informe sua idade: '));

    console.log(`\nOlá, ${nome}! Você tem ${idade} anos. No próximo ano, você terá ${idade + 1} anos.`);
}

main();
```

## Passo 5: 

Executar o arquivo principal no terminal através do comando:

```bash
node index.js
```

## Passo 6

Incluir na chave `script` do arquivo `package.json` o comando abaixo:

```javascript
"start": "node index.js"
```

Versão final do arquivo `package.json`:
```javascript
{
  "name": "03-dwbe-node-modulo",
  "version": "1.0.0",
  "description": "---",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wdiasmaciel/03-dwbe-node-modulo.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "bugs": {
    "url": "https://github.com/wdiasmaciel/03-dwbe-node-modulo/issues"
  },
  "homepage": "https://github.com/wdiasmaciel/03-dwbe-node-modulo#readme"
}
```

Executar o comando abaixo:

```bash
npm run start
```

Executar o comando abaixo:

```bash
npm start
```

---

# Exercícios 