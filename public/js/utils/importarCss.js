export async function carregarCSSsPagina(paginaDados){
    const paginaCssAntigo = document.querySelectorAll(".css-pagina")
    const paginaComponentesCssAntigo = document.querySelectorAll(".css-componente")

    const head = document.querySelector("head")
    const paginaCss = paginaDados.css[0]
    const paginaComponentesCss = paginaDados.css[1]

    if(paginaCssAntigo.length > 0){
        paginaCssAntigo.forEach(css => css.remove())
    }

    if(paginaComponentesCssAntigo.length > 0){
        paginaComponentesCssAntigo.forEach(css => css.remove())
    }

    if(paginaComponentesCss.length > 0){
        paginaComponentesCss.forEach(componenteCss => {
            const linkCssComponente = document.createElement("link")
            linkCssComponente.className = "css-componente"
            linkCssComponente.rel = "stylesheet"
            linkCssComponente.href = `/css/components/${componenteCss}.css`
            head.appendChild(linkCssComponente)
        })
    }


    const linkCssPagina = document.createElement("link")
    linkCssPagina.className = "css-pagina"
    linkCssPagina.rel = "stylesheet"
    linkCssPagina.href = `/css/pages/${paginaCss}.css`
    head.appendChild(linkCssPagina)
}

export default carregarCSSsPagina