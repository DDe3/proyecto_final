import axios from "axios";

const retirarSinReserva = async(body, token) => {

    const data = axios.put(`http://localhost:8081/api/v1/vehiculos/reservaciones/sin-reservacion`, body, { headers: {"Authorization" : `${token}`}} )
    .then(r=>r.data).catch(err => {return err})
    return data

}

export default retirarSinReserva 