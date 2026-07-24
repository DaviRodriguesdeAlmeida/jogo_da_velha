import router from "/js/app/router.js"
async function carregarJsInicio(){
    botaoSair()
}



function botaoSair(){
    const btnSair = document.querySelector(".botao-sair")
    const modalSair = document.querySelector("#modal-sair")
    const btnCancelar = document.querySelector("#cancelar-saida")
    const btnConfirmar = document.querySelector("#confirmar-saida")

    if(btnSair){
        btnSair.addEventListener("click", () => {
            modalSair.showModal()
        })
        btnCancelar.addEventListener("click", () => {
            modalSair.close()
        })
        btnConfirmar.addEventListener("click", () => {
            localStorage.removeItem("token")
            modalSair.close()
            router.navigate("/login")
        })
    }
}


export default carregarJsInicio