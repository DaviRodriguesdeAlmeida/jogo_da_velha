const usuariosRepositorios = require('../repositories/usuarios');
const { loginSchema } = require('../validators/usuarios');

class usuariosService {
    static async Login(email, senha) {
        try {
            loginSchema.parse({ email, senha });
            const usuario = await usuariosRepositorios.buscarUsuarioPorEmail(email);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }
            if (!await usuario.validarSenha(senha)) {
                throw new Error('Senha incorreta');
            }
            return await usuario.gerarToken();
        } catch (error) {
            if (error.errors) {
                throw new Error(error.errors.map(e => e.message).join(', '));
            } else {
                throw error;
            }
        }
    }
}

module.exports = usuariosService;