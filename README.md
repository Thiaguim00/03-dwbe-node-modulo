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

## 1: Cálculo de Área do Retângulo

Implemente um algoritmo que leia a largura e a altura de um retângulo (em metros) a partir do teclado e exiba a sua área. O programa deve receber dois valores numéricos do usuário e realizar o cálculo.

**Exemplo de saída:**
```
Informe a largura (m): 5
Informe a altura (m): 3
A área do retângulo é: 15 m²
```

---

## 2: Conversor de Temperatura

Crie um algoritmo que leia uma temperatura em Celsius a partir do teclado e a converta para Fahrenheit. A fórmula é: F = (C × 9/5) + 32.

**Exemplo de saída:**
```
Informe a temperatura em Celsius: 25
25°C corresponde a 77°F
```

---

## 3: Cálculo de Média de Notas

Implemente um algoritmo que leia várias notas de um aluno (valores de 0 a 10) e calcule a média aritmética. O algoritmo deve indicar se o aluno foi aprovado (média ≥ 6) ou reprovado. O algoritmo também deve validar as notas informadas no intervalo de 0 a 10.

**Exemplo de saída:**
```
Informe a primeira nota: 7
Informe a segunda nota: 8
Informe a terceira nota: 9
Média: 8
Situação: Aprovado
```

---

## 4: Calculadora de IMC (Índice de Massa Corporal)

Crie um algoritmo que leia o peso (em kg) e a altura (em metros) de uma pessoa e calcule seu IMC. A fórmula é: IMC = peso / (altura × altura). O programa deve também classificar o IMC de acordo com a seguinte tabela:
- IMC < 18,5: abaixo do peso
- IMC entre 18,5 e 24,9: peso normal
- IMC entre 25 e 29,9: sobrepeso
- IMC ≥ 30: obesidade

**Exemplo de saída:**
```
Informe seu peso (kg): 70
Informe sua altura (m): 1.75
Seu IMC é: 22.86
Classificação: peso normal
```

---

## 5: Cálculo de Salário com Desconto de Imposto

Implemente um algoritmo que leia o salário bruto de um funcionário e calcule o salário líquido com base em uma alíquota de imposto de renda (em percentual) fornecida pelo usuário. O programa deve exibir tanto o valor do imposto quanto o salário líquido.

**Exemplo de saída:**
```
Informe o salário bruto (R$): 3000
Informe a alíquota de imposto (%): 15
Valor do imposto (R$): 450
Salário líquido (R$): 2550
```