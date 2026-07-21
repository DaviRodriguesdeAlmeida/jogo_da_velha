import carregarCSSsPagina from "/js/utils/importarCss.js"
import carregarHTMLsPagina from "/js/utils/importarHtml.js"
import carregarJsLogin from "/js/pages/login.js"
import carregarJsCadastro from "/js/pages/cadastro.js"

const paginaDados = {
    login: {
        pagina:"login",
        css: ["login",[]],
        javascript: () => carregarJsLogin(),
    },
    cadastro: {
        pagina:"cadastro",
        css: ["cadastro",[]],
        javascript: () => carregarJsCadastro(),
    }
}

async function CarregarDadosPagina(pagina){
    await carregarCSSsPagina(paginaDados[pagina])
    await carregarHTMLsPagina(paginaDados[pagina])
    paginaDados[pagina].javascript()
}

export default CarregarDadosPagina