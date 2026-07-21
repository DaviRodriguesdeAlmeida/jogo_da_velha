const express = require('express');
const cors = require('cors');
const app = express();

const usuariosRoutes = require('./routes/usuarios');

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuariosRoutes);

module.exports = app
// app.post('/login', (req, res) => {
//     console.log(req.body);
//     return res.json({ message: 'Login successful' });
// })

// app.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// })
