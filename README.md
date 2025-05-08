# 🧪 Projeto User CRUD com Testes

---

## 📄 Slides e exemplos de testes

O repositório inclui:

- Uma **apresentação em PDF** com um resumo da área de **QA (Quality Assurance)** e comparações entre as ferramentas **Jest** e **Cypress**: [`QA.pdf`](./QA.pdf)
- Uma **amostra de testes com Jest**, localizada na pasta `server/__tests__`
- Uma **amostra de testes com Cypress**, localizada na pasta `client/cypress`

Esses exemplos servem como introdução prática às ferramentas utilizadas em testes automatizados para frontend e backend.


## 🚀 Como rodar o projeto

---

## ⚙️ Configuração do Backend (.env)

Para o backend funcionar corretamente com MongoDB, é necessário criar um arquivo chamado `.env` dentro da pasta `server` contendo as informações de conexão com o banco de dados.


### 📄 Como obter a URL de conexão e Exemplo de `.env`:

Acesse seu MongoDB Atlas.

Clique no seu banco de dados (cluster).

Vá em "Connect" → "Drivers".

Copie o link de conexão.

Cole no .env como valor da variável DATABASE_URL


```env
DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<nomeDoBanco>?retryWrites=true&w=majority"
Substitua os campos <senha> e <nomeDoBanco> com suas credenciais reais.


### Backend com jest

| Etapa                 | Comando          |
|----------------------|------------------|
| Acessar              | `cd server`      |
| Instalar dependências| `npm install`    |
| Iniciar backend      | `npm run dev`    |
| Rodar testes com Jest| `npm test`       |

---

### Frontend com cypress

| Etapa                    | Comando             |
|--------------------------|---------------------|
| Acessar                  | `cd client`         |
| Instalar dependências    | `npm install`       |
| Iniciar frontend         | `npm run dev`       |
| Rodar testes com Cypress | `npx cypress open`  |
| Acessar no navegador     | [http://localhost:5173/](http://localhost:5173/) |


---

### Teste com Playwright

| Etapa                          | Comando                                        |
| ------------------------------ | ---------------------------------------------- |
| Acessar a pasta de testes      | `cd tests`                                     |
| Rodar os testes automatizados  | `npx playwright test`                          |
| Ver relatório em HTML          | `npx playwright show-report`                   |
| Acessar relatório no navegador | [http://localhost:9323](http://localhost:9323) |


## 📫 Contato

Criado por Anna Laura Moura  
📧 [nalauramoura@gmail.com](mailto:nalauramoura@gmail.com)
