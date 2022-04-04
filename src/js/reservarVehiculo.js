import axios from 'axios'


const reservarVehiculo = async(body, token) => {
    const data = axios.post(`http://localhost:8081/api/v1/vehiculos/reservaciones`, body, 
    { headers: {"Authorization" : `${token}`}} )
    .then(r=>r.data).catch(error => {return error})
    return data
}

export default reservarVehiculo