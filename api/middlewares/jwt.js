const jwt = require('jsonwebtoken');
const secret = 'chave_ultra_super_secreta_plus_ultra';

async function gerarToken(payload) {
    return await jwt.sign(payload, secret, { expiresIn: '1h' });
}

function verificarToken(token) {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
}

module.exports = { gerarToken, verificarToken };