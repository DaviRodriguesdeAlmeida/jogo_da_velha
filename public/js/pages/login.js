import axios from "axios"

async function carregarJsLogin(){
    mostrarSenha()
    await logarUsuario()
}

async function logarUsuario(){
    const formLogin = document.querySelector(".login-formulario")
    if(formLogin){
        formLogin.addEventListener("submit", async (event) => {
            event.preventDefault()
            const email = document.getElementById("usuario")
            const senha = document.getElementById("senha")
            const response = await axios.post("http://localhost:3000/login",{ email: email.value, senha: senha.value})
            console.log(response)
        })
    }
}

function mostrarSenha(){
    const btnMostrarSenha = document.querySelector(".botao-mostrar-senha")
    const campoSenha = document.querySelector("#senha")

    if(btnMostrarSenha){
        btnMostrarSenha.addEventListener("click", (event) => {
            if(campoSenha.type == "password"){
                campoSenha.type = "text"
            }else if(campoSenha.type == "text"){
                campoSenha.type = "password"
            }
        })
    }
}

export default carregarJsLogin