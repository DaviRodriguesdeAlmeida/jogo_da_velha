const conexao = require('../config/conexao');
const usuariosModel = require('../models/usuarios');
const { DatabaseError } = require('../utils/appError');

class usuariosRepositorios {
    static async criarConexao(){
        try{
            return await conexao();
        } catch (error) {
            throw new DatabaseError('Erro ao criar conexão com o banco de dados');
        }
    }

    static async buscarUsuarioPorId(id){
        const connection = await this.criarConexao();
        const [rows] = await connection.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        if (rows.length === 0) return null;
        return new usuariosModel(rows[0].id, rows[0].nome, rows[0].email, rows[0].senha, rows[0].imagem);
    }

    static async buscarUsuarioPorEmail(email){
        const connection = await this.criarConexao();
        const [rows] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (rows.length === 0) return null;
        return new usuariosModel(rows[0].id, rows[0].nome, rows[0].email, rows[0].senha, rows[0].imagem);
    }

    static async criarUsuario(usuario){
        const connection = await this.criarConexao();
        const [result] = await connection.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
            [usuario.nome, usuario.email, usuario.senha]
        );
        usuario.id = result.insertId;
        return usuario;
    }
}

module.exports = usuariosRepositorios;