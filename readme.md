# Catálogo de Jogos - Fullstack Application

Este projeto é um catálogo de jogos desenvolvido em uma arquitetura fullstack, utilizando **Angular 19** no frontend e **NestJS** no backend. Ele permite gerenciar jogos, incluindo funcionalidades como listar, criar, editar e excluir jogos.

## Tecnologias Utilizadas

### Frontend
- **Framework:** Angular 19
- **Linguagem:** TypeScript
- **Estilo:** CSS
- **Ferramentas:** Angular CLI

### Backend
- **Framework:** NestJS
- **Linguagem:** TypeScript
- **Banco de Dados:** MySQL
- **ORM:** TypeORM
- **Validação:** Class Validator

---

## Funcionalidades

### Frontend
- Interface amigável para gerenciar jogos.
- Listagem de jogos com informações como nome, tipo e ano.
- Formulário para criar e editar jogos.
- Botões para excluir jogos diretamente na interface.

### Backend
- API RESTful para gerenciar jogos.
- Endpoints para listar, criar, editar e excluir jogos.
- Validação de dados com DTOs.
- Integração com banco de dados MySQL.

---

## Estrutura do Projeto

### Frontend
```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── view/
│   │   ├── models/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   ├── app.config.ts
│   └── main.ts
├── angular.json
├── package.json
└── README.md
```

### Backend
```
backend/
├── src/
│   ├── games/
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── games.controller.ts
│   │   ├── games.service.ts
│   ├── app.module.ts
│   ├── main.ts
├── package.json
├── .env
└── README.md
```

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado.
- MySQL configurado.
- Angular CLI instalado globalmente.

### Configuração do Backend
1. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASS=senha
   DB_NAME=catalogo_jogos
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor:
   ```bash
   npm run start:dev
   ```

### Configuração do Frontend
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
3. Acesse o frontend no navegador:
   ```
   http://localhost:4200/
   ```

---

## Endpoints da API

### Listar todos os jogos
```
GET /games
```

### Listar jogo por ID
```
GET /games/:id
```

### Criar um novo jogo
```
POST /games
Body:
{
  "nome": "Nome do Jogo",
  "tipo": "Tipo do Jogo",
  "ano": 2023
}
```

### Atualizar um jogo
```
PATCH /games/:id
Body:
{
  "nome": "Nome Atualizado",
  "tipo": "Tipo Atualizado",
  "ano": 2023
}
```

### Excluir um jogo
```
DELETE /games/:id
```

---

## Testes

### Backend
- Testes unitários e de integração com Jest.
- Para executar os testes:
  ```bash
  npm run test
  ```

### Frontend
- Testes unitários com Karma e Jasmine.
- Para executar os testes:
  ```bash
  ng test
  ```

---

## Contribuição

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça as alterações e commit:
   ```bash
   git commit -m "Adiciona minha feature"
   ```
4. Envie um pull request.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## Contato

- **Autor:** [Reynato Junior]
- **LinkedIn:** [linkedin.com/in/reynatojunior](https://linkedin.com/in/reynatojunior)