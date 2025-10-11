# 📝 Lista de Tarefas - To Do List

Um aplicativo simples e intuitivo para gerenciar suas tarefas diárias, desenvolvido com React.

<img width="567" height="214" alt="Screenshot_3" src="https://github.com/user-attachments/assets/29d0ecb9-4d58-4415-bdbf-5ee76b682d22" />

![React](https://img.shields.io/badge/React-18.0+-blue.svg)
![Styled Components](https://img.shields.io/badge/Styled--Components-6.0+-pink.svg)

## 🎯 Sobre o Projeto

Este é um projeto de lista de tarefas (To Do List) onde você pode:
- ✅ Adicionar novas tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Excluir tarefas
- ✅ Visualizar todas as suas tarefas de forma organizada

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construir interfaces
- **Styled Components** - Para estilização dos componentes
- **UUID** - Para gerar IDs únicos para cada tarefa
- **React Icons** - Para os ícones de check e lixeira
- **Vite** - Ferramenta de build rápida

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm ou yarn (gerenciadores de pacotes)

## 🔧 Instalação

Siga estes passos para rodar o projeto localmente:

1. **Clone o repositório**
```bash
git clone <url-do-seu-repositorio>
```

2. **Entre na pasta do projeto**
```bash
cd projeto-react
```

3. **Instale as dependências**
```bash
npm install
```

ou se preferir usar yarn:
```bash
yarn install
```

4. **Inicie o projeto**
```bash
npm run dev
```

ou com yarn:
```bash
yarn dev
```

5. **Abra no navegador**
O projeto estará rodando em `http://localhost:5173`

## 📦 Dependências do Projeto

```json
{
  "uuid": "^9.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "styled-components": "^6.0.0",
  "react-icons": "^4.0.0"
}
```

## 🎨 Funcionalidades

### Adicionar Tarefa
Digite sua tarefa no campo de texto e clique em "Adicionar". A tarefa aparecerá na lista abaixo.

### Marcar como Concluída
Clique no ícone de ✓ (check) para marcar uma tarefa como finalizada. A tarefa ficará com fundo verde.

### Excluir Tarefa
Clique no ícone da lixeira 🗑️ para remover uma tarefa da lista.

## 📁 Estrutura de Arquivos

```
projeto-react/
│
├── src/
│   ├── App.jsx           # Componente principal da aplicação
│   ├── styles.js         # Estilos dos componentes
│   ├── globalStyles.js   # Estilos globais
│   └── main.jsx          # Arquivo de entrada do React
│
├── index.html            # HTML principal
└── package.json          # Dependências e scripts
```

## 🧠 Como Funciona

O projeto usa **React Hooks** para gerenciar o estado:

- `useState` para armazenar a lista de tarefas e o texto da tarefa atual
- Cada tarefa possui um ID único gerado pelo `uuid`
- Cada tarefa tem 3 propriedades:
  - `id`: identificador único
  - `tarefa`: texto da tarefa
  - `finalizado`: boolean para saber se está concluída

## 🎓 Conceitos de React Aplicados

- **Componentes Funcionais**
- **React Hooks (useState)**
- **Renderização Condicional**
- **Manipulação de Arrays (map, filter)**
- **Eventos (onClick, onChange)**
- **Props**
- **Styled Components**


## 👤 Autor

Desenvolvido durante os estudos de React

---

⭐️ Se este projeto te ajudou, considere dar uma estrela!
