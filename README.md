# 📢 Task Notifier Demo

Projeto demonstrativo de **notificações em tempo real**, desenvolvido para mostrar como integrar um backend Node.js/Express com frontend HTML/CSS/JS usando Socket.IO.

O objetivo deste repositório é servir como referência de implementação de um sistema funcional, leve e modular de notificações em tempo real para eventos de criação, edição e remoção de tarefas.

---

## 🚀 Tecnologias e bibliotecas utilizadas

### Backend

- **Node.js + Express** – Servidor HTTP, organização de rotas e middlewares.
- **Socket.IO** – Comunicação em tempo real (WebSockets), responsável por emitir eventos de notificação para todos os clientes conectados.
- **MySQL (ou SQLite para demonstração)** – Armazenamento persistente de tarefas.
- **dotenv** – Gerenciamento de variáveis de ambiente.
- **nodemon** – Facilita desenvolvimento reiniciando o servidor automaticamente.

### Frontend

- **HTML/CSS/JS** – Estrutura e lógica da interface.
- **Bootstrap 5** – Componentes visuais e responsividade.
- **Bootstrap Icons** – Ícones visuais para botões e elementos.
- **Socket.IO client** – Recebe eventos do servidor e atualiza o frontend em tempo real.

---

## 📂 Estrutura do projeto

```
task-notifier-demo/
├─ backend/
│   ├─ server.js          # Servidor Express + Socket.IO
│   ├─ routes/
│   │   └─ tasks.js       # Rotas CRUD de tarefas
│   ├─ db/
│   │   └─ config.js      # Configuração do banco de dados
│
├─ frontend/
│   ├─ index.html         # Página principal
│   ├─ app.js             # Lógica JavaScript do frontend
│   ├─ style.css          # Estilos customizados
```

---

## ⚙️ Funcionalidades implementadas

- **Criação de tarefas** – Usuário envia título de uma tarefa, backend salva no banco e emite evento para clientes conectados.
- **Edição de tarefas** – Título da tarefa pode ser alterado; todos os clientes recebem notificação.
- **Remoção de tarefas** – Deletar tarefas atualiza backend e envia evento de notificação.
- **Notificações em tempo real** – Toasters exibem título, descrição e horário do evento.
- **Frontend responsivo** – Layout baseado em Bootstrap, cards dinâmicos e container de toasts.

---

## 🧩 Fluxo de comunicação

1. Frontend conecta ao backend via **Socket.IO**.
2. Requisições **HTTP (fetch)** manipulam CRUD de tarefas.
3. Eventos do backend são emitidos para todos os clientes conectados.
4. Frontend atualiza cards e exibe notificações automaticamente.

---

## 📌 Requisitos e considerações

- Node.js 18+
- MySQL 8+ (ou SQLite como alternativa)
- Conexão de rede local ou servidor para comunicação via Socket.IO

> O frontend foi desenvolvido de forma modular, mantendo separação clara entre HTML, CSS e JS. Isso facilita manutenção, integração com frameworks futuros e adição de funcionalidades, como autenticação ou histórico de notificações.

---

## 🎯 Propósito do repositório

- Servir como **demonstração prática** de notificações em tempo real.
- Fornecer **exemplo de integração entre backend Node.js e frontend leve**.
- Ilustrar boas práticas de separação de responsabilidades e comunicação via Socket.IO.
- Funcionar como **base para projetos maiores**, como sistemas de tarefas, notificações corporativas ou painéis administrativos.

---

## 📚 Observações sobre dependências

O projeto mantém package.json separados para frontend e backend, garantindo isolamento de dependências e evitando problemas com caminhos de arquivos e execução de scripts. Cada parte do projeto deve gerenciar suas próprias dependências.

---

## 👨‍💻 Autor

Desenvolvido por [Eduardoss45](https://github.com/Eduardoss45)