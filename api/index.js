const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json()); // plugin para que a API trabalhe com JSON

const roteador = require('./rotas/fornecedores');
app.use('/api/fornecedores', roteador);

app.listen(config.get('api.porta'), () => console.log('A API está funcionando'));