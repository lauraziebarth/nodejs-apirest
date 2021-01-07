const reteador = require('express').Router();

reteador.use('/', (requisicao, resposta) => {
    resposta.send('OK');
})

module.exports = roteador;
