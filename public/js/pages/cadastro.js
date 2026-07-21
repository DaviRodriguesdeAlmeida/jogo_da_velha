function carregarJsCadastro(){
    mostrarSenha()
}

function mostrarSenha(){
    const app = document.querySelector("#app")
    
    app.addEventListener("click", (event) => {
        const botaoClicado = event.target.closest(".botao-mostrar-senha")
        if(!botaoClicado)return
        const campoPai = botaoClicado.closest(".campo-senha");
        const inputSenha = campoPai.querySelector("input");
        if(inputSenha.type == "password"){
            inputSenha.type = "text"
        }else if(inputSenha.type == "text"){
            inputSenha.type = "password"
        }
    })
    
}

export default carregarJsCadastro