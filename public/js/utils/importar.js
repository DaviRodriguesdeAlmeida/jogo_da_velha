import carregarCSSsPagina from "/js/utils/importarCss.js"
import carregarHTMLsPagina from "/js/utils/importarHtml.js"
import carregarJsLogin from "/js/pages/login.js"

const paginaDados = {
    login: {
        pagina:"login",
        css: ["login",[]],
        javascript: () => carregarJsLogin(),
    }
}

async function CarregarDadosPagina(pagina){
    await carregarHTMLsPagina(paginaDados[pagina])
    await carregarCSSsPagina(paginaDados[pagina])
    paginaDados[pagina].javascript()
}

export default CarregarDadosPagina