import Navigo from "navigo";
import axios from "axios";
import CarregarDadosPagina from "/js/utils/importar.js"

const router = new Navigo("/");
const app = document.querySelector("#app")

router.on("/",() => {
    console.log("rota /")
    router.navigate("/Login")
})

router.on("Login",() => {
    CarregarDadosPagina("login")
})
router.resolve();