# 🌊 Sistema de Consulta de Abrigos em Enchentes

## 📌 1. Apresentação da Ideia

Este projeto foi desenvolvido a partir do desafio sobre enchentes no Brasil.

Ao analisar o cenário, foi identificada a dificuldade de acesso a informações atualizadas sobre abrigos, especialmente em relação à disponibilidade de vagas.

A solução proposta busca facilitar a visualização dessas informações de forma simples e direta.

---

## ⚠️ 2. Problema Escolhido

O problema abordado é a falta de informação clara sobre quais abrigos estão disponíveis ou lotados.

Durante situações de enchente, muitas pessoas acabam se deslocando até locais que já atingiram sua capacidade máxima, enquanto outros ainda possuem vagas disponíveis.

---

## 💡 3. Solução Proposta

A solução consiste em uma API que permite consultar abrigos e visualizar sua situação atual.

O sistema apresenta:

* Nome do abrigo
* Endereço
* Capacidade atual
* Capacidade total
* Status (disponível ou lotado)

Os dados são previamente cadastrados no banco de dados, e o sistema permite atualizar a capacidade dos abrigos para refletir mudanças em tempo real.

---

## 🏗️ 4. Estrutura do Sistema

### 🔹 Back-end

* Node.js com Express
* Responsável pela lógica e disponibilização da API

### 🔹 Banco de Dados

* SQLite
* Armazena os dados dos abrigos

### 🔹 Front-end

* Interface simples com HTML e CSS
* Exibição dos abrigos em formato de cards (caixas)
* Indicação visual de status:

  * Verde → disponível
  * Vermelho → lotado
* Layout com cores e organização para facilitar a leitura

---

## 🔗 5. Rotas da API

| Método | Rota                 | Descrição                         |
| ------ | -------------------- | --------------------------------- |
| GET    | /abrigos             | Lista todos os abrigos com status |
| GET    | /abrigos/disponiveis | Lista apenas abrigos disponíveis  |
| PUT    | /abrigos/:id         | Atualiza a capacidade do abrigo   |

---

## ⚙️ 6. Regra de Negócio

O status do abrigo é definido automaticamente:

* **Disponível:** capacidade_atual < capacidade_total
* **Lotado:** capacidade_atual >= capacidade_total

---

## 🧪 7. Como Executar

```bash
npm install
npm run dev
```

A API estará disponível em:
http://localhost:3000/abrigos
http://localhost:3000/disponíveis
http://localhost:3000/index.html
https://desafiotema1abrigos.onrender.com/index.html
---

## 🧠 8. Considerações Finais

Este projeto foi desenvolvido com foco na simplicidade, organização e clareza das informações.

Mesmo com uma interface simples, a solução permite visualizar rapidamente a situação dos abrigos e acompanhar atualizações de capacidade, contribuindo para uma melhor tomada de decisão em cenários emergenciais.
