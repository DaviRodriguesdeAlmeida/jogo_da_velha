const { comparar, codificar } = require('../middlewares/bcrypt');
const { gerarToken } = require('../middlewares/jwt');

class usuariosModel {
    constructor(id, email, senha) {
        this.id = id;
        this.email = email;
        this.senha = senha;
    }

    async validarSenha(senha) {
        return await comparar(senha, this.senha);
    }

    async gerarToken() {
        this.token = await gerarToken({ id: this.id, email: this.email });
        return this.token;
    }
}

module.exports = usuariosModel;