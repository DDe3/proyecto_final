
import axios from "axios";


const registrarUsuario = async(body) => {
    const data = axios.post(`http://localhost:8085/api/seguridad/usuarios`, body).then(r=>r.data).catch(err => {return err})
    return data
}


export default registrarUsuario