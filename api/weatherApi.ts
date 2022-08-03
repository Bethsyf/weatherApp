import axios from 'axios';

const weatherApi = axios.create({
    baseURL: `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Medellin`
})

// const currentApi = axios.create({
//     baseURL: `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
// })

export default weatherApi;  