const usuariosRepositorios = require('../repositories/usuarios');
const { loginSchema } = require('../validators/usuarios');
const { ValidationError, NotFoundError } = require('../utils/appError');

class usuariosService {
    static async Login(email, senha) {
        try {
            loginSchema.parse({ email, senha });
        } catch (error) {
            throw new ValidationError('Dados de login inválidos', 400, 'VALIDATION_ERROR', error.errors);
        }
        const usuario = await usuariosRepositorios.buscarUsuarioPorEmail(email);
        if (!usuario) {
            throw new NotFoundError('Usuário não encontrado', 404, 'USER_NOT_FOUND');
        }
        if (!await usuario.validarSenha(senha)) {
            throw new ValidationError('Senha incorreta', 400, 'INVALID_PASSWORD', null);
        }
        return await usuario.gerarToken();
        
    }
}

module.exports = usuariosService;