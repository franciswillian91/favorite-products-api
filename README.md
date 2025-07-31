# favorite-products-api

Uma API para gerenciar clientes e favoritar produtos!

### Stack 

NodeJs + ExpressJs {Joi, TypeORM, Swagger} + PostgreSQL
Docker & Docker compose

## Steps para execução da API

### 1. Subindo o container da aplicação
```
    docker-compose up --build
```

### 2. Executando o seed de dados
```
    docker-compose exec api npm run seed
```

## Credenciais para Login
email: admin@avaliacao.com

password: senha##12_

# Fluxo

O usuário "Admin" é o unico que pode se autenticar, com isso ele pode:
 - Cadastrar, Editar, Remover e listar clientes.

Os clientes podem 
 - Consultar a lista de produtos
 - Consultar a sua lista de favoritos 
 - Adicionar um produto à sua lista de favoritos 
 - Remover um produto à sua lista de favoritos 

## Documentação 
http://localhost:3000/api/docs/#/

