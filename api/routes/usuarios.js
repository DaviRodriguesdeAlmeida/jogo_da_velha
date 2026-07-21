const express = require('express');
const routes = express.Router();
const usuariosController = require('../controllers/usuarios');

routes.post('/login', usuariosController.Login);

module.exports = routes;