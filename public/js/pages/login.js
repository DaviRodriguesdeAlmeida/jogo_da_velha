import axios from "axios";
import router from "/js/app/router.js"

async function carregarJsLogin(){
    await logarUsuario()
    mostrarSenha()
}

async function logarUsuario(){
    const formLogin = document.querySelector(".login-formulario")
    if(formLogin){
        formLogin.addEventListener("submit", async (event) => {
            event.preventDefault()
            const email = document.getElementById("email").value
            const senha = document.getElementById("senha").value 
            try{
                const response = await axios.post("http://localhost:3000/usuarios/login",{  email: email,  senha: senha})
                const token = response.data.dados.token
                localStorage.setItem("token", token)
                router.navigate("/inicio")
            }catch(erro){
                const mensagemErro = document.querySelector(".mensagem-erro")
                const error = erro.response.data.error
                if(error.code == "INVALID_PASSWORD" || error.code == "USER_NOT_FOUND"){
                    mensagemErro.textContent = error.message
                }
            }
        })
    }
    if(!formLogin){
        console.log("formulario de login não encontrado")
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