import carregarCSSsPagina from "/js/utils/importarCss.js"
import carregarHTMLsPagina from "/js/utils/importarHtml.js"
import carregarJsLogin from "/js/pages/login.js"
import carregarJsCadastro from "/js/pages/cadastro.js"
import carregarJsInicio from "/js/pages/inicio.js"

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
    },
    inicio: {
        pagina:"inicio",
        css: ["inicio",[]],
        javascript: () => carregarJsInicio(),
    }
}

async function CarregarDadosPagina(pagina){
    await carregarCSSsPagina(paginaDados[pagina])
    await carregarHTMLsPagina(paginaDados[pagina])
    paginaDados[pagina].javascript()
}

export default CarregarDadosPagina