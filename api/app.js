const express = require('express');
const cors = require('cors');
const app = express();
const ErrorHandler = require('./middlewares/errorHandler');

const usuariosRoutes = require('./routes/usuarios');

app.use(cors());
app.use(express.json());


app.use("/usuarios", usuariosRoutes);
app.use(ErrorHandler);

module.exports = app;