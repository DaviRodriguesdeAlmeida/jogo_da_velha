const { AppError } = require('../utils/appError');

function ErrorHandler(erro, req, res, next){
    if(erro instanceof AppError){
       return res.status(erro.statusCode).json({
            success: false,
            error: {
                code: erro.code,
                message: erro.message,
                details: erro.details ?? null
            }
        });
    }
    console.error(erro);
    return res.status(500).json({
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Erro interno do servidor"
        }
    });
}

module.exports = ErrorHandler;