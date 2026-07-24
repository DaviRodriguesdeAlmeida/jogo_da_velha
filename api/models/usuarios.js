const { comparar, codificar } = require('../middlewares/bcrypt');
const { gerarToken } = require('../middlewares/jwt');

class usuariosModel {
    constructor(id, nome, email, senha, imagem) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.imagem = imagem;
    }

    codificarSenha(senha) {
        this.senha = codificar(senha);
    }

    validarSenha(senha) {
        return comparar(senha, this.senha);
    }

    gerarToken() {
        this.token = gerarToken({ id: this.id, email: this.email });
        return this.token;
    }
}

module.exports = usuariosModel;