import axios from "axios";

const buscarVehiculoPorMyM = async(marca, modelo) => {
    const data = axios.get(`http://localhost:8081/api/v1/vehiculos?marca=${marca}&modelo=${modelo}`).then(r=>r.data)
    return data
}

export default buscarVehiculoPorMyM