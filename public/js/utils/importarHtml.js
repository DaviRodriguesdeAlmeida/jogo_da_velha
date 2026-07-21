export async function carregarHTMLsPagina(dadosPagina){
    const app = document.querySelector("#app")
    const response = await fetch(`/pages/${dadosPagina.pagina}.html`)
    const html = await response.text()
    app.innerHTML = html
}

export default carregarHTMLsPagina