import axios from "axios";


const buscarReserva = async(codigo, token) => {
    const data = axios.get(`http://localhost:8081/api/v1/reservaciones/${codigo}/info`, { headers: {"Authorization" : `${token}`}})
    .then(r=>r.data).catch(err=>{return err})
    return data
}

export default buscarReserva