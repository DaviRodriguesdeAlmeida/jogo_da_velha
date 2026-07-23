const usuariosService = require('../service/usuarios');

class usuariosController {
    static async Login(req, res) {
        const { email, senha } = req.body;
        const token = await usuariosService.Login(email, senha);
        return res.status(200).json({ 
            dados: token,
            mensagem: 'Login realizado com sucesso'
        });
    }
}

module.exports = usuariosController;