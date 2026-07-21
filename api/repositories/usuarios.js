const conexao = require('../config/conexao');
const usuariosModel = require('../models/usuarios');

class usuariosRepositorios {
    static async buscarUsuarioPorEmail(email){
        const connection = await conexao();
        const [rows] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (rows.length === 0) return null;
        return new usuariosModel(rows[0].id, rows[0].email, rows[0].senha);
    }
}

module.exports = usuariosRepositorios;