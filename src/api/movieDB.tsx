import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'77609a333dab293466c2f979d42d8531',
        language:'es-ES'
    }
})

export default movieDB;