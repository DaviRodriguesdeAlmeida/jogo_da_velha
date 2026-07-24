const express = require('express');
const routes = express.Router();
const usuariosController = require('../controllers/usuarios');

routes.post('/login', usuariosController.Login);
routes.post('/cadastro', usuariosController.Cadastro);
routes.get('/validar-token', usuariosController.validarToken);

module.exports = routes;