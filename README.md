# E-REDE STORE - FRONT-END

Participei de uma residência de 3 meses promovida pelo Instituto Rede, que possuiu como Projeto de Finalização do Curso um e-commerce chamado E-REDE STORE. Todo o back-end foi desenvolvido com base nos requisitos e necessidades do front-end da aplicação.

Esse é um projeto completo, com back-end e front-end, com base nas aulas que foram ministradas nesses dois núcleos principais.
Importante salientar que este projeto não foi desenvolvido ao longo do curso, mas de maneira individual por cada participante ao final do mesmo, utilizando as tecnologias ensinadas durante o curso.

## Funcionalidades do projeto
Esse projeto tem por fim ser um e-commerce que emula uma compra. Basicamente, temos uma série de rotas que são usadas pelo front. Dentre elas: 
* /categories - sendo essa um get de todas as categorias existentes
* /media -> um get de todas imagens que devem ser utilizadas no front
* /orders -> um get de todos os pedidos realizados por usuário
* /orders -> um post do pedido realizado pelo usuário
* /login -> uma rota de post que verifica a existência de um usuário na base de dados
* /users -> uma rota get que retorna todos os usuários cadastrados
* /products -> um get que retorna todos os produtos

## Técnicas e tecnologias utilizadas:
* NodeJs
* Express
* PG driver
* PG format
* JSON WEB TOKEN

## Rodar o projeto na sua máquina 

1. Coloque no terminal:
```
git clone https://github.com/Yasmin-Carloto/E-Rede-Store-Back.git
```

2. Abrir com o VS CODE (ou IDE de preferência)

3. Abrir o terminal no diretório do projeto

4. Digitar no terminal:
```
npm install
```

5. Digitar no terminal:
```
npm run dev
```