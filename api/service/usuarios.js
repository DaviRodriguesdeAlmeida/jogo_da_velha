const usuariosRepositorios = require('../repositories/usuarios');
const { loginSchema, cadastroSchema } = require('../validators/usuarios');
const { codificar } = require('../middlewares/bcrypt');
const { ValidationError, NotFoundError } = require('../utils/appError');
const usuariosModel = require('../models/usuarios');
const { verificarToken } = require('../middlewares/jwt');

class usuariosService {
    static async validarToken(token) {
        if (verificarToken(token)) {//retorna null se for falso
            return false;
        }
        return true;
    }

    static async Login(email, senha) {
        try {
            loginSchema.parse({ email, senha });
        } catch (error) {
            console.error('Erro de validação:', error);
            throw new ValidationError('Dados de login inválidos', 400, 'VALIDATION_ERROR', error);
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

    static async Cadastro(nome, email, senha) {
        try{
            cadastroSchema.parse({ nome, email, senha });
        } catch (error) {
            throw new ValidationError('Dados de cadastro inválidos', 400, 'VALIDATION_ERROR', error);
        }
        if (!nome || !email || !senha) {
            throw new ValidationError('Todos os campos são obrigatórios', 400, 'MISSING_FIELDS', null);
        }
        const usuario = await usuariosRepositorios.buscarUsuarioPorEmail(email);
        if (usuario) {
            throw new ValidationError('Email já cadastrado', 400, 'EMAIL_ALREADY_REGISTERED', null);
        }
        const senhaCodificada = await codificar(senha);
        const novoUsuario = new usuariosModel(null, nome, email, senhaCodificada, null);
        const usuarioCriado = await usuariosRepositorios.criarUsuario(novoUsuario);
        return await usuarioCriado.gerarToken(); 
    }
}

module.exports = usuariosService;