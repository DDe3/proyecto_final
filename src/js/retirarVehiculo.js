import axios from "axios";

const retirarVehiculo = async(codigo, token) => {
    
    const data = axios.put(`http://localhost:8081/api/v1/vehiculos/${codigo}`, { headers: {"Authorization" : `${token}`}})
    .then(r=>r.data).catch(err => {return err})
    return data
}

export default retirarVehiculo