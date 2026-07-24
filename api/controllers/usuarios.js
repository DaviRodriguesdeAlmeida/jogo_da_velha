const usuariosService = require('../service/usuarios');

class usuariosController {
    static async validarToken(req, res) {
        const { token } = req.headers.authorization ? { token: req.headers.authorization.split(' ')[1] } : {};
        const isValid = await usuariosService.validarToken(token);
        return res.status(200).json({ 
            dados: isValid,
            mensagem: isValid ? 'Token válido' : 'Token inválido'
        });
    }

    static async Login(req, res) {
        const { email, senha } = req.body;
        const token = await usuariosService.Login(email, senha);
        return res.status(200).json({ 
            dados: token,
            mensagem: 'Login realizado com sucesso'
        });
    }

    static async Cadastro(req, res) {
        const { nome, email, senha } = req.body;
        const token = await usuariosService.Cadastro(nome, email, senha);
        return res.status(201).json({ 
            dados: token,
            mensagem: 'Cadastro realizado com sucesso'
        });
    }
}

module.exports = usuariosController;