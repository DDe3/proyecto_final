import axios from "axios";

const dameToken = async(body) => {
    const data = axios.post(`http://localhost:8085/api/seguridad/tokens`, body).then(r=>r.data).catch((error) =>  {return error} )
    return data
}

export default dameToken