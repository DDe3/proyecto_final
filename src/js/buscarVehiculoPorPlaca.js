import axios from "axios";

const buscarVehiculoPorPlaca = async(placa, token) => {
    console.log(token)
    const data = axios.get(`http://localhost:8081/api/v1/vehiculos/${placa}`, { headers: {"Authorization" : `${token}`}} )
    .then(r=>r.data).catch(error => {return error})
    return data
}

export default buscarVehiculoPorPlaca