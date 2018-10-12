import Axios from 'axios';


const axios = Axios.create({
    baseurl: 'localhost:44364/api/'
})

export default {
    getMovies() {
        return axios.get('https://localhost:44364/api/movies')
            .then(res => res.data);
    },
    getMovie(id) {
        return false;
    }
};