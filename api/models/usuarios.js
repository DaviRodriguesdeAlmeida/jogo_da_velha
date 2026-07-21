const { comparar, codificar } = require('../middlewares/bcrypt');
const { gerarToken } = require('../middlewares/jwt');

class usuariosModel {
    constructor(id, email, senha) {
        this.id = id;
        this.email = email;
        this.senha = senha;
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