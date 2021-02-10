import axios from 'axios'

const instance = axios.create({
    baseURL:'https://burger-builder-react-28c1e-default-rtdb.firebaseio.com/'
})

export default instance;