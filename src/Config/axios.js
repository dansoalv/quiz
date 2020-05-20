import axios from  'axios'
const clientAxios = axios.create({
    baseURL: "https://reqres.in/api"
});

export default clientAxios