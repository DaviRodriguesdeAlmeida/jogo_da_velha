import axios from "axios";

async function validarToken() {
    const token = localStorage.getItem("token");
    if (!token) {
        return false;
    }
    try {
        const response = await axios.get("http://localhost:3000/usuarios/validar-token", {
            headers: {Authorization: `Bearer ${token}`}
        });
        return true;
    } catch (error) {
        return false;
    }
}

export default validarToken;