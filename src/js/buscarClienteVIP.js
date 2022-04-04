import axios from "axios";


const buscarClienteVIP = async(token) => {
    const data = axios.get(`http://localhost:8081/api/v1/clientes/vip`, { headers: {"Authorization" : `${token}`}}).then(r=>r.data)
    return data
}

export default buscarClienteVIP