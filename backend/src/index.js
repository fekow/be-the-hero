const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());
//TRANSFORMA REQUERIMENTOS DO POST FEITOS EM JSON EM DADOS JS PARA SEREM LIDOS AQUI
app.use(express.json());
app.use(routes);

app.listen(3333);

/*rota e
recurso*/

/*metodos HTTP: 
* GET buscar uma informação no backend
* POST: Criar uma informação no backend
* PUT: Alterar uma informação no backend
* DELETE: Deletar uma informação no backend
*/

/* Tipos de parâmetros 
* 
* Query params: Parâmetros nomeados enviados na rota após "?"(filtros, paginação)
* Route Params: parametros utilizados para identificar recursos. usando :id
* Request Body: O corpo da requisição, utilizado para criar ou alterar recursos.
* 
*/

/*
*SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB
*
*/

/**
 * Driver: SELECT * FROM user
 * Query Builder: table("user").select("*").where()
 * 
 */
