import axios from "axios";
import router from "/js/app/router.js"

function carregarJsCadastro(){
    mostrarSenha()
    cadastro()
}

async function cadastro(){
    const formCadastro = document.querySelector(".cadastro-formulario")
    formCadastro.addEventListener("submit", async (event) => {
        event.preventDefault()
        const nome = formCadastro.querySelector("#nome").value
        const email = formCadastro.querySelector("#email").value
        const senha = formCadastro.querySelector("#senha").value
        const confirmarSenha = formCadastro.querySelector("#confirmar-senha").value
        if(!validarSenha(senha, confirmarSenha)) return
        try{
            const resposta = await axios.post("http://localhost:3000/usuarios/cadastro",{
                nome: nome,
                email: email,
                senha: senha
            })
            if("PasswordCredential" in window){
                const credenciais = new PasswordCredential({
                    id: email,
                    password: senha,
                });
                await navigator.credentials.store(credenciais).catch((error) => {
                    console.error("Erro ao armazenar credenciais:", error);
                });
            }
            router.navigate("/login")
        }catch(error){
            const erro = error.response.data.error
            if(erro.code == "EMAIL_ALREADY_REGISTERED" || erro.code == "VALIDATION_ERROR"){
                const mensagemErro = document.querySelector(".mensagem-erro")
                mensagemErro.textContent = erro.message
            }
        }
    })
}

function validarSenha(senha, confirmarSenha){
    if(senha !== confirmarSenha){
        const mensagemErro = document.querySelector(".mensagem-erro")
        mensagemErro.textContent = "As senhas não coincidem"
        return false
    }
    return true
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