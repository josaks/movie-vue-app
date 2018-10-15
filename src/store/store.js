import Vuex from 'vuex';
import Vue from 'vue';
import moviesAPI from '../api/moviesAPI';


Vue.use(Vuex);

const movieModule = {
    state: {
        movies: [
            { id: 1, title: 'Black Panther', posterURL: "", rating: 5, comments: [{ id: 1, movieId: 1, text: "test" }], storyline: '', actors: [], genres: []},
        ],
      },
    mutations: {
        setMovies(state, payload) {
            state.movies = payload;
        },
        addMovie (state, { movie }) {
            state.movies.push(movie);
        },
        addComment(state, { movieId, comment}){
            state.movies[movieId].push(comment);
        }
      },
    actions: {
        loadMoviesFromAPI({ commit }) {
            return moviesAPI.getMovies()
            .then(movies => {
                commit('setMovies', movies);
            });
          },
        addMovie ({ commit }, payload) {
            commit('addMovie', { movie: payload });
          },
        addComment({ commit }, payload){
            commit('addComment', payload);
        }
      },
    getters: {
        movies: state => state.movies,
        movie: state => id => state.movies.find(movie => movie.id === id),
        comments: state => id => state.movies[id].comments,
      }
};

const store = new Vuex.Store({
    modules: {
        movie: movieModule,
    }
});

  export default store;