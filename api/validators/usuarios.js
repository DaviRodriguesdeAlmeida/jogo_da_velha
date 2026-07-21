const zod = require('zod');

const loginSchema = zod.object({
    email: zod.string().email({ message: 'Email inválido' }),
    senha: zod.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
});
module.exports = {
    loginSchema
};