import Navigo from "navigo";
import axios from "axios";
import CarregarDadosPagina from "/js/utils/importar.js"

const router = new Navigo("/");
const app = document.querySelector("#app")

router.on("/",() => {
    router.navigate("/login")
})

router.on("login",() => {
    CarregarDadosPagina("login")
})
router.on("cadastro",() => {
    CarregarDadosPagina("cadastro")
})
router.on("inicio",() => {
    CarregarDadosPagina("inicio")
})
router.resolve();

export default router