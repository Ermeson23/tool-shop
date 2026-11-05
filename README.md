# 🎭 Web Test Automation | Playwright & TypeScript

[![Playwright Tests](https://github.com/Ermeson23/tool-shop/actions/workflows/playwright.yml/badge.svg)](https://github.com/Ermeson23/tool-shop/actions/workflows/playwright.yml)
[![Playwright](https://img.shields.io/badge/Playwright-v1.40+-green.svg?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.0+-blue.svg?logo=typescript)](https://www.typescriptlang.org/)

Este repositório contém uma breve suíte de testes automatizados End-to-End (E2E) para aplicações Web, desenvolvida com **Playwright** e **TypeScript**, aplicando o padrão de arquitetura **Page Object Model (POM)**.

A aplicação alvo dos testes é a plataforma e-commerce de testes [Practice Software Testing](https://practicesoftwaretesting.com/).

---

## 🎯 Cobertura de Testes

- **Autenticação & Sessão:** Login de usuário com credenciais válidas e validação de mensagens de erro.
- **Busca e Filtro:** Pesquisa de produtos por termo e filtragem por categorias com validação de grid de resultados.
- **Fluxo E2E de Checkout:** Seleção de produto, adição ao carrinho, progressão pelas etapas do checkout (itens, endereço, pagamento) e validação da mensagem de pedido concluído.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Framework de Teste:** [Playwright](https://playwright.dev/)
- **Design Pattern:** Page Object Model (POM)
- **CI/CD:** GitHub Actions
- **Relatórios & Evidências:** Playwright HTML Reporter e Screenshots e Vídeos em falhas.

---

## 🏗️ Estrutura do Projeto

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml       # Pipeline de CI/CD no GitHub Actions
├── src/
│   └── pages/                   # Page Object Model classes
│       ├── BasePage.ts
│       ├── CartCheckoutPage.ts
│       ├── HomePage.ts
│       ├── LoginPage.ts
│       └── ProductDetailsPage.ts
├── tests/                       # Especificações de teste (Suítes E2E)
│   ├── auth.spec.ts
│   ├── checkout.spec.ts
│   └── search.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts         # Configuração global do Playwright
└── README.md
```

## 🚀 Como Executar o Projeto Localmente
### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### 1. Clonar o Repositório

```
git clone https://github.com/Ermeson23/tool-shop.git
cd tool-shop
```

### 2. Instalar Dependências
```
npm install
```

### 3. Instalar os Navegadores do Playwright
```
npx playwright install
```

### 4. Executar os Testes
- Rodar todos os testes em modo headless (sem interface gráfica):
```
npx playwright test
```

- Rodar com a UI interativa do Playwright (ideal para desenvolvimento/debug):
```
npx playwright test --ui
```

- Rodar um arquivo de teste específico:
```
npx playwright test tests/e2e/login.spec.ts
```

- Visualizar o Relatório HTML da última execução:
```
npx playwright show-report
```

### 🔄 Integração Contínua (CI/CD)
O projeto possui uma pipeline automatizada configurada via GitHub Actions (```.github/workflows/playwright.yml```).

- Gatilhos: Executada automaticamente a cada ```push``` ou ```pull_request``` no branche ```main```.

- Artefatos: A cada execução, o relatório HTML do Playwright é anexado na aba Actions da pipeline. Em caso de falha de algum teste, as evidências visuais (vídeos e screenshots) são salvas automaticamente como artefatos baixáveis com retenção de 14 a 30 dias.

### 👤 Autor
Desenvolvido por Ermeson Ribeiro

LinkedIn: [linkedin.com/in/ermeson-ribeiro](https://linkedin.com/in/ermeson-ribeiro-a29121212/)

Email: joseenem35@gmail.com
