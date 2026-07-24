const zod = require('zod');

const loginSchema = zod.object({
    email: zod.string().email({ message: 'Email inválido' }),
    senha: zod.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }).max(20, { message: 'A senha deve ter no máximo 20 caracteres' })
});

const cadastroSchema = zod.object({
    nome: zod.string().min(1, { message: 'O nome é obrigatório' }).max(100, { message: 'O nome deve ter no máximo 100 caracteres' }),
    email: zod.string().email({ message: 'Email inválido' }),
    senha: zod.string().min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }).max(20, { message: 'A senha deve ter no máximo 20 caracteres' })
});
module.exports = {
    loginSchema,
    cadastroSchema
};