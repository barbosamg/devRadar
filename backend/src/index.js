/*TIPOS DE PARAMETROS
QUERY PARAMS: REQ.QUERY (FILTROS, ORDENAÇÃO, PAGINAÇÃO
ROUTE PARAMS: REQ.PARAMS (IDENTIFICAR UM RECURSO NA ALTERAÇÃO OU REMOÇÃO)
BODY: REQ.BODY (DADOS PARA CRIAÇÃO OU ALTERAÇÃO DE UM REGISTRO) */
//MONGODB (NAO RELACIONAL)
const routes = require('./routes');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://mbarbosa:Pwe131003$M@servidor01-ccjbz.gcp.mongodb.net/projeto?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use(routes);

app.listen(4141);