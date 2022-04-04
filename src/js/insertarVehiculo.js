import axios from 'axios'


const insertarVehiculo = async(body, token) => {
    const data = axios.post(`http://localhost:8081/api/v1/vehiculos`, body, { headers: {"Authorization" : `${token}`}})
    .then(r=>r.data).catch( er => {return er})
    return data
}

export default insertarVehiculo