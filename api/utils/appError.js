class AppError extends Error {
    constructor(mensagem = "Erro na aplicação", statusCode = 500, code = 'APP_ERROR'){
        super(mensagem);
        this.statusCode = statusCode;
        this.code = code;

        // Error.captureStackTrace(this, this.constructor);
    }
}

class DatabaseError extends AppError {
    constructor(mensagem = "Erro no banco de dados", statusCode = 500, code = 'DATABASE_ERROR'){
        super(mensagem, statusCode, code);

        // Error.captureStackTrace(this, this.constructor);
    }
}

class ValidationError extends AppError {
    constructor(mensagem = "Informações inválidas", statusCode = 400, code = 'VALIDATION_ERROR', details = null){
        super(mensagem, statusCode, code);
        this.details = details;
        // Error.captureStackTrace(this, this.constructor);
    }
}

class NotFoundError extends AppError {
    constructor(mensagem = "Recurso não encontrado", statusCode = 404, code = 'NOT_FOUND'){
        super(mensagem, statusCode, code);
        // Error.captureStackTrace(this, this.constructor);
    }
}
module.exports = {
    AppError,
    DatabaseError,
    ValidationError,
    NotFoundError
};