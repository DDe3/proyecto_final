import axios from 'axios'


const buscarCliente = async(cedula, token) => {
    const data = axios.get(`http://localhost:8081/api/v1/clientes/${cedula}`, 
    { headers: {"Authorization" : `${token}`}})
    .then(r=>r.data).catch(error => {return error})
    return data
}

export default buscarCliente