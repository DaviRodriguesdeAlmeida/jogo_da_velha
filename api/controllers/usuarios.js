const usuariosService = require('../service/usuarios');

class usuariosController {
    static async Login(req, res) {
        try {
            const { email, senha } = req.body;
            const token = await usuariosService.Login(email, senha);
            return res.status(200).json({ 
                dados: token,
                mensagem: 'Login realizado com sucesso'
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = usuariosController;