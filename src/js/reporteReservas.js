import axios from "axios";

const buscarReservas = async(fechaInicio, fechaFin, token) => {
    const data = axios.get(`http://localhost:8081/api/v1/reservaciones/all?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`,
    { headers: {"Authorization" : `${token}`}}).then(r => r.data)
    return data
}


export default buscarReservas;