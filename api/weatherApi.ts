import axios from 'axios';

const weatherApi = axios.create({
    baseURL: 'http://api.weatherapi.com/v1'
})

export default weatherApi; 