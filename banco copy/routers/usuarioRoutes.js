const express = require('express');
const router = express.Router();
const DAO = require('../dao/dao');
const Usuario = require('../models/usuario');

// Criar uma instância do DAO
const dao = new DAO();

// Rota para obter todos os usuários
router.get('/usuarios', async (req, res) => {
    await dao.connect();
    const usuarios = await dao.executeQuery('SELECT * FROM Usuario');
    await dao.disconnect();
    res.json(usuarios);
});

module.exports = router;